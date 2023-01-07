import { createApp } from 'vue'
import App from './App.vue'
import { baseIcons } from './assets/icons/icons'
import './assets/tailwind.css'
import './registerServiceWorker'
import router from './router'

const app = createApp(App)

app.component('BaseIcon', baseIcons)
app.use(router)
app.mount('#app')
