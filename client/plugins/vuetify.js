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
                primary: '#FFD700', // Gold/Yellow
                secondary: '#EF5350', // Red
                bodyColor: '#FFFFFF', // White
                textLight: '#212121', // Dark Gray/Black
                dark: '#424242', // Gray
                greyText: '#616161', // Light Gray
                ultraLightGrey: '#F5F5F5', // Light Gray
                lightGrey: '#DADADA', // Light Gray
                cancel: '#3949AB', // Indigo
                accent: '#4CAF50', // Green
                error: '#EF5350', // Red
                info: '#FFFFFF', // White
                success: '#4CAF50', // Green
                warning: '#FFD700' // Gold/Yellow
            },
            dark: {
                primary: '#FFD700', // Gold/Yellow
                secondary: '#EF5350', // Red
                bodyColor: '#212121', // Dark Gray/Black
                textLight: '#FFFFFF', // White
                dark: '#1F1F1F', // Dark Gray
                greyText: '#9E9E9E', // Light Gray
                ultraLightGrey: '#333333', // Dark Gray
                lightGrey: '#424242', // Gray
                cancel: '#3949AB', // Indigo
                accent: '#4CAF50', // Green
                error: '#EF5350', // Red
                info: '#FFFFFF', // White
                success: '#4CAF50', // Green
                warning: '#FFD700' // Gold/Yellow
            }
        }

    }
})