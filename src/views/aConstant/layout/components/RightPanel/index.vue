<template>
  <div
    ref="rightPanel"
    :class="{ show: state.show }"
    class="rightPanel-container"
  >
    <div class="rightPanel-background" />
    <div class="rightPanel">
      <div
        class="handle-button"
        :style="{ top: buttonTop + 'px', 'background-color': theme }"
        @click="toggleShow"
      >
        <i :class="state.show ? 'el-icon-close' : 'el-icon-setting'" />
      </div>
      <div class="rightPanel-items">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  watch,
  reactive,
  computed,
  onMounted,
  onBeforeMount,
  getCurrentInstance
} from 'vue'
import { theSettingsStore } from '@/store'
import { classAdd, classRemove } from 'methods-often'

export default defineComponent({
  name: 'ComponentsRightPanel',
  props: {
    clickNotClose: { default: false, type: Boolean },
    buttonTop: { default: 250, type: Number }
  },
  setup(props) {
    const state = reactive({
      show: false
    })

    const internalInstance = getCurrentInstance()
    console.log(internalInstance)

    const closeSidebar = (evt: any) => {
      const parent = evt.target.closest('.rightPanel')
      if (!parent) {
        state.show = false
        window.removeEventListener('click', closeSidebar)
      }
    }
    const addEventClick = () => {
      window.addEventListener('click', closeSidebar)
    }
    const toggleShow = () => {
      state.show = !state.show
    }
    const insertToBody = () => {
      // const elx = internalInstance?.proxy?.$refs?.rightPanel
      // const body = document.querySelector('body')
      // body?.insertBefore(elx, body?.firstChild)
    }
    onMounted(() => {
      insertToBody()
    })
    onBeforeMount(() => {
      // const elx = this.$refs.rightPanel
      // elx.remove()
    })
    watch(
      () => state.show,
      (val) => {
        if (val && !props.clickNotClose) {
          addEventClick()
        }
        if (val) {
          classAdd(document.body, 'showRightPanel')
        } else {
          classRemove(document.body, 'showRightPanel')
        }
      }
    )
    return {
      closeSidebar,
      addEventClick,
      toggleShow,
      theme: computed(() => theSettingsStore().theme),
      state
    }
  }
})
</script>

<style lang="scss" scoped>
.rightPanel-background {
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
  background: rgba(0, 0, 0, 0.2);
  z-index: -1;
}

.rightPanel {
  width: 100%;
  max-width: 260px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.25s cubic-bezier(0.7, 0.3, 0.1, 1);
  transform: translate(100%);
  background: #fff;
  z-index: 40000;
}

.show {
  transition: all 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);

  .rightPanel-background {
    z-index: 20000;
    opacity: 1;
    width: 100%;
    height: 100%;
  }

  .rightPanel {
    transform: translate(0);
  }
}

.handle-button {
  width: 48px;
  height: 48px;
  position: absolute;
  left: -48px;
  text-align: center;
  font-size: 24px;
  border-radius: 6px 0 0 6px !important;
  z-index: 0;
  pointer-events: auto;
  cursor: pointer;
  color: #fff;
  line-height: 48px;

  i {
    font-size: 24px;
    line-height: 48px;
  }
}
</style>
