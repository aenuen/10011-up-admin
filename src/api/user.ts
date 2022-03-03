import axios, { ResponseData } from '@/libs/axios'
import { AxiosPromise } from 'axios'
interface LoginData {
  username: string;
  password: string
}
export const userLogin = (loginData: LoginData): AxiosPromise<ResponseData> => {
  return axios.post('/user/login', { ...loginData })
}
