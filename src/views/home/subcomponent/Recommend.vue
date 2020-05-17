<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.link">
      <a v-bind:href="item.link">
        <img :src="item.image" >
        {{item.title}}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:"Recommend",
  props:{
    recommends:{
      type:Array
    }
  }
}
</script>

<style>
  .recommend{
    display: flex;
    font-size: 14px;
    text-align: center;
    border-bottom: 10px solid #eee;
    padding: 10px 0 20px ;
  }

  .recommend-item img{
    width: 90%;
    margin-bottom: 10px;
    display: block;
  }
</style>