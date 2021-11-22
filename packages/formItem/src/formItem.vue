<template>
  <div>
      <label>{{label}}</label>
      <div>
          <slot></slot>
          <p v-if="errMsg">{{errMsg}}</p>
      </div>
  </div>
</template>

<script>
// elementui 中 表单验证的插件
import AsyncValidator from 'async-validator'
export default {
    name:'McFormItem',
    inject:['form'],
    props:{
        label:{
            type:String
        },
        prop:{ // 此验证需要安装 async-validator 包
            type:String
        }
    },
    mounted(){
        // 手动监听，input组件
        this.$on('validate',()=>{
			// 调用验证方法
            this.validate()
        })
    },
    data(){
        return {
            errMsg:'' // 错误提示
        }
    },
    methods:{
        validate(){
			// 是否需要验证 
            if(!this.prop) return
			
			// 获取依赖注入的验证项和验证规则
            const value = this.form.model[this.prop]
            const rule = this.form.rules[this.prop]

            // 验证对象
            const validateObj = {[this.prop]:rule}
            const validator = new AsyncValidator(validateObj)
			
            // 返回一个 promise 接收 参数1：验证对象 参数2：错误回调
            return validator.validate({[this.prop]:value},(err)=>{
                if(err){
                    this.errMsg = err[0].message
                }else{
                    this.errMsg = ''
                }
            })
        }
    }
}
</script>

<style>

</style>