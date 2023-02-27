import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/base.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/style/element.scss'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
