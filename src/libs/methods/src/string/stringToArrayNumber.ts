/**
 * @description 以个数分隔字符串组成新的数组
 * @param {Number|String} string 要分隔的字符串
 * @param {Number|String} number 多少数量
 * @returns {Array}
 */
export const stringToArrayNumber = (
  string: string,
  number: number
): string[] => {
  string = String(string)
  number = ~~Math.abs(number)
  const array = []
  const length = Math.ceil(string.length / number)
  for (let i = 0; i < length; i++) {
    array.push(string.substr(i * number, number))
  }
  return array
}
