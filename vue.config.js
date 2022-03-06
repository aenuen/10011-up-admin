const path = require('path')
const { defineConfig } = require('@vue/cli-service')
const resolve = dir => path.join(__dirname, dir)
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 20011,
    open: true
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    const terser = config.optimization.minimizer('terser')
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .include.add(resolve('./src/assets/iconSvg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .exclude.add(resolve('./src/assets/icons'))
    terser.tap((args) => {
      args[0].terserOptions.compress.drop_console = true
      return args
    })
  }
})
