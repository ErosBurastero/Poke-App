export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    ssr: false,
    target: 'static',
    generate: {
        fallback: true
    },
    head: {
        titleTemplate: '%s',
        title: 'Pokemon app',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/poke.png' },
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
            { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=VT323:wght@300;400;500&display=swap" },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Poppins:wght@400;500;600&display=swap' }

        ],
    },
    server: {
        port: process.env.PORT
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['assets/scss/main.scss', ],

    styleResources: {
        scss: [
            'assets/scss/variables.scss',
            'assets/scss/main.scss'
        ]
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{ src: '~/plugins/vuetify' }, '~/plugins/services.js'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [
        { path: '~/components', prefix: '', pathPrefix: false }
    ],

    watchers: {
        webpack: {
            aggregateTimeout: 300,
            poll: 1000,
        },
    },

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
        '@nuxtjs/dotenv'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/scss/variables.scss'],
        optionsPath: '~/plugins/vuetify.js',
        treeShake: true
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}