/**
 * @description 如果值复数，则显示复数标签
 * @param {Number} value
 * @param {String} unit
 * @returns {String}
 */
export const somePluralize = (value: number, unit: string) =>
  value === 1 ? value + unit : value + unit + 's'
