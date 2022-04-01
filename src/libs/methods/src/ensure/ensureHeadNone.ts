/**
 * @desc 保证字符串头部没有指定字符串
 * @param {Number|String} string
 * @param {Number|String} assign
 * @returns {Number|String}
 */
export const ensureHeadNone = (
  string: number | string,
  assign: number | string
): string => {
  string = String(string)
  assign = String(assign)
  const length = assign.length
  return string.substr(0, length) === assign
    ? ensureHeadNone(string.substr(length), assign)
    : string
}
