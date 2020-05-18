export const state = () => ({
    locales: ['en-us', 'zh-tw'],
    locale: 'en_us'
})

export const mutations = {
    SET_LANG (state, locale) {
        if (state.locales.includes(locale)) {
          state.locale = locale
        }
    }
}
