require('dotenv').config()

export default {
    mode: 'universal',
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
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: ['plyr/dist/plyr.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        'nuxt-fontawesome',
        'sweetalert2'
    ],
    fontawesome: {
        // icon 的標籤使用 <fa>，這邊不設定就會依照 plugin 裡的設定<font-awesome-icon>
        component: 'fa',
        imports: [
            // 引入 fas 所有的icon
            {
                set: '@fortawesome/free-solid-svg-icons',
                icons: ['fas']
            },
            {
                set: '@fortawesome/free-brands-svg-icons',
                icons: ['fab']
            },
        ]
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },
    router: {
        middleware: 'i18n'
    },

    plugins: ['@/plugins/i18n.js',
        '@/plugins/fontawesome.js',
        '~/plugins/vue-plyr'
    ],

    generate: {
        routes: ['/', '/about', '/cn', '/cn/about']
    },
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    }
}