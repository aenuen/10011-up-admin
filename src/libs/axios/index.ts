import HttpRequest from './request'
import { apiBaseUrl } from './settings'
export interface ResponseData {code: number, msg: string, data?: any}
export default new HttpRequest(apiBaseUrl)
