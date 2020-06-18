<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActivated">
      <slot name="icon"></slot>
    </div>
    <div v-else>
      <slot name="icon-activated"></slot>
    </div>
    <div :class="{active:isActivated}" >
      <slot name="text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",

  data() {
    return {
      // isActivated: false
    };
  },
  computed: {
    // 通过计算属性自我判断有无被激活,添加类名
    isActivated() {
      const reg = new RegExp(this.link);
      // return (this.$route.path.indexOf(this.link)!== -1)
      return reg.test(this.$route.path);
    },
    // 通过props传入改变颜色
    // isActivatedColor() {
    //   return this.isActivated ? { color: this.activedColor } : null;
    // }
  },
  props: {
    link: String,
    activedColor: {
      type: String,
      default: "#d4237a"
    }
  },
  methods: {
    itemClick() {
      // if url include query?
      if (!(this.$route.path == this.link)) {
        this.$router.push(this.link);
      }
    }
  }
};
</script>
<style scoped>
.tabbar-item {
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  flex: 1;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
}
.active {
  color: var(--color-high-text)
}
</style>