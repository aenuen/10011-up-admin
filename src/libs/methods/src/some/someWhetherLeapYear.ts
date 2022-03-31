/**
 * @description 是否闰年
 * @param {Number} year
 * @returns {Boolean}
 */
export const someWhetherLeapYear = (year: number | string) =>
  (+year % 4 === 0 && +year % 100 !== 0) || +year % 400 === 0
