
export const errorPage401Router = {
  path: '/401',
  name: '401',
  component: () => import(/* webpackChunkName: "401" */ '@/views/aConstant/errorPage/401/index.vue'),
  meta: { title: 'Oops！您没有权限访问这个页面…', icon: 'chart', affix: true }
}

export const errorPage404Router = {
  path: '/:catchAll(.*)',
  name: '404',
  component: () => import(/* webpackChunkName: "404" */ '@/views/aConstant/errorPage/404/index.vue'),
  meta: { title: 'Oops！抱歉，未能查找到你所需的页面…', icon: 'chart', affix: true }
}
