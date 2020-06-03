<template>
  <div class="warp">
    <div class="warp-head">
      <!-- <router-view to='/home'></router-view> -->
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
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(c1, index) in Buying" :key="index">
        <div>
          <img :src="c1.picUrl" alt />
          <img :src="c1.picUrl" alt />
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { mapGetters, mapState } from "vuex";
export default {
  name: "Buying",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      active: 0,
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  computed: {
    ...mapGetters(["Buying"]),
    ...mapState({ reqBuyingEnd: (state) => state.home.reqBuyingEnd.result }),
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.$store.dispatch("ReqBuying");
    this.$store.dispatch("reqBuyingEnd");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.warp {
  position: relative;
}
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
.warp-small-img {
  display: flex;
}
/* .small-img {
  justify-content: space-around;
} */
/* 轮播图 */
.swiper {
  background: url("https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png");
}
.box1 {
  width: 62.24px;
  height: 62.24px;
}
.swiper-container {
  width: 100%;
  height: 200px;
}
img {
  width: 62.24px;
  height: 62.24px;
}
</style>
<style lang="scss" scoped>
@import "./base.scss";
</style>
