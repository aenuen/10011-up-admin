/**
 * @description 以指定字符分隔字符串组成新的数组
 * @param {Number|String} string 要分隔的字符串
 * @param {Number|String} char 指定字符
 * @returns {Array}
 */
export const stringToArrayChar = (string: string, char: string): string[] =>
  String(string).split(String(char))
