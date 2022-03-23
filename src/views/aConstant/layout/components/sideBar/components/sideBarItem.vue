<template>
  <div>Index</div>
</template>

<script lang="ts">
import variables from '@/libs/assets/style/variables.scss'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LayoutSideBarItem',
  setup () {
    return {
      variables
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
