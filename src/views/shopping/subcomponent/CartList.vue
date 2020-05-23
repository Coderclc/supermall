<template>
  <div class="cart-list">
    <scroll class="wrapper" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList" :key="index" 
      :product="item" @click.native="checkClick(item)"/>
    </scroll>
  </div>
</template>

<script>
import {CHANGEALLCHECK} from "store/mutations_types"

import Scroll from "components/common/scroll/Scroll";

import CartListItem from "./CartListItem"

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  props:{
    cartList:{
      type:Array
    }
  },
  methods:{
    // monitor itemClick to change allCheck
    checkClick(product){
      product.isCheck=!product.isCheck
      this.$store.commit(CHANGEALLCHECK,product.isCheck)
    }
  },
  activated(){
    this.$refs.scroll.refresh()
  }
};
</script>

<style scoped>
.wrapper{
  height: calc(100vh - 133px);
  overflow: hidden;
}
</style>