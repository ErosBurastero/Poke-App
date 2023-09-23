// For further information: https://github.com/nuxt-community/vuetify-module#options

import Vue from 'vue'
import Vuetify from 'vuetify'
import es from 'vuetify/lib/locale/zh-Hans'
import en from 'vuetify/lib/locale/zh-Hans'


Vue.use(Vuetify)

export default new Vuetify({
    lang: {
        locales: { es, en },
        current: 'es',
    },
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#294FB3',
                secondary: '#2992B3',
                bodyColor: '#E5E5E5',
                textLight: '#4F5667',
                dark: '#292D32',
                greyText: '#b7b3b3',
                ultraLightGrey: '#DADADA',
                lightGrey: '#F8F9FA',
                cancel: '#FF7B43',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107'
            },
            dark: {
                primary: '#BB86FC',
                secondary: '#03DAC6',
                bodyColor: '#121212',
                textLight: '#FFFFFF',
                dark: '#1F1F1F',
                greyText: '#9E9E9E',
                ultraLightGrey: '#333333',
                lightGrey: '#424242',
                cancel: '#FF7043',
                accent: '#448AFF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107'
            }
        }
    }
})