import { aoReverse } from '../ao/aoReverse'

/**
 * @description 根据字段进行array的排序
 * @param {Array} array 必须是[[],[],...]或[{},{},...]的形式
 * @param {Number|String} field 字段名字：如果是 array 时，请用 array 的下标
 * @param {Boolean} [order] 排序顺序：(true)从小到大，(false)从大到小
 * @returns {Array}
 * @example arrayOrderByField([[1, "a", 9], [2, "b", 8], [3, "c", 7], [4, "d", 6]], 1, false)
 * @example arrayOrderByField([{"a": 3}, {"a": 2}, {"a": 1}], "a")
 */
export const arrayOrderByField = (
  array: any[],
  field: string | number,
  order: boolean
): any[] => {
  const result = array.sort(function (a, b) {
    const x = a[field]
    const y = b[field]
    return x < y ? -1 : x > y ? 1 : 0
  })
  return order ? result : (aoReverse(result) as any[])
}
