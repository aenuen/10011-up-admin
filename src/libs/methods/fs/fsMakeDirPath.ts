import path from 'path'
import { fsGetStats } from './fsGetStats'
import { fsMakeDirOne } from './fsMakeDirOne'

/**
 * @description 建创目录(多层)
 * @param {String} dir 目录字符串
 * @return {*}
 */
export const fsMakeDirPath = async (dir: string): Promise<boolean> => {
  const isExists = await fsGetStats(dir)
  if (isExists && isExists.isDirectory()) {
    // 如果该路径存在且不是文件，返回 true
    return true
  } else if (isExists) {
    // 路径存在，但是是文件，返回 false
    return false
  } else {
    // 如果该路径不存在
    const tempDir = path.parse(dir).dir
    const status = await fsMakeDirOne(tempDir) // 循环遍历，递归判断如果上级目录不存在，则产生上级目录
    if (status) {
      return await fsMakeDirOne(dir)
    } else {
      return false
    }
  }
}
