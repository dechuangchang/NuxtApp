export const state = () => ({
    locales: ['en-us', 'zh-cn'],
    locale: 'zh-cn',
    themes:['light','dark'],
    theme: 'dark'
})

export const mutations = {
  SET_LANG (state, locale) {
      if (state.locales.includes(locale)) {
        state.locale = locale
      }
  },
  SET_THEME (state, theme) {
      if (state.themes.includes(theme)) {
        window.localStorage.setItem('theme',theme)
        state.theme = theme
      }
  }
}

export const getters = {
  theme (state) {
    return state.theme
  },
  locale (state) {
    return state.locale
  },
}
