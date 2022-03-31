/**
 * @description 是否array类型
 * @param {*} value
 * @returns {Boolean}
 */
export const typeArray = (value: any) =>
  Object.prototype.toString.call(value).toLowerCase() === '[object array]'
