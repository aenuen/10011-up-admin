import Cookies from 'js-cookie'
import { createStore } from 'vuex'
import { getToken, setToken } from '@/libs/token'
import { HttpResponse } from '@/libs/axios'
import { userLogin, userInfo } from '@/api/user'
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

const store = createStore({
  modules: {
    app: {
      namespaced: true,
      state: {
        sidebar: {
          opened: () => Cookies.get('sidebarStatus') ? !!Number(Cookies.get('sidebarStatus')) : true,
          withoutAnimation: false
        },
        device: 'desktop',
        size: Cookies.get('size') || 'medium'
      },
      getters: {
        sidebar: state => state.sidebar,
        device: state => state.device,
        size: state => state.size
      },
      mutations: {
        TOGGLE_SIDEBAR: state => {
          state.sidebar.opened = !state.sidebar.opened
          state.sidebar.withoutAnimation = false
          if (state.sidebar.opened) {
            Cookies.set('sidebarStatus', '1')
          } else {
            Cookies.set('sidebarStatus', '0')
          }
        },
        CLOSE_SIDEBAR: (state, withoutAnimation) => {
          Cookies.set('sidebarStatus', '0')
          state.sidebar.opened = false
          state.sidebar.withoutAnimation = withoutAnimation
        },
        TOGGLE_DEVICE: (state, device) => {
          state.device = device
        },
        SET_SIZE: (state, size) => {
          state.size = size
          Cookies.set('size', size)
        }
      },
      actions: {
        toggleSideBar: {
          root: true,
          handler ({ commit }) {
            commit('TOGGLE_SIDEBAR')
          }
        },
        closeSideBar: {
          root: true,
          handler ({ commit }, { withoutAnimation }) {
            commit('CLOSE_SIDEBAR', withoutAnimation)
          }
        },
        toggleDevice: {
          root: true,
          handler ({ commit }, { device }) {
            commit('TOGGLE_DEVICE', device)
          }
        },
        setSize: {
          root: true,
          handler ({ commit }, size) {
            commit('SET_SIZE', size)
          }
        }
      }
    },
    errorLog: {
      namespaced: true,
      state: {
        logs: []
      },
      getters: {
        logs: state => state.logs
      },
      mutations: {
        ADD_ERROR_LOG: (state, log) => {
          state.logs.push(log)
        },
        CLEAR_ERROR_LOG: (state) => {
          state.logs.splice(0)
        }
      },
      actions: {
        ADD_ERROR_LOG: {
          root: true,
          handler ({ commit }, log) {
            commit('ADD_ERROR_LOG', log)
          }
        },
        CLEAR_ERROR_LOG: {
          root: true,
          handler ({ commit }) {
            commit('CLEAR_ERROR_LOG')
          }
        }
      }
    },
    tagsView: {
      state: {
        visitedViews: [],
        cachedViews: []
      },
      mutations: {
        ADD_VISITED_VIEW: (state, view) => {
          if (state.visitedViews.some((v:Record<string, any>) => v.path === view.path)) return
          state.visitedViews.push(
            Object.assign({}, view, { title: view.meta.title || 'no-name' }) // 合并
          )
        },
        ADD_CACHED_VIEW: (state, view) => {
          if (state.cachedViews.includes(view.name)) return
          if (!view.meta.noCache) state.cachedViews.push(view.name)
        },
        DEL_VISITED_VIEW: (state, view) => {
          for (const [i, v] of state.visitedViews.entries()) {
            if (v.path === view.path) {
              state.visitedViews.splice(i, 1)
              break
            }
          }
        },
        DEL_CACHED_VIEW: (state, view) => {
          const index = state.cachedViews.indexOf(view.name)
          index > -1 && state.cachedViews.splice(index, 1)
        },
        DEL_OTHERS_VISITED_VIEWS: (state, view) => {
          state.visitedViews = state.visitedViews.filter((v:Record<string, any>) => v.meta.affix || v.path === view.path)
        },
        DEL_OTHERS_CACHED_VIEWS: (state, view) => {
          const index = state.cachedViews.indexOf(view.name)
          state.cachedViews = index > -1 ? state.cachedViews.slice(index, index + 1) : []
        },
        DEL_ALL_VISITED_VIEWS: state => {
          state.visitedViews = state.visitedViews.filter((tag:Record<string, any>) => tag.meta.affix) // 保留粘贴标签
        },
        DEL_ALL_CACHED_VIEWS: state => {
          state.cachedViews = []
        },
        UPDATE_VISITED_VIEW: (state, view) => {
          for (let v of state.visitedViews) {
            if (v.path === view.path) {
              v = Object.assign(v, view)
              break
            }
          }
        }
      },
      actions: {
        addView: {
          root: true,
          handler ({ dispatch }, view) {
            dispatch('addVisitedView', view).then()
            dispatch('addCachedView', view).then()
          }
        },
        addVisitedView: {
          root: true,
          handler ({ commit }, view) {
            commit('ADD_VISITED_VIEW', view)
          }
        },
        addCachedView: {
          root: true,
          handler ({ commit }, view) {
            commit('ADD_CACHED_VIEW', view)
          }
        },
        delView: {
          root: true,
          handler ({ dispatch, state }, view) {
            return new Promise(resolve => {
              dispatch('delVisitedView', view).then()
              dispatch('delCachedView', view).then()
              resolve({
                visitedViews: [...state.visitedViews],
                cachedViews: [...state.cachedViews]
              })
            })
          }
        },
        delVisitedView: {
          root: true,
          handler ({ commit, state }, view) {
            return new Promise(resolve => {
              commit('DEL_VISITED_VIEW', view)
              resolve([...state.visitedViews])
            })
          }
        },
        delCachedView: {
          root: true,
          handler ({ commit, state }, view) {
            return new Promise(resolve => {
              commit('DEL_CACHED_VIEW', view)
              resolve([...state.cachedViews])
            })
          }
        },
        delOthersViews: {
          root: true,
          handler ({ dispatch, state }, view) {
            return new Promise(resolve => {
              dispatch('delOthersVisitedViews', view).then()
              dispatch('delOthersCachedViews', view).then()
              resolve({
                visitedViews: [...state.visitedViews],
                cachedViews: [...state.cachedViews]
              })
            })
          }
        },
        delOthersVisitedViews: {
          root: true,
          handler ({ commit, state }, view) {
            return new Promise(resolve => {
              commit('DEL_OTHERS_VISITED_VIEWS', view)
              resolve([...state.visitedViews])
            })
          }
        },
        delOthersCachedViews: {
          root: true,
          handler ({ commit, state }, view) {
            return new Promise(resolve => {
              commit('DEL_OTHERS_CACHED_VIEWS', view)
              resolve([...state.cachedViews])
            })
          }
        },
        delAllViews: {
          root: true,
          handler ({ dispatch, state }, view) {
            return new Promise(resolve => {
              dispatch('delAllVisitedViews', view).then()
              dispatch('delAllCachedViews', view).then()
              resolve({
                visitedViews: [...state.visitedViews],
                cachedViews: [...state.cachedViews]
              })
            })
          }
        },
        delAllVisitedViews: {
          root: true,
          handler ({ commit, state }) {
            return new Promise(resolve => {
              commit('DEL_ALL_VISITED_VIEWS')
              resolve([...state.visitedViews])
            })
          }
        },
        delAllCachedViews: {
          root: true,
          handler ({ commit, state }) {
            return new Promise(resolve => {
              commit('DEL_ALL_CACHED_VIEWS')
              resolve([...state.cachedViews])
            })
          }
        },
        updateVisitedView: {
          root: true,
          handler ({ commit }, view) {
            commit('UPDATE_VISITED_VIEW', view)
          }
        }
      }
    },
    permission: {
      namespaced: true,
      state: {
        routes: [],
        addRoutes: []
      },
      getters: {
        routes: state => state.routes,
        addRoutes: state => state.addRoutes
      },
      mutations: {
        SET_ROUTES: (state, routes) => {
          state.addRoutes = routes // 备份
          state.routes = constantRoutes.concat(routes) // 固定和异步路由进行合并
        }
      },
      actions: {
        generateRoutes: {
          root: true,
          handler ({ commit }, roles) {
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
    },
    user: {
      namespaced: true,
      state: {
        aid: '123',
        token: getToken(),
        realName: '',
        petName: '',
        email: '',
        mobile: '',
        avatar: '',
        introduction: '',
        roles: []
      },
      getters: {
        aid: state => state.aid,
        token: state => state.token,
        avatar: state => state.avatar,
        realName: state => state.realName,
        petName: state => state.petName,
        email: state => state.email,
        mobile: state => state.mobile,
        introduction: state => state.introduction,
        roles: state => state.roles
      },
      mutations: {
        SET_AID: (state, aid) => {
          state.aid = aid
        },
        SET_TOKEN: (state, token) => {
          state.token = token
        },
        SET_INTRODUCTION: (state, introduction) => {
          state.introduction = introduction
        },
        SET_RealNAME: (state, realName) => {
          state.realName = realName
        },
        SET_PetNAME: (state, petName) => {
          state.petName = petName
        },
        SET_EMAIL: (state, email) => {
          state.email = email
        },
        SET_MOBILE: (state, mobile) => {
          state.mobile = mobile
        },
        SET_AVATAR: (state, avatar) => {
          state.avatar = avatar
        },
        SET_ROLES: (state, roles) => {
          state.roles = roles
        }
      },
      actions: {
        login: {
          root: true,
          handler ({ commit }, loginData) {
            const {
              username,
              password
            } = loginData
            return new Promise(async (resolve, reject) => {
              const loginModel = {
                username: username.trim(),
                password: password.trim()
              }
              const {
                code,
                data
              } = await userLogin(loginModel) as HttpResponse
              if (code === 200) {
                commit('SET_TOKEN', data)
                setToken(data)
                resolve('登录成功')
              } else {
                reject(new Error('登录失败'))
              }
            })
          }
        },
        getInfo: {
          root: true,
          handler ({ commit }) {
            return new Promise(async (resolve, reject) => {
              const {
                code,
                data
              } = await userInfo() as HttpResponse
              if (code === 200) {
                data || reject(new Error('验证失败，请重新登录'))
                const {
                  roles,
                  id,
                  petName,
                  realName,
                  email,
                  mobile,
                  avatar,
                  introduction
                } = data
                if (!roles || roles.length <= 0) {
                  reject(new Error('您的用户没有任务的权限'))
                } else {
                  commit('SET_ROLES', roles)
                  commit('SET_AID', id)
                  commit('SET_PetNAME', petName)
                  commit('SET_RealNAME', realName)
                  commit('SET_EMAIL', email)
                  commit('SET_MOBILE', mobile)
                  commit('SET_AVATAR', avatar)
                  commit('SET_INTRODUCTION', introduction)
                  resolve(data)
                }
              } else {
                reject(new Error('获取用户信息失败'))
              }
            })
          }
        }
      }
    }
  }
})

export default store
