/**
 * @description 是否 idCard 格式
 * @param {String} value
 * @returns {Boolean}
 */
export const formatIdCard = (value: string): boolean =>
  /^[1-9](\d{14}|\d{16}[0-9x])$/i.test(String(value))
