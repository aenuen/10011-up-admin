import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes } from './constant'

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
