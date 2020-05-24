<template>
  <div class="waresitem">
    <img v-lazy="showImage" @load="imgLoad" @click="imgClick" />
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
      /**
       * 有两种方法,第一判断 this.$route.path.test(/home)决定commit不同的事件字符串,但是要两个状态管理
       * 也可以绑定在一个状态管理上,然后在home组件enter和leave时创建和删除watch属性*/

      this.$store.commit("imgLoaded");
      // 事件总线方法
      // this.$bus.$emit("imgLoaded")
    },
    imgClick() {
      //  this.$router.push("/details/"+this.item.iid);
      this.$router.push({ path: "/details/", query: { iid: this.item.iid } });
    }
  },
  computed: {
    showImage() {
      return this.item.image || this.item.show.img;
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