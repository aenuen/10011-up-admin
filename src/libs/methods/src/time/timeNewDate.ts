import { typeDate } from '../type/typeDate'
import { typeNumber } from '../type/typeNumber'
import { typeString } from '../type/typeString'
import { formatAllNumber } from '../format/formatAllNumber'

/**
 * @description 获取时间对象
 * @param {*} time
 * @returns {Date|Null}
 */
export const timeNewDate = (time: any): Date => {
  if (time) {
    let theNewDate
    if (typeDate(time)) {
      theNewDate = time
    } else {
      if (typeString(time)) {
        time = formatAllNumber(String(time))
          ? time
          : String(time).replace(/[.|-]/gm, '/')
      }
      if (typeNumber(time) && String(time).length === 10) {
        time *= 1000
      }
      theNewDate = typeNumber(time) ? new Date(+time) : new Date(String(time))
    }
    return typeDate(theNewDate) ? theNewDate : null
  } else {
    return new Date()
  }
}
