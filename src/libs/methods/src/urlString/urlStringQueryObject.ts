/**
 * @description 获取网址字符串中的参数，并组成参数对象
 * @param {String} urlString 网址字符串
 * @returns {Object} 参数对象
 */
export const urlStringQueryObject = (
  urlString: string
): Record<string | number | symbol, any> => {
  const search = urlString.substring(urlString.lastIndexOf('?') + 1)
  const json: Record<string | number | symbol, any> = {}
  search.replace(/([^?&=]+)=([^?&=]*)/g, (result, $1, $2) => {
    const name = decodeURIComponent($1)
    let value = decodeURIComponent($2)
    value = String(value)
    json[name] = value
    return result
  })
  return json
}
