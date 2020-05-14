<template>
  <tab-bar>
      <tab-bar-item link="/home" >
        <img slot="icon" src="~img/tabbar/home.svg" alt />
        <img slot="icon-activated" src="~img/tabbar/home_activated.svg" alt />
        <p slot="text">首页</p>
      </tab-bar-item>
      <tab-bar-item link="/catalog" activedColor="lightblue">
        <img slot="icon" src="~img/tabbar/catalog.svg" alt />
        <img slot="icon-activated" src="~img/tabbar/catalog_activated.svg" alt />
        <p slot="text">目录</p>
      </tab-bar-item>
      <TabBarItem link="/shopping" activedColor="yellow">
        <img slot="icon" src="~img/tabbar/shopping.svg" alt />
        <img slot="icon-activated" src="~img/tabbar/shopping_activated.svg" alt />
        <p slot="text">购物车</p>
      </TabBarItem>
      <TabBarItem link="/profile" activedColor="#fff">
        <img slot="icon" src="~img/tabbar/profile.svg" alt />
        <img slot="icon-activated" src="~img/tabbar/profile_activated.svg" alt />
        <p slot="text" >我的</p>
      </TabBarItem>
     </tab-bar>
</template>
<script>
import {TabBar ,TabBarItem} from "components/common/tabbar/index"

export default {
  name: "MainTabBar",
  components: { 
    TabBar,
    TabBarItem
  }
};
</script>
<style scoped>
</style>