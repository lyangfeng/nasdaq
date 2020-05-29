<template>
  <van-tabbar v-model="active">
  <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
  <van-tabbar-item icon="coupon-o">分类</van-tabbar-item>
  <van-tabbar-item icon="photo-o">值得买</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
  <van-tabbar-item icon="contact">个人</van-tabbar-item>
</van-tabbar>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      active: 0,
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
