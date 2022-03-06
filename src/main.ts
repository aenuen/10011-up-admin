import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/libs/utils/vee-validate'
import '@/components/Icons/font/files/iconfont.css'
import SvgIcon from '@/components/Icons/svg/index.vue'
import * as Icons from '@element-plus/icons-vue'

const app = createApp(App)
app.component('svg-icon', SvgIcon).use(store).use(router).use(ElementPlus).mount('#app')

Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key as keyof typeof Icons])
})

/* createVNode 方式注册组件(使用：<ele-icon :icon="item" style="width: 30px;height:30px;"/>)
const Icon = (props: { icon: string }) => {
  const { icon } = props
  return createVNode(Icons[icon as keyof typeof Icons])
}
app.component('ele-icon', Icon) */
