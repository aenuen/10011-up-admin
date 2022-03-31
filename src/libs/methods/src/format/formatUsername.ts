/**
 * @description 是否 username 格式
 * @param {String} value
 * @returns {Boolean}
 */
export const formatUsername = (value: string): boolean =>
  /^[a-z]+[a-z0-9]+[-_.]*[a-z0-9]+$/i.test(String(value))
