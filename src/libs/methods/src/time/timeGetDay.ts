import { timeObject } from './timeObject'

/**
 * @description 时间的日份
 * @param {*} [date]
 * @returns {String|Null}
 */
export const timeGetDay = (date: any): string | null => {
  date = date || new Date()
  const theObject = timeObject(date)
  return theObject ? String(theObject.d).padStart(2, '0') : null
}
