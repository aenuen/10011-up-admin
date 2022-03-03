import HttpRequest from './request'
import { apiBaseUrl } from './settings'
export * from './interface'
export default new HttpRequest(apiBaseUrl)
