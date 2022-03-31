import { typeNumber } from './typeNumber'
/**
 * @description 是否float类型
 * @param {*} value
 * @returns {Boolean}
 */
export const typeFloat = (value: any): boolean =>
  typeNumber(value) && value % 1 !== 0
