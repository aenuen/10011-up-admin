import { timeNewDate } from './timeNewDate'

/**
 * @description 获取时间戳
 * @param {*} [value]
 * @returns {Number|Null}
 */
export const timeStamp = (value: any) => {
  const theNewDate = value ? timeNewDate(value) : new Date()
  return theNewDate ? ~~(theNewDate.getTime() / 1000).toFixed(0) : null
}
