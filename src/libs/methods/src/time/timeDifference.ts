import { timeNewDate } from './timeNewDate'

/**
 * @description 两个时间的时间差
 * @param {*} timeOne
 * @param {*} timeTwo
 * @param {Boolean} [abs] 绝对值
 * @returns {Number|Null}
 */
export const timeDifference = (
  timeOne: any,
  timeTwo: any,
  abs: boolean
): number | null => {
  const oneNewDate = timeNewDate(timeOne)
  const twoNewDate = timeNewDate(timeTwo)
  if (oneNewDate !== null && twoNewDate !== null) {
    abs = abs || false
    const result = ~~((oneNewDate.getTime() - twoNewDate.getTime()) / 1000)
    return abs ? Math.abs(result) : result
  } else {
    return null
  }
}
