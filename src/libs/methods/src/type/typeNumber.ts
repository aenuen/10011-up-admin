/**
 * @description 是否number类型
 * @param {*} value
 * @returns {Boolean}
 */
export const typeNumber = (value: any): boolean =>
  typeof value === 'number' || (!isNaN(value) && typeof value === 'string')
