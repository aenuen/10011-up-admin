<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">登入</li>
          <li>
            <a :to="{ name: 'reg' }">注册</a>
          </li>
        </ul>
        <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0">
          <Form ref="observer" v-slot="{ validate,errors }">
            <div class="layui-tab-item layui-show">
              <div class="layui-form layui-form-pane">
                <form method="post">
                  <div class="layui-form-item">
                    <label class="layui-form-label">用户名</label>
                      <div class="layui-input-inline">
                        <Field
                          type="text"
                          as="input"
                          name="username"
                          rules="required|email"
                          v-model="username"
                          placeholder="请输入用户名"
                          autocomplete="off"
                          class="layui-input"
                        />
                      </div>
                      <div class="layui-form-mid">
                        <span style="color: #c00">{{ errors.username }}</span>
                      </div>
                  </div>
                  <div class="layui-form-item">
                    <label class="layui-form-label">密码</label>
                      <div class="layui-input-inline">
                        <Field
                          type="password"
                          as="input"
                          name="password"
                          rules="required|min:6"
                          v-model="password"
                          placeholder="请输入密码"
                          autocomplete="off"
                          class="layui-input"
                        />
                      </div>
                      <div class="layui-form-mid">
                        <span style="color: #c00">{{ errors.password }}</span>
                      </div>
                  </div>
                  <div class="layui-form-item">
                      <div class="layui-row">
                        <label class="layui-form-label">验证码</label>
                        <div class="layui-input-inline">
                          <Field
                            type="text"
                            as="input"
                            rules="required|length:4"
                            name="code"
                            v-model="code"
                            placeholder="请输入验证码"
                            autocomplete="off"
                            class="layui-input"
                          />
                        </div>
                        <div class>
                          <span class="svg" style="color: #c00" @click="getCode()" v-html="svg"></span>
                        </div>
                      </div>
                      <div class="layui-form-mid">
                        <span style="color: #c00">{{ errors.code }}</span>
                      </div>
                  </div>
                  <div class="layui-form-item">
                    <button class="layui-btn" type="button" @click="validate().then(submit)">
                      立即登录
                    </button>
                    <span style="padding-left: 20px">
                      <a>忘记密码？</a>
                    </span>
                  </div>
                  <div class="layui-form-item fly-form-app">
                    <span>或者使用社交账号登入</span>
                    <a href onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-qq" title="QQ登入"></a>
                    <a href onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-weibo" title="微博登入"></a>
                  </div>
                </form>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { Form, Field } from 'vee-validate'
import { loginUtils } from '@/libs/utils/login'

export default defineComponent({
  name: 'ViewsLogin',
  components: { Form, Field },
  setup () {
    const { state, getCaptcha } = loginUtils()
    const submit = () => {
      console.log(1)
    }
    onMounted(async () => await getCaptcha())
    return {
      state,
      getCaptcha,
      submit
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
