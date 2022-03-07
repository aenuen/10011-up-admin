<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import store from '@/store'

export default defineComponent({
  name: 'HelloWorld',
  setup () {
    console.log(store.getters['user/token'])
  }
})
</script>
<style lang="scss">
</style>
