const { defineConfig } = require('@vue/cli-service')
const dotenv = require('dotenv')

dotenv.config()

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: process.env.VUE_APP_URL_API
  }
})
