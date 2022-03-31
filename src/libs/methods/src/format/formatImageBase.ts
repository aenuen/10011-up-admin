/**
 * @description 是否 imageBase 格式
 * @param {String} value
 * @returns {Boolean}
 */
export const formatImageBase = (value: string): boolean =>
  /^data:image\/(bmp|png|gif|jpg|jpeg);base64,/.test(String(value))
