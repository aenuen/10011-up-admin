// noinspection JSUnresolvedFunction

import Clipboard from 'clipboard'
import { ElMessage } from 'element-plus'

const clipboardSuccess = () => {
  ElMessage({ message: '复制成功！', type: 'success', duration: 1500 })
}

const clipboardError = () => {
  ElMessage({ message: '复制失败!', type: 'error' })
}

export default (text, event) => {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  })
  clipboard.on('success', () => {
    clipboardSuccess()
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardError()
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
