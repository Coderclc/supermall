<template>
  <div class="wareslist">
    <wares-item v-for="item in wares" :key="item.iid+Math.random()" :item="item"/>
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