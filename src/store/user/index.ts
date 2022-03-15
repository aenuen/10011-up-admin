import { defineStore } from 'pinia'
import { UserState } from './type'
import { getToken, setToken } from '@/libs/token'
import { HttpResponse } from '@/libs/axios'
import { userInfo, userLogin, UserLoginFace } from '@/api/user'
const theUserStore = defineStore('user', {
  state: (): UserState => ({
    aid: '',
    token: getToken(),
    realName: '',
    petName: '',
    email: '',
    mobile: '',
    avatar: '',
    introduction: '',
    roles: []
  }),
  getters: {
    userInfo (state: UserState): UserState {
      return { ...state }
    }
  },
  actions: {
    setInfo (partial: Partial<UserState>) {
      this.$patch(partial)
    },
    setToken (token: string) {
      this.token = token
    },
    login (loginData:UserLoginFace) { // 用户登录
      const { username, password } = loginData
      return new Promise(async (resolve, reject) => {
        const loginModel = { username: username.trim(), password: password.trim() }
        const { code, data } = await userLogin(loginModel) as HttpResponse
        if (code === 200) {
          setToken(data)
          this.setToken(data)
          resolve('登录成功')
        } else {
          reject(new Error('登录失败'))
        }
      })
    },
    userInfo () {
      return new Promise(async (resolve, reject) => {
        const { code, data } = await userInfo() as HttpResponse
        if (code === 200) {
          data || reject(new Error('验证失败，请重新登录'))
          const { roles } = data
          if (!roles || roles.length <= 0) {
            reject(new Error('您的账号中没有任何的权限'))
          } else {
            this.setInfo(data)
            resolve(data)
          }
        } else {
          reject(new Error('获取用户信息失败'))
        }
      })
    }
  }
})

export default theUserStore
