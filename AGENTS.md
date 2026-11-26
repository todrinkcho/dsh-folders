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

## 当前状态

- 侧栏「项目文件夹」面板 + 桌面式网格、新建嵌套目录、登记工作区、打开会话均已实现。
- 「移动对话」是可选能力：装了 `dsh-workspace-mover` 才出现入口；没装时面板照常工作，控制台会留一条 405（预期）。
- Host 半区只读 `<DSH_HOME>/memory.json`，按记忆插件的路径规则（路径边界、`~` / `%USERPROFILE%` / `$HOME` 展开、
  Windows 不分大小写）判断「这个目录会不会被默认关掉记忆」，界面上给标签与提示。
- macOS 也按大小写不敏感处理路径（`DSH_FOLDERS_CASE_SENSITIVE=1` 可关，给大小写敏感的 APFS 卷用）。

## 测试

- `node --check client.js` / `node --check index.js`。
- Host 自测：`_probe/memory-adapter-harness.mjs`（20 条断言，覆盖级联、同前缀兄弟、`~` 展开、大小写、全局关闭、坏文件、限流、去重）。
- 端到端建议：另起一个 `dsh web` 宿主 + 副本会话 + 三层嵌套工作区，验证拖拽/按钮/新建后移入三条路径的
  `workspace.json` 归属、日志目录与头部 `cwd`。

## 待办

- 如需虚拟文件夹（不动磁盘），评估接入分类器类插件；如需拖拽移动目录，先设计安全边界再动。
- 是否把搬运内核做成自有实现（去掉 mover 依赖），见 README「边界」。
