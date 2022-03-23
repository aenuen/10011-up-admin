import axios from '@/libs/axios'
export interface UserLoginFace {
  username: string
  password: string
  authCode?: string
  sid?: string
}
export const userLogin = (loginData: UserLoginFace) =>
  axios.post('/user/login', loginData)

export const userInfo = () => axios.get('/user/info')
