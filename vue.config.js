const { defineConfig } = require('@vue/cli-service')
const dotenv = require('dotenv')

dotenv.config()

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: 'https://apiportfolio-production-49d4.up.railway.app/'
  }
})
