/**
 * @description urlCode编码
 * @param {String} string
 * @returns {String}
 */
export const urlCodeEncode = (string: string): string =>
  encodeURIComponent(string)
