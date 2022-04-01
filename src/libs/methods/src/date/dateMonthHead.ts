import { timeNewDate } from '../time/timeNewDate'
import { timeFormat } from '../time/timeFormat'
import { H_MH } from '../time/timeText'

/**
 * @description 获取日期的月头日期
 * @param {*} [date]
 * @returns {String|Null}
 */
export const dateMonthHead = (date: any): string | null => {
  date = date || new Date()
  const theObject = timeNewDate(date)
  return theObject ? timeFormat(theObject, H_MH, true) : null
}
