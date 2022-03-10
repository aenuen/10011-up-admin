import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { homeRouter } from './modules/home'
import { loginRouter } from './modules/login'
import { iconsRouter } from './modules/icons'
import { errorPage401Router, errorPage404Router } from './modules/errorPage'

const routes: Array<RouteRecordRaw> = [
  loginRouter,
  homeRouter,
  iconsRouter,
  errorPage401Router,
  errorPage404Router
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
