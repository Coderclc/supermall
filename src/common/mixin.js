import { BACK_TOP_POSITION } from "common/const";
import BackTop from "components/content/backtop/BackTop";

const backTopmixIn = {
  data() {
    return {
      isShowBackTop: false
    };
  },
  methods: {
    // 回到顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    listenShowBackTop(position) {
      this.isShowBackTop = position.y < BACK_TOP_POSITION;
    }
  },
  components:{
    BackTop
  }
};
export { backTopmixIn };
