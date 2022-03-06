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
                <svg-icon :icon-class="item" class-name="disabled" style="font-size: 30px;" />
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
import { iconsUtils } from './iconsUtils'

export default defineComponent({
  name: 'IconsIndex',
  setup () {
    const state = iconsUtils()
    return {
      ...state
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
    width: 150px;
    height: 85px;
    text-align: center;
    float: left;
    font-size: 30px;
    color: #24292e;
    cursor: pointer;
  }

  span {
    display: block;
    font-size: 14px;
    margin-top: 10px;
  }

  .disabled {
    pointer-events: none;
  }
}
</style>
