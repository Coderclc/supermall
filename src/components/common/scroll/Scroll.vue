<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      },
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  methods: {
    scrollTo(x, y, delayed = 300) {
      this.scroll.scrollTo(x, y, delayed);
    },
    finishPullUp(){
      this.scroll.finishPullUp()
    }
  },
  mounted() {
    // 创建BScroll 对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad:this.pullUpLoad
    });
    // 监听scroll的position
    this.scroll.on("scroll", position => {
      this.$emit("scroll", position);
      
    });
    this.scroll.on("pullingUp", ()=> {
      this.$emit("pullingUp");
    });
  }
};
</script>

<style scoped>
</style>