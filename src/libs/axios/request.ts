import axios, { AxiosInstance, AxiosRequestConfig, Canceler } from 'axios'
import store from '@/store'
import { errorHandle } from './errorHandle'
import { publicPath } from './settings'
const CancelToken = axios.CancelToken
class Request {
  private readonly baseUrl: string
  private readonly pending: Record<string, Canceler>

  constructor (baseUrl: string) {
    this.baseUrl = baseUrl
    this.pending = {}
  }

  getInsideConfig () {
    return {
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      timeout: 10000
    }
  }

  removePending (key: string, isRequest = false) {
    if (this.pending[key] && isRequest) {
      this.pending[key]('取消重复请求')
    }
    delete this.pending[key]
  }

  interceptors (instance: AxiosInstance) {
    instance.interceptors.request.use((config) => { // 请求拦截器
      let isPublic = false
      publicPath.forEach((path) => {
        isPublic = isPublic || path.test(config.url || '')
      })
      const token = store.state.token
      if (!isPublic && token) {
        // config.headers.Authorization = `Bearer ${token}`
      }
      const key = `${config.url}&${config.method}`
      this.removePending(key, true)
      config.cancelToken = new CancelToken((c) => {
        this.pending[key] = c
      })
      return config
    }, (err) => {
      // debugger
      errorHandle(err)
      // Do something with request error
      return Promise.reject(err)
    })

    instance.interceptors.response.use((res) => { // 响应拦截器
      const key = res.config.url + '&' + res.config.method
      this.removePending(key)
      if (res.status === 200) {
        return Promise.resolve(res.data)
      } else {
        return Promise.reject(res)
      }
    }, (err) => {
      errorHandle(err)
      return Promise.reject(err)
    })
  }

  request (options: AxiosRequestConfig) { // 请求
    const instance = axios.create()
    const newOptions = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance)
    return instance(newOptions)
  }

  get (url: string, config?: AxiosRequestConfig) { // get请求
    const options = Object.assign({ method: 'get', url: url }, config)
    return this.request(options)
  }

  post (url: string, data: any) { // post请求
    return this.request({ method: 'post', url: url, data: data })
  }
}

export default Request
