import { typeArray } from '../type/typeArray'
import { aoKeyName } from './aoKeyName'

/**
 * @description 反序
 * @param {Array|Object} ao array或object
 * @returns {Array|Object}
 */
export const aoReverse = (
  ao: any[] | Record<string | number | symbol, any>
) => {
  const result: any[] | Record<string | number | symbol, any> = typeArray(ao)
    ? []
    : {}
  const keyArray = aoKeyName(ao)
  keyArray.reverse()
  for (const key in keyArray) {
    typeArray(ao)
      ? result.push(ao[keyArray[key]])
      : (result[keyArray[key]] = ao[keyArray[key]])
  }
  return result
}
