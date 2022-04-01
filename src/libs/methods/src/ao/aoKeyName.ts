/**
 * @description 键名
 * @param {Array|Object} ao array或object
 * @returns {Array}
 */
export const aoKeyName = (
  ao: any[] | Record<string | number | symbol, any>
): any[] => {
  const result = []
  for (const key in ao) {
    result.push(key)
  }
  return result
}
