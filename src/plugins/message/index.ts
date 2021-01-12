import { createApp, h, ref, reactive } from 'vue'
// 注意这里替换成存放路径
import MessageComponent, { MsgList } from './MessageComponent.vue'
// 初始消息列表
const messageList = reactive<MsgList>([])
// 消息显示时长
const time = ref<number>(30000)
let seed = 1
// 处理数据
function handleData(type: string, message: string, title: string): void {
  // 数据添加
  messageList.push({ type, message, title, seed: seed++, show: true })
  // 数据删除
  let timer: any = setTimeout(() => {
    console.log(messageList)
    if (messageList.length > 0) {
      messageList.shift()
    } else {
      clearTimeout(timer)
      timer = null
    }
  }, time.value)
  // 创建
  const app = createApp({
    render() {
      return h(MessageComponent, { messageList })
    }
  })
  // 容器挂载
  let dom: any = document.getElementById('message')
  if (!dom) {
    dom = document.createElement('div')
    dom.id = 'message'
    document.body.append(dom)
  }
  app.mount('#message')
}
interface MessageImplements {
  info(title: string): void
  wraning(title: string): void
  success(title: string): void
  error(title: string): void
}
class MessageClass implements MessageImplements {
  // 普通提示
  info(message: string, title = ''): void {
    handleData('info', message, title)
  }
  // 警告提示
  wraning(message: string, title = ''): void {
    handleData('wraning', message, title)
  }
  // 成功提示
  success(message: string, title = ''): void {
    handleData('success', message, title)
  }
  // 错误提示
  error(message: string, title = ''): void {
    handleData('error', message, title)
  }
}
const Message = new MessageClass()
export default Message
