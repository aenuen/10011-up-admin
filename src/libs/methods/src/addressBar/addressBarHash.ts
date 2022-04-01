/**
 * @description 获取网址#号后的参数
 * @returns {string}
 */
export const addressBarHash = (): string => location.hash.slice(1)
