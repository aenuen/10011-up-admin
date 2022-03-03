// noinspection JSUnusedLocalSymbols

import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios'

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

  // get (url: string, config: AxiosRequestConfig) {
  //   const options = Object.assign({ method: 'get', url }, config)
  //   this.request(options)
  // }
  //
  // post (url: string, data: any) {
  //   this.request({ method: 'post', url, data })
  // }

  private interceptors (instance: AxiosInstance) {
    instance.interceptors.request.use((config: AxiosRequestConfig) => {
      return config
    }, (error) => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use((res: AxiosResponse) => {
      const { data } = res
      const { code, msg } = data
      if (code !== 0) {
        console.error(msg)
      }
      return res
    }, (error) => {
      return Promise.reject(error)
    })
  }

  private mergeConfig (options: AxiosRequestConfig): AxiosRequestConfig {
    return Object.assign({ baseURL: this.baseUrl }, options)
  }
}

export default HttpRequest
