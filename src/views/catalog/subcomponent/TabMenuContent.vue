<template>
  <div class="tab-menu-content">
    <div v-for="(item,index) in subcategories" :key="index" class="ware-item">
      <a :href="item.link">
        <div class="ware-image">
          <img v-lazy="item.image" />
        </div>
        <p class="ware-title">{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabMenuContent",
  props: {
    subcategories: {
      type: Array
    }
  }
};
</script>

<style scoped>
.tab-menu-content {
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  text-align: center;
}
.ware-item {
  flex: 1;
  padding: 15px 0;
}
.ware-image img {
  width: 66px;
  padding-bottom: 10px;
}
</style>