import { formatAllNumber } from '../format/formatAllNumber'

/**
 * @desc 验证是否数字格式
 * @param {*} rule
 * @param {String} value
 * @param {*} callback
 * @param {String} field
 * @param {String} [action]
 */
export const validateAllNumber = (
  rule: any,
  value: string,
  callback: any,
  field = '未知',
  action = '填写'
) => {
  if (!value || value.length === 0) {
    callback(new Error(`${field}必须${action}`))
  } else {
    if (formatAllNumber(value)) {
      callback()
    } else {
      callback(new Error(`${field}格式不正确`))
    }
  }
}
