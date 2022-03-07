<template>
  <div class="app-wrapper">
    <el-aside class="sidebar-container" />
    <div class="main-container">
      <NavBar />
      <AppMain />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/navBar/index.vue'
import AppMain from './components/appMain/index.vue'

export default defineComponent({
  name: 'LayoutIndex',
  components: {
    NavBar,
    AppMain
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
@import "~@/assets/style/mixin.scss";
@import "~@/assets/style/variables.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
