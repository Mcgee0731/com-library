<template>
  <div>
    <a 
      :href="disabled?null:href" 
      :class="[disabled && 'disabled',!underline && 'no-underline']"
    >
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'McLink',
  props: {
    href:{ // 超链接
      type:String
    },
    disabled:{ // 按钮禁用
      type:Boolean,
      default:false
    },
    underline:{ // 下划线
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
.disabled {
  cursor: not-allowed;
}
.no-underline {
  text-decoration: none;
}
</style>
