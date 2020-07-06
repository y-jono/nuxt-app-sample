
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
    '~/plugins/vue-inject.js'
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
        config.output.publicPath = "./_nuxt/"
      }
    }
  },
  generate: {
    subFolders: false
  },
  router: {
    // WebView側アプリとして単体で動かすためには、サーバーに頼らないRouting手段を取らねばならない。
    // Nuxt.js は標準で historyモード(HTML5 history APIを使うやつ)。
    // これで npm run build すると, Nuxt.jsアプリはSPAモードにもかかわらず、
    // 各ページ(pages/**/*.vue)毎に .html を出力してしまう。
    // そこで、 router mode を Vue.js 標準の hashモードにすると、
    // ブラウザが認識するページ遷移が起こらなくなる。
    // location.hashによる擬似ページ遷移はNuxt.jsにページ遷移として認識されないせいか、
    // SSRが効かなくなり、その結果トップページ(/index.html)だけが生成される。
    // WebViewに組み込むにはこのほうが都合が良い。なので必ず hash モードに設定すること。
    // 参考: https://www.slideshare.net/ushiboy/spa-76170499
    mode: "hash",
    extendRoutes (routes, resolve) {
      // 全てのルートにマッチしなかった場合、エラーページを出すのはやめ、 index.vue に戻してあげる
      routes.push({
        name: "custom",
        path: '*',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },
  pageTransition: {
    name: 'slide-prev',
    mode: ''
  }
}
