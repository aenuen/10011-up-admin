import { timeObject } from '../time/timeObject'

/**
 * @description 两个时间相差几个月
 * @param {*} timeOne 时间一
 * @param {*} timeTwo 时间二
 * @param {Boolean} [abs] 绝对值
 * @returns {Number}
 * **/
export const monthDifference = (timeOne: any, timeTwo: any, abs: boolean) => {
  abs = abs || true
  const oneObject = timeObject(timeOne)
  const twoObject = timeObject(timeOne)
  if (oneObject && twoObject) {
    const oneCount = oneObject.y * 12 + oneObject.m
    const twoCount = twoObject.y * 12 + twoObject.m
    const result = oneCount - twoCount
    return abs ? Math.abs(result) : result
  } else {
    return 0
  }
}
