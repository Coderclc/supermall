<template>
  <div id="catalog">
    <nav-bar class="catalog-nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "Catalog",
  components: {
    NavBar
  }
};
</script>
<style scoped>
#catalog{
  height: 100vh;
}
.catalog-nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>