import fs from 'fs'

/**
 * @description 获取目录或文件的系统明细
 * @param {String} dir 要查看的目录或文件路径
 * @returns {Promise<Object>}
 */
export const fsGetStats = (dir: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    fs.stat(dir, (err, stats) => {
      if (err) {
        reject(err)
      } else {
        resolve(stats)
      }
    })
  })
}
