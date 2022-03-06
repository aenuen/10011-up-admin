import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/libs/utils/vee-validate'
import '@/components/Icons/font/iconfont.css'
import SvgIcon from '@/components/Icons/svg/index.vue'
import * as Icons from '@element-plus/icons-vue'

const app = createApp(App)
app.component('svg-icon', SvgIcon).use(store).use(router).use(ElementPlus).mount('#app')

Object.keys(Icons).forEach(key => { // 注册 @element-plus/icons-vue 全部图标
  app.component(key, Icons[key as keyof typeof Icons])
})
