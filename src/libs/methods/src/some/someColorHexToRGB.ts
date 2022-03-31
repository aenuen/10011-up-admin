import { formatHexColor } from '../format/formatHexColor'

/**
 * @description 十六进制颜色转RGB颜色
 * @param {string} hex
 * @param {number} [opacity]
 * @return {string}
 */
export const someColorHexToRGB = (hex: string, opacity = 1): string => {
  let sHex = hex.toLowerCase()
  if (formatHexColor(hex)) {
    if (sHex.length === 4) {
      let sColorNew = '#'
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sHex.slice(i, i + 1).concat(sHex.slice(i, i + 1))
      }
      sHex = sColorNew
    }
    const sColorChange = []
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt('0x' + sHex.slice(i, i + 2)))
    }
    return opacity
      ? 'RGBA(' + sColorChange.join(',') + ',' + String(opacity) + ')'
      : 'RGB(' + sColorChange.join(',') + ')'
  }
  return sHex
}
