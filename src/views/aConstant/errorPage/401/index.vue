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
import { error401Utils } from './error401Utils'

export default defineComponent({
  name: 'ErrorPage401',
  setup () {
    const state = error401Utils()
    return {
      ...state
    }
  }
})
</script>

<style lang="scss" scoped>
@import "~./common.scss";
</style>
