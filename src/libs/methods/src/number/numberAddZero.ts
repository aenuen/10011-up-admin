/**
 * @description 数字位数不足前补零
 * @param {Number|String} number
 * @param {Number|String} length
 * @returns {String}
 */
export const numberAddZero = (number: number, length: number): string =>
  String(~~Math.abs(number)).padStart(~~Math.abs(length), '0')
