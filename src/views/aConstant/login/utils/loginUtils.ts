import { publicCaptcha } from '@/api/public'
import { HttpResponse } from '@/libs/axios'
import { CryptoJsEncode } from '@/libs/cryptoJs'
import { routerUtils } from '@/libs/utils/router'
import { theUserStore } from '@/store'
import { ElMessage, MessageParamsTyped } from 'element-plus'
import { v4 as uuid } from 'uuid'
import { reactive } from 'vue'

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
    const { code, data } = await publicCaptcha({ sid: postForm.sid, height: 36 }) as HttpResponse
    if (code === 200) {
      otherData.captcha = data
    }
  }
  const submitLogin = () => {
    theUserStore().login({
      username: CryptoJsEncode(postForm.username),
      password: CryptoJsEncode(postForm.password),
      authCode: postForm.authCode,
      sid: postForm.sid
    }).then(() => {
      goToPath('/')
    }).catch((err: MessageParamsTyped | undefined) => {
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
