import { addressBarHttp } from './addressBarHttp'
import { addressBarHost } from './addressBarHost'
/**
 * @description 获取http(s)://域名：端口
 * @returns {string}
 */
export const addressBarHead = (): string =>
  `${addressBarHttp()} + ${addressBarHost()}`
