<template>
  <div class="profile-assets">
    <div class="balance assets-item">
      <span>0.00</span><span>元</span>
      <p>我的余额</p>
    </div>
    <div class="discount assets-item">
      <span>0</span><span>个</span>
      <p>我的优惠</p>
    </div>
    <div class="integral assets-item">
      <span>0</span><span>分</span>
      <p>我的积分</p>
    </div>
  </div>
</template>

<script>
export default {
  name:"ProfileAssets"
}
</script>

<style scoped>
.profile-assets{
  display: flex;
  height: 13vh;
  border-bottom: 10px solid #ddd;
}
.assets-item{
  flex: 1;
  border-right: 5px solid #ddd;
  text-align: center;
  padding-top:13px;
  font-size: 15px;
}
.assets-item span:first-child{
  color: orangered;
  font-size: 20px;
  font-weight: 700;
}
.integral{
  border-right-width: 0;
}
</style>