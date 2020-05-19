export const state = () => ({
    locales: ['en-us', 'zh-cn'],
    locale: 'zh-cn'
})

export const mutations = {
    SET_LANG (state, locale) {
        if (state.locales.includes(locale)) {
          state.locale = locale
        }
    }
}
