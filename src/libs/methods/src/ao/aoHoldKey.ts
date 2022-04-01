import { typeArray } from '../type/typeArray'
import { aoWhetherIn } from './aoWhetherIn'
import { aoKeyName } from './aoKeyName'

/**
 * @description 保留键，其它删除
 * @param {Array|Object} ao array或object
 * @param {Array|String} hold 要保留的键，可字符或数组
 * @returns {Array|Object}
 */
export const aoHoldKey = (
  ao: any[] | Record<string | number | symbol, any>,
  hold: any[] | string | number
) => {
  const holdAry = (typeArray(hold) ? hold : [hold]) as any[]
  const keyArray = aoKeyName(ao)
  const result: any[] | Record<string | number | symbol, any> = typeArray(ao)
    ? []
    : {}
  for (const key in holdAry) {
    if (aoWhetherIn(keyArray, holdAry[key], false)) {
      typeArray(ao)
        ? result.push(ao[holdAry[key]])
        : (result[holdAry[key]] = ao[holdAry[key]])
    }
  }
  return result
}
