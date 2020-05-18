<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" @load="swiperImageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";
import { debounce } from "common/utils";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  mounted() {
    this.lastLoad = debounce(() => {
      this.$emit("swiperImageLoad");
    }, 200);
  },
  methods: {
    swiperImageLoad() {
      this.lastLoad();
    }
  }
};
</script>
<style scoped>
</style>

