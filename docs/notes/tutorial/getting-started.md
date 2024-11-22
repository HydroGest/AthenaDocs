---
title: For absolute beginners
createTime: 2024/10/13 22:51
permalink: /tutorial/getting-started.html
---
::: note
本文档正在编写中，不代表最终品质。
:::

## 从零开始

:::tip

你可以点击图片来放大查看

:::

### 欢迎来到世界

首先, 很高兴你有勇气与决心, 在零基础的情况下尝试搭建 QQ 机器人与 Athena。作出这样的决定并不容易 (真的!)。

一个人学习的旅途并不是一蹴而就的, 在接下来的文档中, 我将一步一步地带领你, 部署和运行一个基于 Koishi 的 QQ 机器人, 同时配置 Athena 插件。结束后, 你应该已经对 QQ 机器人有了基本的了解, 同时也知道如何在 Koishi 上安装和配置插件。

请始终记住, 失败并不可怕。反复尝试的精神才是最难能可贵的。如果你在配置过程中遇到了任何问题, 请先向前回看文档, 确认自己是否漏掉了一些步骤。若实在无法解决, 也欢迎加入 [QQ%20群](about:blank) 求助。只要友好提问、附上完整日志和详细问题描述, 大家会尽可能地帮你解决问题。

### 在一切的一切开始之前

请确认你有以下基本知识:

1. 会使用鼠标、键盘
2. 对任一操作系统有基本了解
3. 熟悉浏览器、搜索引擎的使用

如果你缺乏其中某个方面的知识, 可能会在阅读本文档时感到困难。此时建议你通过其他途径进一步学习这些基础知识, 然后再阅览文档。

### 初始准备

你肯定在哪里听过 "服务器" 这个词吧。服务器本来是指在数据中心中, 用于给用户提供 "服务" 的计算机。现在也可以泛指常开的、用于某种特定网络服务用途的设备。

你就需要这样的一台 "服务器"。

QQ 机器人和你电脑上的其他应用不同。"机器人" 本身就设计用于 7 × 24 小时不间断提供服务。为了让你的机器人能够保持运行, 一台常开的设备是必要的。

那么, 上哪去找这样的一台 ⌈常开设备⌋ 呢?

请根据你的实际情况对号入座:

1. **家里有类似于 Raspberry Pi / NAS 的家用服务器性质设备**:
   请你转到 [快速上手](about:blank), 我相信你。

2. **家里有电脑, 且可以常开**:
   好, 那就是它了。

3. **家里电脑无法常开, 不过我有钱**:
   请搜索相关教程, 前往腾讯云 / 阿里云等云服务商, 购买一台云服务器。硬件配置仅需达到运行 Windows Server 的基础即可。无需独立公网 IPv4。可使用 "轻量应用服务器"。

   请使用 Windows Server 2016 + 镜像。

4. **家里电脑无法常开, 不想花钱买服务器 / 家里没有电脑**:
   抱歉, 针对此类情况, 我无法提供帮助。**如果是前者**, 那么你的机器人只能随着你的作息而启动 / 关闭。如果你认为这不会太影响用户体验的话, 那么就这样做吧。
   **如果是后者**, 请再次考虑方案 3, 否则我无能为力。~~或者你也可以进入 [QQ%20群](about:blank), 看看有没有好心群友愿意赠送你一台服务器。~~

后文中的所有 "服务器", 均指代此处你选择的设备。

### 旅途的开始 —— Koishi 安装

不错, 看起来我们现在已经有了一台 ⌈服务器⌋ 了。

#### 一、连接到服务器

::: tip

如果你选择了家中的电脑, 请直接跳到 [第二子步](about:blank)。本段教程仅适用于云服务器用户。

:::

接下来, 请登录到云服务商的控制台。

![1.0.1%20Cloud%20Providers%20Login](/assets/1.0.1%20Cloud%20Providers%20Login.png)

<font style="opacity: 50%;">△ 图 1.0.1 登录到云服务提供商</font>

转到云服务器管理页面, 查看你所购买服务器的基本信息。

![1.0.2%20Public%20IP](/assets/1.0.2%20Public%20IP.png)

<font style="opacity: 50%;">△ 图 1.0.2 公网 IP</font>

你应该看到类似图 1.0.2 中高亮的 "公网 IP" 信息。

请复制或保存 "公网 IP", 接着按下键盘上的 Windows 徽标键 + S。(请先按徽标键,%20再按%20S%20键)

![1.0.3%20Search%20for%20RD%20Client](/assets/1.0.3%20Search%20for%20RD%20Client.png)

<font style="opacity: 50%;">△ 图 1.0.3 Windows 聚合搜索</font>

你应该可以看到类似于图 1.0.3 中的搜索界面。请在图 1.0.3 标记的高亮处键入 "远程桌面连接", 选中并打开第一个结果。

![1.0.4%20Connect%20to%20remote%20server](/assets/1.0.4%20Connect%20to%20remote%20server.png)

<font style="opacity: 50%;">△ 图 1.0.4 远程桌面连接客户端</font>

如图 1.0.4 左, 请点按远程桌面连接客户端底部的 "显示选项", 将窗口扩展到 1.0.4 右侧的视图。

接着在 "登录设置" 栏内的 "计算机" 输入框, 填入你保存的服务器 IP 地址。

在 "用户名" 输入框内填入服务器的登录用户名 (一般为%20`Administrator`)。

检查无误后, 单击 "连接" 按钮。

![1.0.5%20Enter%20Password](/assets/1.0.5%20Enter%20Password.png)

<font style="opacity: 50%;">△ 图 1.0.5 验证密码</font>

如图 1.0.5 右, Windows 安全中心的密码验证窗口将打开, 请在 "密码" 一栏输入购买服务器时设置的密码 (如果你没有保存,%20请前往云服务控制台重置密码)。建议勾选下方的 "记住我的凭据" (如果你在非公用设备上操作)。

接着, 点击 "确定"。

![1.0.6%20Certificate%20Error%20Ignoring](/assets/1.0.6%20Certificate%20Error%20Ignoring.png)

<font style="opacity: 50%;">△ 图 1.0.6 证书验证提示</font>

你有很大概率会看到如图 1.0.6 所示的证书验证错误弹窗。这是 Windows Server 默认使用自签 CA 作为 RDP 证书导致的, 一般可以忽略。

如果你在非公用设备上操作, 请勾选 "不再询问我是否连接到此计算机"。接着单击 "是"。

~~Link Start!~~

![1.0.7%20Windows%20RDP%20UI](/assets/1.0.7%20Windows%20RDP%20UI.png)

<font style="opacity: 50%;">△ 图 1.0.7 Windows 远程桌面主 UI</font>

连接成功后, 你将看到如图 1.0.7 所示的 Windows 远程桌面主 UI。

:::tip

主设备与远程服务器的剪贴板可互通。

:::

#### 二、安装 Koishi

请打开 "开始" 菜单, 找到 Microsoft Edge 或其他浏览器并打开。在地址栏内输入 "<https://koishi.chat/zh-CN/manual/starter/windows.html"。>

![1.1.1%20Launch%20Browser](/assets/1.1.1%20Launch%20Browser.png)

<font style="opacity: 50%;">△ 图 1.1.1 启动浏览器并输入地址</font>

接着点击页面上的 "安装包 (.msi)" 并跟随引导下载, Edge 右上角会弹出下载进度提示。等待下载完成后, 点击 "打开文件"。

![1.1.2%20Download%20Koishi%20Installer](/assets/1.1.2%20Download%20Koishi%20Installer.png)

<font style="opacity: 50%;">△ 图 1.1.2 下载并安装 Koishi</font>

如果你找不到下载管理器, 请直接在地址栏内输入 "edge://downloads/all" 或 "chrome://downloads" (视浏览器而定), 如图 1.1.3。

或者你也可以直接按下 `Ctrl` + `J` 快捷键。

![1.1.3%20Edge%20Downloads%20Manager%20Page](/assets/1.1.3%20Edge%20Downloads%20Manager%20Page.png)

<font style="opacity: 50%;">△ 图 1.1.3 Edge 下载列表</font>

当尝试打开文件时, 你可能会遇到如图 1.1.4 的提示。

![1.1.4%20Trust%20msi%20pkg](/assets/1.1.4%20Trust%20msi%20pkg.png)

<font style="opacity: 50%;">△ 图 1.1.4 Windows Stupid Screen 阻断警告</font>

这是因为 Koishi 的安装包没有数字签名。你可以放心地忽略这个问题, 直接单击 "运行"。

:::warning

此段教程不构成医学建议, 如果你从 GitHub / Koishi Official AppCenter Page 以外的来源下载了 Koishi 安装包, 我无法担保它是安全的。

:::

随后 Koishi 的安装程序将打开。

![1.1.5%20Installing](/assets/1.1.5%20Installing.png)

<font style="opacity: 50%;">△ 图 1.1.5 Koishi 安装</font>

请跟随图 1.1.5 中的示例, 逐步完成 Koishi 安装。

在首屏中, 请直接点击 "Next"。随后, 用户协议将会展示, 请阅读协议, 并点击下方的 "I agree ..." 以同意条款, 再点击 "Next"。

在第三步中, 你可以自由配置你想要安装的 Koishi 组件。针对新手, 一般不建议修改。

如果你希望 Koishi 安装后创建桌面快捷方式, 请点击第三步的 "Desktop Icon" 选项左侧图标。在展开的选单中选择 "Entire feature will be installed on local hard drive"。再点击 "Next"。若无需求可不作修改。

:::caution

继续前, 请确保你已仔细阅读过 Koishi 用户协议。

:::

接着点击 "Install", 安装过程将开始。请耐心等待安装完成。

![1.1.6%20Finishing%20Installation](/assets/1.1.6%20Finishing%20Installation.png)

<font style="opacity: 50%;">△ 图 1.1.5 完成 Koishi 安装</font>

安装完成后, 单击底部 "Finish" 按钮, Koishi 正式安装完成。

:::tip

别忘记删掉已经没有用的 Koishi 安装包!

:::

#### 三、安装 LiteLoaderQQNT 与 LLOneBot

Koishi 实质上是一个 "机器人框架", 它不提供与 QQ、Telegram 等 IM 平台直接交互的功能。我们需要一个接口, 来让 Koishi 可以 "在这些平台上发消息"。

![1.2.1%20Implementation](/assets/1.2.1%20Implementation.png)

<font style="opacity: 50%;">△ 图 1.2.1 功能实现流程图</font>

:::tip

由于 QQ 官方平台的限制过多, 因此我们选择使用第三方插件。

:::

得益于近期 QQ 的 "QQNT" 架构更新, 更加稳定的第三方插件实现方案成为可能。[LiteLoaderQQNT](https://github.com/LiteLoaderQQNT/LiteLoaderQQNT) 是一个通过注入 QQ 的 JS 代码, 实现插件旁加载的框架。[LLOneBot](https://github.com/LLOneBot/LLOneBot) 则是基于这一框架开发的机器人插件。

首先, 请确保你已安装 [QQNT%20版](https://im.qq.com/pcqq/index.shtml)。

接下来, 打开你的浏览器, 在地址栏中输入 "<https://github.com/Mzdyl/LiteLoaderQQNT_Install/releases/latest/download/install_windows.exe"。一个名为> `install_windows.exe` 的文件应该开始下载。

:::note

这是由 [Mzdyl](https://github.com/Mzdyl) 开发的 LiteLoaderQQNT 一键安装脚本, 让 LiteLoaderQQNT 无需再通过手动修补安装。

:::

:::caution

如果你无法访问上述地址, 请尝试 [这个链接](https://mirror.ghproxy.com/github.com/Mzdyl/LiteLoaderQQNT_Install/releases/latest/download/install_windows.exe)。

:::

下载完成后, 请在文件资源管理器中打开该文件所在的文件夹。

![1.2.2%20UAC](/assets/1.2.2%20UAC.png)

<font style="opacity: 50%;">△ 图 1.2.2 以管理员身份运行</font>

:::caution

运行前请先退出 QQ, 否则可能导致异常。右键单击任务栏上的 QQ 托盘图标, 可以退出 QQ。

:::

如图 1.2.2, 右键单击 "install_windows.exe", 找到 "以管理员身份运行"。然后在弹出的 UAC 弹窗中单击 "是"。

![1.2.3%20Install%20LLQQNT](/assets/1.2.3%20Install%20LLQQNT.png)

<font style="opacity: 50%;">△ 图 1.2.3 LiteLoaderQQNT 安装进程</font>

如图 1.2.3, 一个命令窗口将打开。请耐心等待安装完成。安装完成后, 命令窗口中将弹出提示, 按下回车键即可。

:::warning

如果你在安装过程中遇到错误, 请考虑前往 LiteLoaderQQNT 交流社群寻求帮助。

:::

命令窗口关闭后, 请打开 QQ 并登录账号。随后点击 QQ 左下角菜单 - 设置, 查看设置面板中是否有 "LiteLoaderQQNT" 选项。

![1.2.4%20Open%20QQ%20Settings](/assets/1.2.4%20Open%20QQ%20Settings.png)

<font style="opacity: 50%;">△ 图 1.2.4 打开 QQ 设置</font>

![1.2.5%20LLQQNT%20Entry](/assets/1.2.5%20LLQQNT%20Entry.png)

<font style="opacity: 50%;">△ 图 1.2.5 LiteLoaderQQNT 入口</font>

:::caution

如果你没有找到 LiteLoaderQQNT 入口, 请考虑前往 LiteLoaderQQNT 交流社群寻求帮助。

:::

接下来我们要安装 LLOneBot。

![1.2.6%20Open%20plugins%20dir](/assets/1.2.6%20Open%20plugins%20dir.png)

<font style="opacity: 50%;">△ 图 1.2.6 打开插件文件夹</font>

请跟随图 1.2.6 所示, 进入 LiteLoaderQQNT 设置菜单后, 单击下方的 "数据目录位置" 右侧 "进入目录" 按钮, 一个文件资源管理器窗口将被打开。

接着, 在新打开的窗口中进入 "plugins" 文件夹。

回到浏览器, 访问此地址: "<https://github.com/LLOneBot/LLOneBot/releases/latest/download/LLOneBot.zip"。>

:::warning

如果你无法访问上述地址, 请尝试 [这个链接](https://mirror.ghproxy.com/github.com/LLOneBot/LLOneBot/releases/latest/download/LLOneBot.zip)。

:::

下载完成后, 你将得到一个 ZIP 文件。将该文件解压后, 移动至 "plugins" 文件夹中。

![1.2.7%20Install%20LLOneBot](/assets/1.2.7%20Install%20LLOneBot.png)

<font style="opacity: 50%;">△ 图 1.2.7 安装 LLOneBot</font>

移动完成后, 请确认当前 "\LiteLoaderQQNT\plugins\LLOneBot" 目录下的文件结构类似于图 1.2.8。

:::note

只要有 main、renderer 等文件夹, 那么你的操作就是无误的。不一定与图 1.2.8 完全一致。

:::

![1.2.8%20Folder%20path](/assets/1.2.8%20Folder%20path.png)

<font style="opacity: 50%;">△ 图 1.2.8 目录结构</font>

如果不是, 请继续进入内嵌目录, 将其中的文件夹移到指定路径。

:::note

例如, 你可能会看到在 LLOneBot 文件夹中还有一个 LLOneBot 文件夹, 某些解压软件可能造成这类情况。此时请进入第二层的 LLOneBot 文件夹 (即%20`plugins\LLOneBot\LLOneBot`), 将其中的所有内容剪切, 然后返回第一层 LLOneBot 文件夹 (即%20`plugins\LLOneBot`) 并粘贴。最后删除 `plugins\LLOneBot\LLOneBot` 文件夹。

:::

接下来, 请重启 QQ。

重启完成后, 返回设置页面, 你应该看到 "LLOneBot" 的设置选项, 请进入 LLOneBot 的设置列表。

![1.2.9%20Enable%20Reverse%20WS](/assets/1.2.9%20Enable%20Reverse%20WS.png)

<font style="opacity: 50%;">△ 图 1.2.9 启用反向 WebSocket</font>

稍后, Koishi 和 LLOneBot 将通过反向 WebSocket 通信。请向下找到设置项 "启用反向 WebSocket 服务" 并将其设为启用。

完成后, 请再次重启 QQ。

:::tip

理论上来说, 此处也可以不重启。但为了避免某些意外问题, 重启是更稳定的方案。

:::

#### 四、配置 Koishi 连接
