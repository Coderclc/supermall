<template>
  <div id="profile">
    <nav-bar class="profile-nav-bar">
      <div slot="center">我的档案</div>
    </nav-bar>
    <profile-login />
    <profile-assets />
    <profile-message :list="c_arr" class="c_arr"/>
    <profile-message :list="cc_arr" />
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";

import ProfileLogin from "./subcomponent/ProfileLogin";
import ProfileAssets from "./subcomponent/ProfileAssets";
import ProfileMessage from "./subcomponent/ProfileMessage";

export default {
  name: "Profile",
  data: () => {
    return {
      c_arr: [
        { iconFont: "icon-xinxi", message: "我的信息" },
        { iconFont: "icon-jifen", message: "积分商城" },
        { iconFont: "icon-huangguan", message: "会员卡" }
      ],
      cc_arr: [
        { iconFont: "icon-gouwu", message: "我的购物车" },
        { iconFont: "icon-gouwuche", message: "下载购物APP" },
      ]
    };
  },
  components: {
    NavBar,
    ProfileLogin,
    ProfileAssets,
    ProfileMessage
  }
};
</script>
<style scoped>
#profile {
  height: 100vh;
}
.profile-nav-bar {
  background-color: var(--color-tint);
  color: #ffffff;
}
.c_arr{
  border-bottom: 10px solid #ddd;
}
</style>