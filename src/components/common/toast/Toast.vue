<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  name:"Toast",
  data(){
    return{
      message:"",
      isShow:false
    }
  },
  methods:{
    show(message='Default information',interval=2000){
      this.isShow=true
      this.message=message
      setTimeout(()=>{
        this.isShow=false
      },interval)
    }
  }

}
</script>

<style scoped>
.toast{
  color: #ccc;
  background-color:rgba(0,0,0,.75);
  position:fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);  
}
</style>