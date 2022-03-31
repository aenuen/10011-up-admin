/**
 * @description 数字加逗号
 * @param {Number|String} number
 * @returns {String}
 */
export const numberAddComma = (number: string | number): string =>
  String(+number || 0).replace(/^-?\d+/g, (m) =>
    m.replace(/(?=(?!\b)(\d{3})+$)/g, ',')
  )
