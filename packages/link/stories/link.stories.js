import McLink from '../src/link.vue'

export default {
  title: 'McLink',
  component: McLink
}

export const Link = _ => ({
  components: { McLink },
  template: `
    <div>
      <mc-link :disabled="true" href="http://www.baidu.com">百度</mc-link>
    </div>
  `
})