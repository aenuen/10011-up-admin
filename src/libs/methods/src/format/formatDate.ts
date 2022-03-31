import { someYearMonthDays } from '../some/someYearMonthDays'

/**
 * @description 是否 date 格式
 * @param {String} value
 * @returns {Boolean}
 */
export const formatDate = (value: string): boolean => {
  if (/^(\d{4})-(\d{2})-(\d{2})$/.test(String(value))) {
    const [y, m, d] = value.split('-')
    return +m > 0 && +m <= 12 && +d > 0 && +d <= someYearMonthDays(y, m)
  } else {
    return false
  }
}
