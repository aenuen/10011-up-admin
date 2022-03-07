<template>
  <div class="login-container">
    <LoginForm :post-form="state" @submitLogin="submitLogin" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginForm from './components/loginForm.vue'
import { loginUtils } from './loginUtils'

export default defineComponent({
  name: 'LoginIndex',
  components: { LoginForm },
  setup () {
    const { state, getCaptcha, submitLogin } = loginUtils()
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
