import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { homeRouter } from './modules/home'
import { loginRouter, httpRedirectRouter, authRedirectRouter } from './modules/login'
import { errorPage401Router, errorPage404Router } from './modules/errorPage'
import { iconsRouter } from './modules/icons'

export const constantRoutes: Array<RouteRecordRaw> = [
  loginRouter,
  httpRedirectRouter,
  authRedirectRouter,
  homeRouter,
  errorPage401Router,
  errorPage404Router,
  iconsRouter
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
  strict: true, // 严格模式，不使用 mutation 改变状态，会抛出异常。
  scrollBehavior: () => ({ left: 0, top: 0 })
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
