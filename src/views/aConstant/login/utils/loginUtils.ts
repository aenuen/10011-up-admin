import { reactive } from 'vue'
import { v4 as uuid } from 'uuid'
import { HttpResponse } from '@/libs/axios'
import { publicCaptcha } from '@/api/public'
import store from '@/store'
import { CryptoJsEncode } from '@/libs/cryptoJs'
import { ElMessage } from 'element-plus'

export const loginUtils = () => {
  const state = reactive({ username: 'admin', password: 'ee123123', authCode: '', captcha: '', sid: '' })
  const getCaptcha = async () => {
    if (localStorage.getItem('sid')) {
      state.sid = localStorage.getItem('sid') || ''
    } else {
      state.sid = uuid()
      localStorage.setItem('sid', state.sid)
    }
    const { code, data } = await publicCaptcha({ sid: state.sid }) as HttpResponse
    if (code === 200) {
      state.captcha = data
    }
  }
  const submitLogin = () => {
    store.dispatch('login', {
      username: CryptoJsEncode(state.username),
      password: CryptoJsEncode(state.password),
      authCode: state.authCode,
      sid: state.sid
    }).then((res) => {
      console.log(res)
      // goToPath('/')
    }).catch((err) => {
      ElMessage.success(err)
    })
  }

  return {
    state,
    getCaptcha,
    submitLogin
  }
}
