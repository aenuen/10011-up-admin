<template>
  <div class="home">
    <img alt="Vue logo" src="../../../assets/logo.png">
    <span class="icon iconfont icon-message"/>
    <svg-icon icon-class="404" />
    <el-icon class="is-loading">
      <edit />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Edit } from '@element-plus/icons-vue'

export default defineComponent({
  name: 'HomeView',
  components: { Edit }
})
</script>
