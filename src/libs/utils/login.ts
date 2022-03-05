import { reactive } from 'vue'
import store from '@/store'
import { v4 as uuid } from 'uuid'
import { publicCaptcha } from '@/api/public'

export const loginUtils = () => {
  const state = reactive({
    username: '',
    password: '',
    authCode: '',
    captcha: ''
  })
  let sid = ''
  const getCaptcha = async () => {
    if (localStorage.getItem('sid')) {
      sid = localStorage.getItem('sid') || ''
    } else {
      sid = uuid()
      localStorage.setItem('sid', sid)
    }
    store.commit('SetSid', sid)
    publicCaptcha({ sid }).then((res) => {
      const { data } = res
      state.captcha = `${data}`
    })
  }
  return {
    state,
    getCaptcha
  }
}
