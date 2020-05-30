<template>
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  >
    <template #action>
      <div @click="onSearch">登录</div>
    </template>
  </van-search>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "Header",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch(val) {
      console.log(val);
      Toast("登录");
    },
    onCancel() {
      Toast('取消');
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
