/**
 * @description 单词首字母大写，其它小写
 * @param {string} string
 * @returns {string}
 */
export const caseWordFirstBig = (string: string): string => {
  const ary = String(string).split(' ')
  for (let i = 0; i < ary.length; i++) {
    ary[i] = ary[i].slice(0, 1).toUpperCase() + ary[i].slice(1).toLowerCase()
  }
  return ary.join(' ')
}
