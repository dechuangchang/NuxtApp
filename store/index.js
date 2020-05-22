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
      try {
        if(window){
          function setCookie(name,value){
              var Days = 30;
              var exp = new Date();
              exp.setTime(exp.getTime() + Days*24*60*60*1000);
              document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
          }
          setCookie('theme',theme)
        }
      } catch (error) {
        
      }
      
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
