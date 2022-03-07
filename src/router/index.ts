import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/views/aConstant/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
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
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/aConstant/login/index.vue')
  },

  {
    path: '/icons',
    name: 'icons',
    component: Layout,
    children: [
      {
        path: '/iconsIndex',
        name: 'iconsIndex',
        component: () => import(/* webpackChunkName: "icons" */ '../views/aConstant/icons/index.vue'),
        meta: {
          title: '图标浏览',
          icon: 'icon',
          roles: ['admin'],
          noCache: true
        }
      }
    ]
  },
  {
    path: '/401',
    name: '401',
    component: () => import(/* webpackChunkName: "401" */ '../views/aConstant/errorPage/401/index.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/aConstant/errorPage/404/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
