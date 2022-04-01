/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的交集, 两个数组的元素为数值或字符串
 */
export const arrayIntersection = (arr1: any[], arr2: any[]) => {
  const len = Math.min(arr1.length, arr2.length)
  let i = -1
  const res = []
  while (++i < len) {
    const item = arr2[i]
    if (arr1.indexOf(item) > -1) {
      res.push(item)
    }
  }
  return res
}
