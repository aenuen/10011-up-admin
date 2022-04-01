import { browserUserAgent } from './browserUserAgent'

/**
 * @description 浏览器是否在数组中
 * @param {Array} array 要查询的数组
 * @returns {Boolean}
 */
export const browserWhetherInArray = (array: string[]): boolean => {
  return array.some(
    (value) => browserUserAgent().indexOf(value.toLowerCase()) > 0
  )
}
