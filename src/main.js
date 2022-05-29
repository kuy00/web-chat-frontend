import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import Notifications from '@kuy472013/vue-notification'
import SvgLoader from 'svg-loader-vue'
import http from './utils/axios'
import Socket from './socket'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(SvgLoader)
app.use(Notifications)
app.mount('#app')

window.io = require('socket.io-client')
app.config.globalProperties.$http = http
app.config.globalProperties.$socket = new Socket()
