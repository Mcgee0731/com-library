import McInput from '../'

export default {
  title:'McInput',
  component:McInput
}

export const Text = ()=>({
  components:{ McInput },
  template:'<mc-input v-model="value"></mc-input>',
  data(){
    return {
      value:'admin'
    }
  }
})

export const Password = ()=>({
  components:{ McInput },
  template:'<mc-input type="password" v-model="value"></mc-input>',
  data(){
    return {
      value:'123456'
    }
  }
})