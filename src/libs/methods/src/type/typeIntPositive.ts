import { typeInt } from './typeInt'
/**
 * @description  是否intPositive类型
 * @param {*} value
 * @returns {Boolean}
 */
export const typeIntPositive = (value: any): boolean =>
  typeInt(value) && value > 0
