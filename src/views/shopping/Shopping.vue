<template>
  <div id="shopping">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cwl}})</div>
    </nav-bar>
    <cart-list></cart-list>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar"

import CartList from "./subcomponent/CartList"

import { mapGetters } from 'vuex'

export default {
  name:"Shopping",
  components:{
    NavBar,
    CartList
  },
  computed:{
    ...mapGetters({
      cwl:"cartListLength"
    })
  }
}
</script>
<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>