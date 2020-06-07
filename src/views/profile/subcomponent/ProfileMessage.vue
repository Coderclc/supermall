<template>
  <div class="profile-message">
    <div class="item" v-for="(item,index) in list" :key="index">
      <div class="iconfont">
        <i :class="['iconfont',item.iconFont]"></i>
      </div>
      <div class="message"><span>{{item.message}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name:"ProfileMessage",
  props:{
    list:{
      type:Array,
    }
  }
}
</script>

<style scoped>
.iconfont{
  color:var(--color-high-text);
  margin:0 8px
}
.item{
  display: flex;
  font-size: 15px;
  line-height: 40px;
}
.message span{
  border-bottom: 2px solid #ddd;
  width: 320px;
  display: inline-block;
}
.item:last-child .message span{
  border-bottom-width: 0;
}
</style>