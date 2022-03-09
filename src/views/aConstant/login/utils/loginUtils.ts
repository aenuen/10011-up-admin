import { reactive } from 'vue'
import { v4 as uuid } from 'uuid'
import { HttpResponse } from '@/libs/axios'
import { CryptoJsEncode } from '@/libs/cryptoJs'
import { routerUtils } from '@/libs/utils/router'
import { publicCaptcha } from '@/api/public'
import store from '@/store'
import { ElMessage } from 'element-plus'

export const loginUtils = () => {
  const { goToPath } = routerUtils()
  const postForm = reactive({
    username: 'admin',
    password: 'ee123123',
    authCode: '',
    sid: ''
  })
  const otherData = reactive({
    captcha: '',
    inputType: 'password',
    loading: false
  })
  const getCaptcha = async () => {
    if (localStorage.getItem('sid')) {
      postForm.sid = localStorage.getItem('sid') || ''
    } else {
      postForm.sid = uuid()
      localStorage.setItem('sid', postForm.sid)
    }
    const {
      code,
      data
    } = await publicCaptcha({
      sid: postForm.sid,
      height: 36
    }) as HttpResponse
    if (code === 200) {
      otherData.captcha = data
    }
  }
  const submitLogin = () => {
    store.dispatch('login', {
      username: CryptoJsEncode(postForm.username),
      password: CryptoJsEncode(postForm.password),
      authCode: postForm.authCode,
      sid: postForm.sid
    }).then(() => {
      goToPath('/')
    }).catch((err) => {
      ElMessage.success(err)
    })
  }
  const fields = {
    username: '用户名',
    password: '密码',
    authCode: '验证码'
  }
  return {
    postForm,
    otherData,
    getCaptcha,
    submitLogin,
    fields
  }
}
