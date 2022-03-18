<template>
  <div class="home">
    <div class="ml10">123</div>
    <el-icon :size="30" color="blue">
      <Aim />
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { theSettingsStore } from '@/store'

export default defineComponent({
  name: 'HomeView',
  setup () {
    theSettingsStore().changeSetting({
      key: 'showSettings',
      value: true
    })
  }
})
</script>
