<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:"TabBar"
}
</script>
<style scoped>
  #tabbar {
  height: 49px;
  background-color: #ddd;
  display: flex;
  position:fixed;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>