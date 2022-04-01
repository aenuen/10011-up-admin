/**
 * @description 保留字母
 * @param {Number|String} string
 * @returns {String}
 */
export const holdLetter = (string: number | string): string =>
  String(string).replace(/[^a-zA-Z]/g, '')
