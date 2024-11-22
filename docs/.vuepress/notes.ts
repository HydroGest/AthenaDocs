import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const DevDocs = defineNoteConfig({
  dir: 'docs/dev',
  link: '/docs/dev',
  sidebar: 'auto',
})

const UserDocs = defineNoteConfig({
  dir: 'user',
  link: '/docs/user/',
  sidebar: [
    {
      text: '指南',
      prefix: '/docs/user/guide',
      items: [
        { text: '安装', link: 'install' }, 
      ],
    },
    {
      text: '配置',
      prefix: '/docs/user/config',
      items: [
        { text: '配置 Prompt', link: 'prompt' }, 
        { text: '配置主 API', link: 'main-api' }, 
        { text: '配置聊群', link: 'group' }, 
       { text: '配置机器人设定', link: 'settings' }, 
      { text: '配置验证器', link: 'verifier' }, 
      ],
    },
  ]
})

const Tutorial = defineNoteConfig({
  dir: 'tutorial',
  link: '/tutorial/',
  sidebar: [
    { text: '让我们开始吧', link: '/tutorial/index.html' }, 
    { text: '致新手', link: 'getting-started' }, 
  ]
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [DevDocs, UserDocs, Tutorial],
})
