import { timeNewDate } from '../time/timeNewDate'
import { dateApart } from './dateApart'

/**
 * @description 日期的周日日期
 * @param {*} [date]
 * @returns {String|Null}
 */
export const dateWeekSunday = (date: any): string | null => {
  date = date || new Date()
  const theNewDate = timeNewDate(date)
  if (theNewDate !== null) {
    const week = theNewDate.getDay()
    const ary = [0, -1, -2, -3, -4, -5, -6]
    return dateApart(theNewDate, ary[week])
  } else {
    return null
  }
}
