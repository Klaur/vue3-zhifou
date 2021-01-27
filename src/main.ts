import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/icons'
import icon from './components/icon.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
createApp(App)
  .use(router)
  .use(store)
  .component('icon', icon)
  .mount('#app')
