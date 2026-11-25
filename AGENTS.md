# dsh-folder-desktop

## 这是什么

DSH Web GUI 的本地插件 `@todrink/dsh-folders`：侧栏「项目文件夹」+ 桌面式目录网格。
把真实目录画成文件夹卡片，支持双击进入、在文件夹里新建文件夹、把任意目录登记为工作区、
打开工作区或它的会话。设计记录见 `README.md`。

## 目录怎么放

- `client.js`：浏览器半区（DSH Module Loader 工厂，纯 JS，无构建）。UI 与交互都在这里。
- `index.js`：Host 半区。只挂 `/folder-desktop` 同源 RPC（`memory.scope`），供面板查询目标文件夹的记忆开关状态。
- `cordis.patch.yml`：插入 `folder-desktop` 行。
- `package.json` / `locale/*.json` / `icon.svg`：插件清单、展示元数据、图标。
- `README.md`：使用与卸载说明。

## 不能动

- 不要移动、重命名或删除用户的项目目录；插件只做目录列表、创建目录、登记工作区。
- 不要替换官方 `sidebar.workspaces` 侧栏；侧栏层级用官方「按工作区树」视图。
- 不要修改 `~/.dsh` 下的凭据、会话日志或其他项目数据。
- **搬会话不许自己写日志**：一律走 `dsh-workspace-mover` 的同源 RPC（`/workspace-mover` 通道的
  `mover.status` / `mover.preview` / `mover.move`）。备份、回滚、拒绝运行中会话都在它那边，本插件只做入口与确认框。
  mover 是**可选**依赖：没装就隐藏入口，不许因此报错或挡住其他功能。
- **记忆配置只读**：`index.js` 可以读 `<DSH_HOME>/memory.json` 来判断目标文件夹的记忆开关，但**绝不写**、
  绝不读记忆内容。读不到/格式坏/字段缺一律按「未知」处理，界面上少显示一行，不许猜、不许兜底成「开」。
- 安装/卸载走 `plugin_manager` 或 `dsh plugin`，不要手改 profile 的 `package.json`。

## 当前状态 / 待办

- 2026-11-20：v0.1.0 完成并安装到 `web` profile；`application: applied`。
- 2026-11-22：v0.2.0 视觉改版（仅 `client.js` 的样式与卡片结构）：
  - 全局字号上调（正文 14px、卡片名 17px、标题 30px），卡片放大到 `minmax(240px,1fr)`。
  - 工作区改成「文件夹」造型：左上角页签 + 主体渐变，按 workspaceId 哈希分配 8 色之一。
  - 对话从列表行改为卡片网格（状态点、运行/空白标签、相对时间、hover 抬升）。
  - 页面本身可滚动；窄屏与 `prefers-reduced-motion` 有降级。
  - 已用真实组件 + React shim 在 Edge 里渲染验证（见本工作区 `_preview/`），
    未在已登录的 DSH 页面内验证（无浏览器认证），需刷新页面后人工确认。
- 已验证：模块冒烟（main + sidebar.panellist 注册）、真实 workspace.json 根目录/卡片数据、
  `dsh --profile web --dump-config` 行、browse 目录后端活动。
- 2026-11-22：v0.3.0 接入「工作区搬运」（可选）：
  - `client.js` 新增 `MoveSessionDialog`、卡片「移到…」、拖拽投放、`mover.*` RPC 桥；
    注入 `connection`，`dsh.client.inject` 同步加了 `@deepseek-ai/dsh-client-connection`。
  - 端到端验证（独立 `dsh web` 宿主 + 副本会话，三层嵌套工作区）：拖拽 projB→projC、按钮 projB→projA、
    「登记其他文件夹并移入」新建 projD 并搬入；三条的 `workspace.json` 归属、日志目录、头部 `cwd` 全对得上；
    未装 mover 时面板正常、入口隐藏。测试件与截图在 `default-workspace/_tmp/2026-11-22-move-adapter/`。
  - 已知：没装 mover 时首次能力探测会在控制台留一条 405（预期，不影响使用）。
- 2026-11-22：v0.3.1 记住「记忆插件适配」：
  - `index.js` 从空壳变成 Host 半径区：`ctx.inject(['connection','webServer'])` 挂 `/folder-desktop` 通道
    （`authority: 'loopback'`），端点 `memory.scope` 读 `<DSH_HOME>/memory.json`，按记忆插件同一套路径规则
    （路径边界、`~`/`%USERPROFILE%`/`$HOME` 展开、Windows 不分大小写）算「这个目录会不会被默认关掉记忆」。
  - `client.js`：移动确认框里目标行带「记忆关」标签，选中后多一行解释 + 恢复提示；全局关闭单独一行；
    搬完 toast 追加「（该文件夹默认关闭记忆）」。取不到配置就整行不显示。
  - 验证：Host 自测 `_probe/memory-adapter-harness.mjs` 20 条断言全过（级联/兄弟前缀/`~`/大小写/全局关/坏文件/限流/去重）；
    真实浏览器（独立 `dsh web` 宿主 + 副本会话 + 三层工作区）跑三态：父目录关→targetB 显示「记忆关」并引用父路径；
    全局关→只显示全局行且无标签；全开→显示「目标记忆：开」。三态切换只改 `memory.json` 再刷新页面，宿主无需重启。
    截图与脚本在 `default-workspace/_tmp/2026-11-22-folder-memory-rig/`。
- UX 评审：3 个问题（登记项被 noise 过滤、创建/登记失败路径、Windows 顶部重复留白）已修复，评审确认可交付。
- 待办：如需虚拟文件夹（不动磁盘），评估接入 `dsh-better-classifier`；如需拖拽移动目录，
  先设计安全边界再动。要不要把搬运内核做成自有实现（去掉 mover 依赖），见 README「边界」。
