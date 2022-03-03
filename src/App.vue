<template>
  <router-view/>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { userLogin } from '@/api/user'

export default defineComponent({
  name: 'HelloWorld',
  setup () {
    onMounted(() => {
      userLogin({ username: '1', password: '1' }).then((res) => {
        console.log(res)
      })
    })
  }
})
</script>
<style lang="scss">
</style>
