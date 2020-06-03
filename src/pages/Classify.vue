<template>
  <div>
    <div class="box">
      <Classdata :index="index" @change="onChange"></Classdata>
    </div>
    <van-sidebar v-model="activeKey" @change="onChange">
      <van-sidebar-item
        v-for="(image,index) in reqcateNavDatas.categoryL1List"
        :key="index"
        :title="image.name"
      />
    </van-sidebar>
  </div>
</template>

<script>
// 引入classdata组件
import Classdata from "../pages/Classdata";
// 引入mapState方法
import { mapState } from "vuex";
export default {
  name: "Classify",
  components: {
    Classdata
  },
  data() {
    return {
      activeKey: 0,
      index: 0
    };
  },
  computed: {
    ...mapState({
      reqcateNavDatas: state => state.home.reqcateNavDatas
    })
  },
  methods: {
    onChange(index) {
      this.index = index
    }
  },
  mounted() {
    this.$store.dispatch("reqcateNavDatas");
    this.$store.dispatch("cateLists");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 290px;
}
</style>