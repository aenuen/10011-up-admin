import { holdFirst } from '../hold/holdFirst'
import { typeNumber } from '../type/typeNumber'

/**
 * @description 控制价格的输入
 * @param {Number|String} price
 * @param {Number} [number]
 * @returns {string}
 */
export const controlInputPrice = (
  price: string | number,
  number: number
): string => {
  price = holdFirst(holdFirst(String(price).replace(/[^\d.-]/g, ''), '-'), '.')
  if (price.substr(0, 1) === '.') {
    price = '0.' + price.substr(1)
  }
  if (price.substr(0, 2) === '-.') {
    price = '-0.' + price.substr(2)
  }
  number = typeNumber(number) ? ~~number : 2
  const ary = price.split('.')
  const int = ary[0]
  const float = ary[1] || null
  return float && float.length > number
    ? int + '.' + float.substr(0, number)
    : price
}
