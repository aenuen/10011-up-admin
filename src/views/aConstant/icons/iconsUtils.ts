import clipboard from '@/libs/clipboard'
import elementAry from '@/components/Icons/element/elementAry'
import fontAry from '@/components/Icons/font/fontAry'
import svgAry from '@/components/Icons/svg/svgAry'

export const iconsUtils = () => {
  const handleClipboard = (text:string, eleCls:string) => {
    clipboard(text, eleCls)
  }
  const getElementIcon = (item:string) => `<el-icon :size="30"><${item} /></el-icon>`
  const getFontIcon = (item:string) => `<span class="icon iconfont icon-${item}" style="font-size: 30px;" />`
  const getSvgIcon = (item:string) => `<svg-icon icon-class="${item}" style="font-size: 30px;" />`
  return {
    elementAry,
    fontAry,
    svgAry,
    handleClipboard,
    getElementIcon,
    getFontIcon,
    getSvgIcon
  }
}
