import { typeInt } from './typeInt'
/**
 * @description 是否intMinus类型
 * @param {*} value
 * @returns {Boolean}
 */
export const typeIntMinus = (value: any): boolean => typeInt(value) && value < 0
