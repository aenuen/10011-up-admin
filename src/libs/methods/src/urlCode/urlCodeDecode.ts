/**
 * @description urlCode解码
 * @param {String} string
 * @returns {String}
 */
export const urlCodeDecode = (string: string): string =>
  decodeURIComponent(string)
