---
title: 主 API 配置
eateTime: 2024/09/08 22:53:34
permalink: /docs/user/config/main-api.html
createTime: 2024/10/13 09:29:23
---
Athena 依赖大模型 API 来工作。Athena 配置中提供了 **LLM API 相关配置**，支持配置多个 API，使得 API 调用负载均衡。

## 基本配置

在 **LLM API 相关配置** 中，Athena 提供了一个配置项 `API.APIList`。对于每一项，又有以下几种子项：

- `API.APIList.APIType`
- `API.APIList.BaseURL`
- `API.APIList.UID`
- `API.APIList.APIKey`
- `API.APIList.AIModel`

### 1. `API.APIList.APIType`

API 的类型。可选项：`OpenAI`、`Cloudflare` 以及 `Custom`。当选择 `OpenAI` 以及 `Custom` 时，使用 OpenAI 的 API 格式。此两者的区别在于 URL 模板。

当选择 `OpenAI` 时，API 的请求地址为 `${BaseURL}/v1/chat/completions/`，而当选择 `Custom` 时，API 的请求地址为 `${BaseURL}/`。

此外，当选择 Cloudflare 时，API 的请求地址为 `${BaseURL}/accounts/${UID}/ai/run/${model}`。

### 2. `API.APIList.BaseURL`

API 的基础 URL。以 GPTGOD 平台为例:

- 当 `API.APIList.APIType` 选择 `OpenAI` 时，本项填写 `https://api.gptgod.online/`；

- 当 `API.APIList.APIType` 选择 `Custom` 时，本项填写 `https://api.gptgod.online/v1/chat/completions`。

特别地，当使用 Cloudflare API 时，你的 APIType 只能选择 `Cloudflare`，并且此项只能填写 `https://api.cloudflare.com/client/v4`。

### 3. `API.APIList.UID`

当且仅当您使用 Cloudflare API 时填写本项。本项为您的 Cloudflare 用户 ID。详见 Cloudflare Workers AI 相关页面。

### 4. `API.APIList.APIKey`

此项填写您的 API Token / API Key。具体请见相应 API 提供商的说明。一般而言,它类似如下字符串：
```text
sk-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

### 5. `API.APIList.AIModel`

AI 模型名称。例如 `llama-3.1-405b`，具体请见相应 API 提供商的说明。特别地，如果你使用的是 Cloudflare AI，你的格式应类似如下字符串：`@cf/meta/llama-3-8b-instruct`。

## 负载均衡

你可以配置多个 API，每个 API 遵循以上配置。Athena 会轮流使用 `API.APIList` 列表的每一个 API，以实现均衡化调用。