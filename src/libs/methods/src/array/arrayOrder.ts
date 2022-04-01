import { typeNumber } from '../type/typeNumber'

/**
 * @description 排序数组
 * @param {Array} array 要排序的数组
 * @param {Boolean} [order] 排序方式：(true)从小到大，(false)从大到小
 * @returns {Array}
 */
export const arrayOrder = (array: any[], order: boolean): any[] => {
  const ary = [...array]
  ary.sort(function (a, b) {
    a = typeNumber(a) ? +a : a
    b = typeNumber(b) ? +b : b
    return a > b ? 1 : -1
  })
  return order ? ary : ary.reverse()
}
