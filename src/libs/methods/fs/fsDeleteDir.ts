import fs from 'fs'

/**
 * @description 删除文件夹
 * @param {String} dir 目录
 * @returns {Promise<Boolean>}
 */
export const fsDeleteDir = (dir: string): Promise<boolean> =>
  new Promise((resolve) =>
    fs.rmdir(
      dir,
      {
        recursive: true
      },
      (err) => (err ? resolve(false) : resolve(true))
    )
  )
