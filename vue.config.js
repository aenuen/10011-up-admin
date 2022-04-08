const path = require('path')
const { defineConfig } = require('@vue/cli-service')
const resolve = (dir) => path.join(__dirname, dir)
module.exports = defineConfig({
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '~style': path.resolve(__dirname, 'src/assets/styles')
      }
    }
  },
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 20011,
    proxy: 'http://localhost:10010'
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.exclude.add(resolve('src/components/Icons/svg/files')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/components/Icons/svg/files'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' })
      .end()
  }
})
