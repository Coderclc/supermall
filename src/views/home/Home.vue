<template>
  <div id="home">
    <nav-bar class="home-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-switch
      :titles="titles"
      class="tab-switch"
      @tabswitch="tabSwitch"
      ref="tabSwitch_1"
      v-show="isShow"
    ></tab-switch>
    <scroll
      class="wrapper"
      ref="scroll"
      :probe-type="3"
      :pullUpLoad="true"
      @scroll="scroll"
      @pullingUp="pullingUp"
    >
      <home-swiper v-if="banners.length!==0" :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend :recommends="recommends"></recommend>
      <feature-view></feature-view>
      <tab-switch :titles="titles" @tabswitch="tabSwitch" ref="tabSwitch_2"></tab-switch>
      <wares-list :wares="showWares"></wares-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabSwitch from "components/content/tabswitch/TabSwitch";
import WaresList from "components/content/wares/WaresList";
import BackTop from "components/content/backtop/BackTop";

import HomeSwiper from "./subcomponent/HomeSwiper";
import Recommend from "./subcomponent/Recommend";
import FeatureView from "./subcomponent/FeatureView";

import { requestHomeData, requestHomeWares } from "network/homerequest";
import { debounce } from "common/utils";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: null,
      titles: ["流行", "新款", "精选"],
      inititalType: "pop",
      isShowBackTop: false,
      isShow: false,
      saveY: 0,
      Wares: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      unwatch: null
    };
  },
  components: {
    NavBar,
    TabSwitch,
    HomeSwiper,
    Recommend,
    FeatureView,
    WaresList,
    Scroll,
    BackTop
  },
  created() {
    // 执行 getHomeData方法获取首页数据
    this.getHomeData();
    // 执行 getHomeWares方法获取首页商品数据
    // 初始获取第一页的数据,并且每上拉加载一次,就更新page的页数和list
    this.getHomeWares("pop");
    this.getHomeWares("new");
    this.getHomeWares("sell");
  },
  mounted() {
    // this.$bus.$on("imgLoaded", () => {
    //   this.$refs.scroll.refresh();
    // });
    // 将BScroll refresh() 函数进行防抖封装
    this.refresh = debounce(this.$refs.scroll.refresh, 50);
  },
  activated() {
    // 跳转到离开时的位置
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);

    // 创建监听属性 listenImgOnLoad,离开时取消,因为既要保持组件不被销毁,又要复用 wareslist组件的监听图片加载
    this.unwatch = this.$watch("listenImgOnLoad", function() {
      // 直接重复调用BScroll 的刷新
      // this.$refs.scroll.refresh();
      // 封装了防抖函数的刷新
      this.refresh();
    });
  },
  deactivated() {
    // 保存当前位置
    this.saveY = this.$refs.scroll.scroll.y;
    this.unwatch();
  },
  methods: {
    /**
     * 事件监听
     */
    // 切换tab
    tabSwitch(index) {
      switch (index) {
        case 0:
          this.inititalType = "pop";
          break;
        case 1:
          this.inititalType = "new";
          break;
        case 2:
          this.inititalType = "sell";
          break;
      }
      // 使tabSwitch_1和abSwitch_2保持一致
      this.$refs.tabSwitch_1.currentIndex = index;
      this.$refs.tabSwitch_2.currentIndex = index;
    },
    // 回到顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, -600, 500);
    },
    // 监听滚轮位置
    scroll(position) {
      this.isShowBackTop = position.y < -1000;
      this.isShow = position.y < -this.tabSwitchOffSetTop;
    },
    // 监听上拉加载
    pullingUp() {
      this.getHomeWares(this.inititalType);
    },
    // 监听swiper image 加载完成
    swiperImageLoad() {
      this.tabSwitchOffSetTop = this.$refs.tabSwitch_2.$el.offsetTop;
    },
    /**
     * 网络请求
     */
    // 获取首页数据
    getHomeData() {
      requestHomeData()
        .then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
        .catch(err => {
          console.log("Failed to request data from server");
        });
    },
    // 获取首页商品数据
    getHomeWares(type) {
      const page = (this.Wares[type].page += 1);
      requestHomeWares(type, page)
        .then(res => {
          // 每次下拉load都将新数组...添加到Wares中
          this.Wares[type].list.push(...res.data.list);
          // this.Wares[type].list=this.Wares[type].list.concat(res.data.list)
          this.Wares[type].page = page;
          // 完成上拉加载回调
          this.$refs.scroll.finishPullUp();
        })
        .catch(err => {
          console.log("Failed to request data from server");
        });
    }
  },
  computed: {
    showWares() {
      return this.Wares[this.inititalType].list;
    },
    // 将Vuex的数据绑定给计算属性
    listenImgOnLoad() {
      return this.$store.state.imgOnLoad;
    }
  }

};
</script>
<style scoped>
#home {
  height: 100vh;
  /* padding-top: 44px; */
}
.home-bar {
  background-color: var(--color-tint);
  color: #fff;
  /* 浏览器原生滚动时fiex布局 */
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1; */
}
.tab-switch {
  /* 利用BScroll滑动,这个属性失效 */
  /* position: sticky;
  top: 44px;
  left: 0; */
  /* background-color: #fff; */
  position: relative;
}
.wrapper {
  /* 自动计算高度法 */
  /* height: calc(100% - 49px); */
  overflow: hidden;
  /* 强制定位法 */
  position: absolute;
  top: 44px;
  bottom: 49px;
}
</style>