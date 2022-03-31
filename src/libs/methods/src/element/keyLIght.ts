/**
 * @description 关键字高亮
 * @param {Object} object 对象
 * @param {String} key 键
 * @param {String} value 值
 * @param {String} [color] 颜色
 * @returns {String}
 */
export const keyLight = (
  object: Record<string | number | symbol, any>,
  key: string,
  value: string,
  color: string
) => {
  color = color || '#1980ff'
  return value
    ? object[key]
      ? value.replace(
          new RegExp(object[key], 'ig'),
          (val) => `<span style="color:${color}">${val}</span>`
        )
      : value
    : '--'
}
