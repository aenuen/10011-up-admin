import Request from './request'
import { apiBaseUrl } from './settings'
export interface HttpResponse {
  code:number;
  data:any;
  msg:string;
}
const axios = new Request(apiBaseUrl)
export default axios
