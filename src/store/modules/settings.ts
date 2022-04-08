import { defineStore } from 'pinia'
import settings from '@/settings'
import variables from '@/assets/styles/_theme.module.scss'

const { showSettings, tagsView, fixedHeader, sidebarLogo } = settings

interface SettingsFace {
  theme: string
  showSettings: boolean
  tagsView: boolean
  fixedHeader: boolean
  sidebarLogo: boolean
}

const theSettingsStore = defineStore('settings', {
  state: (): SettingsFace => ({
    theme: variables.theme,
    showSettings: showSettings,
    tagsView: tagsView,
    fixedHeader: fixedHeader,
    sidebarLogo: sidebarLogo
  }),
  actions: {
    changeSetting(data: { key: string; value: boolean }) {
      const { key, value } = data
      switch (key) {
        case 'showSettings':
          this.showSettings = value
          break
        case 'tagsView':
          this.tagsView = value
          break
        case 'fixedHeader':
          this.fixedHeader = value
          break
        case 'sidebarLogo':
          this.sidebarLogo = value
          break
      }
    }
  }
})

export default theSettingsStore
