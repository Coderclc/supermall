<template>
    <swiper class="swiper">
      <swiper-item class=".swiper-item" v-for="item in topImages" :key="item">
        <img :src="item" />
      </swiper-item>
    </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";

export default {
  name: "DetailsSwiper",
  props: {
    topImages: {
      type: Array
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>
<style scoped>
.swiper {
  height: 60vh;
  overflow: hidden;
}

</style>

