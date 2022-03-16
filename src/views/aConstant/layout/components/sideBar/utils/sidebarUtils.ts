import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { thePermissionStore, theAppStore } from '@/store'
export const sidebarUtils = () => {
  const state = reactive({
    permissionRoutes: () => computed(() => thePermissionStore().routes),
    isCollapse: () => computed(() => !theAppStore().sidebar.opened),
    activeMenu: () => {
      const route = useRouter().currentRoute.value
      const { meta, path } = route
      if (meta.activeMenu) return meta.activeMenu
      return path
    }
  })
  return {
    state
  }
}
