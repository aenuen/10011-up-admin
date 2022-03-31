/**
 * @description 是否HTMLElement类型
 * @param {*} value
 * @returns {Boolean}
 */
export const typeHTMLElement = (value: any): boolean => {
  const d = document.createElement('div')
  try {
    d.appendChild(value.cloneNode(true))
    return value.nodeType === 1
  } catch (e) {
    return value === window || value === document
  }
}
