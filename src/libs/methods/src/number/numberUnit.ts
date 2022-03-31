/**
 * @description 数字以单位表示
 * @param {Number} number
 * @param {Number} fixed 四舍五入
 * @returns {String}
 */
export const numberUnit = (number: number, fixed: number): string => {
  const head = number < 0 ? '-' : ''
  number = ~~Math.abs(number)
  fixed = ~~Math.abs(fixed)
  const result =
    number < 1e3
      ? number
      : number >= 1e3 && number < 1e4
      ? (number / 1e3).toFixed(fixed) + '千'
      : number >= 1e4 && number < 1e8
      ? (number / 1e4).toFixed(fixed) + '万'
      : number >= 1e8
      ? (number / 1e8).toFixed(fixed) + '亿'
      : number
  return head + result
}
