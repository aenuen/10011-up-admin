import axios, { ResponseData } from '@/libs/axios'
import { AxiosPromise } from 'axios'
interface LoginData {
  username: string;
  password: string
}
export const userLogin = (loginData: LoginData): AxiosPromise<ResponseData> => {
  return axios.request({
    url: '/user/login',
    data: loginData,
    method: 'POST'
  })
}
