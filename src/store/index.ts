import { createStore } from 'vuex'
import { getToken, setToken } from '@/libs/token'
import { userLogin } from '@/api/user'
import { HttpResponse } from '@/libs/axios'

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
        SET_TOKEN: (state, token) => {
          state.token = token
        }
      },
      actions: {
        login: {
          root: true,
          handler ({ commit }, userInfo) {
            const { username, password } = userInfo
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
            commit('SET_ROLES', '1')
          }
        }
      }
    }
  }
})

export default store
