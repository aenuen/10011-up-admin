/**
 * @description RGB颜色转十六进制颜色
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {string}
 */
export const someRGBToHex = (r: number, g: number, b: number):string => {
  const hex = ((r << 16) | (g << 8) | b).toString(16)
  return '#' + new Array(Math.abs(hex.length - 7)).join('0') + hex
}
