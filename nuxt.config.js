
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: []
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@mdi/font/css/materialdesignicons.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    ['nuxt-buefy', {materialDesignIcons: false}],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, {isDev, isClient}) {
      if(!isDev) {
        // NuxtはDefaultで / で出力してしまう。WKWebViewはそれでは読めない。そこで、読み込めるように ./ に変更する
        config.output.publicPath = "~/_nuxt/"
      }
    }
  },
  generate: {
    subFolders: false
  },
  router: {
    extendRoutes (routes, resolve) {
      // 全てのルートにマッチしなかった場合、エラーページを出すのはやめ、 index.vue に戻してあげる
      routes.push({
        name: "custom",
        path: '*',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },
  transition: {
    mode: ''
  }
}
