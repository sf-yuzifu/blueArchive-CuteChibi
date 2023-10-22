import { createI18n } from 'vue-i18n'
import en from '../locale/en.json'
import zh from '../locale/zh.json'

const messages = {
  en: {
    trans: en
  },
  zh: {
    trans: zh
  }
}
//
const locale = ['zh', 'zh-CN', 'zh-cn'].includes(navigator.language) ? 'zh' : 'en'
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale,
  messages
})

export default i18n
