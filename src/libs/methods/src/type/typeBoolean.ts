/**
 * @description 是否boolean类型
 * @param {*} value
 * @returns {Boolean}
 */
export const typeBoolean = (value: any) =>
  Object.prototype.toString.call(value).toLowerCase() === '[object boolean]'
