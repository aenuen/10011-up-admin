/**
 * @description 字符串中是否含有指定的字符（串）
 * @param {String} string
 * @param {String} assign
 * @returns {Boolean}
 */
export const haveAssign = (string: string, assign: string): boolean =>
  String(string).indexOf(String(assign)) >= 0
