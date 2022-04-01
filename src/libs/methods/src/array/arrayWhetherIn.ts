/**
 * @description 值是否在数组中
 * @param {Array} validList 用来验证的列表
 * @param {*} value 要验证的值
 * @return {Boolean}
 */
export const arrayWhetherIn = (validList: any[], value: any) => {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}
