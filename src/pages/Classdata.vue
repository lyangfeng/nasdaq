<template>
  <div>
    <template>
      <van-grid :border="false" :column-num="3">
        <van-grid-item v-for="(c1, index) in cateLists" :key="index">
          <van-image :src="c1.bannerUrl" :key="index" />
          {{c1.frontName}}
        </van-grid-item>
      </van-grid>
    </template>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Classdata',
  props: ['index'],
  methods: {
    data () {
      return {
      }
    },
  },
  computed: {
    ...mapState({
      cateLists: state => state.home.cateLists.categoryList
    })
  }
}
</script>

<style>
.box {
  float: right;
}
.van-grid .van-hairline--top {
  width: 70% !important;
}
</style>