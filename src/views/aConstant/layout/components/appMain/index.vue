<template>
  <section class="app-main">
    <div style="padding: 20px">
      <router-view v-slot="{ Component }" :key="key">
        <transition name="fade-transform" mode="out-in">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </section>
</template>

<script lang="ts">
import router from '@/router'
import { theUserStore } from '@/store'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'LayoutAppMain',
  setup () {
    return {
      cachedViews: computed(() => theUserStore().token),
      key: computed(() => router.push)
    }
  }
})
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header + .app-main {
  padding-top: 50px;
}

.hasTagsView {
  .app-main {
    min-height: calc(100vh - 84px);
  }

  .fixed-header + .app-main {
    padding-top: 84px;
  }
}
</style>
