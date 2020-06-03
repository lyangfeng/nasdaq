<template>
  <div>
    <div class="imgWrap" v-if="icon">
      <van-icon name="cross" class="vant-icon" @click="onicon" />
      <img
        src="https://yanxuan.nosdn.127.net/3137220cc522a8fbb0b7520637a61469.png?type=webp&imageView&thumbnail=750x0&quality=75"
        alt
        srcset
      />
    </div>
    <div class="headers">
      <div>网易严选</div>
      <div>
        <van-search
          v-if="search"
          v-model="value"
          show-action
          placeholder="搜索商品,共20008款好物"
          @search="onSearch"
        >
          <template #action>
            <div @click="onSearch">登录</div>
          </template>
        </van-search>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "Header",
  data() {
    return {
      value: "",
      search: true,
      icon: true
    };
  },
  methods: {
    onSearch(val) {
      console.log(val);
      Toast("登录");
    },
    onCancel(val) {
      Toast(val);
    },
    onicon () {
      this.icon = false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imgWrap {
  display: flex;
}
.imgWrap > img {
  height: 50px;
  width: 100%;
}
.vant-icon {
  position: absolute;
}
.headers {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
</style>
