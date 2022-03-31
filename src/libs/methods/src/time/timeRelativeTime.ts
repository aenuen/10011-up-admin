import { H_DATETIME, H_M_D_H_I } from './timeText'
import { timeFormat } from './timeFormat'
import { timeIsEarly } from './timeIsEarly'
import { timeStamp } from './timeStamp'

/**
 * @param {*} time 时间
 * @returns {String} 相对时间字符串
 */
export const timeRelativeTime = (time: any): string | null => {
  const theTimeStamp = timeStamp(time)
  if (theTimeStamp) {
    const nowTimeStamp = Math.floor(Date.now() / 1000) // 获取当前时间时间戳
    const isEarly = timeIsEarly(theTimeStamp, nowTimeStamp) // 判断传入时间戳是否早于当前时间戳
    let diff = nowTimeStamp - theTimeStamp // 获取两个时间戳差值
    if (!isEarly) {
      // 如果isEarly为false则差值取反
      diff = -diff
    }
    const dirStr = isEarly ? '前' : '后'
    let resStr
    if (diff <= 59) {
      // 少于等于59秒
      resStr = diff + '秒' + dirStr
    } else if (diff > 59 && diff <= 3599) {
      // 多于59秒，少于等于59分钟59秒
      resStr = Math.floor(diff / 60) + '分钟' + dirStr
    } else if (diff > 3599 && diff <= 86399) {
      // 多于59分钟59秒，少于等于23小时59分钟59秒
      resStr = Math.floor(diff / 3600) + '小时' + dirStr
    } else if (diff > 86399 && diff <= 2623859) {
      // 多于23小时59分钟59秒，少于等于29天59分钟59秒
      resStr = Math.floor(diff / 86400) + '天' + dirStr
    } else if (diff > 2623859 && diff <= 31567859 && isEarly) {
      // 多于29天59分钟59秒，少于364天23小时59分钟59秒，且传入的时间戳早于当前
      resStr = timeFormat(theTimeStamp, H_M_D_H_I, true)
    } else {
      resStr = timeFormat(theTimeStamp, H_DATETIME, true)
    }
    return resStr
  } else {
    return null
  }
}
