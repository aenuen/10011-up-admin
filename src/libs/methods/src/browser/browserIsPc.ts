import { browserIsMobile } from './browserIsMobile'
/**
 * @description 浏览器是否电脑浏览器
 * @returns {Boolean}
 */
export const browserIsPc = (): boolean => !browserIsMobile()
