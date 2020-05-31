<template>
  <div>
    <div class="warp-head">
      <van-icon name="wap-home-o" size="25" class="wap-home" />
      <p class="good">值得买</p>
      <van-icon name="search" size="25" class="wap-search" />
      <van-icon name="cart-o" size="25" class="wap-cart" />
    </div>
    <div class="warp-img">
      <img
        src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png"
        class="img-logo"
      />
      <div class="img-text1">严选好物</div>
      <div class="img-text2">用心生活</div>
      <img
        class="img-bg"
        src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png"
      />
    </div>
    <div v-for="(c1, index) in Buying" :key="index">
      <img :src="c1.picUrl" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Buying",
  computed: {
    ...mapGetters(["Buying"]),
  },
  mounted() {
    console.log(this.$store);

    this.$store.dispatch("ReqBuying");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.warp-head {
  display: flex;
  width: 100%;
}
.wap-home {
  margin-left: 10px;
  float: left;
}
.wap-search {
  margin-right: 10px;
}
.wap-cart {
  margin-right: 10px;
}
.good {
  text-align: center;
  margin: 0;
  flex-grow: 3;
  font-size: 20px;
}
.warp-img {
  margin-top: 5px;
  position: relative;
}
.img-bg {
  width: 400px;
  height: auto;
}
.img-logo {
  position: absolute;
  width: 75px;
  top: 36px;
  left: 8px;
  z-index: 2;
}
.img-text1 {
  position: absolute;
  color: #fff;
  width: 75px;
  height: 44px;
  line-height: 44px;
  top: 40px;
  left: 90px;
  font-size: 16px;
}
.img-text2 {
  position: absolute;
  color: #fff;
  width: 75px;
  height: 44px;
  line-height: 44px;
  top: 40px;
  left: 160px;
  font-size: 16px;
}
</style>
