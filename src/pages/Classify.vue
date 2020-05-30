<template>
  <van-sidebar v-model="activeKey" @change="onChange">
    <van-sidebar-item
      v-for="(image,index) in reqcateNavDatas.categoryL1List"
      :key="index"
      :title="image.name"
    />
  </van-sidebar>
</template>

<script>
import { Notify } from "vant";
// 引入mapState方法
import { mapState } from "vuex";
export default {
  name: "Classify",
  data() {
    return {
      activeKey: 0
    };
  },
  computed: {
    ...mapState({
      reqcateNavDatas: state => state.home.reqcateNavDatas
    })
  },
  methods: {
    onChange(index, messages) {
      Notify({ type: "primary", message: messages });
    }
  },
  mounted() {
    this.$store.dispatch("reqcateNavDatas");
    console.log(this.$store);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>