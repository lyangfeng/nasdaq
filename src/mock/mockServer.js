// 先引入Mock
import Mock from 'mockjs'
// 引入banners---首页大轮播图的数据
import index from './index.json'
import reqcateNavDatas from './cateNavDatas.json'
// 引入floors---首页楼层的数据
// 使用Mock的相关方法,进行接口的拦截及返回数据的操作
// 自己设定并确定banners数据的接口地址--->/mock/banners   和   floors数据的接口地址---->/mock/floors
// 参数1:要拦截的接口地址,参数2:要返回的数据模版
Mock.mock('/mock/index', {
  code: 200,
  message: '成功',
  data: index
})
Mock.mock('/mock/reqcateNavDatas', {
  code: 200,
  message: '成功',
  data: reqcateNavDatas
})
// 不需要进行暴露,必须要吧上述代码执行一次
// console.log('哎呀妈呀,执行了')