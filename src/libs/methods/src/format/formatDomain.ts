/**
 * @description 是否 domain 格式
 * @param {String} value
 * @returns {Boolean}
 */
export const formatDomain = (value: string): boolean =>
  /^[a-z0-9]+(([.-])[a-z0-9]+)*\.[a-z0-9]+$/.test(String(value))
