import { H_DATETIME } from './timeText'
import { timeFormat } from './timeFormat'
import { timeStamp } from './timeStamp'

/**
 * @description 多少时间前（中文）
 * @param {*} time
 * @param {String} [format]
 * @param {Boolean} [zero] 是否加零，默认加零
 * @returns {Null|String}
 */
export const timeAgoCn = (
  time: any,
  format: string,
  zero: boolean
): string | null => {
  const theTimeStamp = timeStamp(time) // 时间戳(10位)
  if (theTimeStamp !== null) {
    format = format || H_DATETIME
    zero = zero || true
    const nowTimeStamp = ~~(Date.now() / 1000) // 时间戳(10位)
    const diff = nowTimeStamp - theTimeStamp
    return diff < 60
      ? '刚刚'
      : diff < 3600
      ? ~~(diff / 60) + '分钟前'
      : diff < 86400
      ? ~~(diff / 3600) + '小时前'
      : diff < 691200
      ? ~~(diff / 86400) + '天前'
      : timeFormat(time, format, zero)
  } else {
    return null
  }
}
