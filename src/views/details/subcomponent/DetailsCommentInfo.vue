<template>
  <div class="details-comment-info" v-if="Object.keys(commentInfo).length!=0">
    <div class="comment-title">
      <div class="user-review">用户评价</div>
      <div class="more">更多</div>
    </div>
    <div class="comment-content">
      <div class="comment-user">
        <img :src="commentInfo.user.avatar" />
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="comment-text">{{commentInfo.content}}</div>
      <div class="comment-data">
        <span>{{commentInfo.created|format}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="comment-img">
        <img v-for="(images,index) in commentInfo.images" :key="index" :src="images" alt />
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from "common/utils"
export default {
  name: "DetailsCommentInfo",
  props: {
    commentInfo: {
      type: Object
    }
  },
  filters:{
    format(value){
      const date =new Date(value*1000)
      return formatDate(date,"yyyy-MM-dd HH:mm:ss")
    }
  }
};
</script>

<style scoped>
.details-comment-info {
  padding: 15px;
  font-size: 15px;
  font-weight: 700;
}
.comment-title {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 2px solid #eee;
}
.comment-content {
  margin-top: 10px;
}
.comment-content .comment-user img {
  width: 10%;
  border-radius: 15px;
}
.comment-content .comment-user span {
  vertical-align: 10px;
  padding-left: 10px;
}
.comment-text {
  padding: 5px;
  font-size: 12px;
  color: #bbb;
  text-indent: 2em;
}
.comment-data {
  font-size: 12px;
  color: #aabbaa;
  padding: 5px 0;
  letter-spacing:1px
}

.comment-img img{
  width: 50px;
  height: 50px;
  margin-left: 5px;
}
</style>