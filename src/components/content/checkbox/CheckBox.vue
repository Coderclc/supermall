<template>
  <div class="check-box">
    <img src="~assets/img/common/right.svg" alt :class="{check:isCheck}" />
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: {
    isCheck: {
      type: Boolean,
      default() {
        return false;
      }
    }
  }
};
</script>

<style scoped>
 img {
  width: 100%;

  border-radius: 15px;
  border: 1px solid #ccc;
}
.check {
  background-color: var(--color-tint);
  border-color:var(--color-tint);
}
</style>