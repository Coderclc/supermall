<template>
  <div class="details-bot-bar">
    <div class="bot-item left">
      <div class="left-item">
        <i class="iconfont icon-kefu"></i>
        <p>客服</p>
      </div>
      <div class="left-item">
        <i class="iconfont icon-dianpu"></i>
        <p>店铺</p>
      </div>
      <div class="left-item" @click="addStars" :class="{stars:isStars}">
        <i class="iconfont icon-shoucang1"></i>
        <p>收藏</p>
      </div>
    </div>
    <div class="bot-item right">
      <div class="right-item add" @click="addToCart">加入购物车</div>
      <div class="right-item buy" @click="purchase">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailsBotBar",
  methods:{
    addToCart(){
      this.$emit("addToCart")
    },
    purchase(){
      this.$toast.show("谢谢惠顾")
    },
    addStars(){
      this.isStars =!this.isStars
    }
  },
  data(){
    return{
      isStars:false
    }
  }
}
</script>

<style scoped>
.details-bot-bar{
  height: 49px;
  display: flex;
  
}
.bot-item{
  display: flex;
  flex: 1;
  text-align: center;
}
.left-item{
  flex: 1;
  margin-top: 5px;
}
.left-item i::before{
  font-size: 25px;
}
.left-item p{
  font-size: 10px;
}

.right-item{
  flex: 1;
  font-size: 15px;
  line-height: 49px;
}
.add{
  background-color: #ffe817;
}
.buy{
  background-color: #f69;
}
.stars{
  color: var(--color-tint);
}
</style>