<template>
  <div class="cart-list-item">
    <div class="check item">
      <check-box :isCheck="product.isCheck" />
    </div>
    <div class="images item">
      <img :src="product.image" alt />
    </div>
    <div class="info item">
      <div class="title">{{product.title}}</div>
      <div class="desc">{{product.desc}}</div>
      <div class="bottom">
        <div class="price">{{product.lowNowPrice}}</div>
        <div class="change">
          <button @click.stop="sub">-</button>
          <button @click.stop="add">+</button>
        </div>
        <div class="count">{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBox from "components/content/checkbox/CheckBox";
import {INCREMENT,REDUCE} from "store/mutations_types"

export default {
  name: "CartListItem",
  props: {
    product: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  components: {
    CheckBox
  },
  methods: {
    // monitor button modify value
    add() {
      this.$store.commit(INCREMENT,this.product.id)
    },
    sub() {
      this.$store.commit(REDUCE,this.product.id)
    }
  }
};
</script>

<style scoped>
.cart-list-item {
  padding: 5px;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.check {
  width: 5%;
  margin-right: 5px;
}
.check .check-box {
  margin-top: 33px;
}
.images {
  width: 20%;
}
.images img {
  width: 100%;
  border-radius: 5px;
}
.info {
  width: 75%;
  font-size: 13px;
  text-align: center;
  padding: 0 10px;
}
.title,
.desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.title {
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 10px;
}
.bottom {
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
}
.price {
  color: #f73903;
}
.price::before {
  content: "￥";
  color: #f73903;
}
.count::before {
  content: "x";
}
.change button {
  width: 30px;
  height: 30px;
  text-align: center;
  margin-right: 5px;
}
</style>