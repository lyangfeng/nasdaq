// 引入组件,并注册成路由组件 -------------
// @相当于src,目前使用@符号是没有任何提示的,配置jsconfig.json的文件,设置@引入的智能提示

// 引入首页组件
import Home from '@/pages/Home'
// 引入分类组件
import Classify from '@/pages/Classify'
// 引入值得买组件
import Buying from '@/pages/Buying'
// 引入购物组件
import Shopping from '@/pages/Shopping'
// 引入个人中心组件
import Center from '@/pages/Center'
// 引入用户注册页面
import Register from '@/pages/Register'
// 引入用户登录界面
import Login from '@/pages/Login'


// 动态的方式引入----路由懒加载----项目优化的方式
// const GroupBuy =()=>import('@/pages/Center/GroupBuy')


// 引入store
// import store from '../store'
export default [
  // 首页路由组件
  {
    path: '/home',
    component: Home
  },
  // 注册路由组件
  {
    path: '/register',
    component: Register
  },
  // 登录路由组件
  {
    path: '/login',
    component: Login
  },
  // 分类路由组件
  {
    path: '/classify',
    component: Classify,
  },
  // 值得买路由组件
  {
    path: '/buying',
    component: Buying,
  },
  // 购物路由组件
  {
    path: '/shopping', 
    component: Shopping
  },
   // 个人中心路由组件
   {
    path: '/center', 
    component: Center
  },
  // 重定向
  {
    path: '/',
    redirect: '/home'
  }
]