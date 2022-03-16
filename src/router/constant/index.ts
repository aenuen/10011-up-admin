import { RouteRecordRaw } from 'vue-router'
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
