<template>
  <div :class="{'has-logo':showLogo}">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="state.activeMenu"
        :collapse="state.isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in state.permissionRoutes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { sidebarUtils } from './utils/sidebarUtils'

export default defineComponent({
  name: 'LayoutSideBar',
  setup () {
    const { state } = sidebarUtils()
    return {
      state
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
