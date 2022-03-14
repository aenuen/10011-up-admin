import { constantRoutes } from '@/router'
import { asyncRoutes } from '@/router/async'

// 使用元角色确定当前用户是否有权限
const hasPermission = (roles: string[], route: Record<string, any>) => {
  // 没有填写则默认就有权限，要有meta.roles的话，只要命中任何一个就有权限
  return route.meta && route.meta.roles ? roles.some(role => route.meta.roles.includes(role)) : true
}

// 递归过滤异步路由表
export const filterAsyncRoutes = (routes:Record<string, any>, roles:string[]) => {
  const res:any[] = []
  routes.forEach((route:Record<string, any>) => {
    const tmp = { ...route } // 进行前拷贝
    if (hasPermission(roles, tmp)) {
      tmp.children && (tmp.children = filterAsyncRoutes(tmp.children, roles)) // 循环筛选子目录
      res.push(tmp)
    }
  })
  return res
}

const permission:any = {
  namespaced: true,
  state: {
    routes: [],
    addRoutes: []
  },
  mutations: {
    SET_ROUTES: (state:any, routes:any) => {
      state.addRoutes = routes // 备份
      state.routes = constantRoutes.concat(routes) // 固定和异步路由进行合并
    }
  },
  actions: {
    generateRoutes: {
      root: true,
      handler ({ commit }:any, roles:any) {
        return new Promise(resolve => {
          // 要是admin直接赋权限，否则去循环筛选
          const accessedRoutes = roles.includes('admin') ? (asyncRoutes || []) : filterAsyncRoutes(asyncRoutes, roles)
          console.log(accessedRoutes)
          commit('SET_ROUTES', accessedRoutes)
          resolve(accessedRoutes)
        })
      }
    }
  }
}

export default permission
