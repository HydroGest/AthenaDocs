import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '快速上手', link: '/tutorial/index.html' },
  { text: '用户文档', link: '/docs/user/index.html' },
  { text: '开发者文档', link: '/docs/dev/index.html' },
])
