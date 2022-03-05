import axios from '@/libs/axios'

interface LoginData {username: string;password: string}
export const userLogin = (loginData: LoginData) => axios.post('/user/login', loginData)
