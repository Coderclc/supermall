<template>
  <div class="cart-list">
    <scroll class="wrapper" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

import {mapGetters} from "vuex"

import CartListItem from "./CartListItem"

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  computed:{
    ...mapGetters(["cartList"])
  },
  activated(){
    this.$refs.scroll.refresh()
  }
};
</script>

<style scoped>
.wrapper{
  height: calc(100vh - 93px);
  overflow: hidden;
}
</style>