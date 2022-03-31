import { someWhetherLeapYear } from './someWhetherLeapYear'

/**
 * @description 二月的天数
 * @param {Number} year
 * @returns {Number}
 */
export const someFebruaryDays = (year: number | string) =>
  someWhetherLeapYear(~~String(year)) ? 29 : 28
