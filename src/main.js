import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import NProgress from 'nprogress'

import './index.css'
import '../node_modules/nprogress/nprogress.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

NProgress.configure({
    showSpinner: false,
})
