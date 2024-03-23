const { defineConfig } = require('@vue/cli-service')


module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader

       // Configuración específica de Vuetify
      // Por ejemplo, puedes definir un tema personalizado
      customVariables: ['~/assets/variables.scss'],
      theme: {
        dark: false,
        themes: {
          light: {
            primary: '#3f51b5',
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
          dark: {
            primary: '#3f51b5',
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
        },
      },
    

		}
  },
 // Otras configuraciones...
 chainWebpack: config =>
  config
    .plugin('feature-flags')
    .use(require('webpack').DefinePlugin, [{
      __VUE_OPTIONS_API__: 'true',
      __VUE_PROD_DEVTOOLS__: 'false'
    }])

  
})
