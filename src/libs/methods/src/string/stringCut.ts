/**
 * @description 字符串截取
 * @param {Number|String} string 要截取的字符串
 * @param {number} number 截取数量
 * @returns {String}
 */
export const stringCut = (string: string, number: number): string => {
  number = ~~Math.abs(number)
  const have = String(string).substr(0, number - 1) + '…'
  const none = String(string).substr(0, number)
  return string.length > number ? have : none
}
