import { timeNewDate } from '../time/timeNewDate'
import { timeFormat } from '../time/timeFormat'
import { H_DATE } from '../time/timeText'

/**
 * @description 计算日期number天后(前)的日期（正数为后，负数为前）
 * @param {*} date 要计算的日期
 * @param {Number} number number天后(前)
 * @returns {String|Null}
 */
export const dateApart = (date: any, number: number): string | null => {
  const theNewDate = timeNewDate(date)
  return theNewDate
    ? timeFormat(~~(+theNewDate / 1000) + number * 24 * 60 * 60, H_DATE, true)
    : null
}
