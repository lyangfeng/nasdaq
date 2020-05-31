// 引入二次封装的axios文件
// 引入二次封装axios文件----给mock使用
import mockAjax from './mockAjax'
import ajax from './ajax'

// mock的相关的接口
export const cateLists = () => mockAjax.get("/cateLists") // 分类右侧内容数据
export const reqIndex = () => mockAjax.get('/reqIndex') // 获取首页的数据
export const reqcateNavDatas = () => mockAjax.get("/reqcateNavDatas") // 分类左侧导航数据
export const reqIndexCateModule = () => mockAjax.get('/reqIndexCateModule') // 首页下拉列表数据
export const reqBuying = () => ajax.get('/topic/v1/know/navWap.json') // 值得买数据