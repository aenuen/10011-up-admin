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
import { calcSum } from '@/libs/methods/src/calc/calcSum'

export default defineComponent({
  name: 'HomeView',
  setup() {
    const a = calcSum([1.1, 1.2])
    console.log(a)
    theSettingsStore().changeSetting({
      key: 'showSettings',
      value: true
    })
  }
})
</script>
