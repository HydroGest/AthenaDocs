import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',
  // your git repo url
  docsRepo: 'https://github.com/HydroGest/Yesimbot',
  docsDir: 'docs',

  appearance: true,

  profile: {
    avatar: 'https://theme-plume.vuejs.press/plume.png',
    name: 'Athena',
    description: '下一代 AI 虚拟群友',
    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  notes,
  social: [
    { icon: 'github', link: 'https://github.com/HydroGest/Yesimbot' },
  ],

})
