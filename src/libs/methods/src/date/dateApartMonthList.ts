import { timeObject } from '../time/timeObject'

/**
 * @description 获取一个时间至number个月前(后)的所有年月的数据列表
 * @param {*} [time] 时间
 * @param {Number|String} number
 * @returns {Array|Null}
 */
export const dateApartMonthList = (
  time: any,
  number: number
): string[] | null => {
  time || new Date()
  const theObject = timeObject(time)
  if (theObject) {
    let y = +String(theObject.y).padStart(4, '0')
    let m = +String(theObject.m).padStart(2, '0')
    const array = []
    const big = number > 0
    number = Math.abs(number)
    array.push(`${y}-${m}`)
    for (let i = 0; i < +number; i++) {
      if (big) {
        m++
        if (m >= 13) {
          y += 1
          m = 1
        }
      } else {
        m--
        if (m <= 0) {
          y -= 1
          m = 12
        }
      }
      const Y = `${y}`.padStart(4, '0')
      const M = `${m}`.padStart(2, '0')
      array.push(`${Y}-${M}`)
    }
    return array
  } else {
    return null
  }
}
