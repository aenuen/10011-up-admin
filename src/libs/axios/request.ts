import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios'
import store from '@/store'
import { getToken } from '@/libs/token'
import { ElMessage } from 'element-plus'

class HttpRequest {
  baseUrl: string

  constructor (apiBaseUrl:string) {
    this.baseUrl = apiBaseUrl
  }

  request (options: AxiosRequestConfig): AxiosPromise {
    const instance: AxiosInstance = axios.create()
    options = this.mergeConfig(options)
    this.interceptors(instance)
    return instance(options)
  }

  private mergeConfig (options: AxiosRequestConfig): AxiosRequestConfig {
    return Object.assign({ baseURL: this.baseUrl }, options)
  }

  private interceptors (instance: AxiosInstance) {
    instance.interceptors.request.use((config: AxiosRequestConfig) => {
      if (store.getters.token) {
        config.headers = {
          Authorization: `Bearer ${getToken()}`,
          'Content-Type': 'application/json',
          'cached-control': 'no-cache'
        }
      }
      return config
    }, (error) => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use((response: AxiosResponse) => {
      const res = response.data
      if (res.code !== 200) {
        const errMsg = res.msg || '请求失败！'
        ElMessage({ message: errMsg, type: 'error', duration: 5 * 1000 })
        return Promise.reject(new Error(errMsg))
      } else {
        return res
      }
    }, (error) => {
      return Promise.reject(error)
    })
  }

  get (url: string, config: AxiosRequestConfig) {
    const options = Object.assign({ method: 'get', url }, config)
    this.request(options)
  }

  post (url: string, data: any) {
    return this.request({ method: 'post', url, data })
  }
}

export default HttpRequest
