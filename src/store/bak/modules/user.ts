import { getToken, removeToken, setToken } from '@/libs/token'
import { userInfo, userLogin, UserLoginFace } from '@/api/user'
import { HttpResponse } from '@/libs/axios'
import { resetRouter } from '@/router'

const user: any = {
  namespaced: true,
  state: {
    aid: '',
    token: getToken(),
    realName: '',
    petName: '',
    email: '',
    mobile: '',
    avatar: '',
    introduction: '',
    roles: []
  },
  mutations: {
    SET_AID: (state:any, aid:string) => {
      state.aid = aid
    },
    SET_TOKEN: (state:any, token:string) => {
      state.token = token
    },
    SET_INTRODUCTION: (state:any, introduction:string) => {
      state.introduction = introduction
    },
    SET_RealNAME: (state:any, realName:string) => {
      state.realName = realName
    },
    SET_PetNAME: (state:any, petName:string) => {
      state.petName = petName
    },
    SET_EMAIL: (state:any, email:string) => {
      state.email = email
    },
    SET_MOBILE: (state:any, mobile:string) => {
      state.mobile = mobile
    },
    SET_AVATAR: (state:any, avatar:string) => {
      state.avatar = avatar
    },
    SET_ROLES: (state:any, roles:string[]) => {
      state.roles = roles
    }
  },
  actions: {
    login ({ commit }:any, loginData:UserLoginFace) { // 用户登录
      const { username, password } = loginData
      return new Promise(async (resolve, reject) => {
        const loginModel = { username: username.trim(), password: password.trim() }
        const { code, data } = await userLogin(loginModel) as HttpResponse
        if (code === 200) {
          commit('SET_TOKEN', data)
          setToken(data)
          resolve('登录成功')
        } else {
          reject(new Error('登录失败'))
        }
      })
    },
    userInfo ({ commit }:any) { // 用户信息
      return new Promise(async (resolve, reject) => {
        const { code, data } = await userInfo() as HttpResponse
        if (code === 200) {
          data || reject(new Error('验证失败，请重新登录'))
          const { roles, id, petName, realName, email, mobile, avatar, introduction } = data
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
    },
    logout ({ commit, dispatch }:any) { // 用户登出
      return new Promise((resolve, reject) => {
        try {
          commit('SET_TOKEN', '') // 清空token
          commit('SET_ROLES', []) // 清空角色信息
          removeToken() // 移除token
          resetRouter() // 清除所有路由
          dispatch('tagsView/delAllViews', null, { root: true }) // 删除所有tagsView，重置访问的视图和缓存的视图
          resolve(true)
        } catch (e) {
          reject(e)
        }
      })
    },
    resetToken ({ commit }:any) { // 移除token
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resolve(true)
      })
    }
  }
}

export default user
