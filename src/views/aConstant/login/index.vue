<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="postForm" class="login-form" autocomplete="off" label-position="left">
      <div class="title-container">
        <h3 class="title">管理员登录</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          name="username"
          v-model="postForm.username"
          :placeholder="fields.username"
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
            name="password"
            v-model="postForm.password"
            :placeholder="fields.password"
            :type="otherData.inputType"
            tabindex="2"
            autocomplete="off"
          />
        </el-form-item>
      </el-tooltip>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="images" />
        </span>
        <el-input
          ref="authCode"
          name="authCode"
          class="authCode"
          v-model="postForm.authCode"
          :placeholder="fields.authCode"
          type="text"
          tabindex="3"
          autocomplete="off"
        />
        <el-tooltip content="看不清，换一张" placement="right" manual>
          <div class="captcha">
            <span v-html="otherData.captcha" @click="getCaptcha" />
          </div>
        </el-tooltip>
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="otherData.loading"
          type="primary"
          style="margin-left:60px;width:440px;"
          @click="submitLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { loginUtils } from './utils/loginUtils'

export default defineComponent({
  name: 'LoginIndex',
  setup () {
    const {
      postForm,
      otherData,
      fields,
      getCaptcha,
      submitLogin
    } = loginUtils()
    setTimeout(() => {
      getCaptcha()
    }, 500)
    onMounted(() => {
      //
    })
    return {
      postForm,
      otherData,
      fields,
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

    .title-container {
      text-align: center;
      color: #fff
    }

    .el-form-item {
      height: 44px;
    }

    .svg-container {
      display: inline-block;
      padding: 6px 5px 6px 25px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
    }

    .captcha {
      display: inline-block;
      position: relative;

      span {
        position: absolute;
        left: 0;
        top: -18px;
      }
    }

    .el-input {
      width: 440px;

      &.authCode {
        width: 290px;
      }
    }
  }

  .button-wrap {
    width: 400px;
    margin: 0 auto;

    .el-button {
    }
  }
}
</style>
