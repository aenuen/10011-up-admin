import { timeObject } from './timeObject'

/**
 * @description 时间的周几
 * @param {*} [date]
 * @returns {String|Null}
 */
export const timeGetWeek = (date: any): number | null => {
  date = date || new Date()
  const theObject = timeObject(date)
  return theObject ? theObject?.w : null
}
