import fs from 'fs'
import { ensureFootHave } from '../src/ensure/ensureFootHave'

/**
 * @description 删除文件
 * @param {String} file 要删除的文件
 * @param {String} [dir] 文件所在的路径
 */
export const fsDeleteFileSync = (file: string, dir: string): void => {
  if (file) {
    const fullPath = `${dir ? ensureFootHave(dir, '/') : ''}${file}`
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath)
      console.log(`文件删除成功：${fullPath}`)
    }
  }
}
