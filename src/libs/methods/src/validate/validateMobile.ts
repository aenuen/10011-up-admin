import { formatMobile } from '../format/formatMobile'
/**
 * @desc 验证是否手机号码格式
 * @param {*} rule
 * @param {String} value
 * @param {*} callback
 * @param {String} action
 */
export const validateMobile = (
  rule: any,
  value: string,
  callback: any,
  action = '填写'
) => {
  const field = '手机号码'
  const number = 11
  if (!value || value.length === 0) {
    callback(new Error(`${field}必须${action}`))
  } else {
    if (formatMobile(value)) {
      if (value.length !== number) {
        callback(new Error(`${field}为${number}个字符`))
      } else {
        callback()
      }
    } else {
      callback(new Error(`请${action}正确的${field}`))
    }
  }
}
