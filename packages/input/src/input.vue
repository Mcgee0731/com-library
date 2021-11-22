<template>
  <div>
      <input :type="type" :value="value" @input="inputHandler" v-bind="$attrs">
  </div>
</template>

<script>
export default {
    name:'McInput',
    inheritAttrs:false,
    props:{
        value:{
            type:String
        },
        type:{
            type:String,
            default:'text'
        }
    },
    methods:{
        inputHandler(evt){
            this.$emit('input',evt.target.value)

            // 提供一个方法查找当前组件的父组件中是否有 formItem 组件（用名字判断）
            const findParent = parent =>{
                while(parent){
                    if(parent.$options.name === 'McFormItem'){
                        break
                    }else {
                        parent = parent.$parent
                    }
                }
                return parent
            }
            // 传入当前组件的父组件，返回 formItem 组件
            const parent = findParent(this.$parent)
			
            if(parent){
                // $emit 就是派发更新，$on 用来监听
                // 我们常用的 子组件 this.$emit 是因为监听时也是v-on在子组件上
                parent.$emit('validate')
            }
         }
    }
}
</script>

<style>

</style>