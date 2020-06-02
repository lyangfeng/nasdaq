// 引入api接口
import {
  cateLists,
  reqIndex,
  reqcateNavDatas,
  reqIndexCateModule,
  reqBuying,
  reqBuyingEnd
} from '../../api'
const state = {
  cateLists: [], // 分类右侧内容数据
  reqIndex: {
    categoryHotSellModule: {
      categoryList: []
    }
  }, // 首页的数据数组
  reqIndex2: {
    categoryHotSellModule: {
      categoryList: []
    }
  },
  reqIndex3: {
    categoryHotSellModule: {
      categoryList: []
    }
  },
  reqcateNavDatas: [], // 分类左侧导航数据
  reqIndexCateModule: [], // 主页nav对应模块数据
  reqBuying: {}, // 值得买数据
  reqBuyingEnd: {} //值得买懒加载数据
}
const mutations = {
  // 分类右侧内容数据
  cateLists(state, cateLists) {
    state.cateLists = cateLists
  },
  // 首页的数据数组
  reqIndex(state, reqIndex) {
    state.reqIndex = reqIndex
  },
  reqIndex2(state, reqIndex) {
    state.reqIndex2 = reqIndex
  },
  reqIndex3(state, reqIndex) {
    state.reqIndex3 = reqIndex
  },
  // 分类左侧导航数据
  reqcateNavDatas(state, reqcateNavDatas) {
    state.reqcateNavDatas = reqcateNavDatas
  },
  // 主页nav对应模块数据
  reqIndexCateModule(state, reqIndexCateModule) {
    state.reqIndexCateModule = reqIndexCateModule
  },
  // 值得买数据
  reqBuying(state, reqBuying) {
    state.reqBuying = reqBuying
  },
  //值得买懒加载数据
  reqBuyingEnd(state, reqBuyingEnd) {
    state.reqBuyingEnd = reqBuyingEnd
  }
}
const actions = {
  // 分类右侧内容数据
  async cateLists({
    commit
  }) {
    // 调用接口发送异步请求
    const result = await cateLists()
    if (result.code === 200) {
      // 提交对应的mutations,并修改状态数据
      commit('cateLists', result.data)
    }
  },
  // 发送请求获取首页信息数据
  async reqIndex({
    commit
  }) {
    // 调用接口发送异步请求
    const result = await reqIndex()
    if (result.code == 200) {
      console.log(result);

      // 提交对应的mutations,并修改状态数据
      commit('reqIndex', result.data)
    }
  },
  async reqIndex2({
    commit
  }) {
    // 调用接口发送异步请求
    const result = await reqIndex()
    if (result.code == 200) {
      console.log(result);

      // 提交对应的mutations,并修改状态数据
      commit('reqIndex2', result.data)
    }
  },
  async reqIndex3({
    commit
  }) {
    // 调用接口发送异步请求
    const result = await reqIndex()
    if (result.code == 200) {
      console.log(result);

      // 提交对应的mutations,并修改状态数据
      commit('reqIndex3', result.data)
    }
  },
  // 分类左侧导航数据
  async reqcateNavDatas({
    commit
  }) {
    // 调用接口发送异步请求
    const result = await reqcateNavDatas()
    if (result.code === 200) {
      // 提交对应的mutations,并修改状态数据
      commit('reqcateNavDatas', result.data)
    }
  },
  // 主页nav对应模块数据
  async reqIndexCateModule({
    commit
  }) {
    // 调用接口发送异步请求
    const result = await reqIndexCateModule()
    if (result.code === 200) {
      // 提交对应的mutations,并修改状态数据
      commit('reqIndexCateModule', result.data)
    }
  },
  // 值得买数据
  async ReqBuying({
    commit
  }) {
    // 调用接口发送异步请求
    const result = await reqBuying()
    if (result.code == 200) {
      // 提交对应的mutations,并修改状态数据
      commit('reqBuying', result.data)
    }
  },
  //值得买懒加载数据
  async reqBuyingEnd({
    commit
  }) {
    // 调用接口发送异步请求
    const result = await reqBuyingEnd()
    console.log(result);
    if (result.code == 200) {
      // 提交对应的mutations,并修改状态数据
      commit('reqBuyingEnd', result.data)
    }
  }
}
const getters = {
  // 值得买数据
  Buying(state) {
    const Buying = state.reqBuying.navList
    return Buying
  },
  // 处理类目热销榜数据
  reqIndexcategoryHotSellModule1(state) {
    const reqIndexcategoryHotSellModule1 = state.reqIndex2.categoryHotSellModule.categoryList.splice(0, 2)
    return reqIndexcategoryHotSellModule1
  },
  reqIndexcategoryHotSellModule2(state) {
    const reqIndexcategoryHotSellModule2 = state.reqIndex3.categoryHotSellModule.categoryList.splice(2, 10)
    return reqIndexcategoryHotSellModule2
  },
}
export default {
  state,
  mutations,
  actions,
  getters
}