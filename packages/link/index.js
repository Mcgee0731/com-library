import McLink from './src/link.vue'

McLink.install = Vue => {
  Vue.component(McLink.name, McLink)
}

export default McLink
