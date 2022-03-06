import SvgIcon from '@/components/IconSvg/index.vue'

const componentPlugin: any = {
  install: function (vue: any, options: any) {
    if (options && options.imports && Array.isArray(options.imports) && options.imports.length > 0) {
      const { imports } = options
      imports.forEach((name: any) => {
        require(`@/assets/iconSvg/${name}.svg`)
      })
    } else {
      const ctx = require.context('@/assets/iconSvg', false, /\.svg$/)
      ctx.keys().forEach(path => {
        const temp = path.match(/\.\/([A-Za-z0-9\-_]+)\.svg$/)
        if (!temp) return
        const name = temp[1]
        require(`@/assets/svg/${name}.svg`)
      })
    }
    vue.component(SvgIcon.name, SvgIcon)
  }
}
export default componentPlugin
