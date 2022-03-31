/**
 * @description 是否全数字格式
 * @param {String} value
 * @returns {Boolean}
 */
export const formatAllNumber = (value: number | string): boolean =>
  /^[0-9]+$/.test(String(value))
