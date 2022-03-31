/**
 * @description 只替换第一个
 * @param {Number|String} string
 * @param {Number|String} search
 * @param {Number|String} replace
 * @returns {String}
 */
export const replaceOne = (
  string: number | string,
  search: number | string,
  replace: number | string
): string => String(string).replace(String(search), String(replace))
