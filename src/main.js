import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import config from './config'

axios.get(config.mockApi + '/login').then(res => {
    console.log(res)
})
const app = createApp(App)

app.use(ElementPlus).use(router)

app.mount('#app')
