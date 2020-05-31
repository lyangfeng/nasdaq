// 引入api接口
import {
  cateLists,
  reqIndex,
  reqcateNavDatas,
  reqIndexCateModule,
  reqBuying
} from '../../api'
const state = {
  cateLists: [], // 分类右侧内容数据
  reqIndex: [], // 首页的数据数组
  reqcateNavDatas: [], // 分类左侧导航数据
  reqIndexCateModule: [], // 主页nav对应模块数据
  reqBuying: {} // 值得买数据
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
    if (result.code === 200) {
      // 提交对应的mutations,并修改状态数据
      commit('reqIndex', result.data)
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
    console.log(result);

    if (result.code == 200) {
      // 提交对应的mutations,并修改状态数据
      commit('reqBuying', result.data)
    }
  }
}
const getters = {
  // 值得买数据
  Buying(state) {
    const Buying = state.reqBuying.navList
    return Buying
  },
}
export default {
  state,
  mutations,
  actions,
  getters
}