import { timeNewDate } from '../time/timeNewDate'
import { dateApart } from './dateApart'
import { dateWeekSunday } from './dateWeekSunday'

/**
 * @description 获取日期一周的日期
 * @param {*} [date]
 * @returns {Array|Null}
 */
export const dateOneWeek = (date: any): string[] | null => {
  date = date || new Date()
  const theObject = timeNewDate(date)
  if (theObject !== null) {
    const array = []
    const sunday = dateWeekSunday(date)
    for (let i = 0; i < 7; i++) {
      const apart = dateApart(sunday, i) as string
      array.push(apart)
    }
    return array
  } else {
    return null
  }
}
