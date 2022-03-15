import { defineStore } from 'pinia'
import { getToken, removeToken, setToken } from '@/libs/token'
import { HttpResponse } from '@/libs/axios'
import { userInfo, userLogin, UserLoginFace } from '@/api/user'
import { resetRouter } from '@/router'

export interface UserFace {
  aid?: string,
  token?: string,
  realName?: string,
  petName?: string,
  email?: string,
  mobile?: string,
  avatar?: string,
  introduction?: string,
  roles?: string[];
}

const theUserStore = defineStore('user', {
  state: (): UserFace => ({
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
    userInfo (state: UserFace): UserFace {
      return { ...state }
    }
  },
  actions: {
    setInfo (partial: Partial<UserFace>) { // 更新state
      this.$patch(partial)
    },
    setToken (token: string) { // 设置token
      this.token = token
    },
    setRoles (roles:string[]) { // 设置角色
      this.roles = roles
    },
    cleanData () { // 清除数据
      return new Promise(resolve => {
        this.setToken('')
        removeToken()
        resetRouter()
        this.setRoles([])
        resolve(true)
      })
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
      return new Promise(async (resolve, reject) => { // 用户信息
        const { code, data } = await userInfo() as HttpResponse
        if (code === 200) {
          data || reject(new Error('验证失败，请重新登录'))
          const { id, petName, realName, email, mobile, avatar, introduction, roles } = data
          if (!roles || roles.length <= 0) {
            reject(new Error('您的账号中没有任何的权限'))
          } else {
            this.setInfo({ aid: id, petName, realName, email, mobile, avatar, introduction, roles })
            resolve(data)
          }
        } else {
          reject(new Error('获取用户信息失败'))
        }
      })
    },
    logout () { // 用户登出
      return new Promise((resolve, reject) => {
        try {
          this.cleanData()
          resolve(true)
        } catch (e) {
          reject(e)
        }
      })
    }
  }
})

export default theUserStore
