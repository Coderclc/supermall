<template>
  <div class="details-shop-info">
    <div class="top">
      <img :src="shopInfo.shopLogo" alt />
      <span class="name">{{shopInfo.name}}</span>
    </div>
    <div class="middle">
      <div class="middle-item-left">
        <div class="sales">
          <div class="sales-count">{{shopInfo.csells|salesCountFilters}}</div>
          <div class="sales-text">总销量</div>
        </div>
        <div class="wares">
          <div class="wares-count">{{shopInfo.cgoods}}</div>
          <div class="wares-text">全部宝贝</div>
        </div>
      </div>
      <div class="middle-item-right">
        <div v-for="(item,index) in shopInfo.score" :key="index" class="middle-item-right-item">
          <span v-text="item.name"></span>
          <span class="score" :class="{'is-better':item.isBetter}" v-text="item.score"></span>
          <span class="text" :class="{'is-better':item.isBetter}">{{item.isBetter?"高":"低"}}</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <span class="content">进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    salesCountFilters: (value)=>{
      if (value > 10000) {
        return (value / 10000).toFixed(1) + "万";
      } else {
        return value;
      }
    }
  }
};
</script>

<style scoped>
.details-shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}

.top img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: -16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.middle {
  margin-top: 15px;
  display: flex;
}
.middle-item-left {
  flex: 1;
  display: flex;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  justify-content: space-evenly;
  align-items: center;
}
.middle-item-right {
  flex: 1;
  font-size: 13px;
  color: #333;
}
.middle-item-right-item span {
  margin: 5px;
}
.sales-count,
.wares-count {
  font-size: 18px;
}

.sales-text,
.wares-text {
  margin-top: 10px;
  font-size: 12px;
}
.middle-item-right-item {
  width: 120px;
  margin: auto;
}
.score {
  color: #5ea732;
  display: inline-block;
  width: 20px;
}
.score.is-better {
  color: #f13e3a;
}
span.text {
  background-color: #5ea732;
  color: #fff;
  text-align: center;
}
span.text.is-better {
  background-color: #f13e3a;
}
.bottom {
  text-align: center;
  margin-top: 10px;
}
.bottom .content {
  font-size: 14px;
  background-color: #f2f5f8;
  padding: 5px 50px;
  border-radius: 10px;
}
</style>