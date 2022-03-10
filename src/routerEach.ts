import 'normalize.css/normalize.css'
import NProgress from 'nprogress'
import { ElMessage } from 'element-plus'
import 'nprogress/nprogress.css'
import '@/assets/style/layout.scss'
import '@/components/Icons/font/files/iconfont.css'
import store from '@/store'
import router from '@/router'
import pageTitle from '@/libs/utils/page-title'
import { getToken } from '@/libs/token'

NProgress.configure({ showSpinner: false }) // 隐藏右侧旋转的小圆环
const whiteList = ['/login', '/auth-redirect'] // 设置白名单
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const { title } = to.meta
  document.title = pageTitle(String(title)) // 设置title
  const hasToken = getToken() || '' // 从cookie中去拿token
  if (hasToken) { // 有token
    const roles = store.getters['user/roles'] // 从store中拿到角色信息
    const hasRoles = roles && roles.length > 0
    if (hasRoles) { // 有角色直接进去
      next()
    } else {
      try {
        const { roles } = await store.dispatch('getInfo') // 没有角色去拿一次角色
        const accessRoutes = await store.dispatch('permission/generateRoutes', roles) // 生成动态路由
        router.addRoute(accessRoutes) // 添加异步路由，和固定路由进行合并 位置：store/modules/permission/actions
        next({ ...to, replace: true }) // 前往目标页面，replace:true 后面的页面不会再回到login页面，而是空白页面
      } catch (error) {
        console.log(error)
        await store.dispatch('user/resetToken') // 重置token 位置：store/modules/user/resetToken
        ElMessage.error('有错误') // 提示错误
        next(`/login?redirect=${to.path}`) // 重新回到登录页面
        NProgress.done()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) >= 0) { // 在白名单中
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则中转带参数跳转到登录页面
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
