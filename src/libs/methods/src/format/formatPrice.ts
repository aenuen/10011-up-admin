/**
 * @description 是否 price 格式
 * @param {String} value
 * @returns {Boolean}
 */
export const formatPrice = (value: string): boolean =>
  /^\d+\.?\d{0,2}$/.test(String(value))
