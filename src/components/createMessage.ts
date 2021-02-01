import { createApp } from 'vue'
import Message from './Message.vue'
type MessageTypes = 'default' | 'success' | 'error' | 'warning'
const createMessage = (message: string, type: MessageTypes, timeout = 2000) => {
  const instance = createApp(Message, {
    message,
    type
  })
  const mountNode = document.createElement('div')
  document.body.appendChild(mountNode)
  instance.mount(mountNode)
  setTimeout(() => {
    instance.unmount(mountNode)
    document.body.removeChild(mountNode)
  }, timeout)
}
export default createMessage
