import { timeObject } from '../time/timeObject'
import { someYearMonthDays } from '../some/someYearMonthDays'

/**
 * @description 获取number个月后（前）的日期，number可为正可为负
 * @param {*} [time] 时间
 * @param {Number} number 几个月后（前）
 * @returns {Null|String}
 */
export const dateApartMonth = (time: any, number: number): string | null => {
  time = time || new Date()
  const theObject = timeObject(time)
  if (theObject) {
    const totalMonths = +theObject.y * 12 + +theObject.m + +number
    let day = theObject.d
    let year = Math.floor(totalMonths / 12)
    let month = totalMonths % 12
    if (month === 0) {
      year = year - 1
      month = 12
    }
    const monthDays = someYearMonthDays(year, month)
    day = day > monthDays ? monthDays : day
    const Year = String(year).padStart(4, '0')
    const Month = String(month).padStart(2, '0')
    const Day = String(day).padStart(2, '0')
    return `${Year}-${Month}-${Day}`
  } else {
    return null
  }
}
