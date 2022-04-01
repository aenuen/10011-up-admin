/**
 * @description 文件大小的单位
 * @param {Number} fileSize 文件大小
 * @param {Number} fixed 保留浮点位数
 * @returns {String}
 */
export const fileUnit = (fileSize: number, fixed: number): string => {
  const array = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  const k = 1024
  const i = Math.floor(Math.log(fileSize) / Math.log(k))
  return (fileSize / Math.pow(k, i)).toFixed(fixed) + array[i]
}
