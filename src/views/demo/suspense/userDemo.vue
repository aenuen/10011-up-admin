<template>
  <div>
    {{ msgRef }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'userDemo',
  async setup() {
    const promise: Promise<string> = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('错误信息'))
      }, 2000)
    })
    const msg = await promise
    console.log('setup -> msg', msg)
    const msgRef = ref('')
    msgRef.value = msg
    console.log('setup -> msgRef', msgRef)
    return {
      msgRef
    }
  }
})
</script>

<style lang="scss" scoped></style>
