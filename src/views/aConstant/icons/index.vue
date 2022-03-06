<template>
  <div class="icons-container">
    <el-tabs type="border-card">
      <el-tab-pane label="Svg图标">
        <div class="grid">
          <div v-for="item of svgIconsAry" :key="item" @click="handleClipboard(getSvgIcon(item),$event)">
            <el-tooltip placement="top">
              <template #content>{{ getSvgIcon(item) }}</template>
              <div class="icon-item">
                <svg-icon icon="arrow-left" />
                <svg-icon :icon-class="item" class-name="disabled" />
                <span>{{ item }}</span>
              </div>
            </el-tooltip>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="ElementUI图标">
        <div class="grid">
          <div v-for="item of elementAry" :key="item" @click="handleClipboard(getElementIcon(item),$event)">
            <el-tooltip placement="top">
              <template #content>{{ getElementIcon(item) }}</template>
              <div class="icon-item">
                <i :class="'el-icon-' + item" />
                <span>{{ item }}</span>
              </div>
            </el-tooltip>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import elementAry from '@/components/Icons/element/elementAry'
import svgAry from '@/components/Icons/svg/svgAry'

export default defineComponent({
  name: 'IconsIndex',
  setup () {
    const handleClipboard = (text:string, event:Event) => {
      console.log(text, event)
    }
    const getSvgIcon = (symbol:string) => `<svg-icon icon-class="${symbol}" />`
    const getElementIcon = (symbol:string) => `<i class="el-icon-${symbol}" />`
    return {
      elementAry,
      svgIconsAry: svgAry,
      handleClipboard,
      getSvgIcon,
      getElementIcon
    }
  }
})
</script>

<style lang="scss" scoped>
.icons-container {
  margin: 10px 20px 0;
  overflow: hidden;

  .grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .icon-item {
    margin: 20px;
    height: 85px;
    text-align: center;
    width: 100px;
    float: left;
    font-size: 30px;
    color: #24292e;
    cursor: pointer;
  }

  span {
    display: block;
    font-size: 16px;
    margin-top: 10px;
  }

  .disabled {
    pointer-events: none;
  }
}
</style>
