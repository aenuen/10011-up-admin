import { fileSuffixName } from './fileSuffixName'
/**
 * @description 从字符串中提取文件的后缀名并进行分类
 * @param {String} string
 * @returns {String}
 */
export const fileClassify = (string: string): string => {
  const suffixName = fileSuffixName(string)
  const array = [
    { n: 'doc', v: ['doc', 'docx', 'dot', 'docx'] },
    { n: 'txt', v: ['txt'] },
    { n: 'xls', v: ['xls', 'xlsx'] },
    { n: 'ppt', v: ['ppt', 'pptx'] },
    { n: 'pdf', v: ['pdf'] },
    { n: 'htm', v: ['htm', 'html'] },
    { n: 'pic', v: ['png', 'jpg', 'jpeg', 'bmp', 'gif'] },
    {
      n: 'vid',
      v: [
        'avi',
        'rm',
        'mpg',
        'mpeg',
        'mpe',
        'wmv',
        'mp4',
        'mkv',
        'vob',
        '3gp',
        'mov'
      ]
    },
    { n: 'aud', v: ['wav', 'mp3', 'wma', 'aif', 'cda', 'mid', 'caf', 'amr'] },
    { n: 'app', v: ['exe', 'app', 'ipa', 'apk'] },
    { n: 'zip', v: ['zip', 'rar'] }
  ]
  let result = 'other'
  for (let i = 0; i < array.length; i++) {
    if (array[i].v.includes(suffixName)) {
      result = array[i].n
      break
    }
  }
  return result
}
