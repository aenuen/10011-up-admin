/**
 * @description 以assign分隔array组成新的string
 * @param {Array} array 要分隔的数组
 * @param {String} char
 * @returns {String}
 */
export const arrayToStringChar = (array: any[], char: string): string =>
  array.join(String(char))
