/**
 * @description 保留数字
 * @param {Number|String} string
 * @returns {String}
 */
export const holdNumber = (string: number | string): string =>
  String(string).replace(/[^0-9]/g, '')
