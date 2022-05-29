import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import Notifications from '@kuy472013/vue-notification'
import SvgLoader from 'svg-loader-vue'
import http from './utils/axios'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(SvgLoader)
app.use(Notifications)
app.mount('#app')

app.config.globalProperties.$http = http
