import { defineNuxtPlugin } from 'nuxt/app'
import { defineDesktopApp } from '@owdproject/core/kit/defineDesktopApp'
import configAppDebug from './app.config'

export default defineNuxtPlugin({
  name: 'desktop-app-debug-register',
  async setup() {
    if (import.meta.server) return
    await defineDesktopApp(configAppDebug)
  },
})
