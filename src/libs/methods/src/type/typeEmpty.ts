import { typeFunction } from './typeFunction'
import { typeRegexp } from './typeRegexp'
/**
 * @description 是否empty类型
 * @param {*} value
 * @returns {Boolean}
 */
export const typeEmpty = (value: any): boolean =>
  !typeFunction(value) &&
  !typeRegexp(value) &&
  (value == null ||
    value === 'undefined' ||
    value.length === 0 ||
    JSON.stringify(value) === '{}')
