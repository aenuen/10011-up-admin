<template>
  <div class="home">
    <div class="ml10">123</div>
    <el-icon :size="30" color="blue"><Aim/></el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { useStore } from 'vuex'

export default defineComponent({
  name: 'HomeView',
  setup () {
    // const store = useStore()
    // console.log(store.getters.token)
  }
})
</script>
