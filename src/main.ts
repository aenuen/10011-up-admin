import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/libs/utils/vee-validate'
import '@/assets/iconFont/iconfont.css'
import plugin from './plugins'

const app = createApp(App)
app.use(plugin, { imports: [] }).use(store).use(router).use(ElementPlus).mount('#app')
