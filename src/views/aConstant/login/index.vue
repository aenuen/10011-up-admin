<template>
  <div class="login-container">
    <LoginForm :post-form="postForm" @loginSubmit="loginSubmit" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import LoginForm from './components/loginForm.vue'

export default defineComponent({
  name: 'LoginIndex',
  components: { LoginForm },
  setup () {
    const state = reactive({
      postForm: {
        username: '',
        password: ''
      },
      otherQuery: {}
    })
    const loginSubmit = () => {
      console.log(1)
    }
    return {
      ...state,
      loginSubmit
    }
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
