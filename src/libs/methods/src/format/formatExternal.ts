/**
 * @description 是否外链格式
 * @param {String} value
 * @returns {Boolean}
 */
export const formatExternal = (value: string): boolean =>
  /^(https?:|mailto:|tel:)/.test(String(value))
