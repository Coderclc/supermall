<template>
  <tabbar>
      <tabbarItem link="/home" >
        <img slot="icon" src="~img/tabbar/home.svg" alt />
        <img slot="icon-activated" src="~img/tabbar/home_activated.svg" alt />
        <p slot="text">首页</p>
      </tabbarItem>
      <tabbarItem link="/catalog" activedColor="lightblue">
        <img slot="icon" src="~img/tabbar/catalog.svg" alt />
        <img slot="icon-activated" src="~img/tabbar/catalog_activated.svg" alt />
        <p slot="text">目录</p>
      </tabbarItem>
      <tabbarItem link="/shopping" activedColor="yellow">
        <img slot="icon" src="~img/tabbar/shopping.svg" alt />
        <img slot="icon-activated" src="~img/tabbar/shopping_activated.svg" alt />
        <p slot="text">购物车</p>
      </tabbarItem>
      <tabbar-Item link="/profile" activedColor="#fff">
        <img slot="icon" src="~img/tabbar/profile.svg" alt />
        <img slot="icon-activated" src="~img/tabbar/profile_activated.svg" alt />
        <p slot="text" >我的</p>
      </tabbar-Item>
     </tabbar>
</template>
<script>
import tabbar from "components/common/tabbar/TabBar";
import tabbarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: { 
    tabbar,
    tabbarItem
  }
};
</script>
<style scoped>
</style>