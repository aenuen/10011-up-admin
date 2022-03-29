<template>
  <div>
    <el-dropdown class="avatar-container hover-effect" trigger="click">
      <div class="avatar-wrapper" style="cursor: pointer">
        <el-avatar
          class="user-avatar"
          :size="35"
          :src="`${avatar}`"
          @error="true"
        >
          <img src="@/assets/image/noneImage.png" alt />
        </el-avatar>
        <i class="el-icon-caret-bottom" />
      </div>
      <el-dropdown-menu>
        <router-link to="/">
          <el-dropdown-item>首页</el-dropdown-item>
        </router-link>
        <router-link to="/manager/data">
          <el-dropdown-item>个人资料</el-dropdown-item>
        </router-link>
        <el-dropdown-item @click="logout">
          <span style="display: block">退出登录</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { theUserStore } from '@/store'

export default defineComponent({
  name: 'LayoutAvatar',
  setup() {
    const useStore = theUserStore()
    const logout = async () => {
      useStore.logout()
    }
    return {
      avatar: computed(() => useStore.avatar),
      logout
    }
  }
})
</script>
<style lang="scss" scoped>
.avatar-container {
  margin-right: 30px;

  .avatar-wrapper {
    margin-top: 5px;
    width: 35px;
    height: 35px;
    position: relative;

    .user-avatar {
      cursor: pointer;
      width: 35px;
      height: 35px;
    }

    .el-icon-caret-bottom {
      cursor: pointer;
      position: absolute;
      left: 50%;
      margin-left: -6px;
      bottom: -9px;
      font-size: 12px;
    }
  }
}
</style>
