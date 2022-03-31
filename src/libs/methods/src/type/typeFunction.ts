/**
 * @description 是否function类型
 * @param {*} value
 * @returns {Boolean}
 */
export const typeFunction = (value: unknown): boolean =>
  Object.prototype.toString.call(value).toLowerCase() === '[object function]'
