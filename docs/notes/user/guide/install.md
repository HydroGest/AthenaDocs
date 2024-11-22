---
title: 安装
eateTime: 2024/09/08 22:53:34
permalink: /docs/user/guide/install.html
createTime: 2024/10/13 04:15:32
---
确保您已经安装了 Koishi，如果你尚未安装，请阅读 [新手入门](/tutorial)。

Athena 目前只在 QQ 平台测试运行，对于其他聊天平台的兼容性尚不明确。所以，建议您使用 [adapter-onebot](https://github.com/koishijs/koishi-plugin-adapter-onebot) 适配器或其他支持非官方 QQ 机器人的适配器。

> [!IMPORTANT]
> 不要使用 QQ 官方机器人接口接入 Athena！因为在 QQ 官方接口中，机器人只能获得被 @ 的消息，并且无法主动发送消息。这与 Athena 的理念——伪装成群友是不相符合的。因此，为了更好地发挥 Athena 的表现，请使用非官方 QQ 接口。 

> [!NOTE]
> 如果您发现在其他聊天平台（如 Discord、Kook 以及 Telegram 中的兼容性问题，请到 Github Issue 处反馈。

## 安装插件
搜索并安装 `yesimbot` 插件，这是 Athena 的主插件。

## 选择模型

Athena 目前支持 OpenAI 风格和 Cloudflare 风格的 API 格式。但是，这并不意味着你只能使用以上两家的大模型，目前已知的 API 提供商，大都提供了 OpenAI 格式兼容。

> [!NOTE]
> 自 1.1.0 版本开始，Cloudflare 提供的免费大模型 API 服务不再受维护。建议您不要选择 Cloudflare 提供的模型，因为它对于中文的支持并不好，并且在长上下文情景的表现相当低下。

我们强烈推荐使用非 Token 计费的 API，这是因为 Athena 每次对话的前置 Prompt 本身消耗了非常多的 Token。你可以使用一些以调用次数计费的 API，比如 [GPTGOD](https://gptgod.online/#/register?invite_code=envrd6lsla9nydtipzrbvid2r)。

以 GPTGOD 平台为例，以下是几种常见模型的实际效果和调用成本对比：

| 模型                   |    效果    |                        价格 |
| ---------------------- | :--------: | -------------------------: |
| claude-3-5-sonnet-*    | 极佳       | 最低 0.3 积分 / **1 token** |
| gpt-4-turbo-2024-04-09 | 极佳       |          1200 积分 / **次** |
| gpt-4o-*               | 优秀       |       最低 500 积分/ **次** |
| llama-3.1-405b         | 优秀       |           100 积分 / **次** |
| gpt-4o-mini            | 一般       |            20 积分 / **次** |
| o1-mini                | 尚未测试   |          1500 积分 / **次** |

对于一般用户而言，请选择 `llama-3.1-405b` 以获得最高性价比。

获得你的 API 之后，我们的准备步骤就结束了，接下来请阅读配置部分。