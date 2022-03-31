import { timeObject } from '../time/timeObject'
import { timeGetWeek } from '../time/timeGetWeek'
import { weekAryCn } from './weekAryCn'
import { weekAryEn } from '@/libs/methods/src/week/weekAryEn'

/**
 * @description 根据时间计算周几的中文
 * @param {*} time 时间
 * @param {boolean} [isWeek] 是否使用周
 * @returns {Null|String}
 */
export const weekGetCn = (time: any, isWeek = false) => {
  const theObject = timeObject(time)
  if (theObject !== null) {
    const number = timeGetWeek(time)
    if (number !== null && number < weekAryEn.length && number > 0) {
      const week = isWeek ? '周' : '星期'
      return `${week}${weekAryCn[number]}`
    } else {
      return null
    }
  } else {
    return null
  }
}
