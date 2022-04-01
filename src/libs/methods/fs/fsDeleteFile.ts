import fs from 'fs'
import { ensureFootHave } from '../src/ensure/ensureFootHave'

/**
 * @description 删除文件
 * @param {String} file 要删除的文件
 * @param {String} [dir] 文件所在的路径
 * @returns {Promise<Boolean>}
 */
export const fsDeleteFile = (file: string, dir: string): Promise<boolean> => {
  const fullPath = `${dir ? ensureFootHave(dir, '/') : ''}${file}`
  return new Promise((resolve) =>
    fs.unlink(fullPath, (err) => (err ? resolve(false) : resolve(true)))
  )
}
