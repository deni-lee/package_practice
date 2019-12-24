import Vue from 'vue'
import cookies from 'js-cookie'
Vue.use(cookies)

export const state = () => ({
    locales: ['en', 'cn'],
    locale: 'en',
    host: process.env.test_1
})

export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.includes(locale)) {
            this.state.locale = locale
            cookies.set('locale', this.state.locale)
        }
    }
}