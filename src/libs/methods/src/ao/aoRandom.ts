import { aoCleanKeyOne } from './aoCleanKeyOne'

/**
 * @description 随机取ao中number个值
 * @param {Array|Object} ao array或object
 * @param {Number} number 取几个
 * @returns {Array}
 */
export const aoRandom = (
  ao: any[] | Record<string | number | symbol, any>,
  number: number
): any[] => {
  number = ~~Math.abs(number)
  const array = aoCleanKeyOne(ao)
  const result = []
  for (let i = 0; i < number && array.length > 0; i++) {
    const r = Math.floor(Math.random() * array.length)
    result[i] = array[r]
    array.splice(r, 1)
  }
  return result
}
