<template>
  <div>
    <button @click="clkhandler"><slot></slot></button>
  </div>
</template>

<script>
export default {
    name:'McButton',
    methods:{
        clkhandler(evt){
            this.$emit('click',evt)
            evt.preventDefault()
        }
    }
}
</script>

<style>

</style>