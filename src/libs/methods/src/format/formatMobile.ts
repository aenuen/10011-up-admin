/**
 * @description 是否 mobile 格式
 * @param {String} value
 * @returns {Boolean}
 */
export const formatMobile = (value: string): boolean =>
  /^(13|14|15|16|17|18)[0-9]{9}$/.test(String(value))
