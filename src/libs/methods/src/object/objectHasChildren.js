/**
 * @description 是否有字节点
 * @param {Object} object 要检查的对像
 * @param {String} [nodeName] 节点名称
 * @returns {Boolean}
 */
export const objectHasChildren = (object, nodeName) => {
  nodeName = nodeName || 'children'
  return object[nodeName] && object[nodeName].length > 0
}
