<template>
  <div class="cart-settle-bar">
    <div class="left">
      <div @click="checkClick">
        <check-box class="check-box" :isCheck="$store.state.isAllClick" />
        <span>全选</span>
      </div>
      <p>合计:{{totalPrice|rounding}}</p>
    </div>
    <div class="right">去计算{{totalNumber}}</div>
  </div>
</template>
<script>
import { ALLCHECK } from "store/mutations_types";

import CheckBox from "components/content/checkbox/CheckBox";

export default {
  name: "CartSettleBar",
  components: {
    CheckBox
  },
  props: {
    cartList: {
      type: Array
    }
  },
  // 用 reduce,和map函数对数据汇总
  computed: {
    totalNumber() {
      let totalnumber = this.cartList
        .filter(x => x.isCheck)
        .reduce((previous, x) => x.count + previous, 0);
      return totalnumber;
    },
    totalPrice() {
      let totalprice = this.cartList
        .filter(x => x.isCheck)
        .map(x => x.count * x.lowNowPrice)
        .reduce((previous, x) => x + previous, 0);
      return totalprice;
    },
  },
  methods: {
    checkClick() {
      this.$store.commit(ALLCHECK);
    }
  },
  // 过滤价格防止溢出
  filters: {
    rounding(value) {
      return value.toFixed(2);
    }
  }
};
</script>

<style scoped>
.cart-settle-bar {
  font-size: 16px;
  height: 40px;
  background-color: #ddd;
  border: 0.1px solid #ccc;
}
.check-box {
  width: 15px;
  display: inline-block;
}
.check-box + span {
  margin-right: 10px;
}
.left {
  float: left;
  padding-left: 20px;
  height: 40px;
  display: flex;
  width: 65%;
  align-items: center;
}
.right {
  float: right;
  background-color: orangered;
  line-height: 40px;
  color: #ffffff;
  width: 35%;
  text-align: center;
}
</style>