---
title: 验证器配置
createTime: 2024/10/14 23:52:34
permalink: /docs/user/config/verifier.html
---

自 1.2.0 版本开始，Athena 增设了 Verifier（验证器）功能。验证器作用于人工智能大模型获取回答之后、机器人发送聊群消息之前。目前，验证器的功能是检验 Bot 当前回复的内容是否和上一次回复的内容相重复。实践证明，在开启验证器之后，Bot 的回复质量有明显的提升。

## 启用验证器

验证器不默认开启，你需要到 **相似度验证器配置** 中手动开启配置项 `Verifier.Enabled` 来打开相似度验证器。

## 配置验证器 API

验证器的原理是在 Bot 发送消息之前，再调用一次大模型 API 来检查本次回复的内容是否符合我们给定的要求。因此验证器也需要配置大模型的 API。其中这几项的说明详见 [主 API 配置](main-api.html)：

- `Verifier.APIType`
- `Verifier.BaseURL`
- `Verifier.UID`
- `Verifier.APIKey`
- `Verifier.AIModel`

请注意，以上的 API 配置仅作用于验证器。

此外，验证器还需要提供一个配置项 `Verifier.SimilarityThreshold`，这一项填入一个 $[0, 1]$ 之间的实数，表示最低可接受的相似度阈值。当本次 Bot 将要发送的消息与 Bot 上一次发送的消息的相似度低于此值时将不会发送。该相似度并非完全的文本相似度，而是**语义相似度**。这意味着，即使两次发言的表述不同，但意义接近也不会发送。

## 展望

Athena 计划扩展验证器的功能，让验证的步骤成为 Bot 反思的过程。如果你有好的让大模型反思的思路，欢迎提出你的简介。