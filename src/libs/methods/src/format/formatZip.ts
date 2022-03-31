/**
 * @description 是否 zip 格式
 * @param {String} value
 * @returns {Boolean}
 */
export const formatZip = (value: string): boolean =>
  /^\d{6}$/.test(String(value))
