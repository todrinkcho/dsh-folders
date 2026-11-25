/**
 * Host half of the folder-desktop bundle.
 *
 * Rendering lives in the Client module. The only host job here is the
 * **memory-plugin adapter**: before a conversation is moved from one folder to
 * another, the board wants to tell the user whether the target folder will get
 * memory injection at all.
 *
 * That answer belongs to `dsh-plugin-memory`, which exposes no service — it keeps
 * its settings in `<DSH_HOME>/memory.json` and decides per Session with
 * `disabledWorkspaces` matched against the Session's cwd (path boundary,
 * `~`/`%USERPROFILE%`/`$HOME` expanded, case-insensitive on Windows). So this
 * module reads that file and mirrors the same rule, read-only:
 *
 *   - the file is absent, unreadable or malformed → `known: false`
 *     (the Client then shows no hint at all, never a wrong one);
 *   - the plugin is uninstalled but the file lingers → same degradation;
 *   - nothing here writes, moves or interprets memory content.
 *
 * Everything is reachable through the same-origin Client RPC the
 * `dsh-workspace-mover` adapter already uses, so no new transport appears.
 *
 * @module @todrink/dsh-folders
 */

import { readFile } from 'node:fs/promises'
import { homedir } from 'node:os'
import { join, resolve, sep } from 'node:path'

/** RPC channel owned by this plugin. */
const CHANNEL = '/folder-desktop'

/** Upper bounds for one request: the board never needs more targets than this. */
const MAX_CWDS = 128
const MAX_PATH_LENGTH = 4096

/** Where the memory plugin keeps its saved configuration. */
const MEMORY_CONFIG_FILENAME = 'memory.json'

/**
 * Mount the Client RPC channel.
 *
 * The channel is optional infrastructure: a profile without the Web server (or
 * without the Client connection) simply never mounts it, and the board keeps
 * working with the hint hidden.
 * @param ctx - Host context of this plugin row.
 */
export function apply(ctx) {
  /**
   * Register the channel once both services exist.
   * @param owner - Context scope that owns the registration.
   */
  const mount = (owner) => {
    const connection = owner?.connection
    if (!connection?.rpc?.handle) return
    // The rpc getter keeps the Connection service's own context; rebind it to the
    // injected Web context so `rpc.handle()` can register on the Web server.
    const rawConnection = connection[Symbol.for('cordis.original')] ?? connection
    const scopedConnection = rawConnection?.[Symbol.for('cordis.extend')]?.({ ctx: owner }) ?? connection
    const dispatch = async (endpoint, payload = {}, signal) => {
      if (signal?.aborted) return fail('cancelled', 'cancelled')
      try {
        if (endpoint === 'memory.scope') return { ok: true, value: await memoryScope(payload) }
        return fail('not-found', `unknown endpoint: ${String(endpoint)}`)
      } catch (error) {
        return fail(asText(error?.code) || 'failed', messageOf(error))
      }
    }
    const dispose = scopedConnection.rpc.handle(CHANNEL, dispatch, { authority: 'loopback' })
    owner.effect?.(() => () => { try { dispose?.() } catch { /* already gone */ } }, 'folder-desktop: rpc dispose')
  }

  if (typeof ctx.inject === 'function') ctx.inject(['connection', 'webServer'], mounted => mount(mounted))
  else mount(ctx)
}

/**
 * Answer `memory.scope` for every requested cwd.
 * @param payload - `{ cwds: string[] }`, the folder paths the board may move into.
 * @returns `{ known, globalEnabled, results: [{ cwd, disabled, pattern }] }`.
 */
async function memoryScope(payload) {
  const requested = Array.isArray(payload?.cwds) ? payload.cwds : []
  const cwds = []
  for (const value of requested.slice(0, MAX_CWDS)) {
    if (typeof value !== 'string') continue
    const trimmed = value.trim()
    if (trimmed.length === 0 || trimmed.length > MAX_PATH_LENGTH) continue
    if (!cwds.includes(trimmed)) cwds.push(trimmed)
  }
  if (cwds.length === 0) {
    const error = new Error('cwds is empty')
    error.code = 'bad-request'
    throw error
  }

  const config = await readMemoryConfig()
  if (config === undefined) {
    return { known: false, globalEnabled: true, results: cwds.map(cwd => ({ cwd, disabled: false, pattern: null })) }
  }
  const { globalEnabled, patterns } = config
  return {
    known: true,
    globalEnabled,
    patterns: patterns.length,
    results: cwds.map((cwd) => {
      const pattern = matchWorkspace(cwd, patterns)
      return { cwd, disabled: pattern !== null, pattern }
    }),
  }
}

/**
 * Read the memory plugin's saved configuration.
 * @returns the interpreted configuration, or `undefined` when it cannot be trusted.
 */
async function readMemoryConfig() {
  const configured = process.env.DSH_HOME
  const home = typeof configured === 'string' && configured.trim().length > 0 ? configured : join(homedir(), '.dsh')
  let raw
  try {
    raw = await readFile(join(home, MEMORY_CONFIG_FILENAME), 'utf8')
  } catch {
    return undefined
  }
  let parsed
  try {
    parsed = JSON.parse(raw)
  } catch {
    return undefined
  }
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) return undefined
  const patterns = Array.isArray(parsed.disabledWorkspaces)
    ? parsed.disabledWorkspaces.filter(value => typeof value === 'string' && value.trim().length > 0)
    : []
  return { globalEnabled: parsed.enabled !== false, patterns }
}

/**
 * The memory plugin's own rule: a configured root covers itself and everything
 * below it, but never a sibling that merely shares a prefix
 * (`work` covers `work/repo`, not `work2`).
 * @param cwd - Session working directory to test.
 * @param patterns - Configured `disabledWorkspaces` entries.
 * @returns the matching configured entry, or null.
 */
function matchWorkspace(cwd, patterns) {
  const target = canonicalPath(cwd)
  if (target === undefined) return null
  for (const pattern of patterns) {
    const expanded = expandHome(pattern)
    const root = expanded === undefined ? undefined : canonicalPath(expanded)
    if (root === undefined) continue
    if (target === root || target.startsWith(root.endsWith(sep) ? root : `${root}${sep}`)) return pattern
  }
  return null
}

/**
 * Whether this volume compares folder paths case-insensitively.
 *
 * Windows always does. macOS does on the default APFS volume, but a Mac can be
 * formatted case-sensitive, so `DSH_FOLDERS_CASE_SENSITIVE=1` opts out.
 */
function caseInsensitiveFs() {
  if (process.platform === 'win32') return true
  if (process.platform !== 'darwin') return false
  return process.env.DSH_FOLDERS_CASE_SENSITIVE !== '1'
}

/**
 * Resolve one path for comparison, case-folded on case-insensitive volumes.
 * @param value - Raw configured or session path.
 * @returns the comparison form, or undefined when the path is unusable.
 */
function canonicalPath(value) {
  try {
    const resolved = resolve(value)
    return caseInsensitiveFs() ? resolved.toLowerCase() : resolved
  } catch {
    return undefined
  }
}

/**
 * Expand the home shortcuts the memory plugin accepts in its path settings.
 * @param value - One configured `disabledWorkspaces` entry.
 * @returns the expanded path, or undefined.
 */
function expandHome(value) {
  if (typeof value !== 'string') return undefined
  const trimmed = value.trim()
  if (trimmed.length === 0) return undefined
  const home = homedir()
  const expanded = trimmed
    .replace(/^%USERPROFILE%/i, home)
    .replace(/^\$HOME(?=[\\/]|$)/, home)
  if (expanded === '~') return home
  if (expanded.startsWith(`~${sep}`) || expanded.startsWith('~/') || expanded.startsWith('~\\')) {
    return join(home, expanded.slice(2))
  }
  return expanded
}

/**
 * Build one failure envelope the Client unwraps.
 * @param code - Stable wire code.
 * @param message - Human-readable reason.
 * @returns the envelope.
 */
function fail(code, message) {
  return { ok: false, error: { code, message, details: {} } }
}

/**
 * @param error - Thrown value.
 * @returns its message.
 */
function messageOf(error) {
  return error instanceof Error ? error.message : String(error)
}

/**
 * @param value - Candidate string.
 * @returns the string, or an empty string for anything else.
 */
function asText(value) {
  return typeof value === 'string' ? value : ''
}
