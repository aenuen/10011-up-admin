<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import style from '@/assets/styles/_variables.module.scss'

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    console.log('styles.menuText', style.menuText)
  }
})
</script>
<style lang="scss"></style>
