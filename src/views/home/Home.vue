<template>
  <div id="home">
    <nav-bar class="home-bar"><div slot="center">购物街</div></nav-bar>
    <scroll class="wrapper" ref="scroll"  
    :probe-type="3" :pullUpLoad="true"
    @scroll="scroll" @pullingUp="pullingUp">
      <home-swiper :banners="banners"></home-swiper>
      <recommend :recommends="recommends"></recommend>
      <feature-view></feature-view>
      <tab-switch :titles="titles" class="home-tab-switch" @tabswitch="tabSwitch"></tab-switch>
      <wares-list :wares="showWares"></wares-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabSwitch from "components/content/tabcontrol/TabSwitch";
import WaresList from "components/content/wares/WaresList";
import BackTop from "components/content/backtop/BackTop"

import HomeSwiper from "./subcomponent/HomeSwiper";
import Recommend from "./subcomponent/Recommend";
import FeatureView from "./subcomponent/FeatureView";

import { requestHomeData, requestHomeWares } from "network/homerequest";

export default {
  name: "Home",
  data() {
    return {
      banners: null,
      recommends: null,
      titles: ["流行", "新款", "精选"],
      inititalType: "pop",
      isShowBackTop:false,
      Wares: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
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
    },
    // 回到顶部
    backTop(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    // 监听滚轮位置
    scroll(position){
      this.isShowBackTop= position.y<-1000
    },
    // 监听上拉加载
    pullingUp(){
      this.getHomeWares(this.inititalType);
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
          this.$refs.scroll.finishPullUp()
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
  }
};
</script>
<style scoped>
#home {
  height: 100vh;
  padding-top: 44px;
}
.home-bar {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
.home-tab-switch {
  /* position: sticky;
  top: 44px;
  left: 0; */
  background-color: #fff;
}
.wrapper{
  height:calc(100% - 49px);
  /* overflow: hidden; */
  /* position: absolute;
  top: 44px;
  bottom: 49px; */
}
</style>