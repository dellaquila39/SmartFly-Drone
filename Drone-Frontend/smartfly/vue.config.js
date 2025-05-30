const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  
  // Configuración esencial para Netlify
  publicPath: '/',
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = "SmartFly Pro - Soluciones Aéreas";
      return args;
    })
  }
})