/**
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 * @param {Array} targetAry 目标数组
 * @param {Array} arr 需要查询的数组
 */
export const arrayHasOne = (arr: any[], targetAry: any[]) => {
  return targetAry.some((value) => arr.indexOf(value) > -1)
}
