import { fileFullName } from './fileFullName'
/**
 * @description 从字符串中提取文件的后缀名称
 * @param {String} string
 * @returns {String}
 */
export const fileSuffixName = (string: string): string =>
  fileFullName(string).replace(/.+[.]([^.\\/]+)$/gi, '$1')
