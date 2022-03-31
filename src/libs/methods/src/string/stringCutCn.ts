import { haveCn } from '../have/haveCn'
import { stringCut } from './stringCut'

/**
 * @description 字符串截取（中英文分别设置）
 * @param {Number|String} string 要截取的字符串
 * @param {Number} cnNumber 有中文要截取的数量
 * @param {Number} enNumber 无中文要截取的数量
 * @returns {String}
 */
export const stringCutCn = (
  string: string,
  cnNumber: number,
  enNumber: number
): string => {
  cnNumber = ~~Math.abs(cnNumber)
  enNumber = ~~Math.abs(enNumber)
  return haveCn(string)
    ? stringCut(string, cnNumber)
    : stringCut(string, enNumber)
}
