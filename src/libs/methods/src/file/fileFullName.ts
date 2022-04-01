/**
 * @description 从字符串中提取文件的文件全名
 * @param {String} string
 * @returns {String}
 */
export const fileFullName = (string: string): string => {
  const a = document.createElement('a')
  a.href = string
  return (a.pathname.match(/\/([^/?#]+)$/i) || ['', ''])[1]
}
