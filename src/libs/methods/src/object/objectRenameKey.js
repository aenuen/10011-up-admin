/**
 * @description 重命名object的键名
 * @param {Object} object
 * @param {String} key
 * @param {String} newKey
 * @returns {Object}
 */
export const objectRenameKey = (object, key, newKey) => {
  if (Object.keys(object).indexOf(key) !== -1) {
    object[newKey] = object[key]
    delete object[key]
  }
  return object
}
