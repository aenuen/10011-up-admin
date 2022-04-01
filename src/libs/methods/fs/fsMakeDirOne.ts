import fs from 'fs'

/**
 * @description 建创目录(单层)
 * @param {String} dir 要创建的目录
 * @returns {Promise<Boolean>}
 */
export const fsMakeDirOne = (dir: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    fs.mkdir(dir, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve(true)
      }
    })
  })
}
