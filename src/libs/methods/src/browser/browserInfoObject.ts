import { browserUserAgent } from './browserUserAgent'

/**
 * @description 浏览器信息对象
 * @returns {{edge: Boolean, opera: Boolean, weiXin: Boolean, safari: Boolean, chrome: Boolean, android: Boolean, firefox: Boolean, ipad: Boolean, ie: Boolean, iphone: Boolean}}
 */
export const browserInfoObject = (): Record<string, boolean> => {
  const userAgent = browserUserAgent()
  return {
    android: userAgent.indexOf('android'.toLowerCase()) >= 0,
    iphone: userAgent.indexOf('iphone'.toLowerCase()) >= 0,
    ipad: userAgent.indexOf('ipad'.toLowerCase()) >= 0,
    ie: !!window.ActiveXObject || 'ActiveXObject' in window,
    edge: userAgent.indexOf('edge'.toLowerCase()) >= 0,
    safari: userAgent.indexOf('safari'.toLowerCase()) >= 0,
    firefox: userAgent.indexOf('firefox'.toLowerCase()) >= 0,
    chrome: userAgent.indexOf('chrome'.toLowerCase()) >= 0,
    opera: userAgent.indexOf('opera'.toLowerCase()) >= 0,
    weiXin: userAgent.indexOf('MicroMessenger'.toLowerCase()) >= 0
  }
}
