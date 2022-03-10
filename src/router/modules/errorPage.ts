
export const errorPage401Router = {
  path: '/401',
  name: '401',
  component: () => import(/* webpackChunkName: "401" */ '@/views/aConstant/errorPage/401/index.vue')
}

export const errorPage404Router = {
  path: '/:catchAll(.*)',
  name: '404',
  component: () => import(/* webpackChunkName: "404" */ '@/views/aConstant/errorPage/404/index.vue')
}
