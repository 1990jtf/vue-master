import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// createApp(App).mount('#app')

// 参考资料：https://router.vuejs.org/zh/guide/
createApp(App).use(router).mount('#app')
