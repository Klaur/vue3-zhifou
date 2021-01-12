import { createVNode, render } from 'vue'
import ToastsConstructor from './index.vue'
const instances = []
let seed = 1
let vm: any
const toasts = (opts: any) => {
  if (typeof opts === 'string') {
    opts = {
      message: opts
    }
  }
  const id = 'toast_' + seed++
  const container = document.createElement('div')
  container.className = `container_${id}`
  // const message = opts.message
  vm = createVNode(ToastsConstructor, opts)
  render(vm, container)
  instances.push({ vm, $el: container })
  document.body.appendChild(container)
}
export default toasts
