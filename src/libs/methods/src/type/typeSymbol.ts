/**
 * @description 是否symbol类型
 * @param {*} value
 * @returns {Boolean}
 */
export const typeSymbol = (value: any): boolean =>
  Object.prototype.toString.call(value).toLowerCase() === '[object symbol]'
