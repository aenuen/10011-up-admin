import Clipboard from 'clipboard'
import { ElMessage } from 'element-plus'

const clipboardSuccess = () => {
  ElMessage({ message: '复制成功！', type: 'success', duration: 1500 })
}

const clipboardError = () => {
  ElMessage({ message: '复制失败!', type: 'error' })
}

export default function handleClipboard (text:string, eleCls:string) {
  const clipboard = new Clipboard(eleCls, {
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
}
