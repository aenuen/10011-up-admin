/**
 * @description 最高的 z-index 值
 * @returns {Number}
 */
export const someMaxZIndex = (): number =>
  ~~(new Date().getTime() / 1000).toFixed(0)
