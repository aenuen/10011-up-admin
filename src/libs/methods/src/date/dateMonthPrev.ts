import { timeNewDate } from '../time/timeNewDate'
import { timeGetYear } from '../time/timeGetYear'
import { timeGetMonth } from '../time/timeGetMonth'
import { dateApart } from './dateApart'
import { dateMonthHead } from './dateMonthHead'

/**
 * @description 获取日期上月的年月
 * @param {*} [date]
 * @param {Boolean} [isResultArray] 是否返回数组形式，若false则返回字符串，默认为false
 * @returns {Array|String|Null}
 */
export const dateMonthPrev = (
  date: any,
  isResultArray: boolean
): string | string[] | null => {
  date = date || new Date()
  const theObject = timeNewDate(date)
  if (theObject) {
    const apart = dateApart(dateMonthHead(date), -1)
    const year = timeGetYear(apart) as string
    const month = timeGetMonth(apart) as string
    isResultArray = isResultArray || false
    return isResultArray ? [year, month] : `${year}-${month}`
  } else {
    return null
  }
}
