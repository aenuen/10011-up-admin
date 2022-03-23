<template>
  <el-header class="header">
    <div class="toolbar">
      <el-dropdown>
        <el-icon style="margin-right: 8px; margin-top: 1px">
          <setting />
        </el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>View</el-dropdown-item>
            <el-dropdown-item>Add</el-dropdown-item>
            <el-dropdown-item>Delete</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span>Tom</span>
    </div>
  </el-header>
</template>

<script lang="ts">
export default {
  name: 'LayoutHeader'
}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
}
</style>
