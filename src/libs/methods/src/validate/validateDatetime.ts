import { formatDatetime } from '../format/formatDatetime'

/**
 * @desc 验证是否dateTime格式
 * @param {*} rule
 * @param {String} value
 * @param {*} callback
 * @param {String} field
 * @param {String} [action]
 */
export const validateDatetime = (
  rule: any,
  value: string,
  callback: any,
  field = '未知',
  action = '填写'
) => {
  if (!value || value.length === 0) {
    callback(new Error(`${field}必须${action}`))
  } else {
    if (formatDatetime(value)) {
      callback()
    } else {
      callback(new Error(`${field}格式不正确`))
    }
  }
}
