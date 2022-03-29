<template>
  <slot v-if="error" name="error" :err="error" />
  <Suspense v-else>
    <template #default>
      <slot name="default" />
    </template>
    <template #fallback>
      <slot name="fallback" />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref } from 'vue'

export default defineComponent({
  name: 'ComponentsSuspenseWithError',
  setup() {
    const error = ref('')
    onErrorCaptured((err) => {
      error.value = err as unknown as string
      return true
    })
    return {
      error
    }
  }
})
</script>

<style lang="scss" scoped></style>
