import { browserUserAgent } from './browserUserAgent'
/**
 * @description 浏览器是否手机浏览器
 * @returns {Boolean}
 */
export const browserIsMobile = (): boolean => /mobi/i.test(browserUserAgent())
