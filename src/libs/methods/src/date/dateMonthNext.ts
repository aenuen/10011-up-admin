import { timeNewDate } from '../time/timeNewDate'
import { timeGetYear } from '../time/timeGetYear'
import { timeGetMonth } from '../time/timeGetMonth'
import { dateApart } from './dateApart'
import { dateMonthFoot } from './dateMonthFoot'

/**
 * @description 获取日期下月的年月
 * @param {*} [date]
 * @param {Boolean} [isResultArray] 是否返回数组形式，若false则返回字符串，默认为false
 * @returns {String|Array|Null}
 */
export const dateMonthNext = (
  date: any,
  isResultArray: boolean
): string | string[] | null => {
  date = date || new Date()
  const theObject = timeNewDate(date)
  if (theObject !== null) {
    const next = dateApart(dateMonthFoot(date), 1)
    const year = timeGetYear(next) as string
    const month = timeGetMonth(next) as string
    isResultArray = isResultArray || false
    return isResultArray ? [year, month] : `${year}-${month}`
  } else {
    return null
  }
}
