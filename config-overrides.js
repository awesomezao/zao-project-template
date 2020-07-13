const {
  override,
  addWebpackAlias,
  overrideDevServer
} = require('customize-cra')
const path = require('path')
const { addReactRefresh } = require("customize-cra-react-refresh")

const resolvePath = tar => path.resolve(__dirname, tar)

// devServer config
const devServerConfig = () => config => {
  return {
    ...config,
    compress: true,
    proxy: {
      '/apis/**': {
        target: '',
        changeOrigin: true,
        pathRewrite: {
          '^/apis':'/'
        }
      }
    }
  }
}

module.exports = {
  webpack: override(
    addWebpackAlias({
      '@': resolvePath('src'),
      '~':resolvePath('src/assets')
    }),
    addReactRefresh()
  ),
  devServer: overrideDevServer(devServerConfig()),
  paths: paths => {
    return paths
  }
}