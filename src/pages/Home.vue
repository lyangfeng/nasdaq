<template>
  <div>
    <van-tabs v-model="active" scrollspy sticky>
      <van-tab v-for="(c1,index) in reqIndexCateModule" :key="index" :title="c1.name"></van-tab>
    </van-tabs>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" width="100%" height="100%" />
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="3">
      <van-grid-item
        v-for="(c2,index) in reqcateNavDatas"
        :key="index"
        :icon="c2.bannerUrl"
        :text="c2.name"
      />
    </van-grid>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
    ...mapState({
      reqIndexCateModule: state => state.home.reqIndexCateModule,
      reqcateNavDatas: state => state.home.reqcateNavDatas.categoryL1List
    })
  },
  mounted() {
    this.$store.dispatch("reqIndexCateModule");
    this.$store.dispatch("reqcateNavDatas");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.van-swipe .van-swipe-item {
  color: #fff;
  width: 800px;
  height: 180px;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>