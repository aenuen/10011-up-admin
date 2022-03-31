/**
 * @description 是否regexp类型
 * @param {*} value
 * @returns {Boolean}
 */
export const typeRegexp = (value: any): boolean =>
  Object.prototype.toString.call(value).toLowerCase() === '[object regexp]'
