import { defineRule, configure } from 'vee-validate'
import { required, min, max, length, email, confirmed, is_not as isNot } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import zh from '@vee-validate/i18n/dist/locale/zh_CN.json'

defineRule('required', required)
defineRule('min', min)
defineRule('max', max)
defineRule('length', length)
defineRule('email', email)
defineRule('confirmed', confirmed)
defineRule('is_not', isNot)

const config = {
  messages: {
    ...zh.messages,
    required: '请输入{field}',
    min: '{field}至少输入0:{length}个字符',
    length: '{field}为0:{length}个字符',
    email: '请输入正确的{field}'
  },
  names: {
    email: '电子邮箱',
    password: '密码',
    rePassword: '确认密码',
    oldPassword: '旧密码',
    petName: '昵称',
    username: '用户名',
    authCode: '验证码',
    title: '标题',
    catalog: '分类'
  },
  fields: {
    catalog: {
      is_not: '请选择{field}'
    },
    email: {
      email: '请输入正确的{field}',
      required: '请输入{field}'
    }
  }
}

configure({
  generateMessage: localize('zh_CN', config)
})
