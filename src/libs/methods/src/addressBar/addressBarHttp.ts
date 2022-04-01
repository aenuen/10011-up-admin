/**
 * @description 获取http(s)
 * @returns {string}
 */
export const addressBarHttp = (): string =>
  document.location.protocol === 'https:' ? 'https://' : 'http://'
