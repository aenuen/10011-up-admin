import { timeObject } from './timeObject'

/**
 * @description 时间的月份
 * @param {*} [date]
 * @returns {String|Null}
 */
export const timeGetMonth = (date: any): string | null => {
  date = date || new Date()
  const theObject = timeObject(date)
  return theObject ? String(theObject.m).padStart(2, '0') : null
}
