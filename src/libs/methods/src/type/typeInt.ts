import { typeNumber } from './typeNumber'
/**
 * @description 是否int类型
 * @param {*} value
 * @returns {Boolean}
 */
export const typeInt = (value: any): boolean =>
  typeNumber(value) && value % 1 === 0
