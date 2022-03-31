import { formatPrice } from '../format/formatPrice'

/**
 * @desc 验证是否价格格式
 * @param {*} rule
 * @param {String} value
 * @param {*} callback
 * @param {String} field
 * @param {String} [action]
 * @param {Number} [min]
 * @param {Number} [max]
 */
export const validatePrice = (
  rule: any,
  value: string,
  callback: any,
  field = '价格',
  action = '填写',
  min = 1,
  max = 10
) => {
  if (!value || value.length === 0) {
    callback(new Error(`${field}必须${action}`))
  } else {
    if (formatPrice(value)) {
      if (value.length < ~~Math.abs(min) || value.length > ~~Math.abs(max)) {
        callback(
          new Error(`${field}在${~~Math.abs(min)}-${~~Math.abs(max)}个字符之间`)
        )
      } else {
        callback()
      }
    } else {
      callback(new Error(`${field}只能是数字（最多2位小数）`))
    }
  }
}
