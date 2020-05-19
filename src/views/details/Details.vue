<template>
  <div id="details">
    <details-nav-bar />
    <scroll>
      <details-swiper :topImages="topImages" v-if="topImages.length!=0" />
      <details-wares-info :info="info" class="wrapper"/>
      <details-shop-info :shopInfo="shopInfo"/>
    </scroll>
  </div>
</template>

<script>
import DetailsNavBar from "./subcomponent/DetailsNavBar";
import DetailsSwiper from "./subcomponent/DetailsSwiper";
import DetailsWaresInfo from "./subcomponent/DetailsWaresInfo";
import DetailsShopInfo from "./subcomponent/DetailsShopInfo";

import Scroll from "components/common/scroll/Scroll";

import {
  information,
  requestDetailsData,
  shopInformation
} from "network/detailsrequest";

export default {
  name: "Details",
  data() {
    return {
      id: null,
      topImages: [],
      info: {},
      shopInfo: {}
    };
  },
  methods: {
    // 请求details数据
    getDetailsData() {
      requestDetailsData(this.id)
        .then(res => {
          console.log(res);
          // 获取轮播图数据
          this.topImages = res.result.itemInfo.topImages;
          // 将详情数据集合到 information类的实例
          this.info = new information(
            res.result.itemInfo,
            res.result.columns,
            res.result.shopInfo.services
          );
          // 将商店数据集合到 shopInformation类的实例
          this.shopInfo = new shopInformation(res.result.shopInfo);
        })
        .catch(err => {
          console.log("Failed to request data from server");
        });
    }
  },
  components: {
    DetailsNavBar,
    DetailsSwiper,
    DetailsWaresInfo,
    DetailsShopInfo,
    Scroll
  },
  created() {
    // 获取路由id
    this.id = this.$route.params.id;
    this.getDetailsData();
  }
};
</script>

<style scoped>
#details{
  height: 100vh;
}
.wrapper{
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>