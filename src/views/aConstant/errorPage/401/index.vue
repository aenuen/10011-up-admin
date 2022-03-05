<template>
  <div class="errPage-container">
    <el-button :icon="ArrowLeft" @click="back">返回</el-button>
    <el-row>
      <el-col :span="12">
        <h1 class="text-jumbo text-ginormous">Oops!</h1>
        <h1>您没有权限访问这个页面!</h1>
      </el-col>
      <el-col :span="12">
        <img src="./image/401.gif" width="313" height="428" alt="Girl has dropped her ice cream.">
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ArrowLeft } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'ErrorPage401',
  setup () {
    const router = useRouter()
    const back = () => {
      router.go(-1)
    }
    return {
      back,
      ArrowLeft
    }
  }
})
</script>

<style lang="scss" scoped>
@import "~./common.scss";
</style>
