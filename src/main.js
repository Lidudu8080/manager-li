import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from '@/router'
import request from '@/utils/request'
import request from '@/utils/storage'


const app = createApp(App)
app.config.globalProperties.$request = request;
app.config.globalProperties.$storage = storage;

app.use(ElementPlus).use(router)

app.mount('#app')
