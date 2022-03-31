/**
 * @description 是否 ip 格式
 * @param {String} value
 * @returns {Boolean}
 */

export const formatIp = (value: string): boolean => {
  if (/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/.test(String(value))) {
    const [a, b, c, d] = value.split('.')
    return +a < 256 && +b < 256 && +c < 256 && +d < 256
  } else {
    return false
  }
}
