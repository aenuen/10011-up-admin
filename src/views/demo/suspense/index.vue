<template>
  <SuspenseWithError>
    <template #error="{ err }">
      {{ err }}
    </template>
    <template #default>
      <UserDemo />
    </template>
    <template #fallback> loading </template>
  </SuspenseWithError>
</template>

<script>
import { defineComponent } from 'vue'
import SuspenseWithError from '../../../components/SuspenseWithError'
import UserDemo from './userDemo'
export default defineComponent({
  name: 'SuspenseWithErrorDemo',
  components: { SuspenseWithError, UserDemo }
})
</script>

<style lang="scss" scoped></style>
