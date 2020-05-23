<template>
  <div class="toast" v-show="show">
    {{message}}
  </div>
</template>

<script>
export default {
  name:"Toast",
  props:{
    show:{
      type:Boolean,
      default(){
        return false
      }
    },
    message:{
      type:String,
      default(){
        return null
      }
    }
  }

}
</script>

<style scoped>
.toast{
  background-color:rgba(0,0,0,.75);
  position:fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);  
}
</style>