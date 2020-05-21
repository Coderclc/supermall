<template>
  <div id="details">
    <details-nav-bar />
    <scroll ref="scroll">
      <details-swiper :topImages="topImages" v-if="topImages.length!=0" />
      <details-wares-info :info="info" class="wrapper" />
      <details-shop-info :shopInfo="shopInfo" />
      <details-wares-display :detailInfo="detailInfo" @imgLoadDone="imgLoadDone" />
      <details-wares-param :wares-params="waresParams" />
      <details-comment-info :commentInfo="commentInfo" />
      <wares-list :wares="recommend" />
    </scroll>
  </div>
</template>

<script>
import DetailsNavBar from "./subcomponent/DetailsNavBar";
import DetailsSwiper from "./subcomponent/DetailsSwiper";
import DetailsWaresInfo from "./subcomponent/DetailsWaresInfo";
import DetailsShopInfo from "./subcomponent/DetailsShopInfo";
import DetailsWaresDisplay from "./subcomponent/DetailsWaresDisplay";
import DetailsWaresParam from "./subcomponent/DetailsWaresParam";
import DetailsCommentInfo from "./subcomponent/DetailsCommentInfo";

import WaresList from "components/content/wares/WaresList";
import Scroll from "components/common/scroll/Scroll";

import { debounce } from "common/utils";

import {
  information,
  requestDetailsData,
  requestDetailsRecommend,
  shopInformation
} from "network/detailsrequest";

export default {
  name: "Details",
  data() {
    return {
      id: null,
      topImages: [],
      info: {},
      shopInfo: {},
      detailInfo: {},
      waresParams: {},
      commentInfo: {},
      recommend: []
    };
  },
  methods: {
    // 请求details数据
    getDetailsData() {
      requestDetailsData(this.id)
        .then(res => {
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
          // 获取商品展览数据
          this.detailInfo = res.result.detailInfo;
          // 获取商铺参数数据
          this.waresParams = res.result.itemParams;
          // 获取评论信息
          res.result.rate.cRate != 0 &&
            (this.commentInfo = res.result.rate.list[0]);
        })
        .catch(err => {
          console.log("Failed to request data from server");
        });
    },
    getDetailsRecommend() {
      requestDetailsRecommend()
        .then(res => {
          console.log(res);
          this.recommend = res.data.list;
        })
        .catch(err => {
          console.log("Failed to request data from server");
        });
    },
    // 监听商品图片加载完成
    imgLoadDone() {
      this.$refs.scroll.refresh();
    },
    // 监听推荐图片加载完成
    imgLoaded() {
      console.log("123");
    }
  },
  computed: {
    listenImgOnLoad() {
      return this.$store.state.imgOnLoad;
    }
  },
  watch:{
    listenImgOnLoad(){
      this.refresh()
    }
  },
  components: {
    DetailsNavBar,
    DetailsSwiper,
    DetailsWaresInfo,
    DetailsShopInfo,
    Scroll,
    DetailsWaresDisplay,
    DetailsWaresParam,
    DetailsCommentInfo,
    WaresList
  },
  created() {
    // 获取路由id
    this.id = this.$route.query.iid;
    // 请求detailsdate 数据
    this.getDetailsData();
    // 请求detailsrecommend数据
    this.getDetailsRecommend();
    
  },
  mounted(){
    // 获取this.$refs必须在模板安装完之后
    this.refresh = debounce(this.$refs.scroll.refresh, 50);
  }
};
</script>

<style scoped>
#details {
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #fff;
}
.wrapper {
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>