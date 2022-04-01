import { typeArray } from '../type/typeArray'
import { aoCleanKeyOne } from './aoCleanKeyOne'

/**
 * @description 切片存储在一个新数组
 * @param {Array|Object} ao array或object
 * @param {Number} size 每个切片的大小
 * @returns {Array}
 */
export const aoChunk = (
  ao: any[] | Record<string | number | symbol, any>,
  size: number
): any[] => {
  const array = typeArray(ao) ? ao : aoCleanKeyOne(ao)
  const length = array.length
  size = ~~Math.abs(+size)
  if (length < 1 || size < 1) {
    return []
  } else {
    let index = 0
    let resIndex = 0
    const result = new Array(Math.ceil(length / size))
    while (index < length) {
      result[resIndex++] = array.slice(index, (index += size))
    }
    return result
  }
}
