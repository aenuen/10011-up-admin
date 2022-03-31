import { typeArray } from '../type/typeArray'
/**
 * @description 删除object的元素
 * @param {Object} object
 * @param {Array|String} key
 * @returns {Object}
 */
export const objectDeleteElement = (
  object: Record<string | number | symbol, any>,
  key: string | string[]
) => {
  const keyAry = typeArray(key) ? key : [key]
  keyAry.map((item) => delete object[item])
  return object
}
