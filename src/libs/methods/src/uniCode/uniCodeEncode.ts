/**
 * @description uniCode编码
 * @param {String} string
 * @returns {String}
 */
export const uniCodeEncode = (string: string): string => {
  const array = []
  for (let i = 0; i < string.length; i++) {
    array[i] = ('00' + string.charCodeAt(i).toString(16)).slice(-4)
  }
  return '\\u' + array.join('\\u')
}
