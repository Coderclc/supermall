<template>
  <div class="wareslist">
    <wares-item v-for="(item,index) in wares" :key="index" :item="item"/>
  </div>
</template>

<script>
import WaresItem from "./WaresItem"
export default {
  name:"WaresList",
  props:{
    wares:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    WaresItem
  }
}
</script>

<style>
.wareslist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
}
</style>