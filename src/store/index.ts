import { createPinia } from 'pinia'
import theAppStore from './modules/app'
import theErrorLogStore from './modules/errorLog'
import thePermissionStore from './modules/permission'
import theSettingsStore from './modules/settings'
import theTagsViewStore from './modules/tagsView'
import theUserStore from './modules/user'

const create = createPinia()

export {
  theAppStore,
  theErrorLogStore,
  thePermissionStore,
  theSettingsStore,
  theTagsViewStore,
  theUserStore
}
export default create
