/**
 * @description 是否 url 格式
 * @param {String} value
 * @returns {Boolean}
 */
export const formatUrl = (value: string): boolean =>
  /^((https?:)?\/\/)?[a-z0-9]+(([.-])[a-z0-9]+)*\.[a-z0-9]+/.test(String(value))
