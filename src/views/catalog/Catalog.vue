<template>
  <div id="catalog">
    <nav-bar class="catalog-nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <scroll class="menu-scroll">
      <tab-menu :categories="categories" @menuItemTap="menuItemTap" />
    </scroll>
    <scroll class="menu-content-scroll">
      <tab-menu-content :subcategories="subcategories" />
      <tab-switch :titles="titles" class="tab-switch" @tabswitch="tabswitch" />
      <wares-list :wares="wares[inititalType].list" />
    </scroll>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabSwitch from "components/content/tabswitch/TabSwitch";
import WaresList from "components/content/wares/WaresList";

import TabMenu from "./subcomponent/TabMenu";
import TabMenuContent from "./subcomponent/TabMenuContent";

import {
  requestCatalogMenu,
  requestSubcategory,
  requestSubcategoryDetail
} from "network/catalogrequest";
export default {
  name: "Catalog",
  data: () => {
    return {
      categories: [],
      subcategories: [],
      maitKey: "",
      miniWallkey: "",
      titles: ["综合", "新品", "销量"],
      inititalType: "pop",
      wares: {
        pop: { list: [] },
        new: { list: [] },
        sell: { list: [] }
      }
    };
  },
  components: {
    NavBar,
    TabMenu,
    Scroll,
    TabMenuContent,
    TabSwitch,
    WaresList
  },
  created() {
    //获取分类menu data
    this.getCatalogMenu();
  },
  methods: {
    getCatalogMenu() {
      requestCatalogMenu().then(res => {
        this.categories = res.data.category.list;
        this.maitKey = this.categories[0].maitKey;
        this.miniWallkey = this.categories[0].miniWallkey;
        // 获取分类menu 对应的ware data
        this.getSubcategory(this.maitKey);
        // 获取ware data 下的ware 数据
        this.getSubcategoryDetail(this.miniWallkey, "pop");
        this.getSubcategoryDetail(this.miniWallkey, "new");
        this.getSubcategoryDetail(this.miniWallkey, "sell");
      });
    },
    getSubcategory(maitKey) {
      requestSubcategory(maitKey).then(res => {
        this.subcategories = res.data.list;
      });
    },
    getSubcategoryDetail(miniWallkey, type) {
      requestSubcategoryDetail(miniWallkey, type).then(res => {
        this.wares[type].list = res;
      });
    },
    // 切换时根据index改变maitKey向服务器发送请求新数据
    menuItemTap(index) {
      this.maitKey = this.categories[index].maitKey;
      this.miniWallkey = this.categories[index].miniWallkey;
      this.getSubcategory(this.maitKey);
      this.getSubcategoryDetail(this.miniWallkey, "pop");
      this.getSubcategoryDetail(this.miniWallkey, "new");
      this.getSubcategoryDetail(this.miniWallkey, "sell");
    },
    // 切换时根据type切换传送的props data
    tabswitch(index) {
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
    }
  }
};
</script>
<style scoped>
#catalog {
  height: 100vh;
}
.catalog-nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.menu-scroll {
  width: 30%;
  height: calc(100vh - 93px);
  overflow: hidden;
  float: left;
}
.menu-content-scroll {
  width: 70%;
  height: calc(100vh - 93px);
  overflow: hidden;
  float: right;
}
.tab-switch {
  font-size: 15px;
}
</style>