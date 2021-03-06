import McForm from '../'
import McButton from '../../button/'
import McFormItem from '../../formItem/'
import McInput from '../../input/'

export default {
  title:'McForm',
  component:McForm
}

export const Login = ()=>({
  components:{McForm,McFormItem,McInput,McButton},
  template:`
    <mc-form ref="form" :model="user" :rules="rules">
      <mc-form-item label="用户名" prop="username">
        <mc-input v-model="user.username" placeholder="请输入用户名"></mc-input>
      </mc-form-item>
      <mc-form-item label="密码" prop="password">
        <mc-input type="password" v-model="user.password" placeholder="请输入密码"></mc-input>
      </mc-form-item>
      <mc-form-item>
        <mc-button type="primary" @click="login()">登 录</mc-button>
      </mc-form-item>
    </mc-form>
  `,
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      console.log('button')
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})