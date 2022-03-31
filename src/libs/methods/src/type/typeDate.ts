/**
 * @description 是否date类型
 * @param {*} value
 * @returns {Boolean}
 */
export const typeDate = (value: any) =>
  value instanceof Date && !isNaN(value.getTime())
