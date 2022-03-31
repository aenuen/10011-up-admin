/**
 * @description uniCode解码
 * @param {String} string
 * @returns {String}
 */
export const uniCodeDecode = (string: string): string =>
  decodeURI(string.replace(/\\/g, '%'))
