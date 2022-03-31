import { formatAllCn } from '../format/formatAllCn'

/**
 * @desc 验证是否全中文
 * @param {*} rule
 * @param {String} value
 * @param {*} callback
 * @param {String} field
 * @param {Number} [min]
 * @param {Number} [max]
 */
export const validateAllCn = (
  rule: any,
  value: string,
  callback: any,
  field = '未知',
  min = 2,
  max = 10
) => {
  if (!value || value.length === 0) {
    callback(new Error(`${field}必须填写`))
  } else {
    if (formatAllCn(value)) {
      if (value.length < min || value.length > max) {
        callback(new Error(`${field}在${min}-${max}个字符之间`))
      } else {
        callback()
      }
    } else {
      callback(new Error(`${field}必须是全中文`))
    }
  }
}
