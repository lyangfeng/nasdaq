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
    <van-grid :column-num="5" :border="false" icon-size="52">
      <van-grid-item
        v-for="(c3,index) in reqIndexkingKongModule"
        :key="index"
        :icon="c3.picUrl"
        :text="c3.text"
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
      <van-grid
        class="warp-hot1"
        direction="horizontal"
        :column-num="2"
        icon-size="100px"
        :border="false"
      >
        <van-grid-item
          v-for="(a1,index) in reqIndexcategoryHotSellModule1"
          :key="index"
          :icon="a1.showPicUrl"
          :text="a1.categoryName"
        />
      </van-grid>
    </div>
    <div>
      <van-grid :border="false" class="warp-hot2" icon-size="45px">
        <van-grid-item
          v-for="(a2,index) in reqIndexcategoryHotSellModule2"
          :key="index"
          :icon="a2.showPicUrl"
          :text="a2.categoryName"
        />
      </van-grid>
    </div>
    <!-- 限时购 -->
    <div class="warp-limited">
      <div class="limited">
        <p class="p1">限时购</p>
        <van-count-down :time="time" class="time">
          <template v-slot="timeData">
            <span class="block">{{ timeData.hours }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.minutes }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>
        <p class="p2">更多&gt;</p>
      </div>
      <div class="warp-cnt">
        <div class="cnt">
          <div class="img-warp">
            <img src="../../public/images/ia_100000035.webp" />
          </div>
          <div>
            <span class="price1">¥135</span>
            <span class="price2">¥169</span>
          </div>
        </div>
        <div class="cnt">
          <div class="img-warp">
            <img src="../../public/images/ia_100000036.webp" />
          </div>
          <div>
            <span class="price1">¥299</span>
            <span class="price2">¥399</span>
          </div>
        </div>
        <div class="cnt">
          <div class="img-warp">
            <img src="../../public/images/ia_100000037.webp" />
          </div>
          <div>
            <span class="price1">¥119</span>
            <span class="price2">¥169</span>
          </div>
        </div>
        <div class="cnt">
          <div class="img-warp">
            <img src="../../public/images/ia_100000038.webp" />
          </div>
          <div>
            <span class="price1">¥179</span>
            <span class="price2">¥219</span>
          </div>
        </div>
        <div class="cnt">
          <div class="img-warp">
            <img src="../../public/images/ia_100000039.webp" />
          </div>
          <div>
            <span class="price1">¥69</span>
            <span class="price2">¥89</span>
          </div>
        </div>
        <div class="cnt">
          <div class="img-warp">
            <img src="../../public/images/ia_100000040.webp" />
          </div>
          <div>
            <span class="price1">¥119</span>
            <span class="price2">¥229</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 新品首发 -->
    <div class="warp-limited">
      <div class="limited">
        <p class="p1">新品首发</p>
        <p class="p2">更多&gt;</p>
      </div>
      <div class="warp-cnt">
        <div class="cnt">
          <div class="img-warp">
            <img src="../../public/images/ia_100000041.webp" />
          </div>
          <div>
            <span class="price3">¥52</span>
            <span class="price4">6.1开门红</span>
          </div>
        </div>
        <div class="cnt">
          <div class="img-warp">
            <img src="../../public/images/ia_100000042.webp" />
          </div>
          <div>
            <span class="price3">¥1259</span>
            <span class="price4">618预售</span>
          </div>
        </div>
        <div class="cnt">
          <div class="img-warp">
            <img src="../../public/images/ia_100000043.webp" />
          </div>
          <div>
            <span class="price3">¥22</span>
            <span class="price4">3件7.8折</span>
          </div>
        </div>
        <div class="cnt">
          <div class="img-warp">
            <img src="../../public/images/ia_100000587.webp" />
          </div>
          <div>
            <span class="price3">¥299</span>
            <span class="price4">618预售</span>
          </div>
        </div>
        <div class="cnt">
          <div class="img-warp">
            <img src="../../public/images/ia_100000588.webp" />
          </div>
          <div>
            <span class="price3">¥199</span>
          </div>
        </div>
        <div class="cnt">
          <div class="img-warp">
            <img src="../../public/images/ia_100000589.webp" />
          </div>
          <div>
            <span class="price3">¥49.9</span>
            <span class="price4">618预售</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部两格数据 -->
    <div class="warp-limited">
      <div class="warp-bottom">
        <div class="bottom">
          <div>
            <span class="price5">3件3折</span>
            <span class="price6">同价618</span>
          </div>
          <div class="img-bottom">
            <img src="../../public/images/ia_100000047.webp" />
            <img src="../../public/images/ia_100000048.webp" />
          </div>
        </div>
        <div class="bottom">
          <div>
            <span class="price5">员工精选</span>
            <span class="price6">内部都在抢</span>
          </div>
          <div class="img-bottom">
            <img src="../../public/images/ia_100000049.webp" />
            <img src="../../public/images/ia_100000050.webp" />
          </div>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="warp-limiteds">
      <div class="bottom-end">
        <p class="bottom-end-1">下载APP</p>
        <p class="bottom-end-2">电脑版</p>
      </div>
      <span class="bottom-end-s1">网易公司版权所有 © 1997-</span>
      <br />
      <span class="bottom-end-s2">食品经营许可证：JY13301080111719</span>
    </div>
    <!-- 固定图标 -->
    <div class="pin-icon">
      <img src="../../public/images/ia_100000078.webp">
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
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
      reqIndexkingKongModule: state =>
        state.home.reqIndex.kingKongModule.kingKongList
    })
  },
  mounted() {
    this.$store.dispatch("reqIndexCateModule");
    this.$store.dispatch("reqIndex");
    this.$store.dispatch("reqIndex2");
    this.$store.dispatch("reqIndex3");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.warp {
  background-color: rgb(230, 230, 230);
  position: relative;
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
/* 新人专享礼样式 */
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
/* 热销榜样式 */
.warp-hot1 {
  margin-top: 10px;
}
/* 倒计时样式 */
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #333;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #333;
  border-radius: 5px;
}
/* 限时购下方图片 */
.warp-limited {
  margin-top: -5px;
  background-color: #fff;
}
.warp-limited .limited {
  position: relative;
}
.warp-limited .limited .p1 {
  padding-top: 15px;
  padding-left: 10px;
  padding-bottom: 5px;
}
.warp-limited .limited .time {
  position: absolute;
  top: 15px;
  left: 70px;
}
.warp-limited .limited .p2 {
  right: 15px;
  top: 0px;
  position: absolute;
}
.warp-limited .price1 {
  color: #dd1a21;
  font-size: 15px;
  margin-left: 20px;
}
.warp-limited .price2 {
  color: #7f7f7f;
  text-decoration: line-through;
  font-size: 13px;
  margin-left: 10px;
}
.warp-limited .warp-cnt {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}
.warp-limited .warp-cnt .cnt .img-warp {
  background-color: #f5f5f5;
  width: 110px;
  height: 110px;
  margin-left: 10px;
}
.warp-limited .warp-cnt .cnt .img-warp img {
  width: 110px;
  height: 110px;
}
/* 新品首发 */
.warp-limited .warp-cnt .cnt .price3 {
  display: block;
  color: #dd1a21;
  font-size: 20px;
  margin-left: 20px;
}
.warp-limited .warp-cnt .cnt .price4 {
  border: 1px solid #dd1a21;
  border-radius: 50px;
  font-size: 11px;
  margin-left: 20px;
  color: #dd1a21;
}
/* 底部两格数据 */
.warp-limited .warp-bottom {
  margin-top: 15px;
  display: flex;
}
.warp-limited .warp-bottom .bottom {
  background-color: #f5f5f5;
  width: 45%;
  height: 150px;
  margin-top: 15px;
  margin-left: 13px;
  margin-bottom: 15px;
}
.warp-limited .warp-bottom .bottom .price5 {
  display: block;
  margin-top: 10px;
  margin-left: 10px;
  color: rgb(51, 51, 51);
  font-size: 18px;
}
.warp-limited .warp-bottom .bottom .price6 {
  color: rgb(127, 127, 127);
  margin-left: 10px;
  font-size: 13px;
}
.warp-limited .warp-bottom .bottom .img-bottom img {
  width: 80px;
  height: 80px;
}
/* 底部 */
.warp-limiteds {
  background: rgb(46, 43, 43);
  height: 150px;
  position: relative;
}
.warp-limiteds .bottom-end {
  display: flex;
  margin: 10px;
}
.warp-limiteds .bottom-end .bottom-end-1 {
  color: #fff;
  font-size: 13px;
  padding: 8px;
  border: 1px solid #fff;
  position: absolute;
  top: 20px;
  left: 100px;
}
.warp-limiteds .bottom-end .bottom-end-2 {
  color: #fff;
  font-size: 13px;
  padding: 8px;
  border: 1px solid #fff;
  position: absolute;
  right: 100px;
  top: 20px;
}
.warp-limiteds .bottom-end-s1 {
  color: #999;
  position: absolute;
  bottom: 50px;
  left: 120px;
  font-size: 12px;
}
.warp-limiteds .bottom-end-s2 {
  color: #999;
  position: absolute;
  bottom: 35px;
  left: 90px;
  font-size: 12px;
}
.pin-icon{
  position: fixed;
  z-index: 4;
  bottom: 100px;
  right: 0;
}
.pin-icon img{
  width: 60px;
  height: 40px;
}
</style>