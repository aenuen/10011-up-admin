<template>
  <div class="fly-header layui-bg-black">
    <div class="layui-container">
      <a class="fly-logo" href="/">
        <img src="@/assets/img/logo-2.png" alt="layui" />
      </a>
      <ul class="layui-nav fly-nav layui-hide-xs">
        <li class="layui-nav-item layui-this">
          <a href="/"><i class="iconfont icon-jiaoliu"></i>交流</a>
        </li>
        <li class="layui-nav-item">
          <a href="javascript:">
            <i class="iconfont icon-iconmingxinganli"></i>案例</a
          >
        </li>
        <li class="layui-nav-item">
          <a href="/" target="_blank"><i class="iconfont icon-ui"></i>框架</a>
        </li>
      </ul>

      <ul class="layui-nav fly-nav-user">
        <template v-if="isLogin">
          <li class="layui-nav-item" @mouseover="show" @mouseout="hide">
            <a href="javascript:" class="fly-nav-avatar">
              <cite class="layui-hide-xs">{{ userInfo.nickname }}</cite>
              <i class="layui-badge fly-badge-vip layui-hide-xs" v-show="userInfo.isVip!=='0'">
                VIP{{ userInfo.isVip }}
              </i>
              <img :src="userInfo.avatar" :alt="`${userInfo.nickname}的头像`">
            </a>
            <dl class="layui-nav-child layui-anim layui-anim-upbit" :class="{'layui-show':isHover}">
              <dd>
                <a><i class="layui-icon">&#xe620;</i>基本设置</a>
              </dd>
              <dd>
                <a><i class="iconfont icon-tongzhi" style="top: 4px;" />我的消息</a>
              </dd>
              <dd>
                <a><i class="layui-icon" style="margin-left: 2px; font-size: 22px;">&#xe68e;</i>我的主页</a>
              </dd>
              <hr style="margin: 5px 0;" />
              <dd>
                <a href="javascript:" style="text-align: center;" @click="logout">退出</a>
              </dd>
            </dl>
          </li>
        </template>
        <template v-else>
          <li class="layui-nav-item">
            <a class="iconfont icon-touxiang layui-hide-xs" href="javascript:" />
          </li>
          <li class="layui-nav-item">
            <a>登入</a>
          </li>
          <li class="layui-nav-item">
            <a>注册</a>
          </li>
          <li class="layui-nav-item layui-hide-xs">
            <a href="javascript:" title="QQ登入" class="iconfont icon-qq" />
          </li>
          <li class="layui-nav-item layui-hide-xs">
            <a href="javascript:" title="微博登入" class="iconfont icon-weibo" />
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'
import store from '@/store'

export default defineComponent({
  name: 'LayoutHeader',
  setup () {
    const refData = reactive({
      isHover: false,
      hoverCtrl: {},
      hasMsg: false
    })
    return {
      ...refData,
      num: computed(() => store.state.num),
      isLogin: computed(() => store.state.isLogin),
      userInfo: computed(() => store.state.userInfo)
    }
  }
})
</script>

<style lang="scss" scoped>
.fly-logo {
  left: -15px;
  top: -10px;
  margin-left: 15px;
}
.layui-layer-tips {
  position: absolute;
  white-space: nowrap;
  right: 0;
  top: 60px;
  z-index: 2000;
}
</style>
