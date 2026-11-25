window.__ModuleLoader__.load({
  id: '@todrink/dsh-folders',
  factory(require) {
    const React = require('react')
    const h = React.createElement
    const NS = 'folder-desktop'

    const zh = {
      nav: '项目文件夹',
      title: '工作区',
      eyebrow: '项目文件夹',
      quickTipsRoot: '单击工作区卡片进入，查看它里面的子工作区和对话。',
      quickTipsDetail: '「打开工作区」切到 DSH 对话；「新建对话」在这个工作区开一个新会话。',
      newWorkspace: '新建工作区',
      newSession: '新建对话',
      openWorkspace: '打开工作区',
      rootCrumb: '工作区',
      statLine: '{w} 个子工作区 · {s} 个对话',
      childWorkspaces: '{n} 个子工作区',
      taskCount: '{n} 个对话',
      enterHint: '进入',
      sectionChildren: '子工作区',
      sectionSessions: '对话',
      emptyTitle: '还没有工作区',
      emptyText: '把已有的项目文件夹登记为工作区，或者直接新建一个。',
      noSessions: '这个工作区还没有对话',
      noSessionsHint: '新建一个对话开始第一个任务。',
      createTitle: '新建工作区',
      createText: '选择一个文件夹登记为工作区；也可以在当前位置新建子文件夹。',
      chooseFolder: '登记当前文件夹',
      createAndRegister: '新建并登记',
      folderNameLabel: '新文件夹名称（可选）',
      folderNamePlaceholder: '例如 my-project',
      up: '上级目录',
      go: '前往',
      pathLabel: '路径',
      registering: '正在登记…',
      creating: '正在新建…',
      noticeRegistered: '已登记工作区：{name}',
      noticeCreated: '已新建并登记工作区：{name}',
      registerFailed: '登记失败',
      createFailed: '新建失败',
      createExists: '同名文件夹已存在',
      registerExists: '同名工作区已存在',
      invalidPath: '这个路径不是可用的文件夹',
      invalidName: '名称不能为空，也不能包含 / 或 \\',
      nameRequired: '先填写新文件夹名称',
      browseEmpty: '这里没有子文件夹',
      registeredBadge: '已登记',
      loading: '正在读取…',
      loadError: '读取失败',
      retry: '重试',
      truncated: '目录条目过多，只显示了前一部分。',
      folderUnavailable: '当前环境不支持浏览目录；可以直接在上方输入完整路径后登记。',
      pickSessionTitle: '新建对话',
      pickSessionText: '选择在哪个工作区开始新对话。',
      pickSessionEmpty: '还没有登记任何工作区，先新建一个工作区。',
      unnamed: '未命名对话',
      blank: '空白会话',
      running: '运行中',
      idle: '空闲',
      justNow: '刚刚',
      minutesAgo: '{n} 分钟前',
      hoursAgo: '{n} 小时前',
      daysAgo: '{n} 天前',
      moveSession: '移到…',
      moveTitle: '移动会话',
      moveText: '把这条对话搬到另一个工作区（文件夹）。只搬对话记录本身，磁盘上的项目文件不动。',
      moveTargetLabel: '目标文件夹',
      moveCurrentOwner: '当前位置',
      moveNoTargets: '没有别的已登记工作区可以放。可以先「登记其他文件夹并移入」。',
      moveChecking: '正在检查…',
      moveSafe: '可以移动',
      moveWarning: '可以移动（有提示）',
      moveQueued: '稍后移动',
      moveBlocked: '不能移动',
      moveBackup: '会先备份 {size}',
      moveFrom: '从',
      moveTo: '到',
      moveWarnFallback: '走文件路径兜底（官方没提供原始档案路径接口），搬动方式等同于直接改文件',
      moveWarnGenerations: '存在多个世代的日志，只搬当前世代',
      moveRunning: '这条对话正在跑，等它结束后再搬。',
      moveConfirm: '移动',
      moveMoving: '正在移动…',
      moveDone: '已移动到：{name}',
      moveFailed: '移动失败',
      moveMissing: '没检测到「工作区搬运」插件，暂时不能搬会话。',
      moveMissingHint: '装上 dsh-workspace-mover 之后，对话卡片上会出现「移到…」。',
      moveRegisterFirst: '登记其他文件夹并移入…',
      moveDropHint: '松手即可移到这里',
      moveNoSession: '这条对话的摘要还没加载好，稍后再试。',
      memoryOffTag: '记忆关',
      memoryOnNote: '目标记忆：开（搬过去后照常注入记忆）',
      memoryOffNote: '目标记忆：关 ——「{pattern}」覆盖了这个目录（含子目录），搬过去后这条对话不再注入记忆。',
      memoryOffFix: '需要的话，搬完在输入框的记忆开关里给这条对话单独打开。',
      memoryGlobalOff: '记忆插件已全局关闭，搬到哪里都不会注入记忆。',
      moveDoneMemoryOff: '（该文件夹默认关闭记忆）',
      cancel: '取消',
      unknownError: '未知错误',
    }

    const en = {
      nav: 'Project folders',
      title: 'Workspaces',
      eyebrow: 'Project folders',
      quickTipsRoot: 'Click a workspace card to enter it and see its child workspaces and conversations.',
      quickTipsDetail: 'Open workspace switches DSH to that workspace; New conversation starts a session in it.',
      newWorkspace: 'New workspace',
      newSession: 'New conversation',
      openWorkspace: 'Open workspace',
      rootCrumb: 'Workspaces',
      statLine: '{w} child workspaces · {s} conversations',
      childWorkspaces: '{n} child workspaces',
      taskCount: '{n} conversations',
      enterHint: 'Enter',
      sectionChildren: 'Child workspaces',
      sectionSessions: 'Conversations',
      emptyTitle: 'No workspaces yet',
      emptyText: 'Register an existing project folder as a workspace, or create a new one.',
      noSessions: 'This workspace has no conversations yet',
      noSessionsHint: 'Start a new conversation for the first task.',
      createTitle: 'New workspace',
      createText: 'Pick a folder to register as a workspace, or create a subfolder here.',
      chooseFolder: 'Register this folder',
      createAndRegister: 'Create and register',
      folderNameLabel: 'New folder name (optional)',
      folderNamePlaceholder: 'For example my-project',
      up: 'Parent folder',
      go: 'Go',
      pathLabel: 'Path',
      registering: 'Registering…',
      creating: 'Creating…',
      noticeRegistered: 'Workspace registered: {name}',
      noticeCreated: 'Workspace created: {name}',
      registerFailed: 'Could not register it',
      createFailed: 'Could not create it',
      createExists: 'A folder with that name already exists',
      registerExists: 'A workspace with that name already exists',
      invalidPath: 'That path is not a usable folder',
      invalidName: 'Name is required and cannot contain / or \\',
      nameRequired: 'Enter a folder name first',
      browseEmpty: 'No subfolders here',
      registeredBadge: 'Registered',
      loading: 'Reading…',
      loadError: 'Could not read it',
      retry: 'Retry',
      truncated: 'This directory has more entries than shown; only the first part is displayed.',
      folderUnavailable: 'This environment cannot browse folders; type a full path above and register it instead.',
      pickSessionTitle: 'New conversation',
      pickSessionText: 'Choose the workspace for the new conversation.',
      pickSessionEmpty: 'No workspace is registered yet. Create one first.',
      unnamed: 'Untitled conversation',
      blank: 'Blank session',
      running: 'Running',
      idle: 'Idle',
      justNow: 'just now',
      minutesAgo: '{n} min ago',
      hoursAgo: '{n} h ago',
      daysAgo: '{n} d ago',
      moveSession: 'Move to…',
      moveTitle: 'Move conversation',
      moveText: 'Move this conversation into another workspace (folder). Only the conversation record moves; project files on disk stay put.',
      moveTargetLabel: 'Target folder',
      moveCurrentOwner: 'Currently in',
      moveNoTargets: 'No other registered workspace to move into. Use "Register another folder and move in".',
      moveChecking: 'Checking…',
      moveSafe: 'Safe to move',
      moveWarning: 'Movable with warnings',
      moveQueued: 'Queued',
      moveBlocked: 'Cannot move',
      moveBackup: 'Backup {size} first',
      moveFrom: 'From',
      moveTo: 'To',
      moveWarnFallback: 'Moving through the JSONL path fallback (this DSH build exposes no official raw-archive path API)',
      moveWarnGenerations: 'Several log generations exist; only the current one moves',
      moveRunning: 'This conversation is running; move it once it finishes.',
      moveConfirm: 'Move',
      moveMoving: 'Moving…',
      moveDone: 'Moved to: {name}',
      moveFailed: 'Move failed',
      moveMissing: 'The workspace-mover plugin is not available, so conversations cannot be moved yet.',
      moveMissingHint: 'Install dsh-workspace-mover and "Move to…" appears on conversation cards.',
      moveRegisterFirst: 'Register another folder and move in…',
      moveDropHint: 'Drop to move here',
      moveNoSession: 'This conversation summary is not loaded yet; try again in a moment.',
      memoryOffTag: 'memory off',
      memoryOnNote: 'Target memory: on (injection continues after the move)',
      memoryOffNote: 'Target memory: off — "{pattern}" covers this folder and everything below it, so this conversation stops getting memory injection after the move.',
      memoryOffFix: 'If you still want it, switch memory back on for this conversation from the composer after moving.',
      memoryGlobalOff: 'The memory plugin is switched off globally, so no folder injects memory.',
      moveDoneMemoryOff: ' (memory is off by default in that folder)',
      cancel: 'Cancel',
      unknownError: 'Unknown error',
    }

    const styles = `
.fd-root{height:100%;min-height:0;overflow:auto;overflow-x:hidden;box-sizing:border-box;padding:34px 40px 80px;color:var(--dsw-alias-label-primary,#1f2328);background:radial-gradient(1100px 340px at 14% -12%,rgba(79,110,247,.07),transparent 72%),var(--dsw-alias-bg-base,#fff);font-size:14px;line-height:22px;-webkit-font-smoothing:antialiased}
.fd-root *{box-sizing:border-box}
.fd-head{display:flex;align-items:flex-start;justify-content:space-between;gap:24px;flex-wrap:wrap;max-width:1320px;margin:0 auto 4px}
.fd-headMain{min-width:0;display:flex;align-items:flex-start;gap:16px}
.fd-headIcon{flex:none;display:flex;align-items:center;justify-content:center;width:56px;height:56px;border-radius:16px;margin-top:2px;color:var(--dsw-alias-brand-primary,#4f6ef7);background:rgba(79,110,247,.10);box-shadow:inset 0 0 0 1px rgba(79,110,247,.14)}
.fd-eyebrow{color:var(--dsw-alias-label-tertiary,#8b93a1);font-size:12px;line-height:18px;letter-spacing:.1em;text-transform:uppercase;font-weight:650}
.fd-title{margin:2px 0 0;font-size:30px;line-height:38px;font-weight:680;letter-spacing:-.015em;overflow-wrap:anywhere}
.fd-path{color:var(--dsw-alias-label-tertiary,#8b93a1);font-size:13px;line-height:20px;margin-top:6px;overflow-wrap:anywhere}
.fd-meta{color:var(--dsw-alias-label-tertiary,#8b93a1);font-size:13px;line-height:20px;margin-top:2px}
.fd-actions{display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:flex-end;padding-top:4px}
.fd-btn{display:inline-flex;align-items:center;gap:7px;height:38px;padding:0 16px;border-radius:11px;border:1px solid var(--dsw-alias-border-l1,rgba(127,127,127,.22));background:var(--dsw-alias-bg-layer-1,#fff);color:var(--dsw-alias-label-primary,#1f2328);font:inherit;font-size:13.5px;font-weight:550;cursor:pointer;transition:background-color .12s,border-color .12s,color .12s,transform .12s;white-space:nowrap}
.fd-btn:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(127,127,127,.08))}
.fd-btn:active{transform:translateY(1px)}
.fd-btn:focus-visible{outline:2px solid var(--dsw-alias-brand-primary,#4f6ef7);outline-offset:2px}
.fd-btn:disabled{opacity:.55;cursor:default}
.fd-btnPrimary{background:var(--dsw-alias-brand-primary,#4f6ef7);border-color:transparent;color:#fff;box-shadow:0 6px 16px -8px rgba(79,110,247,.75)}
.fd-btnPrimary:hover{filter:brightness(1.06);background:var(--dsw-alias-brand-primary,#4f6ef7)}
.fd-btnGhost{border-color:transparent;background:transparent;color:var(--dsw-alias-label-secondary,#5c6570)}
.fd-btnGhost:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(127,127,127,.08));color:var(--dsw-alias-label-primary,#1f2328)}
.fd-nav{max-width:1320px;margin:14px auto 2px;display:flex;align-items:center;gap:2px;flex-wrap:wrap;min-height:32px}
.fd-crumb{display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 10px;border:0;border-radius:9px;background:transparent;color:var(--dsw-alias-label-secondary,#5c6570);font:inherit;font-size:13px;cursor:pointer;max-width:320px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.fd-crumb:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(127,127,127,.08));color:var(--dsw-alias-label-primary,#1f2328)}
.fd-crumbNow{color:var(--dsw-alias-label-primary,#1f2328);font-weight:650;cursor:default}
.fd-sep{color:var(--dsw-alias-label-tertiary,#8b93a1);font-size:12px;padding:0 1px}
.fd-stats{color:var(--dsw-alias-label-tertiary,#8b93a1);font-size:12.5px}
.fd-section{max-width:1320px;margin:32px auto 0}
.fd-sectionHead{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:0 0 16px}
.fd-sectionTitle{display:inline-flex;align-items:center;gap:8px;font-size:12.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--dsw-alias-label-tertiary,#8b93a1)}
.fd-sectionTitle::before{content:'';width:4px;height:14px;border-radius:2px;background:var(--dsw-alias-brand-primary,#4f6ef7);opacity:.7}
.fd-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:18px}
.fd-folder{position:relative;display:flex;flex-direction:column;width:100%;padding:24px 0 0;border:0;background:none;font:inherit;color:inherit;text-align:left;cursor:pointer;transition:transform .16s ease}
.fd-folder:hover{transform:translateY(-3px)}
.fd-folder:focus-visible{outline:none}
.fd-folder:focus-visible .fd-folderBody{outline:2px solid var(--dsw-alias-brand-primary,#4f6ef7);outline-offset:3px}
.fd-folderBody{position:relative;display:flex;flex:1;flex-direction:column;gap:14px;min-height:196px;padding:19px 19px 16px;border:1px solid var(--fd-line,rgba(79,110,247,.34));border-radius:2px 20px 20px 20px;background:linear-gradient(180deg,var(--fd-top,rgba(79,110,247,.22)) 0,var(--fd-base,rgba(79,110,247,.07)) 55%,var(--fd-base,rgba(79,110,247,.07)) 100%);box-shadow:0 1px 2px rgba(16,24,40,.05);transition:box-shadow .16s ease,border-color .16s ease}
.fd-folderBody::before{content:'';position:absolute;left:-1px;bottom:calc(100% - 1px);width:46%;max-width:150px;height:23px;border:1px solid var(--fd-line,rgba(79,110,247,.34));border-bottom:0;border-radius:14px 14px 0 0;background:var(--fd-top,rgba(79,110,247,.22))}
.fd-folder:hover .fd-folderBody{box-shadow:0 20px 38px -18px var(--fd-glow,rgba(79,110,247,.45)),0 2px 6px rgba(16,24,40,.06);border-color:var(--fd-lineStrong,rgba(79,110,247,.5))}
.fd-folder:hover .fd-folderBody::before{border-color:var(--fd-lineStrong,rgba(79,110,247,.5))}
.fd-folderTop{display:flex;flex-direction:column;gap:10px;min-width:0}
.fd-folderIcon{display:flex;color:var(--fd-accent,#4f6ef7);filter:drop-shadow(0 4px 8px var(--fd-glow,rgba(79,110,247,.35)))}
.fd-folderName{font-size:17px;line-height:24px;font-weight:650;letter-spacing:-.01em;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.fd-folderMeta{display:flex;flex-wrap:wrap;gap:8px}
.fd-chip{display:inline-flex;align-items:center;height:25px;padding:0 10px;border-radius:8px;background:var(--dsw-alias-bg-layer-1,#fff);color:var(--dsw-alias-label-secondary,#5c6570);font-size:12.5px;font-weight:500;white-space:nowrap;box-shadow:inset 0 0 0 1px rgba(127,127,127,.12)}
.fd-chipAccent{background:var(--fd-top,rgba(79,110,247,.22));color:var(--dsw-alias-label-primary,#1f2328);box-shadow:inset 0 0 0 1px var(--fd-line,rgba(79,110,247,.34))}
.fd-folderFoot{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:auto;padding-top:4px;color:var(--dsw-alias-label-tertiary,#8b93a1);font-size:12.5px;font-weight:600;letter-spacing:.02em;transition:color .14s}
.fd-folder:hover .fd-folderFoot,.fd-folder:focus-visible .fd-folderFoot{color:var(--fd-accent,#4f6ef7)}
.fd-badge{display:inline-flex;align-items:center;height:22px;padding:0 8px;border-radius:6px;font-size:11.5px;font-weight:650;letter-spacing:.02em;background:var(--dsw-alias-brand-primary,#4f6ef7);color:#fff}
.fd-badgeMuted{background:var(--dsw-alias-interactive-bg-hover,rgba(127,127,127,.12));color:var(--dsw-alias-label-tertiary,#8b93a1)}
.fd-empty{max-width:1320px;margin:44px auto;padding:56px 28px;border:1px dashed var(--dsw-alias-border-l2,rgba(127,127,127,.3));border-radius:20px;background:var(--dsw-alias-bg-layer-1,#fff);display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;color:var(--dsw-alias-label-tertiary,#8b93a1)}
.fd-emptyTitle{font-size:16px;font-weight:650;color:var(--dsw-alias-label-primary,#1f2328)}
.fd-emptyText{font-size:13.5px;line-height:21px;max-width:520px}
.fd-emptyActions{display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:12px}
.fd-sessions{display:grid;grid-template-columns:repeat(auto-fill,minmax(256px,1fr));gap:14px}
.fd-session{position:relative;display:flex;flex-direction:column;gap:9px;min-height:112px;padding:15px 16px 13px;border-radius:15px;border:1px solid var(--dsw-alias-border-l1,rgba(127,127,127,.18));background:var(--dsw-alias-bg-layer-1,#fff);box-shadow:0 1px 2px rgba(16,24,40,.04);color:inherit;font:inherit;text-align:left;cursor:pointer;overflow:hidden;transition:transform .15s ease,box-shadow .15s ease,border-color .15s ease,background-color .15s ease}
.fd-session::after{content:'';position:absolute;inset:0 auto 0 0;width:3px;background:var(--dsw-alias-brand-primary,#4f6ef7);opacity:0;transition:opacity .15s}
.fd-session:hover{transform:translateY(-2px);box-shadow:0 16px 28px -16px rgba(16,24,40,.35);border-color:var(--dsw-alias-border-l2,rgba(127,127,127,.3))}
.fd-session:hover::after{opacity:.9}
.fd-session:focus-visible{outline:2px solid var(--dsw-alias-brand-primary,#4f6ef7);outline-offset:2px}
.fd-sessionTop{display:flex;align-items:center;gap:8px;min-width:0}
.fd-sessionTitle{font-size:14.5px;line-height:21px;font-weight:600;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:anywhere}
.fd-sessionFoot{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:auto;color:var(--dsw-alias-label-tertiary,#8b93a1);font-size:12.5px}
.fd-sessionGo{display:inline-flex;align-items:center;gap:4px;font-weight:600;opacity:.55;transition:opacity .15s,color .15s}
.fd-session:hover .fd-sessionGo{opacity:1;color:var(--dsw-alias-brand-primary,#4f6ef7)}
.fd-status{flex:none;width:8px;height:8px;border-radius:50%;background:var(--dsw-alias-label-tertiary,#8b93a1)}
.fd-status--run{background:var(--dsw-alias-brand-primary,#4f6ef7);box-shadow:0 0 0 3px rgba(79,110,247,.16);animation:fdpulse 1.8s ease-in-out infinite}
.fd-status--blank{background:transparent;border:1.5px solid var(--dsw-alias-label-tertiary,#8b93a1)}
@keyframes fdpulse{0%,100%{box-shadow:0 0 0 3px rgba(79,110,247,.16)}50%{box-shadow:0 0 0 6px rgba(79,110,247,.06)}}
.fd-tag{display:inline-flex;align-items:center;height:21px;padding:0 7px;border-radius:6px;background:var(--dsw-alias-interactive-bg-hover,rgba(127,127,127,.1));color:var(--dsw-alias-label-tertiary,#8b93a1);font-size:11.5px;font-weight:600}
.fd-tagRun{background:rgba(79,110,247,.14);color:var(--dsw-alias-brand-primary,#4f6ef7)}
.fd-time{margin-left:auto;flex:none;color:var(--dsw-alias-label-tertiary,#8b93a1);font-size:12px}
.fd-banner{max-width:1320px;margin:16px auto 0;padding:16px 18px;border-radius:14px;border:1px solid var(--dsw-alias-border-l1,rgba(127,127,127,.2));background:var(--dsw-alias-bg-layer-2,rgba(127,127,127,.06));display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
.fd-bannerText{font-size:13.5px;color:var(--dsw-alias-label-secondary,#5c6570);line-height:21px}
.fd-overlay{position:fixed;inset:0;z-index:1200;background:rgba(8,12,20,.42);display:flex;align-items:center;justify-content:center;padding:24px}
.fd-modal{width:min(560px,100%);max-height:calc(100vh - 48px);display:flex;flex-direction:column;border-radius:18px;border:1px solid var(--dsw-alias-border-l1,rgba(127,127,127,.22));background:var(--dsw-alias-bg-layer-1,#fff);box-shadow:0 24px 64px rgba(8,12,20,.32);padding:22px}
.fd-modalTitle{font-size:18px;line-height:26px;font-weight:680;margin:0 0 8px}
.fd-modalText{font-size:13.5px;line-height:21px;color:var(--dsw-alias-label-secondary,#5c6570);margin:0 0 14px}
.fd-field{display:flex;flex-direction:column;gap:7px;margin:14px 0 0}
.fd-label{font-size:12px;font-weight:650;letter-spacing:.04em;text-transform:uppercase;color:var(--dsw-alias-label-tertiary,#8b93a1)}
.fd-input{height:40px;padding:0 12px;border-radius:10px;border:1px solid var(--dsw-alias-border-l1,rgba(127,127,127,.26));background:var(--dsw-alias-bg-base,#fff);color:var(--dsw-alias-label-primary,#1f2328);font:inherit;font-size:14px;outline:none;min-width:0}
.fd-input:focus{border-color:var(--dsw-alias-brand-primary,#4f6ef7);box-shadow:0 0 0 3px rgba(79,110,247,.16)}
.fd-pathbar{display:flex;align-items:center;gap:8px}
.fd-pathinput{flex:1}
.fd-browser{margin-top:10px;border:1px solid var(--dsw-alias-border-l1,rgba(127,127,127,.18));border-radius:12px;background:var(--dsw-alias-bg-base,#fff);min-height:132px;max-height:300px;overflow:auto}
.fd-dirlist{display:flex;flex-direction:column;padding:5px}
.fd-dirrow{display:flex;align-items:center;gap:9px;width:100%;min-height:36px;padding:5px 9px;border:0;border-radius:8px;background:transparent;color:var(--dsw-alias-label-primary,#1f2328);font:inherit;font-size:13.5px;text-align:left;cursor:pointer}
.fd-dirrow:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(127,127,127,.08))}
.fd-dirrow svg{color:var(--dsw-alias-label-tertiary,#8b93a1);flex:none}
.fd-dirname{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.fd-dirlistEmpty{display:flex;align-items:center;justify-content:center;gap:8px;min-height:132px;padding:14px;color:var(--dsw-alias-label-tertiary,#8b93a1);font-size:13px;text-align:center;flex-wrap:wrap}
.fd-mini{height:30px;padding:0 11px;border-radius:8px;border:1px solid var(--dsw-alias-border-l1,rgba(127,127,127,.22));background:transparent;color:var(--dsw-alias-label-secondary,#5c6570);font:inherit;font-size:12.5px;cursor:pointer;display:inline-flex;align-items:center;gap:5px;white-space:nowrap;flex:none}
.fd-mini:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(127,127,127,.08));color:var(--dsw-alias-label-primary,#1f2328)}
.fd-mini:disabled{opacity:.5;cursor:default}
.fd-error{color:var(--dsw-alias-state-error-primary,#c0392b);font-size:13px;line-height:20px;margin:12px 0 0;overflow-wrap:anywhere}
.fd-modalFoot{display:flex;justify-content:flex-end;gap:9px;flex-wrap:wrap;margin-top:18px;padding-top:16px;border-top:1px solid var(--dsw-alias-border-l1,rgba(127,127,127,.16))}
.fd-spinner{width:17px;height:17px;border-radius:50%;border:2px solid var(--dsw-alias-border-l1,rgba(127,127,127,.25));border-top-color:var(--dsw-alias-brand-primary,#4f6ef7);animation:fdspin .8s linear infinite;flex:none}
@keyframes fdspin{to{transform:rotate(360deg)}}
.fd-loading{max-width:1320px;margin:44px auto;display:flex;align-items:center;gap:11px;color:var(--dsw-alias-label-tertiary,#8b93a1);font-size:13.5px}
.fd-toast{position:fixed;left:50%;bottom:28px;transform:translateX(-50%);z-index:1300;display:flex;align-items:center;gap:10px;padding:11px 14px;border-radius:12px;background:var(--dsw-alias-bg-layer-2,#1f2328);color:var(--dsw-alias-label-primary,#fff);border:1px solid var(--dsw-alias-border-l1,rgba(127,127,127,.3));box-shadow:0 14px 34px rgba(8,12,20,.3);font-size:13.5px;max-width:min(600px,calc(100vw - 32px))}
.fd-toastText{overflow-wrap:anywhere}
.fd-toastBtn{border:0;background:transparent;color:var(--dsw-alias-brand-primary,#7aa2ff);font:inherit;font-size:14px;font-weight:650;cursor:pointer;padding:2px 4px;white-space:nowrap}
.fd-hint{max-width:1320px;margin:10px auto 0;color:var(--dsw-alias-label-tertiary,#8b93a1);font-size:12.5px;line-height:18px}
.fd-picklist{display:flex;flex-direction:column;gap:5px;max-height:360px;overflow:auto;margin:4px -4px 0;padding:0 4px}
.fd-pick{display:flex;align-items:center;gap:11px;width:100%;padding:10px 11px;border-radius:11px;border:1px solid transparent;background:transparent;color:var(--dsw-alias-label-primary,#1f2328);font:inherit;text-align:left;cursor:pointer}
.fd-pick:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(127,127,127,.08));border-color:var(--dsw-alias-border-l1,rgba(127,127,127,.16))}
.fd-pick svg{color:var(--dsw-alias-brand-primary,#4f6ef7);flex:none}
.fd-pickText{display:flex;flex-direction:column;min-width:0;gap:2px}
.fd-pickName{font-size:14px;font-weight:650;line-height:20px}
.fd-pickPath{font-size:12px;line-height:17px;color:var(--dsw-alias-label-tertiary,#8b93a1);overflow-wrap:anywhere}
@media (max-width:640px){
.fd-root{padding:18px 16px 48px}
.fd-title{font-size:24px;line-height:32px}
.fd-grid{grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:14px}
.fd-sessions{grid-template-columns:1fr}
.fd-folderBody{min-height:176px;padding:16px}
.fd-head{gap:12px}
.fd-actions{width:100%;justify-content:flex-start}
.fd-pickPath{display:none}
}
@media (prefers-reduced-motion:reduce){
.fd-folder,.fd-folderBody,.fd-session,.fd-btn{transition:none}
.fd-folder:hover,.fd-session:hover{transform:none}
.fd-status--run{animation:none}
}
[data-platform='darwin'] .fd-root{padding-top:calc(34px + var(--dsh-frame-top-clearance,0px))}
@media (max-width:640px){
[data-platform='darwin'] .fd-root{padding-top:calc(18px + var(--dsh-frame-top-clearance,0px))}
}
.fd-sessionMove{display:inline-flex;align-items:center;gap:5px;height:24px;padding:0 8px;border-radius:7px;border:1px solid transparent;background:transparent;color:var(--dsw-alias-label-tertiary,#8b93a1);font-size:12px;font-weight:600;cursor:pointer;opacity:0;transition:opacity .14s,background-color .14s,color .14s,border-color .14s;white-space:nowrap}
.fd-session:hover .fd-sessionMove,.fd-session:focus-within .fd-sessionMove{opacity:1}
.fd-sessionMove:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(127,127,127,.1));border-color:var(--dsw-alias-border-l1,rgba(127,127,127,.2));color:var(--dsw-alias-brand-primary,#4f6ef7)}
.fd-sessionMove:focus-visible{opacity:1;outline:2px solid var(--dsw-alias-brand-primary,#4f6ef7);outline-offset:2px}
.fd-session[draggable='true']{cursor:grab}
.fd-session[draggable='true']:active{cursor:grabbing}
.fd-folderDrop .fd-folderBody{border-color:var(--dsw-alias-brand-primary,#4f6ef7);box-shadow:0 0 0 2px rgba(79,110,247,.3),0 22px 40px -18px rgba(79,110,247,.5)}
.fd-folderDrop .fd-folderFoot{color:var(--dsw-alias-brand-primary,#4f6ef7);font-weight:700}
.fd-moveHead{display:flex;flex-direction:column;gap:4px;margin:0 0 4px}
.fd-moveSession{font-size:15px;line-height:22px;font-weight:680;overflow-wrap:anywhere}
.fd-moveOwner{font-size:12.5px;line-height:18px;color:var(--dsw-alias-label-tertiary,#8b93a1);overflow-wrap:anywhere}
.fd-moveList{display:flex;flex-direction:column;gap:3px;max-height:268px;overflow:auto;border:1px solid var(--dsw-alias-border-l1,rgba(127,127,127,.18));border-radius:12px;background:var(--dsw-alias-bg-base,#fff);padding:5px}
.fd-moveRow{display:flex;align-items:center;gap:9px;width:100%;padding:7px 9px;border:1px solid transparent;border-radius:9px;background:transparent;color:var(--dsw-alias-label-primary,#1f2328);font:inherit;text-align:left;cursor:pointer}
.fd-moveRow:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(127,127,127,.08))}
.fd-moveRow svg{color:var(--dsw-alias-brand-primary,#4f6ef7);flex:none}
.fd-moveRowOn{border-color:var(--dsw-alias-brand-primary,#4f6ef7);background:rgba(79,110,247,.08)}
.fd-moveRowText{display:flex;flex-direction:column;min-width:0;gap:1px}
.fd-moveRowName{font-size:13.5px;font-weight:620;line-height:19px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.fd-moveRowPath{font-size:11.5px;line-height:16px;color:var(--dsw-alias-label-tertiary,#8b93a1);overflow-wrap:anywhere}
.fd-movePreview{margin-top:12px;padding:11px 13px;border-radius:12px;border:1px solid var(--dsw-alias-border-l1,rgba(127,127,127,.2));background:var(--dsw-alias-bg-layer-2,rgba(127,127,127,.05));display:flex;flex-direction:column;gap:4px}
.fd-moveStatus{display:inline-flex;align-self:flex-start;align-items:center;height:22px;padding:0 9px;border-radius:7px;font-size:12px;font-weight:650;background:var(--dsw-alias-interactive-bg-hover,rgba(127,127,127,.12));color:var(--dsw-alias-label-secondary,#5c6570)}
.fd-moveStatus--safe{background:rgba(31,157,85,.14);color:var(--dsw-alias-state-success-primary,#1f9d55)}
.fd-moveStatus--warning{background:rgba(191,124,0,.16);color:var(--dsw-alias-state-warn-primary,#b06a00)}
.fd-moveStatus--queued{background:rgba(79,110,247,.14);color:var(--dsw-alias-brand-primary,#4f6ef7)}
.fd-moveStatus--blocked{background:rgba(192,57,43,.14);color:var(--dsw-alias-state-error-primary,#c0392b)}
.fd-moveLine{font-size:12.5px;line-height:18px;color:var(--dsw-alias-label-secondary,#5c6570);overflow-wrap:anywhere}
.fd-moveDim{color:var(--dsw-alias-label-tertiary,#8b93a1)}
.fd-moveTag{flex:none;align-self:center;height:20px;padding:0 7px;border-radius:6px;font-size:11.5px;font-weight:600;line-height:20px;white-space:nowrap;color:var(--dsw-alias-state-warn-primary,#b06a00);background:rgba(191,124,0,.14)}
.fd-moveMemory{margin-top:9px;padding-top:9px;border-top:1px dashed var(--dsw-alias-border-l1,rgba(127,127,127,.2));font-size:12.5px;line-height:18px;color:var(--dsw-alias-label-secondary,#5c6570);overflow-wrap:anywhere}
.fd-moveMemory--off{color:var(--dsw-alias-state-warn-primary,#b06a00)}
.fd-moveMemoryHint{display:block;margin-top:2px;font-size:12px;color:var(--dsw-alias-label-tertiary,#8b93a1)}
.fd-moveWarn{font-size:12.5px;line-height:18px;color:var(--dsw-alias-state-warn-primary,#b06a00);overflow-wrap:anywhere}
@media (max-width:640px){
.fd-moveRowPath{display:none}
.fd-sessionMove{opacity:1}
}
`

    function FolderGlyph(props) {
      const size = props.size || 40
      return h('svg', {
        viewBox: '0 0 48 48', width: size, height: size, 'aria-hidden': true,
        style: { display: 'block', flex: 'none' },
      },
        h('path', {
          d: 'M4.5 12.5A5.5 5.5 0 0 1 10 7h9.2l4.2 5.2H38a5.5 5.5 0 0 1 5.5 5.5v17.8A5.5 5.5 0 0 1 38 41H10a5.5 5.5 0 0 1-5.5-5.5z',
          fill: 'currentColor', opacity: 0.16,
        }),
        h('path', {
          d: 'M4.5 17.5A5.5 5.5 0 0 1 10 12h28a5.5 5.5 0 0 1 5.5 5.5v18A5.5 5.5 0 0 1 38 41H10a5.5 5.5 0 0 1-5.5-5.5z',
          fill: 'currentColor', opacity: 0.92,
        }),
        h('path', { d: 'M4.5 21h39', stroke: '#fff', 'stroke-width': 1.4, opacity: 0.28 }),
      )
    }

    function ProjectGlyph(props) {
      const size = props.size || 40
      return h('svg', {
        viewBox: '0 0 48 48', width: size, height: size, 'aria-hidden': true,
        style: { display: 'block', flex: 'none' },
      },
        h('rect', { x: 6, y: 10, width: 36, height: 28, rx: 6, fill: 'currentColor', opacity: 0.16 }),
        h('rect', { x: 6, y: 10, width: 36, height: 28, rx: 6, fill: 'none', stroke: 'currentColor', 'stroke-width': 2.2, opacity: 0.9 }),
        h('path', { d: 'M18 22l-5 4 5 4M30 22l5 4-5 4M26 19l-4 14', fill: 'none', stroke: 'currentColor', 'stroke-width': 2.2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', opacity: 0.9 }),
      )
    }

    function PlusGlyph() {
      return h('svg', { viewBox: '0 0 16 16', width: 13, height: 13, 'aria-hidden': true },
        h('path', { d: 'M8 3v10M3 8h10', stroke: 'currentColor', 'stroke-width': 1.6, 'stroke-linecap': 'round' }))
    }

    function ArrowGlyph() {
      return h('svg', { viewBox: '0 0 16 16', width: 12, height: 12, 'aria-hidden': true },
        h('path', { d: 'M6 3l5 5-5 5', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.6, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }))
    }

    function UpGlyph() {
      return h('svg', { viewBox: '0 0 16 16', width: 12, height: 12, 'aria-hidden': true },
        h('path', { d: 'M8 12V4M4 8l4-4 4 4', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.6, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }))
    }

    function MoveGlyph() {
      return h('svg', { viewBox: '0 0 16 16', width: 12, height: 12, 'aria-hidden': true },
        h('path', { d: 'M2.5 8h7M7 5.2 9.8 8 7 10.8M12.4 3.4v9.2', fill: 'none', stroke: 'currentColor', 'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }))
    }

    function formatBytes(value) {
      const n = Number(value)
      if (!Number.isFinite(n) || n <= 0) return '0 B'
      if (n < 1024) return Math.round(n) + ' B'
      const units = ['KB', 'MB', 'GB', 'TB']
      let size = n / 1024
      let index = 0
      while (size >= 1024 && index < units.length - 1) {
        size /= 1024
        index += 1
      }
      return (size >= 10 ? Math.round(size) : size.toFixed(1)) + ' ' + units[index]
    }

    function asText(value) {
      return value === undefined || value === null ? '' : String(value)
    }

    function normPath(value) {
      return asText(value).trim().replace(/\\/g, '/').replace(/\/+$/, '')
    }

    function canon(value) {
      const text = asText(value).trim()
      const n = normPath(text)
      const windowsish = /^[A-Za-z]:/.test(n) || text.indexOf('\\') >= 0
      return windowsish ? n.toLowerCase() : n
    }

    function baseName(value) {
      const n = normPath(value)
      if (!n) return ''
      if (/^[A-Za-z]:$/.test(n)) return n.toUpperCase() + '\\'
      return n.slice(n.lastIndexOf('/') + 1) || n
    }

    function parentPath(value) {
      const native = asText(value).trim()
      const n = normPath(native)
      const i = n.lastIndexOf('/')
      const windowsish = native.indexOf('\\') >= 0
      function finish(path) {
        return windowsish ? path.replace(/\//g, '\\') : path
      }
      if (i < 0) return n
      if (i === 2 && /^[A-Za-z]:$/.test(n.slice(0, 2))) return finish(n.slice(0, 3))
      return finish(n.slice(0, i))
    }

    function commonAncestor(paths) {
      const lists = paths.map(p => {
        const parts = normPath(p).split('/').filter(Boolean)
        return { parts, keys: canon(p).split('/').filter(Boolean) }
      })
      if (lists.length === 0) return ''
      const first = lists[0]
      let depth = 0
      for (let i = 0; i < first.keys.length; i += 1) {
        const part = first.keys[i]
        if (lists.every(list => list.keys[i] === part)) depth = i + 1
        else break
      }
      if (depth === 0) return ''
      const common = first.parts.slice(0, depth)
      const win = paths.some(p => asText(p).indexOf('\\') >= 0)
      const absolutePosix = !win && normPath(paths[0]).charAt(0) === '/'
      let out = (absolutePosix ? '/' : '') + common.join('/')
      if (win) {
        if (common.length === 1 && /^[A-Za-z]:$/.test(common[0])) out = common[0] + ':\\'
        else out = out.replace(/\//g, '\\')
      } else if (out === '') {
        out = '/'
      }
      return out
    }

    const NOISE = new Set([
      'node_modules', '.git', '.hg', '.svn', 'dist', 'build', 'out', 'target', 'bin', 'obj',
      'coverage', '.next', '.nuxt', '.cache', '.venv', 'venv', 'vendor', '__pycache__', '.idea', '.vscode',
    ])

    function isNoise(name) {
      return NOISE.has(asText(name).toLowerCase())
    }

    // Folder tints: one stable colour per workspace, assigned by hashing its id/name.
    const FOLDER_TINTS = [
      { accent: '#4f6ef7', rgb: '79,110,247' },
      { accent: '#0ea5e9', rgb: '14,165,233' },
      { accent: '#14b8a6', rgb: '20,184,166' },
      { accent: '#8b5cf6', rgb: '139,92,246' },
      { accent: '#f59e0b', rgb: '245,158,11' },
      { accent: '#f43f5e', rgb: '244,63,94' },
      { accent: '#22c55e', rgb: '34,197,94' },
      { accent: '#f97316', rgb: '249,115,22' },
    ]

    function tintFor(key) {
      const text = asText(key)
      let hash = 0
      for (let i = 0; i < text.length; i += 1) hash = (hash * 31 + text.charCodeAt(i)) | 0
      return FOLDER_TINTS[Math.abs(hash) % FOLDER_TINTS.length]
    }

    function tintVars(tint) {
      return {
        '--fd-accent': tint.accent,
        '--fd-top': 'rgba(' + tint.rgb + ',.22)',
        '--fd-base': 'rgba(' + tint.rgb + ',.07)',
        '--fd-line': 'rgba(' + tint.rgb + ',.34)',
        '--fd-lineStrong': 'rgba(' + tint.rgb + ',.52)',
        '--fd-glow': 'rgba(' + tint.rgb + ',.42)',
      }
    }

    function fmt(t, key, values) {
      let text = t(key)
      Object.keys(values || {}).forEach(name => {
        text = text.split('{' + name + '}').join(String(values[name]))
      })
      return text
    }

    function relativeTime(t, ms) {
      const value = Number(ms)
      if (!Number.isFinite(value) || value <= 0) return ''
      const delta = Math.max(0, Date.now() - value)
      const minute = 60000
      const hour = 60 * minute
      const day = 24 * hour
      if (delta < minute) return t('justNow')
      if (delta < hour) return fmt(t, 'minutesAgo', { n: Math.floor(delta / minute) })
      if (delta < day) return fmt(t, 'hoursAgo', { n: Math.floor(delta / hour) })
      return fmt(t, 'daysAgo', { n: Math.floor(delta / day) })
    }

    function useSnapshot(source) {
      const subscribe = React.useCallback(callback => source.subscribe(callback), [source])
      const read = React.useCallback(() => source.getSnapshot(), [source])
      return React.useSyncExternalStore(subscribe, read, read)
    }

    function errorText(error) {
      if (error === undefined || error === null) return ''
      if (typeof error === 'string') return error
      if (error.message) return error.message
      try { return JSON.stringify(error) } catch (_) { return String(error) }
    }

    function Modal(props) {
      const onClose = props.onClose
      React.useEffect(() => {
        function onKey(event) {
          if (event.key === 'Escape') {
            event.preventDefault()
            onClose()
          }
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
      }, [onClose])
      return h('div', {
        className: 'fd-overlay',
        role: 'presentation',
        onMouseDown: event => { if (event.target === event.currentTarget) onClose() },
      },
        h('div', { className: 'fd-modal', role: 'dialog', 'aria-modal': 'true', 'aria-label': props.title },
          h('h2', { className: 'fd-modalTitle' }, props.title),
          props.children,
          props.footer ? h('div', { className: 'fd-modalFoot' }, props.footer) : null,
        ),
      )
    }

    function makePanel(services) {
      const ui = services.uiWorkspace
      const workspaces = services.workspaces
      const sessions = services.sessions
      const connection = services.connection

      // 「工作区搬运」插件的约定：同一页面里经 client-connection 的同源 RPC 调它。
      // 没装它 / 通道不通时整块移动功能隐藏，绝不影响本插件其他功能。
      const MOVER_CHANNEL = '/workspace-mover'

      function moverCall(endpoint, payload) {
        const rpc = connection && connection.rpc
        if (!rpc || typeof rpc.call !== 'function') {
          return Promise.reject(new Error('client connection rpc unavailable'))
        }
        return rpc.call(MOVER_CHANNEL, endpoint, payload || {})
      }

      function unwrapMover(result) {
        if (result && result.ok === true) return result.value
        const detail = result && result.error
        const failure = new Error(asText(detail && detail.message) || 'workspace-mover call failed')
        failure.code = asText(detail && detail.code)
        throw failure
      }

      function moveFailureText(t, failure) {
        const message = asText(errorText(failure))
        return t('moveFailed') + (message ? '：' + message : '')
      }

      // 搬运插件自带的英文告警：只翻译两条最常见的，其余原样展示（罕见且需要原话）。
      function moveWarningText(t, warning) {
        const text = asText(warning)
        if (/physical move uses the JSONL path fallback/i.test(text)) return t('moveWarnFallback')
        if (/multiple generations found/i.test(text)) return t('moveWarnGenerations')
        return text
      }

      // 「记忆」插件适配。它没有对外服务，所以由本插件 host 半区只读
      // `<DSH_HOME>/memory.json`，按它自己的路径规则（路径边界、~ 展开、
      // Windows 不分大小写）回答"这个文件夹会不会被默认关掉记忆"。
      // 读不到就返回 null，界面上什么提示都不出现——绝不猜。
      const FOLDER_CHANNEL = '/folder-desktop'

      function folderCall(endpoint, payload) {
        const rpc = connection && connection.rpc
        if (!rpc || typeof rpc.call !== 'function') {
          return Promise.reject(new Error('client connection rpc unavailable'))
        }
        return rpc.call(FOLDER_CHANNEL, endpoint, payload || {})
      }

      function memoryScopeCall(cwds) {
        if (!Array.isArray(cwds) || cwds.length === 0) return Promise.resolve(null)
        return folderCall('memory.scope', { cwds }).then((result) => {
          if (result && result.ok === true) return result.value
          return null
        }).catch(() => null)
      }

      function CreateWorkspaceDialog(props) {
        const t = props.t
        const [current, setCurrent] = React.useState(asText(props.initialPath))
        const [input, setInput] = React.useState(asText(props.initialPath))
        const [listing, setListing] = React.useState(null)
        const [phase, setPhase] = React.useState('loading')
        const [error, setError] = React.useState('')
        const [name, setName] = React.useState('')
        const [busy, setBusy] = React.useState(false)
        const [reload, setReload] = React.useState(0)

        React.useEffect(() => {
          const controller = new AbortController()
          let alive = true
          setPhase('loading')
          setError('')
          ui.listDirectory(current || undefined, controller.signal).then(result => {
            if (!alive) return
            setListing(result)
            setInput(result.path)
            setPhase('ready')
          }).catch(failure => {
            if (!alive || controller.signal.aborted) return
            const message = asText(errorText(failure))
            setListing(null)
            setError(message.indexOf('unavailable') >= 0 ? t('folderUnavailable') : (message || t('unknownError')))
            setPhase('error')
          })
          return () => {
            alive = false
            controller.abort()
          }
        }, [current, reload, ui, t])

        function browse(next) {
          const value = asText(next).trim()
          setInput(value)
          setCurrent(value)
          setReload(value => value + 1)
        }

        function describeFailure(failure) {
          const message = asText(errorText(failure))
          if (message.indexOf('name-conflict') >= 0) return t('registerExists')
          if (message.indexOf('invalid-path') >= 0 || message.indexOf('unreadable') >= 0) return t('invalidPath')
          if (message.indexOf('unavailable') >= 0) return t('folderUnavailable')
          if (message.indexOf('exists') >= 0) return t('createExists')
          if (message.indexOf('create-failed') >= 0) return t('createFailed')
          return message || t('unknownError')
        }

        async function registerCurrent() {
          const target = listing ? listing.path : asText(current).trim()
          if (!target || busy) return
          setBusy(true)
          setError('')
          try {
            const row = await workspaces.create({ path: target })
            props.onDone(row, 'registered')
          } catch (failure) {
            setError(t('registerFailed') + '：' + describeFailure(failure))
            setBusy(false)
          }
        }

        async function createAndRegister() {
          if (busy) return
          const folder = asText(name).trim()
          if (!folder) {
            setError(t('nameRequired'))
            return
          }
          if (folder === '.' || folder === '..' || /[\\/]/.test(folder)) {
            setError(t('invalidName'))
            return
          }
          const parent = listing ? listing.path : asText(current).trim()
          if (!parent) {
            setError(t('invalidPath'))
            return
          }
          setBusy(true)
          setError('')
          try {
            const created = await ui.createDirectory(parent, folder)
            const row = await workspaces.create({ path: created })
            props.onDone(row, 'created')
          } catch (failure) {
            setError(t('createFailed') + '：' + describeFailure(failure))
            setBusy(false)
          }
        }

        const shownPath = listing ? listing.path : asText(current).trim()
        const parent = shownPath ? parentPath(shownPath) : ''
        const dirs = listing
          ? (listing.entries || []).filter(entry => !entry.hidden && !isNoise(entry.name))
          : []
        const canRegister = Boolean(shownPath) && !busy

        return h(Modal, {
          title: t('createTitle'),
          onClose: () => { if (!busy) props.onClose() },
          footer: [
            h('button', { key: 'cancel', type: 'button', className: 'fd-btn fd-btnGhost', disabled: busy, onClick: props.onClose }, t('cancel')),
            h('button', { key: 'register', type: 'button', className: 'fd-btn', disabled: !canRegister, onClick: () => { void registerCurrent() } }, busy ? t('registering') : t('chooseFolder')),
            h('button', { key: 'create', type: 'button', className: 'fd-btn fd-btnPrimary', disabled: busy || !asText(name).trim(), onClick: () => { void createAndRegister() } }, busy ? t('creating') : t('createAndRegister')),
          ],
        },
          h('p', { className: 'fd-modalText' }, t('createText')),
          h('div', { className: 'fd-pathbar' },
            h('button', {
              type: 'button', className: 'fd-mini', title: t('up'),
              disabled: !listing || !parent || parent === listing.path,
              onClick: () => browse(parent),
            }, h(UpGlyph), t('up')),
            h('input', {
              className: 'fd-input fd-pathinput',
              type: 'text',
              value: input,
              spellCheck: false,
              placeholder: t('pathLabel'),
              onChange: event => setInput(event.target.value),
              onKeyDown: event => { if (event.key === 'Enter') { event.preventDefault(); browse(input) } },
            }),
            h('button', { type: 'button', className: 'fd-mini', onClick: () => browse(input) }, t('go')),
          ),
          h('div', { className: 'fd-browser' },
            phase === 'loading'
              ? h('div', { className: 'fd-dirlistEmpty' }, h('span', { className: 'fd-spinner', 'aria-hidden': true }), t('loading'))
              : phase === 'error'
                ? h('div', { className: 'fd-dirlistEmpty' }, h('span', null, error || t('loadError')), h('button', { type: 'button', className: 'fd-mini', onClick: () => setReload(value => value + 1) }, t('retry')))
                : dirs.length === 0
                  ? h('div', { className: 'fd-dirlistEmpty' }, t('browseEmpty'))
                  : h('div', { className: 'fd-dirlist' }, dirs.map(entry => h('button', {
                    key: entry.path,
                    type: 'button',
                    className: 'fd-dirrow',
                    title: entry.path,
                    onClick: () => browse(entry.path),
                  },
                    h(FolderGlyph, { size: 15 }),
                    h('span', { className: 'fd-dirname' }, entry.name),
                    props.registeredPaths.has(canon(entry.path)) ? h('span', { className: 'fd-badge fd-badgeMuted' }, t('registeredBadge')) : null,
                  ))),
          ),
          listing && listing.truncated ? h('div', { className: 'fd-hint' }, t('truncated')) : null,
          h('div', { className: 'fd-field' },
            h('label', { className: 'fd-label', htmlFor: 'fd-folder-name' }, t('folderNameLabel')),
            h('input', {
              id: 'fd-folder-name',
              className: 'fd-input',
              type: 'text',
              value: name,
              placeholder: t('folderNamePlaceholder'),
              onChange: event => setName(event.target.value),
              onKeyDown: event => { if (event.key === 'Enter') { event.preventDefault(); void createAndRegister() } },
            }),
          ),
          phase !== 'error' && error ? h('p', { className: 'fd-error' }, error) : null,
        )
      }

      function SessionDialog(props) {
        const t = props.t
        const rows = props.rows
        return h(Modal, {
          title: t('pickSessionTitle'),
          onClose: props.onClose,
          footer: [h('button', { key: 'cancel', type: 'button', className: 'fd-btn fd-btnGhost', onClick: props.onClose }, t('cancel'))],
        },
          h('p', { className: 'fd-modalText' }, rows.length > 0 ? t('pickSessionText') : t('pickSessionEmpty')),
          rows.length > 0 ? h('div', { className: 'fd-picklist' }, rows.map(row => h('button', {
            key: row.workspaceId,
            type: 'button',
            className: 'fd-pick',
            title: row.path,
            onClick: () => props.onPick(row),
          },
            h(ProjectGlyph, { size: 22 }),
            h('span', { className: 'fd-pickText' },
              h('span', { className: 'fd-pickName' }, baseName(row.path) || row.title || ''),
              h('span', { className: 'fd-pickPath' }, row.path),
            ),
          ))) : null,
        )
      }

      /**
       * 移动会话的确认框：选目标文件夹 → 用 mover.preview 预检 → 确认后 mover.move。
       * 目标列表只列「已登记工作区」，深度用 indent 表达嵌套；未登记的目录走
       * 「登记其他文件夹并移入…」，由调用方接着打开 CreateWorkspaceDialog。
       */
      function MoveSessionDialog(props) {
        const t = props.t
        const summary = props.summary
        const items = props.items
        const structure = props.structure
        const ownerId = props.ownerId
        const [targetId, setTargetId] = React.useState(asText(props.presetTargetId))
        const [preview, setPreview] = React.useState(null)
        const [phase, setPhase] = React.useState(asText(props.presetTargetId) ? 'loading' : 'idle')
        const [error, setError] = React.useState('')
        const [busy, setBusy] = React.useState(false)
        const label = summary.displayTitle || summary.title || t('unnamed')

        const targets = React.useMemo(() => {
          function depthOf(row) {
            let depth = 0
            let cursor = structure.parentId.get(row.workspaceId)
            const seen = new Set([row.workspaceId])
            while (cursor && !seen.has(cursor)) {
              seen.add(cursor)
              depth += 1
              cursor = structure.parentId.get(cursor)
            }
            return depth
          }
          return items
            .filter(row => row.workspaceId !== ownerId)
            .map(row => ({ row, depth: depthOf(row), name: baseName(row.path) || row.title || '', path: row.path }))
            .sort((left, right) => canon(left.path).localeCompare(canon(right.path)))
        }, [items, structure, ownerId])

        const owner = React.useMemo(
          () => items.find(row => row.workspaceId === ownerId) || null,
          [items, ownerId],
        )

        React.useEffect(() => {
          if (!targetId) {
            setPreview(null)
            setPhase('idle')
            return undefined
          }
          let alive = true
          setPhase('loading')
          setError('')
          setPreview(null)
          moverCall('mover.preview', { sessionId: summary.id, targetWorkspaceId: targetId })
            .then(result => {
              if (!alive) return
              setPreview(unwrapMover(result))
              setPhase('ready')
            })
            .catch(failure => {
              if (!alive) return
              setPhase('error')
              setError(moveFailureText(t, failure))
            })
          return () => { alive = false }
        }, [targetId, summary.id, t])

        // 目标文件夹的记忆状态：与 mover.preview 并行取一次，失败就静默隐藏提示。
        const targetPaths = React.useMemo(() => targets.map(entry => entry.path), [targets])
        const [memoryScope, setMemoryScope] = React.useState(null)
        React.useEffect(() => {
          if (targetPaths.length === 0) {
            setMemoryScope(null)
            return undefined
          }
          let alive = true
          memoryScopeCall(targetPaths).then((value) => { if (alive) setMemoryScope(value) })
          return () => { alive = false }
        }, [targetPaths])

        async function submit() {
          if (busy || !targetId || !preview || preview.canMove !== true) return
          setBusy(true)
          setError('')
          try {
            const value = unwrapMover(await moverCall('mover.move', {
              sessionId: summary.id,
              sessionTitle: label,
              targetWorkspaceId: targetId,
            }))
            const chosen = targets.find(entry => entry.row.workspaceId === targetId)
            props.onDone(value, chosen ? chosen.row : null, { memoryOff: memoryBlocked })
          } catch (failure) {
            setBusy(false)
            setError(moveFailureText(t, failure))
          }
        }

        const canSubmit = !busy && Boolean(targetId) && phase === 'ready'
          && preview !== null && preview.canMove === true
        const statusText = phase === 'loading' || !preview
          ? t('moveChecking')
          : preview.status === 'safe' ? t('moveSafe')
            : preview.status === 'warning' ? t('moveWarning')
              : preview.status === 'queued' ? t('moveQueued')
                : t('moveBlocked')

        // 记忆状态：known 才显示；目标路径没在结果里就当作未知，不猜。
        const memoryByPath = React.useMemo(() => {
          const map = new Map()
          if (memoryScope && Array.isArray(memoryScope.results)) {
            memoryScope.results.forEach((item) => {
              if (item && typeof item.cwd === 'string') map.set(canon(item.cwd), item)
            })
          }
          return map
        }, [memoryScope])
        const memoryKnown = Boolean(memoryScope && memoryScope.known === true)
        const memoryGlobalOff = memoryKnown && memoryScope.globalEnabled === false
        const chosenTarget = targets.find(entry => entry.row.workspaceId === targetId) || null
        const targetMemory = chosenTarget ? memoryByPath.get(canon(chosenTarget.path)) || null : null
        const memoryBlocked = memoryKnown && !memoryGlobalOff && Boolean(targetMemory && targetMemory.disabled)
        const memoryNote = !memoryKnown
          ? null
          : memoryGlobalOff
            ? h('div', { className: 'fd-moveMemory fd-moveMemory--off' }, t('memoryGlobalOff'))
            : targetMemory === null
              ? null
              : memoryBlocked
                ? h('div', { className: 'fd-moveMemory fd-moveMemory--off' },
                  fmt(t, 'memoryOffNote', { pattern: asText(targetMemory.pattern) || chosenTarget.path }),
                  h('span', { className: 'fd-moveMemoryHint' }, t('memoryOffFix')))
                : h('div', { className: 'fd-moveMemory' }, t('memoryOnNote'))

        return h(Modal, {
          title: t('moveTitle'),
          onClose: () => { if (!busy) props.onClose() },
          footer: [
            h('button', { key: 'cancel', type: 'button', className: 'fd-btn fd-btnGhost', disabled: busy, onClick: props.onClose }, t('cancel')),
            h('button', { key: 'more', type: 'button', className: 'fd-btn', disabled: busy, onClick: props.onRegisterMore }, t('moveRegisterFirst')),
            h('button', { key: 'go', type: 'button', className: 'fd-btn fd-btnPrimary', disabled: !canSubmit, onClick: () => { void submit() } }, busy ? t('moveMoving') : t('moveConfirm')),
          ],
        },
          h('p', { className: 'fd-modalText' }, t('moveText')),
          h('div', { className: 'fd-moveHead' },
            h('span', { className: 'fd-moveSession', title: label }, label),
            owner
              ? h('span', { className: 'fd-moveOwner', title: owner.path }, t('moveCurrentOwner') + '：' + (baseName(owner.path) || owner.title || ''))
              : null,
          ),
          h('div', { className: 'fd-field' },
            h('label', { className: 'fd-label' }, t('moveTargetLabel')),
            targets.length === 0
              ? h('div', { className: 'fd-dirlistEmpty' }, t('moveNoTargets'))
              : h('div', { className: 'fd-moveList', role: 'listbox', 'aria-label': t('moveTargetLabel') }, targets.map(entry => {
                const entryMemory = memoryByPath.get(canon(entry.path)) || null
                return h('button', {
                  key: entry.row.workspaceId,
                  type: 'button',
                  role: 'option',
                  'aria-selected': entry.row.workspaceId === targetId,
                  className: 'fd-moveRow' + (entry.row.workspaceId === targetId ? ' fd-moveRowOn' : ''),
                  style: { paddingLeft: 10 + entry.depth * 16 },
                  title: entry.path,
                  disabled: busy,
                  onClick: () => setTargetId(entry.row.workspaceId),
                },
                  h(FolderGlyph, { size: 16 }),
                  h('span', { className: 'fd-moveRowText' },
                    h('span', { className: 'fd-moveRowName' }, entry.name),
                    h('span', { className: 'fd-moveRowPath' }, entry.path),
                  ),
                  memoryKnown && !memoryGlobalOff && entryMemory && entryMemory.disabled
                    ? h('span', { key: 'memory', className: 'fd-moveTag', title: t('memoryOffTag') }, t('memoryOffTag'))
                    : null,
                )
              })),
          ),
          targetId
            ? h('div', { className: 'fd-movePreview' },
              h('div', { className: 'fd-moveStatus fd-moveStatus--' + (preview ? preview.status : 'checking') }, statusText),
              preview && preview.canMove !== true && preview.warnings && preview.warnings.length > 0
                ? h('div', { className: 'fd-moveWarn' }, moveWarningText(t, preview.warnings[0]))
                : null,
              preview && preview.running ? h('div', { className: 'fd-moveWarn' }, t('moveRunning')) : null,
              preview && preview.source && preview.source.cwd
                ? h('div', { className: 'fd-moveLine' }, t('moveFrom') + '：' + preview.source.cwd)
                : null,
              preview && preview.target && preview.target.path
                ? h('div', { className: 'fd-moveLine' }, t('moveTo') + '：' + preview.target.path)
                : null,
              preview && preview.estimatedBackupBytes > 0
                ? h('div', { className: 'fd-moveLine fd-moveDim' }, fmt(t, 'moveBackup', { size: formatBytes(preview.estimatedBackupBytes) }))
                : null,
              preview && preview.canMove === true && preview.warnings && preview.warnings.length > 0
                ? h('div', { className: 'fd-moveLine fd-moveDim' }, preview.warnings.slice(0, 2).map(warning => moveWarningText(t, warning)).join(' · '))
                : null,
              memoryNote,
            )
            : null,
          error ? h('p', { className: 'fd-error' }, error) : null,
        )
      }

      function Panel(props) {
        const t = props.t
        const workspaceSnap = useSnapshot(workspaces.list)
        const sessionSnap = useSnapshot(sessions.list)
        const items = workspaceSnap.items || []
        const archived = React.useMemo(() => new Set(workspaceSnap.archivedSessionIds || []), [workspaceSnap])
        const [stack, setStack] = React.useState([])
        const [dialog, setDialog] = React.useState(null)
        const [notice, setNotice] = React.useState(null)
        // 移动会话是可选增强：装了「工作区搬运」插件才出现入口。
        const [moverReady, setMoverReady] = React.useState(false)
        const [moving, setMoving] = React.useState(null)
        const [dragSession, setDragSession] = React.useState(null)
        const [dropTargetId, setDropTargetId] = React.useState(null)

        React.useEffect(() => {
          let alive = true
          moverCall('mover.status', {})
            .then(result => { if (alive) setMoverReady(Boolean(result && result.ok === true)) })
            .catch(() => { if (alive) setMoverReady(false) })
          return () => { alive = false }
        }, [])

        const byPath = React.useMemo(() => {
          const map = new Map()
          items.forEach(row => map.set(canon(row.path), row))
          return map
        }, [items])

        const rootPath = React.useMemo(() => (items.length === 0 ? '' : commonAncestor(items.map(row => row.path))), [items])
        const rootRow = byPath.get(canon(rootPath))

        const structure = React.useMemo(() => {
          const byId = new Map()
          items.forEach(row => byId.set(row.workspaceId, row))
          const parentId = new Map()
          items.forEach(row => {
            let parent = parentPath(row.path)
            let found
            const seen = new Set()
            while (parent && !seen.has(canon(parent))) {
              seen.add(canon(parent))
              const candidate = byPath.get(canon(parent))
              if (candidate && candidate.workspaceId !== row.workspaceId) { found = candidate; break }
              const next = parentPath(parent)
              if (next === parent) break
              parent = next
            }
            parentId.set(row.workspaceId, found ? found.workspaceId : null)
          })
          const children = new Map()
          items.forEach(row => {
            const pid = parentId.get(row.workspaceId)
            if (!pid) return
            if (!children.has(pid)) children.set(pid, [])
            children.get(pid).push(row)
          })
          return { byId, parentId, children }
        }, [items, byPath])

        const topLevel = React.useMemo(() => {
          const rootId = rootRow ? rootRow.workspaceId : null
          let list = items.filter(row => {
            if (rootId && row.workspaceId === rootId) return false
            const pid = structure.parentId.get(row.workspaceId)
            if (!pid) return true
            return rootId !== null && pid === rootId
          })
          if (list.length === 0 && rootRow) list = [rootRow]
          return list
        }, [items, structure, rootRow])

        const currentId = stack.length > 0 ? stack[stack.length - 1] : null
        const current = currentId ? structure.byId.get(currentId) : null

        React.useEffect(() => {
          if (stack.length === 0) return
          const last = stack[stack.length - 1]
          if (structure.byId.has(last)) return
          setStack(stack.slice(0, -1))
        }, [stack, structure])

        React.useEffect(() => {
          if (!notice) return undefined
          const timer = setTimeout(() => setNotice(null), 6000)
          return () => clearTimeout(timer)
        }, [notice])

        const sessionsOf = React.useCallback(row => {
          if (!row) return []
          const list = []
          for (const id of row.sessionIds || []) {
            if (archived.has(id)) continue
            const summary = sessionSnap.byId ? sessionSnap.byId[id] : undefined
            if (!summary || summary.origin === 'subagent') continue
            list.push(summary)
          }
          list.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0))
          return list
        }, [archived, sessionSnap])

        const childRows = current ? (structure.children.get(current.workspaceId) || []) : []
        const currentSessions = current ? sessionsOf(current) : []

        function showNotice(text) {
          setNotice({ text })
        }

        function enter(workspaceId) {
          setStack(previous => previous.includes(workspaceId) ? previous : [...previous, workspaceId])
        }

        function goTo(index) {
          setStack(previous => previous.slice(0, index + 1))
        }

        function stackForPath(pathValue, workspaceId) {
          const chain = [workspaceId]
          let parent = parentPath(pathValue)
          const seen = new Set([canon(pathValue)])
          while (parent && !seen.has(canon(parent))) {
            seen.add(canon(parent))
            const candidate = byPath.get(canon(parent))
            if (candidate) chain.unshift(candidate.workspaceId)
            const next = parentPath(parent)
            if (next === parent) break
            parent = next
          }
          const rootId = rootRow ? rootRow.workspaceId : null
          if (rootId) {
            const at = chain.indexOf(rootId)
            if (at >= 0) chain.splice(0, at + 1)
          }
          return chain
        }

        async function openWorkspace(row) {
          try {
            await ui.openWorkspace(row.workspaceId)
          } catch (failure) {
            // The Workspace flow reports creation failures through its own notice;
            // a second toast here would duplicate it.
            console.warn('[folder-desktop] open workspace failed:', failure)
          }
        }

        function startSession(row) {
          try {
            ui.startSession(row.workspaceId)
          } catch (failure) {
            console.warn('[folder-desktop] start session failed:', failure)
          }
        }

        function openSession(sessionId) {
          try {
            ui.openSession(sessionId)
          } catch (failure) {
            console.warn('[folder-desktop] open session failed:', failure)
          }
        }

        function openCreate() {
          setDialog({ kind: 'create' })
        }

        function openSessionPicker() {
          setDialog({ kind: 'session' })
        }

        function ownerOf(sessionId) {
          const row = items.find(item => Array.isArray(item.sessionIds) && item.sessionIds.includes(sessionId))
          return row ? row.workspaceId : null
        }

        function openMove(sessionId, presetTargetId) {
          const summary = sessionSnap.byId ? sessionSnap.byId[sessionId] : undefined
          if (!summary) {
            showNotice(t('moveNoSession'))
            return
          }
          if (!moverReady) {
            showNotice(t('moveMissingHint'))
            return
          }
          setMoving({ sessionId, presetTargetId: presetTargetId || '' })
        }

        function handleMoved(value, targetRow, extra) {
          const name = targetRow ? (baseName(targetRow.path) || targetRow.title || '') : ''
          setMoving(null)
          showNotice(fmt(t, 'moveDone', { name }) + (extra && extra.memoryOff ? t('moveDoneMemoryOff') : ''))
          try {
            const pending = sessions.refresh?.()
            if (pending && typeof pending.catch === 'function') pending.catch(() => {})
          } catch (failure) {
            console.warn('[folder-desktop] session refresh after move failed:', failure)
          }
        }

        function handleCreated(row, kind) {
          setDialog(null)
          const name = baseName(row.path) || row.title || ''
          showNotice(fmt(t, kind === 'created' ? 'noticeCreated' : 'noticeRegistered', { name }))
          const chain = stackForPath(row.path, row.workspaceId)
          if (chain.length > 0) setStack(chain)
        }

        function renderCard(row) {
          const name = baseName(row.path) || row.title || ''
          const childCount = (structure.children.get(row.workspaceId) || []).length
          const conversationCount = sessionsOf(row).length
          const tint = tintFor(row.workspaceId || name)
          const dropping = dropTargetId === row.workspaceId
          return h('button', {
            key: row.workspaceId,
            type: 'button',
            className: 'fd-folder' + (dropping ? ' fd-folderDrop' : ''),
            title: row.path,
            style: tintVars(tint),
            onClick: () => enter(row.workspaceId),
            onDragOver: event => {
              if (!dragSession) return
              event.preventDefault()
              try { event.dataTransfer.dropEffect = 'move' } catch (_) { /* ignore */ }
              if (dropTargetId !== row.workspaceId) setDropTargetId(row.workspaceId)
            },
            onDragLeave: () => {
              if (dropTargetId === row.workspaceId) setDropTargetId(null)
            },
            onDrop: event => {
              if (!dragSession) return
              event.preventDefault()
              const draggedId = dragSession.id
              setDropTargetId(null)
              setDragSession(null)
              if (draggedId) openMove(draggedId, row.workspaceId)
            },
          },
            h('span', { className: 'fd-folderBody' },
              h('span', { className: 'fd-folderTop' },
                h('span', { className: 'fd-folderIcon' }, h(FolderGlyph, { size: 44 })),
                h('span', { className: 'fd-folderName' }, name),
              ),
              h('span', { className: 'fd-folderMeta' },
                childCount > 0 ? h('span', { key: 'children', className: 'fd-chip' }, fmt(t, 'childWorkspaces', { n: childCount })) : null,
                h('span', { key: 'sessions', className: 'fd-chip fd-chipAccent' }, fmt(t, 'taskCount', { n: conversationCount })),
              ),
              h('span', { className: 'fd-folderFoot' },
                h('span', null, dropping ? t('moveDropHint') : t('enterHint')),
                h(ArrowGlyph),
              ),
            ),
          )
        }

        function renderTask(summary) {
          const label = summary.displayTitle || summary.title || t('unnamed')
          const state = summary.running ? 'run' : (summary.blank ? 'blank' : 'idle')
          return h('button', {
            type: 'button',
            key: summary.id,
            className: 'fd-session',
            title: label,
            draggable: moverReady ? true : undefined,
            onClick: () => openSession(summary.id),
            onDragStart: moverReady
              ? event => {
                setDragSession({ id: summary.id, title: label })
                try {
                  event.dataTransfer.effectAllowed = 'move'
                  event.dataTransfer.setData('text/plain', summary.id)
                } catch (_) { /* older engines: the drag still opens the dialog */ }
              }
              : undefined,
            onDragEnd: moverReady
              ? () => { setDragSession(null); setDropTargetId(null) }
              : undefined,
          },
            h('span', { className: 'fd-sessionTop' },
              h('span', { className: 'fd-status fd-status--' + state, 'aria-hidden': true }),
              summary.running ? h('span', { key: 'run', className: 'fd-tag fd-tagRun' }, t('running')) : null,
              summary.blank ? h('span', { key: 'blank', className: 'fd-tag' }, t('blank')) : null,
              h('span', { className: 'fd-time' }, relativeTime(t, summary.updatedAt)),
            ),
            h('span', { className: 'fd-sessionTitle' }, label),
            h('span', { className: 'fd-sessionFoot' },
              moverReady
                ? h('span', {
                  key: 'move',
                  className: 'fd-sessionMove',
                  role: 'button',
                  tabIndex: 0,
                  title: t('moveSession'),
                  onClick: event => {
                    event.preventDefault()
                    event.stopPropagation()
                    openMove(summary.id)
                  },
                  onKeyDown: event => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      event.stopPropagation()
                      openMove(summary.id)
                    }
                  },
                }, h(MoveGlyph), t('moveSession'))
                : null,
              h('span', { key: 'go', className: 'fd-sessionGo' }, t('enterHint'), h(ArrowGlyph)),
            ),
          )
        }

        let body
        if (workspaceSnap.phase !== 'ready' && items.length === 0) {
          body = h('div', { className: 'fd-loading' }, h('span', { className: 'fd-spinner', 'aria-hidden': true }), t('loading'))
        } else if (workspaceSnap.state === 'error' && items.length === 0) {
          body = h('div', { className: 'fd-empty' },
            h(FolderGlyph, { size: 56 }),
            h('div', { className: 'fd-emptyTitle' }, t('loadError')),
            h('div', { className: 'fd-emptyText' }, asText(errorText(workspaceSnap.error)) || t('unknownError')),
            h('div', { className: 'fd-emptyActions' },
              h('button', { type: 'button', className: 'fd-btn fd-btnPrimary', onClick: openCreate }, t('newWorkspace')),
            ),
          )
        } else if (items.length === 0) {
          body = h('div', { className: 'fd-empty' },
            h(FolderGlyph, { size: 56 }),
            h('div', { className: 'fd-emptyTitle' }, t('emptyTitle')),
            h('div', { className: 'fd-emptyText' }, t('emptyText')),
            h('div', { className: 'fd-emptyActions' },
              h('button', { type: 'button', className: 'fd-btn fd-btnPrimary', onClick: openCreate }, h(PlusGlyph), t('newWorkspace')),
            ),
          )
        } else if (!current) {
          body = h('div', { className: 'fd-grid' }, topLevel.map(renderCard))
        } else {
          body = h(React.Fragment, null,
            childRows.length > 0 ? h('section', { className: 'fd-section' },
              h('div', { className: 'fd-sectionHead' },
                h('div', { className: 'fd-sectionTitle' }, t('sectionChildren')),
                h('div', { className: 'fd-stats' }, fmt(t, 'childWorkspaces', { n: childRows.length })),
              ),
              h('div', { className: 'fd-grid' }, childRows.map(renderCard)),
            ) : null,
            h('section', { className: 'fd-section' },
              h('div', { className: 'fd-sectionHead' },
                h('div', { className: 'fd-sectionTitle' }, t('sectionSessions')),
                h('div', { className: 'fd-stats' }, fmt(t, 'taskCount', { n: currentSessions.length })),
              ),
              currentSessions.length > 0
                ? h('div', { className: 'fd-sessions' }, currentSessions.map(renderTask))
                : h('div', { className: 'fd-banner' },
                  h('div', { className: 'fd-bannerText' }, t('noSessions') + ' · ' + t('noSessionsHint')),
                  h('button', { type: 'button', className: 'fd-btn', onClick: () => startSession(current) }, h(PlusGlyph), t('newSession')),
                ),
            ),
          )
        }

        const actions = current
          ? [
            h('button', { key: 'open', type: 'button', className: 'fd-btn fd-btnPrimary', onClick: () => { void openWorkspace(current) } }, t('openWorkspace')),
            h('button', { key: 'session', type: 'button', className: 'fd-btn', onClick: () => startSession(current) }, h(PlusGlyph), t('newSession')),
            h('button', { key: 'create', type: 'button', className: 'fd-btn', onClick: openCreate }, h(PlusGlyph), t('newWorkspace')),
          ]
          : [
            h('button', { key: 'create', type: 'button', className: 'fd-btn fd-btnPrimary', onClick: openCreate }, h(PlusGlyph), t('newWorkspace')),
            h('button', { key: 'session', type: 'button', className: 'fd-btn', onClick: openSessionPicker }, h(PlusGlyph), t('newSession')),
          ]

        const nav = current
          ? h('nav', { className: 'fd-nav', 'aria-label': t('pathLabel') },
            h('button', { type: 'button', className: 'fd-crumb', onClick: () => setStack([]) }, t('rootCrumb')),
            stack.map((workspaceId, index) => {
              const row = structure.byId.get(workspaceId)
              if (!row) return null
              const last = index === stack.length - 1
              return h(React.Fragment, { key: workspaceId },
                h('span', { className: 'fd-sep', 'aria-hidden': true }, '/'),
                h('button', {
                  type: 'button',
                  className: 'fd-crumb' + (last ? ' fd-crumbNow' : ''),
                  title: row.path,
                  onClick: () => { if (!last) goTo(index) },
                }, baseName(row.path) || row.title || ''),
              )
            }),
          )
          : null

        return h('div', { className: 'fd-root' },
          h('style', null, styles),
          h('header', { className: 'fd-head' },
            h('div', { className: 'fd-headMain' },
              h('div', { className: 'fd-headIcon' }, current ? h(ProjectGlyph, { size: 44 }) : h(FolderGlyph, { size: 44 })),
              h('div', { style: { minWidth: 0 } },
                h('div', { className: 'fd-eyebrow' }, t('eyebrow')),
                h('h1', { className: 'fd-title' }, current ? (baseName(current.path) || current.title || t('title')) : t('title')),
                h('div', { className: 'fd-path' }, current ? current.path : (rootPath || '')),
                current ? h('div', { className: 'fd-meta' }, fmt(t, 'statLine', { w: childRows.length, s: currentSessions.length })) : null,
                h('div', { className: 'fd-meta' }, current ? t('quickTipsDetail') : t('quickTipsRoot')),
              ),
            ),
            h('div', { className: 'fd-actions' }, actions),
          ),
          nav,
          body,
          notice ? h('div', { className: 'fd-toast', role: 'status' },
            h('span', { className: 'fd-toastText' }, notice.text),
            h('button', { type: 'button', className: 'fd-toastBtn', 'aria-label': t('cancel'), onClick: () => setNotice(null) }, '×'),
          ) : null,
          dialog && dialog.kind === 'create'
            ? h(CreateWorkspaceDialog, {
              t,
              initialPath: current ? current.path : rootPath,
              registeredPaths: new Set(byPath.keys()),
              onClose: () => setDialog(null),
              onDone: (row, kind) => {
                // 从「移动会话」进来的登记：登记完直接回到移动确认，目标已选好。
                if (dialog.forMove) {
                  setDialog(null)
                  setMoving({ sessionId: dialog.forMove.sessionId, presetTargetId: row.workspaceId })
                  return
                }
                handleCreated(row, kind)
              },
            })
            : null,
          dialog && dialog.kind === 'session'
            ? h(SessionDialog, {
              t,
              rows: items,
              onClose: () => setDialog(null),
              onPick: row => {
                setDialog(null)
                startSession(row)
              },
            })
            : null,
          moving && moverReady
            ? h(MoveSessionDialog, {
              t,
              summary: (sessionSnap.byId ? sessionSnap.byId[moving.sessionId] : undefined)
                || { id: moving.sessionId, displayTitle: '', title: '' },
              items,
              structure,
              ownerId: ownerOf(moving.sessionId),
              presetTargetId: moving.presetTargetId,
              onClose: () => setMoving(null),
              onRegisterMore: () => {
                const sessionId = moving.sessionId
                setMoving(null)
                setDialog({ kind: 'create', forMove: { sessionId } })
              },
              onDone: handleMoved,
            })
            : null,
        )
      }

      return Panel
    }

    function SidebarIcon(props = {}) {
      return h('span', { style: { display: 'inline-flex', color: 'currentColor' } }, h(FolderGlyph, { size: props.size || 16 }))
    }

    function apply(ctx) {
      ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'folder-desktop: dictionaries')
      const t = ctx.locale.bind(NS)
      ctx.inject(['workspaces', 'sessions', 'uiWorkspace', 'connection'], scoped => {
        const services = {
          workspaces: scoped.workspaces,
          sessions: scoped.sessions,
          uiWorkspace: scoped.uiWorkspace,
          connection: scoped.connection,
        }
        const Panel = makePanel(services)
        ctx.slots.inject('main', () => ctx.slots.register({
          name: 'main',
          key: 'folder-desktop',
          locale: NS,
          inject: () => ({ t }),
        }, Panel))
        ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({
          name: 'sidebar.panellist',
          id: 'folder-desktop',
          order: 6,
          label: () => t('nav'),
          locale: NS,
        }, SidebarIcon))
      })
    }

    return { inject: ['slots', 'locale', 'workspaces', 'sessions', 'uiWorkspace', 'connection'], apply }
  },
})
