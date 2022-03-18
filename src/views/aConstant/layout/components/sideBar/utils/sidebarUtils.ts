import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import settings from '@/settings'
import { thePermissionStore, theAppStore } from '@/store'

export const sidebarUtils = () => {
  const state = reactive({
    showLogo: settings.showLogo,
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
