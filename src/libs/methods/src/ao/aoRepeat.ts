import { typeArray } from '../type/typeArray'
import { aoWhetherIn } from './aoWhetherIn'

/**
 * @description 重复值
 * @param {Array|Object} ao array或object
 * @param {Number} number 选项：1:不重复值的ao,2:不重复的键值,3:重复的键值
 * @returns {Array|Object}
 */
export const aoRepeat = (
  ao: any[] | Record<string | number | symbol, any>,
  number: number
): any[] | Record<string | number | symbol, any> => {
  number = ~~Math.abs(number)
  const a: any[] | Record<string | number | symbol, any> = typeArray(ao)
    ? []
    : {}
  const b = []
  const c = []
  for (const key in ao) {
    if (aoWhetherIn(a, ao[key], false)) {
      c.push(key)
    } else {
      b.push(key)
      typeArray(ao) ? a.push(ao[key]) : (a[key] = ao[key])
    }
  }
  return +number === 1 ? a : +number === 2 ? b : c
}
