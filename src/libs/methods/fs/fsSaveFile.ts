import fs from 'fs'
import { ensureFootHave } from '../src/ensure/ensureFootHave'

/**
 * @description 将数据保存成文件
 * @param {*} data 文件数据
 * @param {String} fileName 文件名
 * @param {String} [dir] 目录
 * @returns {Promise<String>}
 */
export const fsSaveFile = (
  data: any,
  fileName: string,
  dir?: string
): Promise<any> => {
  const fullPath = `${dir ? ensureFootHave(dir, '/') : ''}${fileName}`
  return new Promise((resolve, reject) => {
    fs.writeFile(fullPath, data, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve(fullPath)
      }
    })
  })
}
