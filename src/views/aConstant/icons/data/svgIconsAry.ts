const files = require.context('@/assets/iconSvg', false, /\.svg$/)

const svgIconsAry:string[] = []
const regExp = /(.*\/)*([^.]+).*/ig
files.keys().forEach(file => {
  const name = file.replace(regExp, '$2')
  svgIconsAry.push(name)
})

export default svgIconsAry
