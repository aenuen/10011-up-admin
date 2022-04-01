import { timeObject } from '../time/timeObject'

/**
 * @description 获取日期的月尾日期
 * @param {*} [date]
 * @returns {String|Null}
 */
export const dateMonthFoot = (date: any): string | null => {
  date = date || new Date()
  const theObject = timeObject(date)
  if (theObject !== null) {
    const year = String(theObject.y).padStart(4, '0')
    const month = String(theObject.m).padStart(2, '0')
    const day = new Date(+year, +month, 0).getDate()
    return `${year}-${month}-${day}`
  } else {
    return null
  }
}
