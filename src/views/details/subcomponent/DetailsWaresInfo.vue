<template>
  <div class="detailswaresinfo" v-if="Object.keys(info).length!=0">
    <div class="title">{{info.title}}</div>
    <div class="info-price">
      <span class="price">{{info.price}}</span>
      <span class="old-price">{{info.oldPrice}}</span>
      <span
        class="discountDesc"
        :style="{backgroundColor:info.discountBgColor}"
      >{{info.discountDesc}}</span>
    </div>
    <div class="info-columns">
      <span>{{info.columns[0]}}</span>
      <span>{{info.columns[1]}}</span>
      <span>{{info.services[0].name}}</span>
    </div>
    <div class="info-services">
      <span class="info-services-item" v-for="index in (info.services.length-2)" :key="index">
        <img :src="info.services[index+1].icon" />
        <span>{{info.services[index+1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsWaresInfo",
  props: {
    info: {
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.detailswaresinfo {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.title {
  color: #222;
}
.info-price {
  margin-top: 10px;
}
.info-price .price {
  font-size: 24px;
  color: var(--color-high-text);
}
.info-price .old-price {
  font-size: 13px;
  margin-left: 5px;
  text-decoration: line-through;
}
.info-price .discountDesc {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  border-radius: 8px;
  margin-left: 5px;
  /*让元素上浮一些: 使用相对定位即可*/
  position: relative;
  top: -8px;
}
.info-columns {
  margin-top: 15px;
  line-height: 30px;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  justify-content: space-between;
}
.info-services {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }
  .info-services-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }
  .info-services-item span {
    font-size: 13px;
    color: #333;
  }
</style>