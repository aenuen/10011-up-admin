import { timeNewDate } from '../time/timeNewDate'
import { dateApart } from './dateApart'
import { dateMonthFoot } from './dateMonthFoot'
import { dateOneWeek } from './dateOneWeek'

/**
 * @description 获取日期一月的日期
 * @param {*} [date]
 * @returns {Array|Null}
 */
export const dateOneMonth = (date: any): any[] | null => {
  date = date || new Date()
  const theObject = timeNewDate(date)
  if (theObject) {
    const array = []
    const monthFoot = dateMonthFoot(date)
    const oneWeek = dateOneWeek(monthFoot) as string[]
    array.push(oneWeek)
    for (let i = 0; i < 6; i++) {
      const apart = dateApart(oneWeek[0], -(i * 7 + 1))
      if (new Date(String(apart)).getMonth() + 1 !== theObject.getMonth() + 1) {
        break
      }
      const theWeek = dateOneWeek(apart)
      array.unshift(theWeek)
    }
    return array
  } else {
    return null
  }
}
