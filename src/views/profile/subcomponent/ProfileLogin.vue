<template>
  <div class="profile-login">
    <div class="head-portrait">
      <i class="iconfont icon-wode"></i>
    </div>
    <div class="right-arrow">
      <i class="iconfont icon-iconfontjiantou5"></i>
    </div>
    <div class="login-register">
      <p>登陆/注册</p>
      <p><i class="icon-shouji iconfont"></i>暂无绑定手机号</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileLogin"
};
</script>

<style scoped>
.profile-login {
  background-color: var(--color-tint);
  height: 13vh;
}
.head-portrait {
  float: left;
  padding: 5px;
  margin-left: 20px;
  border-radius: 25px;
  background-color: #ddd;
}
.icon-wode {
  font-size: 40px;
  color: #bbb;
}
.icon-iconfontjiantou5 {
  color: #ddd;
  font-size: 25px;
}
.login-register {
  overflow: hidden;
  color: #fff;
  font-size: 15px;
  padding: 13px 0 0 13px;
}
.right-arrow {
  float: right;
  margin-top: 15px;
}
</style>