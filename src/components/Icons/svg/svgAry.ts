const files = require.context('./files', false, /\.svg$/)

const svgAry:string[] = []
const regExp = /(.*\/)*([^.]+).*/ig
files.keys().forEach(file => {
  const name = file.replace(regExp, '$2')
  svgAry.push(name)
})

export default svgAry
