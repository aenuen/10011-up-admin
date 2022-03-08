<template>
  <div class="login-container">
    <LoginForm :post-form="state" @submitLogin="submitLogin" />
    <div v-html="state.captcha"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store'
import LoginForm from './components/loginForm.vue'
import { loginUtils } from './utils/loginUtils'
import { CryptoJsEncode } from '@/libs/cryptoJs'
import { ElMessage } from 'element-plus'

export default defineComponent({
  name: 'LoginIndex',
  components: { LoginForm },
  setup () {
    const { state, getCaptcha } = loginUtils()
    const submitLogin = () => {
      store.dispatch('login', {
        username: CryptoJsEncode(state.username),
        password: CryptoJsEncode(state.password)
      }).then((res) => {
        console.log(res)
        // goToPath('/')
      }).catch((err) => {
        ElMessage.success(err)
      })
    }

    getCaptcha()
    submitLogin()
    return { state, getCaptcha, submitLogin }
  }
})
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
}
</style>
