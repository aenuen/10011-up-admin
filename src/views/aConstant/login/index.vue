<template>
  <div class="login-container">
    <div v-html="state.captcha"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { loginUtils } from './utils/loginUtils'

export default defineComponent({
  name: 'LoginIndex',
  setup () {
    const { state, getCaptcha, submitLogin } = loginUtils()

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
