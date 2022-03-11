import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { homeRouter } from './modules/home'
import { loginRouter } from './modules/login'
import { errorPage401Router, errorPage404Router } from './modules/errorPage'

export const constantRoutes: Array<RouteRecordRaw> = [
  loginRouter,
  homeRouter,
  errorPage401Router,
  errorPage404Router
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
