import { timeNewDate } from './timeNewDate'

/**
 * @param {*} theTime 传入的时间
 * @param {*} [nowTime] 当前时间时间
 * @returns {Boolean|Null} 传入的时间是否早于当前时间
 */
export const timeIsEarly = (theTime: any, nowTime: any): boolean | null => {
  const theNewDate = timeNewDate(theTime)
  const nowNewDate = timeNewDate(nowTime) || new Date()
  if (theNewDate !== null && nowNewDate !== null) {
    const theTimeStamp = theNewDate.getTime()
    const nowTimeStamp = nowNewDate.getTime()
    return theTimeStamp < nowTimeStamp
  } else {
    return null
  }
}
