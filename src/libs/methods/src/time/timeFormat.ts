import { H_DATETIME } from './timeText'
import { timeObject } from './timeObject'

/**
 * @description 时间格式化
 * @param {*} [value]
 * @param {String} [format] 格式
 * @param {Boolean} [zero] 是否加零，默认加零
 * @returns {Null|String}
 */
export const timeFormat = (
  value: any,
  format: string,
  zero?: boolean
): string | null => {
  const theObject = value ? timeObject(value) : timeObject(new Date())
  if (theObject !== null) {
    format = format || H_DATETIME
    zero = zero || true
    return format.replace(/{([ymdhisw])+}/g, (result, key) => {
      const value = theObject[key]
      return key === 'w'
        ? ['日', '一', '二', '三', '四', '五', '六'][value]
        : zero
        ? String(value).padStart(2, '0')
        : String(value)
    })
  } else {
    return null
  }
}
