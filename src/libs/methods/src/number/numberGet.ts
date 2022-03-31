import { replaceByObject } from '../replace/replaceByObject'

/**
 * @description 去掉空格和逗号
 * @param {string} string
 * @returns {number}
 */
export const numberGet = (string: string): number =>
  +replaceByObject(string, { ',': '', ' ': '' })
