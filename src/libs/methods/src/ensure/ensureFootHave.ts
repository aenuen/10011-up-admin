/**
 * @desc 保证字符串尾部含有指定字符
 * @param {Number|String} string
 * @param {Number|String} assign
 * @returns {Number|String}
 */
export const ensureFootHave = (
  string: number | string,
  assign: number | string
): string => {
  string = String(string)
  assign = String(assign)
  return string.substr(-string.length) === assign ? string : string + assign
}
