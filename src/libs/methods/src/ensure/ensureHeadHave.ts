/**
 * @desc 保证字符串头部含有指定字符串
 * @param {Number|String} string
 * @param {Number|String} assign
 * @returns {Number|String}
 */
export const ensureHeadHave = (
  string: number | string,
  assign: number | string
): string => {
  string = String(string)
  assign = String(assign)
  return string.substr(0, assign.length) === assign ? string : assign + string
}
