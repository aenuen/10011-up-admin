import { typeNumber } from './typeNumber'

/**
 * @description 是否string类型
 * @param {*} value
 * @returns {Boolean}
 */
export const typeString = (value: any): boolean =>
  Object.prototype.toString.call(value).toLowerCase() === '[object string]' ||
  typeNumber(value)
