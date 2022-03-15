import { defineStore } from 'pinia'
import Cookies from 'js-cookie'

const opened = (): boolean => Cookies.get('sidebarStatus') ? !!Cookies.get('sidebarStatus') : true

interface SidebarFace {
  opened: boolean;
  withoutAnimation: boolean
}

export interface AppFace {
  sidebar: SidebarFace;
  device: string;
  size: string;
}

const theAppStore = defineStore('user', {
  state: (): AppFace => ({
    sidebar: {
      opened: opened(),
      withoutAnimation: false
    },
    device: 'desktop',
    size: Cookies.get('size') || 'medium'
  }),
  actions: {
    toggleSidebar () {
      this.sidebar.opened = !this.sidebar.opened
      this.sidebar.withoutAnimation = false
      if (this.sidebar.opened) {
        Cookies.set('sidebarStatus', '1')
      } else {
        Cookies.set('sidebarStatus', '0')
      }
    },
    closeSidebar (withoutAnimation: boolean) {
      Cookies.set('sidebarStatus', '0')
      this.sidebar.opened = false
      this.sidebar.withoutAnimation = withoutAnimation
    },
    toggleDevice (device:string) {
      this.device = device
    },
    setSize (size:string) {
      Cookies.set('size', size)
      this.size = size
    }
  }
})

export default theAppStore
