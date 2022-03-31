/**
 * @description 替换全部
 * @param {Number|String} string
 * @param {Number|String} search
 * @param {Number|String} replace
 * @returns {String}
 */
export const replaceAll = (
  string: number | string,
  search: number | string,
  replace: number | string
): string => String(string).split(String(search)).join(String(replace))
