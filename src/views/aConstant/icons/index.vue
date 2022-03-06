<!--suppress HtmlUnknownAttribute -->
<template>
  <div class="icons-container">
    <el-tabs type="border-card">
      <el-tab-pane label="Element图标">
        <div class="grid">
          <div v-for="item of elementAry" :key="item" @click="handleClipboard(getElementIcon(item),'.element')" class="element">
            <el-tooltip placement="top">
              <template #content>{{ getElementIcon(item) }}</template>
              <div class="icon-item">
                <component :is="item" style="width: 30px;height:30px;"/>
                <span>{{ item }}</span>
              </div>
            </el-tooltip>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Font图标">
        <div class="grid">
          <div v-for="item of fontAry" :key="item" @click="handleClipboard(getFontIcon(item),'.font')" class="font">
            <el-tooltip placement="top">
              <template #content>{{ getFontIcon(item) }}</template>
              <div class="icon-item">
                <span :class="`icon iconfont icon-${item}`" style="font-size: 30px;"/>
                <span>{{ item }}</span>
              </div>
            </el-tooltip>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Svg图标">
        <div class="grid">
          <div v-for="item of svgAry" :key="item" @click="handleClipboard(getSvgIcon(item),'.svg')" class="svg">
            <el-tooltip placement="top">
              <template #content>{{ getSvgIcon(item) }}</template>
              <div class="icon-item">
                <svg-icon :icon-class="item" class-name="disabled" />
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
import fontAry from '@/components/Icons/font/fontAry'
import svgAry from '@/components/Icons/svg/svgAry'
import clipboard from '@/libs/clipboard'

export default defineComponent({
  name: 'IconsIndex',
  setup () {
    const handleClipboard = (text:string, eleCls:string) => {
      clipboard(text, eleCls)
    }
    const getElementIcon = (item:string) => `<el-icon><${item} /></el-icon>`
    const getFontIcon = (item:string) => `<span class="icon iconfont icon-${item}" style="font-size: 30px;" />`
    const getSvgIcon = (item:string) => `<svg-icon icon-class="${item}" />`
    const getComponents = (item:string) => `<${item}/>`
    return {
      elementAry,
      fontAry,
      svgAry,
      handleClipboard,
      getElementIcon,
      getFontIcon,
      getSvgIcon,
      getComponents
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
