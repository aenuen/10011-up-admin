import fs from 'fs'

/**
 * @description 目录下所有的文件(不包含文件夹)
 * @param {String} dir 目录
 * @returns {Promise<Array>}
 */
export const fsReadDirFile = (dir: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        reject(err)
      } else {
        resolve(files)
      }
    })
  })
}
