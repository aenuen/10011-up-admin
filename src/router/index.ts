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
  routes: constantRoutes
})

export function resetRouter () {
  console.log('resetRouter')
}

export default router
