import { createPinia } from 'pinia'
import theAppStore from './modules/app'
import theErrorLogStore from './modules/errorLog'
import theUserStore from './modules/user'

const create = createPinia()

export { theAppStore, theErrorLogStore, theUserStore }
export default create
