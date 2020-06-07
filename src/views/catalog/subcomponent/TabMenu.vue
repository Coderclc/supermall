<template>
  <div class="tab-menu">
    <div class="menu">
      <div
        class="menu-item"
        :class="{actived:currentIndex==index}"
        v-for="(item,index) in categories"
        v-on:click="menuItemClick(index)"
        :key="index"
      >{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabMenu",
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    menuItemClick(index) {
      if (index != this.currentIndex) {
        this.currentIndex = index;
        this.$emit("menuItemTap",index)
      }
    }
  },
  props: {
    categories: {
      type: Array
    }
  },
  components: {}
};
</script>

<style scoped>
.tab-menu {
  font-size: 14px;
  line-height: 45px;
  text-align: center;
  background-color: #f6f6f6;
}
.menu-item {
  border-left: 3px solid #f6f6f6;
}
.menu-item.actived {
  font-weight: 700;
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}
</style>