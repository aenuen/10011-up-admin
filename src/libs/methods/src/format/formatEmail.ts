/**
 * @description 是否 email格式
 * @param {String} value
 * @returns {Boolean}
 */
export const formatEmail = (value: string): boolean =>
  /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/i.test(String(value))
