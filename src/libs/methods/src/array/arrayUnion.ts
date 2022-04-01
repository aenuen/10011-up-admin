/**
 * @description 得到两个数组的并集
 * @param {Array} arr1
 * @param {Array} arr2
 */
export const arrayUnion = (arr1: any[], arr2: any[]) =>
  Array.from(new Set([...arr1, ...arr2]))
