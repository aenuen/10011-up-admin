import axios from '@/libs/axios'

export interface UserLoginFace {username: string;password: string}
export const userLogin = (loginData: UserLoginFace) => axios.post('/user/login', loginData)
