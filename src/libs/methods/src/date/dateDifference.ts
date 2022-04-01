import { timeNewDate } from '../time/timeNewDate'

/**
 * @description 两个日期时间相差多少天
 * @param {*} dateOne 日期一
 * @param {*} dateTwo 日期二
 * @param {Boolean} abs 绝对值
 * @returns {Number|Null}
 */
export const dateDifference = (
  dateOne: any,
  dateTwo: any,
  abs: boolean
): number | null => {
  const oneObject = timeNewDate(dateOne)
  const twoObject = timeNewDate(dateTwo)
  if (oneObject && twoObject) {
    abs = abs || false
    const result = ~~(
      (oneObject.getTime() - twoObject.getTime()) /
      (1000 * 24 * 60 * 60)
    )
    return abs ? Math.abs(result) : result
  } else {
    return null
  }
}
