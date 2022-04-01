/**
 * @description 获取array的xy等比对换
 * @param {Array} array [[],[],...]
 * @returns {array}
 * @example arrayRatioReplace([[1,'a'],[2,'b'],[3,'c'],[4,'d']])
 */
export const arrayRatioReplace = (array: any[]) => {
  const result = []
  let count = 0
  for (let o = 0; o < length; o++) {
    if (count < array[o].length) {
      count = array[o].length
    }
  }
  for (let t = 0; t < count; t++) {
    const ary = []
    for (let i = 0; i < length; i++) {
      // eslint-disable-next-line no-void
      array[i][t] === void 0 && (array[i][t] = '')
      ary.push(array[i][t])
    }
    result.push(ary)
  }
  return result
}
