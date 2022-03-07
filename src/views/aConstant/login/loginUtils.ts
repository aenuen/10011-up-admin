import { reactive } from 'vue'
import store from '@/store'
import { v4 as uuid } from 'uuid'
import { HttpResponse } from '@/libs/axios'
import { publicCaptcha } from '@/api/public'

export const loginUtils = () => {
  const state = reactive({ username: 'admin', password: '', authCode: '', captcha: '' })
  let sid = ''
  const getCaptcha = async () => {
    if (localStorage.getItem('sid')) {
      sid = localStorage.getItem('sid') || ''
    } else {
      sid = uuid()
      localStorage.setItem('sid', sid)
    }
    store.commit('SetSid', sid)
    const { code, data } = await publicCaptcha({ sid }) as HttpResponse
    if (code === 200) {
      state.captcha = data
    }
  }
  const submitLogin = () => {
    store.dispatch('login', {
      username: state.username,
      password: state.password
    }).then((res) => {
      console.log(res)
    }).catch((error) => {
      console.log(error)
    })
  }

  return {
    state,
    getCaptcha,
    submitLogin
  }
}
