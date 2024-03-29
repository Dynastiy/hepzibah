import './assets/main.css'
import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import store from './store'

import App from './App.vue'
import router from './router'

import i18n from '@/plugin/i18n'

import CountryFlag from 'vue-country-flag-next'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import { Icon } from '@iconify/vue'

import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App)

app.component('country-flag', CountryFlag)

app.component('Icon', Icon)

app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCaTVs4mAldtKZN_6XO955UjlCWWc45ZOs'
  }
})

app.use(i18n)

app.mount('#app')
