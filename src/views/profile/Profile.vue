<template>
    <div id="profile">
    <nav-bar class="profile-nav-bar"><div slot="center">我的档案</div></nav-bar>
    <profile-login/>
    <profile-assets/>
    <profile-message/>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";

import ProfileLogin from "./subcomponent/ProfileLogin"
import ProfileAssets from "./subcomponent/ProfileAssets"
import ProfileMessage from "./subcomponent/ProfileMessage"

export default {
  name:"Profile",
  components:{
    NavBar,
    ProfileLogin,
    ProfileAssets,
    ProfileMessage
  }
}
</script>
<style scoped>
#profile{
  height: 100vh;
}
.profile-nav-bar{
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>