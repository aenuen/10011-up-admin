import { typeArray } from '../type/typeArray'
import { aoWhetherIn } from './aoWhetherIn'

/**
 * @description 删除值
 * @param {Array|Object} ao array或object
 * @param {*} value 要删除的值
 * @returns {Array|Object}
 */
export const aoDeleteValue = (
  ao: any[] | Record<string | number | symbol, any>,
  value: any
) => {
  const valueAry = (typeArray(value) ? value : [value]) as any[]
  const result: any[] | Record<string | number | symbol, any> = typeArray(ao)
    ? []
    : {}
  for (const i in ao) {
    if (!aoWhetherIn(valueAry, ao[i], true)) {
      typeArray(ao) ? result.push(ao[i]) : (result[i] = ao[i])
    }
  }
  return result
}
