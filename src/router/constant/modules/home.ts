import Layout from '@/views/aConstant/layout/index.vue'

export const homeRouter = {
  path: '/',
  name: 'home',
  component: Layout,
  redirect: '/home',
  children: [
    {
      component: () => import(/* webpackChunkName: "home" */ '@/views/aConstant/home/index.vue'),
      path: 'home',
      name: 'home',
      meta: { title: '首页', icon: 'chart', affix: true }
    }
  ]
}
