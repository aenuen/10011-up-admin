/**
 * @description 是否有字节点
 * @param {Object} object 要检查的对像
 * @param {String} [nodeName] 节点名称
 * @returns {Boolean}
 */
export const objectHasChildren = (
  object: Record<string | number | symbol, any>,
  nodeName: string
) => {
  nodeName = nodeName || 'children'
  return object[nodeName] && object[nodeName].length > 0
}
