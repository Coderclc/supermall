<template>
    <nav-bar>
      <div slot="left">
        <img src="~assets/img/common/back.svg" class="back" @click="backClick">
      </div>
      <div slot="center" class="caption">
        <div
          class="caption-item" :key="item"
          v-for="(item,index) in caption"
          :class="{actived:currentIndex==index}"
          v-on:click="itemClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailsNavBar",
  data() {
    return {
      currentIndex:0,
      caption: ["商品", "参数", "评论", "推荐"]
    };
  },
  components: {
    NavBar
  },
  methods:{
    itemClick(index){
      this.currentIndex=index
    },
    backClick(){
      this.$router.go(-1)
    }
  }
};
</script>

<style scoped>
.caption {
  display: flex;
  font-size: 14px;
}
.caption-item {
  flex: 1;
}
.actived{
  color: var(--color-tint);
}
.back{
  vertical-align: -5px;
}
</style>