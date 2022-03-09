<template>
  <div class="login-container">

    <el-form ref="loginForm" :model="state" class="login-form" autocomplete="off" label-position="left">
      <div class="title-container">
        <h3 class="title">管理员登录</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="state.username"
          placeholder="用户名"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="off"
        />
      </el-form-item>
      <el-tooltip content="您输入的是大写" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            ref="password"
            v-model="state.password"
            type="text"
            placeholder="密码"
            name="password"
            tabindex="2"
            autocomplete="off"
          />
        </el-form-item>
      </el-tooltip>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { loginUtils } from './utils/loginUtils'

export default defineComponent({
  name: 'LoginIndex',
  setup () {
    const {
      state,
      getCaptcha,
      submitLogin
    } = loginUtils()

    getCaptcha()
    submitLogin()
    return {
      state,
      getCaptcha,
      submitLogin
    }
  }
})
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$bgColor: #283443;
$dark_gray: #889aa4;
$lightColor: #fff;
$cursorColor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    .svg-container {
      padding: 6px 5px 6px 25px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }

    .el-input {
      display: inline-block;
      width: 85%;

      input {
        background: transparent !important;
        border: 0;
        -webkit-appearance: none;
        border-radius: 0;
        padding: 12px 5px 12px 15px;
        color: $lightColor;
        caret-color: $cursorColor;

        &:-webkit-autofill {
          box-shadow: 0 0 0 1000px $bgColor inset !important;
          -webkit-text-fill-color: $cursorColor !important;
        }
      }
    }

    .el-input.el-input__inner {
      background-color: rgba(255, 255, 255, 0.247) !important;
    }
  }
}
</style>
