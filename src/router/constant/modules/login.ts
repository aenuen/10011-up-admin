import Layout from '@/views/aConstant/layout/index.vue'

export const loginRouter = {
  path: '/login',
  name: 'login',
  component: () => import(/* webpackChunkName: "login" */ '@/views/aConstant/login/index.vue')
}

export const httpRedirectRouter = {
  path: '/redirect',
  component: Layout,
  hidden: true,
  children: [
    {
      path: '/redirect/:path(.*)',
      component: () => import('@/views/aConstant/redirect/http.vue')
    }
  ]
}
export const authRedirectRouter = {
  path: '/auth-redirect',
  component: () => import('@/views/aConstant/redirect/auth.vue'),
  hidden: true
}
