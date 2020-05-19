import Vue from 'vue'
import VueI18n from 'vue-i18n'
import enUS from '@/locales/en-us.json'
import zhCN from '@/locales/zh-cn.json'
import enUS2 from 'view-design/dist/locale/en-US'
import zhCN2 from 'view-design/dist/locale/zh-CN'
Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  Vue.locale = () => {};
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'zh-cn',
    messages: {
      "en-us": Object.assign(enUS, enUS2),
      "zh-cn": Object.assign(zhCN, zhCN2)
    }
  })

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}
