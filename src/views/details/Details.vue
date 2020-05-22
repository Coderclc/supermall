<template>
  <div id="details">
    <details-nav-bar @navBarClick="navBarClick" ref="navbar" />
    <scroll ref="scroll" @scroll="scroll" :probeType="3">
      <details-swiper :topImages="topImages" v-if="topImages.length!=0" />
      <details-wares-info :info="info" class="wrapper" />
      <details-shop-info :shopInfo="shopInfo" />
      <details-wares-display :detailInfo="detailInfo" @imgLoadDone="imgLoadDone" />
      <details-wares-param :wares-params="waresParams" ref="params" />
      <details-comment-info :commentInfo="commentInfo" ref="comment" />
      <wares-list :wares="recommend" ref="wares" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
    <details-bot-bar @addToCart="addToCart"/>
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
import DetailsBotBar from "./subcomponent/DetailsBotBar";

import WaresList from "components/content/wares/WaresList";
import Scroll from "components/common/scroll/Scroll";

import { debounce } from "common/utils";
import { backTopmixIn } from "common/mixin";
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
      recommend: [],
      offsetTop: [],
      index: 0
    };
  },
  mixins: [backTopmixIn],
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
          this.recommend = res.data.list;
        })
        .catch(err => {
          console.log("Failed to request data from server");
        });
    },
    // 监听商品图片详情加载完成,已在内部加了防抖操作
    imgLoadDone() {
      this.$refs.scroll.refresh();
      this.switch();
    },
    // 监听navBar 点击跳转
    navBarClick(index) {
      this.$refs.scroll.scrollTo(0, -this.offsetTop[index], 500);
    },
    // 监听滚动
    scroll(position) {
      // 判断滚动的位置和offset位置的比较
      for (let i in this.offsetTop) {
        if (
          (this.index != i &&
            i < this.offsetTop.length - 1 &&
            -position.y >= this.offsetTop[i] &&
            -position.y < this.offsetTop[+i + 1]) ||
          (-position.y >= this.offsetTop[i] && i == this.offsetTop.length - 1)
        ) {
          // 防止频繁触发
          this.index = i;
          this.$refs.navbar.currentIndex = i;
        }
      }
      this.listenShowBackTop(position);
    },
    // 监听addToCart
    addToCart(){
      const product={}
      product.image=this.topImages[0]
      product.title=this.info.title
      product.desc=this.info.discountDesc
      product.lowNowPrice=this.info.lowNowPrice
      product.id=this.id
      this.$store.dispatch({
        type:"addToCart",
        product
      })
      console.log(this.$store.state.cartList);
    }
  },
  computed: {
    // 将Vuex状态管理绑定给计算属性
    listenImgOnLoad() {
      return this.$store.state.imgOnLoad;
    }
  },
  // 监听状态管理的变化执行防抖封装的刷新
  watch: {
    listenImgOnLoad() {
      this.refresh();
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
    WaresList,
    DetailsBotBar
  },
  created() {
    // 获取路由id
    this.id = this.$route.query.iid;
    // 请求detailsdate 数据
    this.getDetailsData();
    // 请求detailsrecommend数据
    this.getDetailsRecommend();
  },
  mounted() {
    // 获取this.$refs必须在模板安装完之后
    this.refresh = debounce(this.$refs.scroll.refresh, 50);
    // 获取组件的offsetTop添加到数组
    this.offsetTop.push(0);
    this.switch = debounce(() => {
      this.offsetTop.splice(
        1,
        3,
        this.$refs.params.$el.offsetTop - 44,
        this.$refs.comment.$el.offsetTop - 44,
        this.$refs.wares.$el.offsetTop - 44
      );
    }, 50);
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
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>