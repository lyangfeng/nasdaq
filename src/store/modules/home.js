// 引入api接口
import {
  index
} from '@/api'
const state = {
  index: [], // 首页的数据数组
}
const mutations = {
  // 首页的数据
  index(state, index) {
    state.index = index
  },

}
const actions = {
  // 发送请求获取首页信息数据
  async index({
    commit
  }) {
    // 调用接口发送异步请求
    const result = await index()
    if (result.code === 200) {
      // 提交对应的mutations,并修改状态数据
      commit('index', result.data)
    }
  },
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}