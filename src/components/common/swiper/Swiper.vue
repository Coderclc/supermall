<template>
  <div id="ccswiper">
    <div
      class="swiper"
      ref="swiper"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && itemCount>1">
        <div
          v-for="(item, index) in itemCount"
          class="indi-item"
          :class="{active: index === currentIndex-1}"
          :key="index"
        ></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    // swiperItem切换的频率
    interval: {
      type: Number,
      default: 3000
    },
    // 动画的延迟
    delay: {
      type: Number,
      default: 1000
    },
    moveRatio: {
      type: Number,
      default: 0.1
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {
      itemCount: "",
      currentIndex: 1, // 当前的index
      scrolling: false // 是否正在滚动
    };
  },
  mounted: function() {
    // 1.操作DOM, 在前后添加Slide
    setTimeout(() => {
      this.handleDom();

      // 2.开启定时器
      if (this.itemCount==1) return;
      this.startTimer();
    }, 500);
  },
  methods: {
    //
    handleDom: function() {
      // 获取swiper Dom
      let swiper = this.$refs.swiper;
      // 获取swiperitem Arr
      let itemArr = swiper.getElementsByClassName("swiper-item");

      // 获取初始item的个数
      this.itemCount = itemArr.length;
      if (this.itemCount == 1) return;
      // 3.如果大于1个, 那么在前后分别添加一个item
      if (this.itemCount > 1) {
        // 在swiperitemArr最后插入了最后的item
        let cloneFirst = itemArr[0].cloneNode(true);
        swiper.appendChild(cloneFirst);
        // 在swiperitemArr最前插入了最前的item,防止一上来就往左拖
        let cloneLast = itemArr[this.itemCount - 1].cloneNode(true);
        swiper.insertBefore(cloneLast, itemArr[0]);
        // 给组件添加两个属性
        this.swiperWidth = swiper.offsetWidth;
        this.swiperStyle = swiper.style;
      }
      //初始位置变成了新添加的,将其往左退一格
      this.setTransform(-this.swiperWidth);
    },

    // 设置轮播图图片的位置
    setTransform: function(x) {
      this.swiperStyle.transform = `translateX(${x}px)`;
      // this.swiperStyle["-webkit-transform"] = `translate3d(${position}px), 0, 0`;
      // this.swiperStyle["-ms-transform"] = `translate3d(${position}px), 0, 0`;
    },

    // 开启定时器
    startTimer: function() {
      this.playTimer = setInterval(() => {
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.swiperWidth);
      }, this.interval);
    },
    stopTimer: function() {
      // 关掉上一个定时器
      clearInterval(this.playTimer);
    },

    /**
     * 滚动到正确的位置
     */
    scrollContent: function(currentPosition) {
      // 加一个判断,判断此时是否在滚动中
      this.scrolling = true;

      // 给transform属性添加动画效果
      this.swiperStyle.transition = `transform ${this.delay}ms`;
      this.setTransform(currentPosition);

      // 2.判断滚动到的位置
      this.checkPosition();

      // 4.滚动完成
      this.scrolling = false;
    },

    /**
     * 校验正确的位置
     */
    checkPosition: function() {
      setTimeout(() => {
        // 1.使轮播图回到原点
        this.swiperStyle.transition = "0ms";
        if (this.currentIndex >= this.itemCount + 1) {
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.swiperWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.itemCount;
          this.setTransform(-this.currentIndex * this.swiperWidth);
        }
        // 2.结束移动后的回调
        // this.$emit("transitionEnd", this.currentIndex - 1);
      }, this.delay);
    },

    /**
     * 拖动事件的处理
     */
    touchStart: function(event) {
      if (this.itemCount == 1) return;
      // 1.如果正在滚动, 不可以拖动
      if (this.scrolling) return;
      // 2.停止定时器
      this.stopTimer();
      // 3.保存开始滚动的位置
      this.startX = event.touches[0].pageX;
    },

    touchMove: function(event) {
      if (this.itemCount==1) return;
      // 计算touch 的位移
      this.currentX = event.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      // 获取当前items的位移
      let currentPosition = -this.currentIndex * this.swiperWidth;
      // 移动items
      let moveDistance = this.distance + currentPosition;
      this.setTransform(moveDistance);
    },

    touchEnd: function(e) {
      if (this.itemCount==1) return;
      // 获取touch位移的||绝对值
      let currentMove = Math.abs(this.distance);

      // 2.判断最终的距离
      if (
        this.distance > 0 &&
        currentMove > this.swiperWidth * this.moveRatio
      ) {
        // 右边移动超过
        this.currentIndex--;
      } else if (
        // 向左移动超过
        this.distance < 0 &&
        currentMove > this.swiperWidth * this.moveRatio
      ) {
        this.currentIndex++;
      }

      // 3.移动到正确的位置
      this.scrollContent(-this.currentIndex * this.swiperWidth);

      // 4.移动完成后重新开启定时器

      this.startTimer();
    }

    /**
     * 控制上一个, 下一个
     */
    // previous: function() {
    //   this.changeItem(-1);
    // },

    // next: function() {
    //   this.changeItem(1);
    // },

    // changeItem: function(num) {
    //   // 1.移除定时器
    //   this.stopTimer();

    //   // 2.修改index和位置
    //   this.currentIndex += num;
    //   this.scrollContent(-this.currentIndex * this.swiperWidth);

    //   // 3.添加定时器
    //   this.startTimer();
    // }
  }
};
</script>

<style scoped>
#ccswiper {
  overflow: hidden;
  position: relative;
}

.swiper {
  display: flex;
}

.indicator {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 8px;
}

.indi-item {
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #fff;
  line-height: 8px;
  text-align: center;
  font-size: 12px;
  margin: 0 5px;
}

.indi-item.active {
  background-color: rgba(212, 62, 46, 1);
}
</style>
