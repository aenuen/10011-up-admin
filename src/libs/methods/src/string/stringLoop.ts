/**
 * @description 字符串循环
 * @param {Number|String} string 要循环的字符串
 * @param {Number} number 要循环的次数
 * @returns {String}
 */
export const stringLoop = (string: string, number: number): string => {
  number = ~~String(number)
  let result = ''
  for (let i = 0; i < number; i++) {
    result += String(string)
  }
  return result
}
