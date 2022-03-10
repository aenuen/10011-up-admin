export const loginRouter = {
  path: '/login',
  name: 'login',
  component: () => import(/* webpackChunkName: "login" */ '@/views/aConstant/login/index.vue')
}
