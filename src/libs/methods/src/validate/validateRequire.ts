/**
 * @desc 验证是否已填
 * @param {*} rule
 * @param {String} value
 * @param {*} callback
 * @param {String} field
 * @param {String} [action]
 * @param {Number} [min]
 * @param {Number} [max]
 */
export const validateRequire = (
  rule: any,
  value: string,
  callback: any,
  field: string,
  action = '填写',
  min: number,
  max: number
) => {
  if (!value || value.length === 0) {
    callback(new Error(`${field}必须${action}`))
  } else {
    if (
      min &&
      max &&
      (value.length < ~~Math.abs(min) || value.length > ~~Math.abs(max))
    ) {
      callback(
        new Error(`${field}在${~~Math.abs(min)}-${~~Math.abs(max)}个字符之间`)
      )
    } else {
      callback()
    }
  }
}
