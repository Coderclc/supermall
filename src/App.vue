<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
import mainTabBar from "components/content/maintabbar/MainTabBar.vue";
export default {
  name: "App",
  components: {
    mainTabBar
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
