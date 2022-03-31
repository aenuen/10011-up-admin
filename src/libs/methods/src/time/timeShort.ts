import { H_H_I, H_Y_M_D_H_I } from './timeText'
import { timeFormat } from './timeFormat'
import { timeDifference } from './timeDifference'
import { timeObject } from './timeObject'

/**
 * @description 短时间
 * @param {*} time
 * @returns {Null|String}
 */
export const timeShort = (time: any) => {
  const theObject = time ? timeObject(time) : timeObject(new Date())
  if (theObject !== null) {
    const nowObject = timeObject(new Date())
    const dateOne = `${theObject?.y}-${theObject?.m}-${theObject?.d}`
    const dateTwo = `${nowObject?.y}-${nowObject?.m}-${nowObject?.d}`
    const diff = +(timeDifference(dateOne, dateTwo, false) as number)
    const oneDaySeconds = 86400 // 一天秒数
    return diff === oneDaySeconds * 2
      ? '后天 ' + timeFormat(time, H_H_I, true)
      : diff === oneDaySeconds
      ? '明天 ' + timeFormat(time, H_H_I, true)
      : diff === 0
      ? timeFormat(time, H_H_I, true)
      : diff === -oneDaySeconds
      ? '昨天 ' + timeFormat(time, H_H_I, true)
      : diff === -oneDaySeconds * 2
      ? '前天 ' + timeFormat(time, H_H_I, true)
      : theObject.y === nowObject?.y
      ? timeFormat(time, H_H_I, true)
      : timeFormat(time, H_Y_M_D_H_I, true)
  } else {
    return null
  }
}
