import fs from 'fs'

/**
 * @description 目录下所有的文件(不包含文件夹)
 * @param {String} dir 目录
 * @returns {Array}
 */
export const fsReadDirFileSync = (dir: string) => {
  const files: string[] = []
  fs.readdirSync(dir).forEach((name) => {
    files.push(String(name))
  })
  return files
}
