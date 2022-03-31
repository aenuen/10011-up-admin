import { replaceAll } from './replaceAll'
/**
 * @description 根据对象替换
 * @param {Number|String} string
 * @param {Object} object
 * @returns {String}
 */
export const replaceByObject = (
  string: number | string,
  object: Record<string | number | symbol, any>
): number | string => {
  Object.keys(object).forEach((key) => {
    string = replaceAll(string, key, object[key])
  })
  return string
}
