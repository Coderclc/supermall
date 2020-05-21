<template>
  <div class="details-wares-display" v-if="Object.keys(detailInfo).length!=0">

    <div class="before"></div>
    <div class="desc">{{detailInfo.desc}}</div>
    <div class="after"></div>
    <div class="key">{{detailInfo.detailImage[0].key}}</div>
    <div class="list" v-for="(item, index) in detailInfo.detailImage[0].list" :key="index">
      <img :src="item" @load="imgLoad"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsWaresDisplay",
  data(){
    return{
      timer:null
    }
  },
  props: {
    detailInfo: {
      type: Object
    }
  },
  methods:{
    imgLoad(){
      this.timer&&clearTimeout(this.timer)
      this.timer=setTimeout(()=>{
        this.$emit("imgLoadDone")
      },500)
    }
  }
};
</script>

<style scoped>
.details-wares-display {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
  font-size: 14px;
}
.desc {
  padding: 15px;
  text-indent: 2em;
}
.key {
  padding: 15px;
  color: #333;
  font-size: 15px;
}
.before,
.after {
  border-bottom: 0.4px solid #222;
  width:90px;
  margin-left: 15px;
}
.before::before,.after::after{
  content: "";
  display: block;
  width: 5px;
  height: 5px;
  background-color: #000;
}
.after{
  position: relative;
  right: -245px;
}
.after::after{
  position: relative;
  right: -85px;
}
.list img{
  width: 100%;
}
</style>