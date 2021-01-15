import { createVNode, render } from 'vue'
import ToastConstructor from './src/index.vue'
let vm
const instances: any[] = []
let seed = 1
const message = (options: any) => {
  if (typeof options === 'string') {
    options = {
      type: '',
      duration: 2000,
      message: options
    }
  }
  //土司距离顶距离
  let verticalOffset = options.offset || 20
  instances.forEach(({ vm }) => {
    verticalOffset += (vm.el.offsetHeight || 0) + 16
  })
  verticalOffset += 16
  const id = 'message_' + seed++
  options = {
    duration: 2000,
    ...options,
    onClose: () => {
      return ''
    },
    offset: verticalOffset,
    id
  }
  const container = document.createElement('div')
  container.className = `container_${id}`
  vm = createVNode(ToastConstructor, options)
  render(vm, container)
  instances.push({ vm, $el: container })
  document.body.appendChild(container)
}
export default message
