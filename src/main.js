import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // pastikan import router sudah benar

createApp(App)
  .use(router)  // pakai router
  .mount('#app')

