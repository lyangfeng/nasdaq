// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入路由器
import router from './router'
// 引入vuex的store
import store from './store'
// 引入mock
import './mock/mockServer'
// 引入swiper的样式文件
import 'swiper/css/swiper.css'
// 引入底部按钮
import {
  Tabbar,
  TabbarItem,
  Search,
  Button,
  Sidebar,
  SidebarItem,
  Swipe,
  SwipeItem,
  Lazyload,
  Tab,
  Tabs,
  Grid,
  GridItem
} from 'vant';

// 引入接口函数
import * as API from './api'

// 保证的任意的一个组件实例都可以直接访问相关的接口函数
Vue.prototype.$API = API

// 设置浏览器的控制台中是否显示默认提示信息
Vue.config.productionTip = false

// 注册使用按钮
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Search)
Vue.use(Button)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Grid)
Vue.use(GridItem)

// 创建Vue实例,并挂载
new Vue({
  // 数据初始化之前---生命周期回调
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  // 注册路由器
  router,
  // 注册仓库
  store
}).$mount('#app')