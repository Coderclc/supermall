<template>
  <div class="profile-message">
    <div class="my-message item">
      <i class="icon-xinxi iconfont"></i>
      <span>我的信息</span>
    </div>
    <div class="integral-mall item">
      <i class="icon-jifen iconfont"></i>
      <span>积分商城</span>
    </div>
    <div class="membership-card item">
      <i class="icon-huangguan iconfont"></i>
      <span>会员卡</span>
    </div>
    <div class="shopping-cart item">
      <i class="icon-gouwu iconfont"></i>
      <span>我的购物车</span>
    </div>
    <div class="download-app item">
      <i class="icon-gouwuche iconfont"></i>
      <span>下载购物APP</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"ProfileMessage"
}
</script>

<style scoped>

.iconfont{
  color:var(--color-high-text);
  margin:0 10px 0 15px
}
.iconfont+span{
  font-size: 15px;
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;
  display: inline-block;
  width: 320px;
}
.membership-card .iconfont+span{
  border-bottom-width: 0;
}
.item{
  padding: 5px;
}
.membership-card{
   border-bottom: 10px solid #ddd;
}
</style>