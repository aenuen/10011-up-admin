/**
 * @description 是否全中文格式
 * @param {String} value
 * @returns {Boolean}
 */
export const formatAllCn = (value: string): boolean =>
  /^[\u4e00-\u9fa5]+$/i.test(String(value))
