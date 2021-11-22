<template>
  <div>
    <steps :count="count" :active="active"></steps>
    <button @click="clk">下一步</button>
  </div>
</template>

<script>
import Steps from './steps.vue'
export default {
  name:'StepsTest',
  components:{
    Steps
  },
  data(){
    return {
      count: 4,
      active: 0
    }
  },
  methods:{
    clk(){
      if(this.active>= this.count) return
      this.active++
    }
  }
}
</script>

<style>

</style>