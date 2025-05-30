const { defineConfig } = require('@vue/cli-service')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  
  publicPath: '/',
  
  configureWebpack: {
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      })
    ]
  },
  
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = "SmartFly Pro - Soluciones Aéreas";
      return args;
    })
  }
})