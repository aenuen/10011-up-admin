import { defineStore } from 'pinia'
import settings from '@/settings'
const { showSettings, tagsView, fixedHeader, sidebarLogo } = settings

interface SettingsFace {
  showSettings: boolean,
  tagsView: boolean,
  fixedHeader: boolean,
  sidebarLogo: boolean
}

const theSettingsStore = defineStore('settings', {
  state: ():SettingsFace => ({
    showSettings: showSettings,
    tagsView: tagsView,
    fixedHeader: fixedHeader,
    sidebarLogo: sidebarLogo
  }),
  actions: {
    changeSetting (data:{key:string, value:boolean}) {
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
      console.log(key, value, this.$state.showSettings)
    }
  }
})

export default theSettingsStore
