/**
 * 将多层级的数组扁平化
 * @param {Array} array
 * @returns {Array}
 */
export const arrayFlatten = (array: any[]): any[] => {
  while (array.some((item) => Array.isArray(item))) {
    array = [].concat(...array)
  }
  return array
}
