<template>
  <el-container class="app-wrapper">
    <Sidebar />
    <el-container>
      <Header />
      <el-scrollbar>
        <app-main />
      </el-scrollbar>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from './sidebar.vue'
import Header from './components/header/index.vue'
import AppMain from './components/appMain/index.vue'
import { layoutUtils } from './utils/layoutUtils'
import router from '@/router'

export default defineComponent({
  name: 'LayoutIndex',
  components: {
    Sidebar,
    Header,
    AppMain
  },
  setup() {
    const { state } = layoutUtils()
    console.log(state.sidebar, router)
    return {}
  }
})
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/_mixin.scss';
@import '~@/assets/styles/_variables.module.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
