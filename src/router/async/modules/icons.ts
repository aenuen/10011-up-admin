import Layout from '@/views/aConstant/layout/index.vue'

export const iconsRouter = {
  path: '/icons',
  name: 'icons',
  component: Layout,
  children: [
    {
      path: '/iconsList',
      name: 'iconsList',
      component: () => import(/* webpackChunkName: "icons" */ '@/views/aConstant/icons/index.vue'),
      meta: {
        title: '图标浏览',
        icon: 'icon',
        roles: ['admin'],
        noCache: true
      }
    }
  ]
}
