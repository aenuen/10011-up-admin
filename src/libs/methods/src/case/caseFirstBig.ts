/**
 * @description 首字母大写，其它小写
 * @param {string} string
 * @returns {string}
 */
export const caseFirstBig = (string: string): string => {
  return (
    String(string).charAt(0).toUpperCase() +
    String(string).slice(1).toLowerCase()
  )
}
