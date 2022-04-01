import { typeArray } from '../type/typeArray'

/**
 * @description 保留值，其它删除
 * @param {Array|Object} ao array或object
 * @param {*} hold 要保留的值，可字符或数组
 * @returns {Array|Object}
 */
export const aoHoldValue = (
  ao: any[] | Record<string | number | symbol, any>,
  hold: any
): any[] | Record<string | number | symbol, any> => {
  hold = typeArray(hold) ? hold : [hold]
  const result: any[] | Record<string | number | symbol, any> = typeArray(ao)
    ? []
    : {}
  for (const k in hold) {
    for (const e in ao) {
      if (JSON.stringify(hold[k]) === JSON.stringify(ao[e])) {
        typeArray(ao) ? result.push(ao[e]) : (result[e] = ao[e])
      }
    }
  }
  return result
}
