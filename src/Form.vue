<template>
  <form>
      <slot></slot>
  </form>
</template>

<script>
export default {
    name:'McForm',
    provide(){
        return {
		    // 暴露整个组件给 formItem，给formItem传递参数过多时直接传组件
			// 不用 parent 因为可能隔代。依赖注入保险
            form:this 
        }
    },
    props:{
        model:{
            type:Object
        },
        rules:{
            type:Object
        }
    },
    methods:{
		// 给表单提供一个 validate方法， 外面可以通过 this.$refs.form.validate 调用该方法
        async validate(cb){
            const tasks = this.$children
                .filter(child=>child.prop)
                .map(child=>child.validate())
            try{
                await Promise.all(tasks)
                cb(true)
            }catch(err){
                cb(false)
            }
        }
    }
}
</script>

<style>

</style>