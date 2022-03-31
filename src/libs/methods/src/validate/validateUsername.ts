import { formatUsername } from '../format/formatUsername'

/**
 * @desc 验证是否用户名格式
 * @param {*} rule
 * @param {String} value
 * @param {*} callback
 * @param {Number} [min]
 * @param {Number} [max]
 */
export const validateUsername = (
  rule: any,
  value: string,
  callback: any,
  min = 5,
  max = 20
) => {
  const field = '用户名'
  if (!value || value.length === 0) {
    callback(new Error(`${field}必须填写`))
  } else {
    if (formatUsername(value)) {
      if (value.length < min || value.length > max) {
        callback(new Error(`${field}在${min}-${max}个字符之间`))
      } else {
        callback()
      }
    } else {
      callback(
        new Error(
          `${field}必须是以字母为开头，由字母、数字、减号、点、下划线组成`
        )
      )
    }
  }
}
