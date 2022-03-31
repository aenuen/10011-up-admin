import { timeObject } from './timeObject'

/**
 * @description 时间的年份
 * @param {*} [date]
 * @returns {String|Null}
 */
export const timeGetYearMonth = (date: any): string | null => {
  date = date || new Date()
  const theObject = timeObject(date)
  return theObject
    ? `${String(theObject.y).padStart(4, '0')}-${String(theObject.m).padStart(
        2,
        '0'
      )}`
    : null
}
