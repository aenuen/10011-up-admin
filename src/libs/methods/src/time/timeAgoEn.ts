import { somePluralize } from '../some/somePluralize'
import { H_DATETIME } from './timeText'
import { timeFormat } from './timeFormat'
import { timeStamp } from './timeStamp'

/**
 * @description 多少时间前（英文）
 * @param {*} time
 * @param {String} [format]
 * @param {Boolean} [zero] 是否加零，默认加零
 * @returns {Null|String}
 */
export const timeAgoEn = (
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
      ? 'now'
      : diff < 3600
      ? somePluralize(~~(diff / 60), ' minute') + 'ago'
      : diff < 86400
      ? somePluralize(~~(diff / 3600), ' hour') + 'ago'
      : diff < 691200
      ? somePluralize(~~(diff / 86400), ' day') + 'ago'
      : timeFormat(time, format, zero)
  } else {
    return null
  }
}
