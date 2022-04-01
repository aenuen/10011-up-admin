/**
 * @desc 保证字符串尾部没有指定字符
 * @param {Number|String} string
 * @param {Number|String} assign
 * @returns {Number|String}
 */
export const ensureFootNone = (
  string: number | string,
  assign: number | string
): string => {
  string = String(string)
  assign = String(assign)
  const strLen = string.length
  const theLen = assign.length
  return string.substr(-theLen) === assign
    ? ensureFootNone(string.substr(0, strLen - theLen), assign)
    : string
}
