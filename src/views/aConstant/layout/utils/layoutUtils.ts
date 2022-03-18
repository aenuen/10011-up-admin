import { reactive } from 'vue'
import { theAppStore } from '@/store'
export const layoutUtils = () => {
  const handleClickOutside = () => {
    theAppStore().closeSidebar(false)
  }
  const state = reactive({
    sidebar: theAppStore().sidebar
  })

  return {
    handleClickOutside,
    state
  }
}
