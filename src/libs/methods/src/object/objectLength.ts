/**
 * @description 获取object的长度
 * @param {Object} object
 * @returns {Number}
 */
export const objectLength = (
  object: Record<string | number | symbol, any>
): number => {
  let len = 0
  Object.keys(object).forEach(() => {
    len++
  })
  return len
}