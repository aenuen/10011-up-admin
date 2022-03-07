<template>
  <div>{{ postForm.username }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginForm',
  props: {
    postForm: { type: Object, default: () => { return {} } }
  },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
</style>
