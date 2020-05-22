<template>
  <div class="cart-list-item">
    {{product}}
  </div>
</template>

<script>
export default {
  name:"CartListItem",
  props:{
    product:{
      type:Object,
      default(){
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>