import { createStore } from 'vuex'
import { getToken, setToken } from '@/libs/token'
import { HttpResponse } from '@/libs/axios'
import { userLogin, userInfo } from '@/api/user'

const store = createStore({
  modules: {
    user: {
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
      getters: {
        token: state => state.token
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
            const { username, password } = loginData
            return new Promise(async (resolve, reject) => {
              const loginModel = { username: username.trim(), password: password.trim() }
              const { code, data } = await userLogin(loginModel) as HttpResponse
              if (code === 200) {
                commit('SET_TOKEN', data.token)
                setToken(data.token)
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
          }
        }
      }
    }
  }
})

export default store
