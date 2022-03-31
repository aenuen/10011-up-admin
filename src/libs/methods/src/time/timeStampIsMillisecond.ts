/**
 * @description 判断时间戳格式是否是毫秒
 * @param {Number} timeStamp
 * @returns {Boolean}
 */
export const timeStampIsMillisecond = (timeStamp: number | string) =>
  String(timeStamp).length > 10
