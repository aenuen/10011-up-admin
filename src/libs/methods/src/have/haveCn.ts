/**
 * @description 字符串中是否含有中文
 * @param {String} string
 * @returns {Boolean}
 */
export const haveCn = (string: string): boolean =>
  /[\u4e00-\u9fa5]+/.test(String(string))
