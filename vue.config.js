const path = require('path')
const resolve = url => {
  return path.resolve(__dirname, url)
}
module.exports = {
  chainWebpack: config => {
    //const svg = config.module.rule('svg') //重点:删除默认配置中处理svg,
    config.module.rules.delete('svg')
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include.add(resolve('./src/assets/icons/svg')) //处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  }
}
