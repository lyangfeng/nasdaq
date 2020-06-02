<template>
  <div class="warp">
    <van-tabs v-model="active" scrollspy sticky>
      <van-tab v-for="(c1,index) in reqIndexCateModule" :key="index" :title="c1.name"></van-tab>
    </van-tabs>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" width="100%" height="100%" />
      </van-swipe-item>
    </van-swipe>
    <van-grid direction="horizontal" :column-num="3" :border="false" icon-size="15">
      <van-grid-item v-for="(c2,index) in reqIndex" :key="index" :icon="c2.icon" :text="c2.desc" />
    </van-grid>
    <van-grid :column-num="5" :border="false" icon-size="55">
      <van-grid-item
        v-for="(c3,index) in reqIndexcategoryHotSellModule"
        :key="index"
        :icon="c3.picUrl"
      />
    </van-grid>
    <div class="three-img">
      <img src="../../public/images/ia_100000059.webp" width="100%" />
      <div class="three-img-o">
        <img class="three-img-o1" src="../../public/images/ia_100000060.webp" width="45%" />
        <img class="three-img-o2" src="../../public/images/ia_100000061.webp" width="45%" />
      </div>
    </div>
    <!-- 新人专享礼 -->
    <div class="warp-new">
      <span class="txt">—— 新人专享礼 ——</span>
      <div class="warp-left">
        <p>新人专享礼包</p>
        <img src="../../public/images/ia_100000022.png" />
      </div>
      <div class="warp-right">
        <div class="warp-right-top">
          <p class="p1">福利社</p>
          <p class="p2">今日特价</p>
          <img src="../../public/images/ia_100000023.webp" />
        </div>
        <div class="warp-right-bottom">
          <p class="p1">新人拼团</p>
          <p class="p2">1元起包邮</p>
          <img src="../../public/images/ia_100000624.webp" />
        </div>
      </div>
    </div>
    <!-- 类目热销榜 -->
    <div>
      <van-grid class="warp-hot">
        <van-grid-item
          v-for="(a1,index) in reqIndexcategoryHotSellModule1"
          :key="index"
          :icon="a1.showPicUrl"
          :text="a1.categoryName"
        />
      </van-grid>
    </div>
    <div>
      <van-grid>
        <van-grid-item
          v-for="(a2,index) in reqIndexcategoryHotSellModule2"
          :key="index"
          :icon="a2.showPicUrl"
          :text="a2.categoryName"
        />
      </van-grid>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      active: 0,
      images: [
        "https://yanxuan.nosdn.127.net/b6ccdb8d18db1e601a5e0814b12c7099.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "http://yanxuan-miaobi.nos-jd.163yun.com/1127004_1_6_wap_727631487696e9635e5d3e33371b20f9.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/e61e4f73f4c63af58f2900b853b43161.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/e226dabfc8285d05a0916e94510e0031.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/245ecf70ace79c1b8e4da75c5262709b.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/82808dd543344a45a21c04167fbfef3d.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/c8f6ea8569234c98d5f33c757b3b7960.jpg?type=webp&imageView&quality=75&thumbnail=750x0",
        "https://yanxuan.nosdn.127.net/053451b3a787f4d5dec04bcb3cd129cb.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
      ]
    };
  },
  computed: {
    ...mapGetters([
      "reqIndexcategoryHotSellModule1",
      "reqIndexcategoryHotSellModule2"
    ]),
    ...mapState({
      reqIndexCateModule: state => state.home.reqIndexCateModule,
      reqIndex: state => state.home.reqIndex.policyDescList,
      reqIndexcategoryHotSellModule: state =>
        state.home.reqIndex.categoryHotSellModule.categoryList
    })
  },
  mounted() {
    this.$store.dispatch("reqIndexCateModule");
    this.$store.dispatch("reqIndex");
    this.$store.dispatch("reqIndex2");
    this.$store.dispatch("reqIndex3");
    console.log(this.$store);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.warp {
  background-color: rgb(230, 230, 230);
}
.van-swipe .van-swipe-item {
  color: #fff;
  width: 800px;
  height: 180px;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.three-img {
  font-size: 0;
}
.three-img-o {
  background-color: rgb(199, 12, 13);
  padding-left: 10px;
  padding-right: 10px;
  font-size: 0;
}
.three-img-o1 {
  margin: 10px 8px;
}
.three-img-o2 {
  margin: 10px 8px;
}
.warp-new {
  margin-top: 10px;
  background-color: white;
  position: relative;
}
.warp-new .txt {
  height: 50px;
  line-height: 50px;
  margin: 28%;
}
.warp-new .warp-left {
  background-color: #f9e9cf;
  width: 47%;
  height: 230px;
  border-radius: 5px;
  margin-left: 10px;
}
.warp-new .warp-left p {
  padding: 10px 25px 5px 15px;
}
.warp-new .warp-left img {
  width: 150px;
  height: 150px;
  margin: 0 10px 10px 17px;
}
.warp-new .warp-right {
  width: 47%;
  position: absolute;
  top: 66px;
  right: 10px;
}
.warp-new .warp-right .warp-right-top {
  background-color: #fbe2d3;
  height: 113px;
  position: relative;
  border-radius: 5px;
}
.warp-new .warp-right .warp-right-top .p1 {
  font-size: 18px;
  position: absolute;
  top: -7px;
  left: 15px;
  font-size: 16px;
}
.warp-new .warp-right .warp-right-top .p2 {
  font-size: 12px;
  color: #7f7f7f;
  position: absolute;
  top: 20px;
  left: 15px;
}
.warp-new .warp-right .warp-right-top img {
  width: 120px;
  height: 120px;
  position: absolute;
  right: 5px;
}
.warp-new .warp-right .warp-right-bottom {
  background-color: #ffecc2;
  height: 113px;
  border-radius: 5px;
  margin-top: 3px;
}
.warp-new .warp-right .warp-right-bottom .p1 {
  font-size: 18px;
  position: absolute;
  top: 110px;
  left: 15px;
  font-size: 16px;
}
.warp-new .warp-right .warp-right-bottom .p2 {
  font-size: 12px;
  color: #7f7f7f;
  position: absolute;
  top: 138px;
  left: 15px;
}
.warp-new .warp-right .warp-right-bottom img {
  width: 100px;
  height: 100px;
  position: absolute;
  right: 5px;
  top: 140px;
}
.warp-hot {
  margin-top: 10px;
}
</style>