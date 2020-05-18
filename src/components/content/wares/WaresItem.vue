<template>
  <div class="waresitem">
    <img :src="item.show.img" @load="imgLoad" />
    <div class="info">
      <p>{{item.title}}</p>
      <span class="price">{{item.price}}</span>
      <span>{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "WaresItem",
  data() {
    return {};
  },
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    imgLoad() {
       // vuex 状态管理
        this.$store.commit("imgLoaded");
      // 事件总线方法
      // this.$bus.$emit("imgLoaded")
    }
  }
};
</script>

<style>
.waresitem {
  width: 48%;
  padding-bottom: 40px;
  position: relative;
}
.waresitem .info {
  margin-top: 10px;
  font-size: 12px;
  text-align: center;
  position: absolute;
  bottom: 2px;
  left: 0;
  right: 0;
}
.waresitem .info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.waresitem .price {
  color: var(--color-high-text);
}
.waresitem .price::after {
  content: "\e60f";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-high-text);
}
.waresitem img {
  display: block;
  width: 100%;
  border-radius: 5px;
}
</style>