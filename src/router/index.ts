import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes } from './constant'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { ElMessage } from 'element-plus'
import pageTitle from '@/libs/utils/page-title'
import { getToken } from '@/libs/token'
import { theUserStore, thePermissionStore } from '@/store'

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  strict: true, // 严格模式，不使用 mutation 改变状态，会抛出异常。
  scrollBehavior: () => ({ left: 0, top: 0 })
})

NProgress.configure({ showSpinner: false }) // 隐藏右侧旋转的小圆环
const whiteList = ['/login', '/auth-redirect'] // 设置白名单
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const { title } = to.meta
  document.title = pageTitle(<string>title) // 设置title
  const hasToken = getToken() // 从cookie中去拿token
  if (hasToken) { // 有token
    if (to.path === '/login') {
      next({ path: '/' }) // 目标是登录页面直接进入首页
      NProgress.done()
    } else { //
      const userRoles = theUserStore().roles // 去拿角色
      const hasRoles = userRoles && userRoles.length > 0
      if (hasRoles) { // 有角色直接进去
        next()
      } else { // 没有角色去拿一次角色
        try {
          await theUserStore().userInfo()
          const { roles } = theUserStore().getUserInfo
          const accessRoutes = await thePermissionStore().generateRoutes(roles) as any[]
          accessRoutes.forEach((item) => {
            router.addRoute(item)
          })
          // const accessRoutes = await store.dispatch('permission/generateRoutes', roles) // 生成动态路由
          // router.addRoutes(accessRoutes) // 添加异步路由，和固定路由进行合并 位置：store/modules/permission/actions
          next({ ...to, replace: true }) // 前往目标页面，replace:true 后面的页面不会再回到login页面，而是空白页面
        } catch (error) {
          // await store.dispatch('user/resetToken') // 重置token 位置：store/modules/user/resetToken
          ElMessage.error('有错误') // 提示错误
          next(`/login?redirect=${to.path}`) // 重新回到登录页面
          NProgress.done()
        }
      }
      // 1
    }
  } else {
    if (whiteList.indexOf(to.path) > -1) { // 在白名单中
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

export const resetRouter = (): void => {
  const resetWhiteNameList = ['Redirect', 'Login', '404', 'Root']
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !resetWhiteNameList.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export default router
