import { replaceAll } from '../replace/replaceAll'
import { replaceOne } from '../replace/replaceOne'

/**
 * @description 保留第一个指定的值
 * @param {Number|String} string
 * @param {Number|String} char
 * @returns {String}
 */
export const holdFirst = (
  string: number | string,
  char: number | string
): string => {
  const tempValue = '##@!@##@!@##'
  const replaceFirstChar = replaceOne(String(string), String(char), tempValue)
  const otherReplaceEmpty = replaceAll(replaceFirstChar, String(char), '')
  return replaceOne(otherReplaceEmpty, tempValue, String(char))
}
