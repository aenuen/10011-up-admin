import { reactive } from 'vue'
import { v4 as uuid } from 'uuid'
import { HttpResponse } from '@/libs/axios'
import { publicCaptcha } from '@/api/public'

export const loginUtils = () => {
  const state = reactive({ username: 'admin', password: 'ee1231234', authCode: '', captcha: '' })
  let sid = ''
  const getCaptcha = async () => {
    if (localStorage.getItem('sid')) {
      sid = localStorage.getItem('sid') || ''
    } else {
      sid = uuid()
      localStorage.setItem('sid', sid)
    }
    const { code, data } = await publicCaptcha({ sid }) as HttpResponse
    if (code === 200) {
      state.captcha = data
    }
  }

  return {
    state,
    getCaptcha
  }
}
