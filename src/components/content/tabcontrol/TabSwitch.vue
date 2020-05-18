<template>
  <div class="tab-switch">
    <div class="switch-item" v-for="(item,index) in titles" 
    :key="item" :class="{actived:currentIndex==index}"
    @click="itemSwitch(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"TabSwitch",
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    itemSwitch(index){
      this.currentIndex=index
      this.$emit("tabswitch",index)
    }
  },
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
.tab-switch{
  display: flex;
  text-align: center;
  z-index: 9;
  background-color: #fff;
}
.switch-item{
  flex: 1;
  padding: 15px;
}
.switch-item span{
  padding-bottom: 5px;
}
.actived{
  color:var(--color-tint)
}
.actived span{
  border-bottom: 2px solid var(--color-tint);
}
</style>