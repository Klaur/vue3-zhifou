import { App } from 'vue'
import Toasts from './src/index.vue'
;(Toasts as any).install = (app: App): void => {
  app.config.globalProperties.$toasts = Toasts
}
export default Toasts
