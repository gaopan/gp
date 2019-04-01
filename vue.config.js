const webpack = require('webpack')
const path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        data: `@import "@/assets/styles/sass/index.scss";`
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve('src')
      }
    }
  }
}