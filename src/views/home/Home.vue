<template>
  <div id="home">
    <nav-bar class="home-bar"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners=banners></home-swiper>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./subcomponent/HomeSwiper"
import { getHomeData } from "network/homerequest";

export default {
  name: "Home",
  data() {
    return {
      banners: null,
      recommends: null
    };
  },
  created() {
    // 创建组件时从服务器端保存数据
    getHomeData()
      .then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        console.log(res);
      })
      .catch(err => {
        console.log("Failed to request data from server");
      });
  },
  components: {
    NavBar,
    HomeSwiper
  }
};
</script>
<style scoped>
.home-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>