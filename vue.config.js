  const { defineConfig } = require('@vue/cli-service')
  module.exports = defineConfig({
    
    //Stops the Multiword Error
    lintOnSave:false,
    configureWebpack: {
      module: {
        rules: [
          {
            test: /\.(svg)(\?.*)?$/,
            use: [
              {
                loader: 'svg-inline-loader',
                options: {
                  limit: 10000,
                  name: 'assets/img/[name].[hash:7].[ext]'
                }
              }
            ]
          }
        ]
      }
    },
    
  })
