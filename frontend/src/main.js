import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import './registerServiceWorker'
import router from './router'

import BaseFooter from './components/base/BaseFooter'
import BaseLoading from './components/base/BaseLoading'
import BaseNavbar from './components/base/BaseNavbar'
import BaseIcons from './components/base/BaseIcon'

const pinia = createPinia()
const app = createApp(App)

app.component('BaseFooter', BaseFooter)
app.component('BaseLoading', BaseLoading)
app.component('BaseNavbar', BaseNavbar)
app.component('BaseIcon', BaseIcons)
app.use(pinia)
app.use(router)
app.mount('#app')
