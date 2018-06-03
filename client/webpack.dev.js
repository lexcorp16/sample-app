const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3300',
        secure: false,
      }
    },
    publicPath: '/',
    host: 'localhost',
    port: 3500,
    open: false,
    clientLogLevel: 'none',
    watchOptions: {
      ignored: /node_modules/
    }
  }
})
