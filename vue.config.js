const path = require('path')
const resolve = url => {
  return path.resolve(__dirname, url)
}
const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  productionSourceMap: !isProduction,
  css: {
    extract: isProduction,
    sourceMap: false,
    requireModuleExtension: true
  },
  configureWebpack: config => {
    if (isProduction) {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log']
    }
  },
  chainWebpack: config => {
    config.module.rules.delete('svg')
    config.module
      .rule('svg')
      .test(/\.svg$/)
      .include.add(resolve('./src/assets/icons/svg')) //处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
        extract: false,
        spriteFilename: '/svg/icons.[hash:8].svg'
      })
      .end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{ plainSprite: true }])
    const fileRule = config.module.rule('file')
    fileRule.uses.clear()
    fileRule
      .test(/\.svg$/)
      // 配置icons的目录  我这里默认放在了 /src/assets/icons 目录下  如要修改 记得更换你的目录
      .exclude.add(path.resolve(__dirname, './src/assets/icons/svg'))
      .end()
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'img/[ext]/[name].[hash:8].[ext]'
      })
    if (isProduction) {
      //去除出预加载
      config.plugins.delete('prefetch')
      config.plugins.delete('preload')
      //config.plugin('ignore').use(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)) // 忽略/moment/locale下的所有文件
      // 压缩代码
      config.optimization.minimize(true)
      // 分割代码
      config.optimization.splitChunks({
        chunks: 'all'
      })
    }
  }
}
