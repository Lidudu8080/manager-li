import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import request from '@/utils/request'
import storage from '@/utils/storage'
import api from '@/api'



const app = createApp(App)
app.config.globalProperties.$request = request;
app.config.globalProperties.$storage = storage;
app.config.globalProperties.$api = api;



app.use(ElementPlus).use(router).use(store)
app.mount('#app')
