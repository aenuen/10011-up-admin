import { urlStringQueryObject } from './urlStringQueryObject'

/**
 * @description 获取网址字符串中的一个参数
 * @param {String} urlString 网址字符串
 * @param {String} name 参数名称
 * @returns {*|null}
 */
export const urlStringQueryOne = (
  urlString: string,
  name: string
): string | null => {
  const object = urlStringQueryObject(urlString)
  return name && typeof object[name] !== 'undefined' ? object[name] : null
}
