import { typeArray } from '../type/typeArray'
import { typeObject } from '../type/typeObject'

/**
 * @desc 清除键值-全部
 * @param {Array|Object} ao array或object
 * @returns {Array}
 */
export const aoCleanKeyAll = (
  ao: any[] | Record<string | number | symbol, any>
): any[] => {
  const result = []
  let count = 0
  for (const key in ao) {
    result[count] =
      typeArray(ao[key]) || typeObject(ao[key])
        ? aoCleanKeyAll(ao[key])
        : ao[key]
    count++
  }
  return result
}
