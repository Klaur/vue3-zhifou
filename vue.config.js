const path = require('path')
const resolve = url => {
  return path.join(__dirname, url)
}
const HASH = Date.now()
process.env.VUE_APP_HASH = HASH
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
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
      .exclude.add(resolve('./src/assets/icons/svg'))
      .end()
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .include.add(resolve('./src/assets/icons/svg'))
      // .end()
      // .use('svgo-loader')
      // .loader('svgo-loader')
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
        extract: true,
        spriteFilename: `sprite.${HASH}.svg`
      })
      .end()
    // config.module.rules.delete('svg')
    // config.module
    //   .rule('svg')
    //   .test(/\.svg$/)
    //   .include.add(resolve('./src/assets/icons/svg')) //处理svg目录
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     extract: true,
    //     spriteFilename: '/svg/icons.[hash:8].svg',
    //     extract: true,
    //     spriteFilename: 'icons.[hash].svg',
    //     runtimeCompat: true,
    //     outputPath: 'img/',
    //     publicPath: '/svg/'
    //   })
    //   .end()
    config.plugin('svg-sprite').use(SpriteLoaderPlugin, [{ plainSprite: false }])
    // config.plugin('svg-sprite').use(require('svg-sprite'), [{ plainSprite: true }])
    // const fileRule = config.module.rule('file')
    // fileRule.uses.clear()
    // fileRule
    //   .test(/\.svg$/)
    //   // 配置icons的目录  我这里默认放在了 /src/assets/icons 目录下  如要修改 记得更换你的目录
    //   .exclude.add(path.resolve(__dirname, './src/assets/icons/svg'))
    //   .end()
    //   .use('file-loader')
    //   .loader('file-loader')
    //   .options({
    // name: 'img/[ext]/[name].[hash:8].[ext]'
    //   })
    //   .end()
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
  },
  // plugins: [new SpriteLoaderPlugin({ plainSprite: true })]
  pluginOptions: {
    svgSprite: {
      dir: './src/assets/icons/svg',
      test: /\.(svg)(\?.*)?$/,
      loaderOptions: {
        symbolId: 'icon-[name]',
        extract: true,
        spriteFilename: `sprite.${HASH}.svg`
      },
      pluginOptions: {
        plainSprite: true
      }
    }
  }
}
// const path = require('path')

// function resolve(dir) {
//   return path.join(__dirname, dir)
// }
// module.exports = {
//   chainWebpack: config => {
//     config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{ plainSprite: true }])
//     config.module.rules.delete('svg')
//     config.module
//       .rule('svg')
//       .exclude.add(resolve('./src/assets/icons/svg'))
//       .end()
//     config.module
//       .rule('svg-sprite')
//       .use('svgo-loader')
//       .loader('svgo-loader')
//       .end()
//       .use('svg-sprite-loader')
//       .loader('svg-sprite-loader')
//       .options({
//         symbolId: 'icon-[name]'
//       })
//       .end()
//   },
//   publicPath: '/',
//   pluginOptions: {
//     svgSprite: {
//       dir: './src/assets/icons/svg',
//       test: /\.(svg)(\?.*)?$/,
//       loaderOptions: {
//         extract: true,
//         spriteFilename: 'icons.[hash:8].svg' // or 'img/icons.svg' if filenameHashing == false
//       },
//       pluginOptions: {
//         plainSprite: true
//       }
//     }
//   }
// }
