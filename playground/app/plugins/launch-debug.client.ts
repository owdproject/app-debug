import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin({
  name: 'app-debug-playground-launch',
  dependsOn: ['desktop-app-debug-register'],
  setup(nuxtApp) {
    autoStartPlaygroundApps(nuxtApp, [
      { id: 'org.owdproject.debug', entry: 'debug', windowModel: 'main' },
    ])
  },
})
