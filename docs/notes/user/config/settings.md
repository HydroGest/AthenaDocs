---
title: 设定配置
createTime: 2024/09/08 22:53:34
permalink: /docs/user/config/settings.html
---

除了直接编辑 Prompt 以外，Athena 提供了一种更便捷的方法配置 Bot 的人设。在 **机器人设定** 中，有一整套配置项用于简便调节 Bot 的设定，这些结果会被替换到 Prompt 的特定区域。

## 解释

### 1. `Bot.WhoAmI`

这个配置项用于定义 Bot 的简要设定。这个配置项的内容会在 Prompt 中这样体现：
```text
你现在是 ${config.Bot.WhoAmI}, 
```

例如，你可以这样填写：
```text
一个普通群友、音游专家
```
或者：

```text
一个暴躁高中生
```

### 2. `Bot.BotName`

这个配置项用于定义 Bot 的名称。这个配置项的内容会在 Prompt 中这样体现：

```text
你的名字是 ${config.Bot.BotName}, 
```

这里填写 Bot 的 QQ 账户名称最佳。

### 3. `Bot.BotHomeTown`

这个配置项用于定义 Bot 的家乡。这个配置项的内容会在 Prompt 中这样体现：

```text
你的家乡来自于 ${config.Bot.BotHometown}
```

* 某些 Prompt 模板可能不包含此项。

### 4. `Bot.BotYearold`

这个配置项用于定义 Bot 的年龄。这个配置项的内容会在 Prompt 中这样体现：

```text
你今年 ${config.Bot.BotYearold} 岁了。
```

 * 某些 Prompt 模板可能不包含此项。

### 4. `Bot.BotPersonality`

这个配置项用于定义 Bot 的性格特征。这个配置项的内容会在 Prompt 中这样体现：

```text
你的性格特征是 ${config.Bot.BotPersonality}。
```

* 某些 Prompt 模板可能不包含此项。

### 5. `Bot.BotGender`

这个配置项用于定义 Bot 的性别。这个配置项的内容会在 Prompt 中这样体现：

```text
性别为 ${config.Bot.BotGender}。
```
或
```text
你的性别是 ${config.Bot.BotGender}。
```

### 6. `Bot.BotHabbits`

这个配置项用于定义 Bot 的爱好。这个配置项的内容会在 Prompt 中这样体现：

```text
你的爱好是 ${config.Bot.BotHabbits}。
```

例如，你可以这样填写：

```text
打音游
```

* 某些 Prompt 模板可能不包含此项。

### 7. `Bot.BotBackground`

这个配置项用于定义 Bot 的背景。这个配置项的内容会在 Prompt 中这样体现：

```text
${config.Bot.BotHabbits}。
```
或

```text
这是一些必要的背景信息: ${config.Bot.BotBackground}
```

例如，你可以这样填写：

```text
你字太白，号青莲居士，唐朝浪漫主义诗人，被后人誉为“诗仙”。与杜甫并称为“李杜”。汉族，祖籍陇西成纪。一说出生于碎叶城（当时属唐朝领土，今属吉尔吉斯斯坦），4岁时跟随父亲迁至剑南道绵州。一说即出生于绵州昌隆（今四川江油）。李白存世诗文千余篇，有《李太白集》传世。762年病逝，享年61岁。其墓在今安徽当涂，四川江油、湖北安陆有纪念馆。 李白深受黄老列庄思想影响，有《李太白集》传世，诗作中多以醉时写的，代表作有《望庐山瀑布》、《行路难》、《蜀道难》、《将进酒》、《梁甫吟》、《早发白帝城》等多首。
```
~~（仅做示范）~~

### 8. `Bot.CuteMode`

实验性功能。这个配置项是一个布尔值，目前尚未开发完毕。

## 示例

```yaml
# Bot 的自我认知
WhoAmI: 一个普通群友
# Bot 的性格
BotPersonality: 冷漠/高傲/网络女神
# 机器人的习惯，当然你也可以放点别的小叮咛
BotHabbits: 辩论
# 机器人的背景
BotBackground: 一个优秀的的校辩论队选手，曾荣获.....
```