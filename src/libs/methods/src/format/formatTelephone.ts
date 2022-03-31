/**
 * @description 是否 telephone 格式
 * @param {String} value
 * @returns {Boolean}
 */
export const formatTelephone = (value: string): boolean =>
  /^[0-9-()]{5,18}$/.test(String(value))
