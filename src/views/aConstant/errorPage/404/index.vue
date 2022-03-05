<template>
  <div class="container-404">
    <div class="http-404">
      <div class="pic-404">
        <img class="pic-404__parent" src="./image/404.png" alt="404">
        <img class="pic-404__child left" src="./image/404_cloud.png" alt="404">
        <img class="pic-404__child mid" src="./image/404_cloud.png" alt="404">
        <img class="pic-404__child right" src="./image/404_cloud.png" alt="404">
      </div>
      <div class="bullshit">
        <div class="bullshit__oops">OOPS!</div>
        <div class="bullshit__headline">{{ message }}</div>
        <a href="" class="bullshit__return-home">返回首页</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorPage404',
  setup () {
    return {
      message: '抱歉，未能查找到你所需的页面…'
    }
  }
})
</script>

<style lang="scss" scoped>
@import "~./common.scss";
</style>
