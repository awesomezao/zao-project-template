const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const resolvePath = tar => path.resolve(__dirname, tar)
const constructMode = process.env.NODE_ENV
const isDev = constructMode === 'development'
const isProd = constructMode === 'production'

module.exports = {
  entry: [resolvePath('src/index.js')],
  mode: constructMode,
  output: {
    path: resolvePath('dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      '@': resolvePath('src'),
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude:/node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: resolvePath('public/index.html')
    })
  ],
  devServer: {
    contentBase: resolvePath('dist'),
    port: 3000,
    hot:true
  }
}