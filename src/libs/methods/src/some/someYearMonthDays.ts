import { someFebruaryDays } from './someFebruaryDays'

/**
 * @description 某年某月的月天数
 * @param {Number} year
 * @param {Number} month
 * @returns {Number}
 */
export const someYearMonthDays = (
  year: number | string,
  month: number | string
) => {
  const monthDays = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][
    ~~String(month) - 1
  ]
  return monthDays || someFebruaryDays(~~String(year))
}
