<template>
  <div id="shopping">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartListLength}})</div>
    </nav-bar>
    <cart-list :cartList="cartList"/>
    <cart-settle-bar :cartList="cartList"/>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar"

import CartList from "./subcomponent/CartList"
import CartSettleBar from "./subcomponent/CartSettleBar"
import { mapGetters } from 'vuex'

export default {
  name:"Shopping",
  components:{
    NavBar,
    CartList,
    CartSettleBar
  },
  computed:{
    ...mapGetters(["cartListLength","cartList"])
  }
}
</script>
<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>