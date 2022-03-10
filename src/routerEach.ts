import 'normalize.css/normalize.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import '@/assets/style/layout.scss'
import '@/components/Icons/font/files/iconfont.css'
import router from '@/router'
// import { getToken } from '@/libs/token'

NProgress.configure({ showSpinner: false }) // 隐藏右侧旋转的小圆环
// const whiteList = ['/login', '/auth-redirect'] // 设置白名单
router.beforeEach(async () => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})
