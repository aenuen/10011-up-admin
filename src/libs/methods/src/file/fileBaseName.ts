import { fileFullName } from './fileFullName'

/**
 * @description 从字符串中提取文件的文件名称
 * @param {String} string
 * @returns {String}
 */
export const fileBaseName = (string: string): string =>
  fileFullName(string).replace(/\.[^.]+$/i, '')
