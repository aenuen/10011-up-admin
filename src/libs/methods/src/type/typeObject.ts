/**
 * @description 是否object类型
 * @param {*} value
 * @returns {Boolean}
 */
export const typeObject = (value: any): boolean =>
  Object.prototype.toString.call(value).toLowerCase() === '[object object]'
