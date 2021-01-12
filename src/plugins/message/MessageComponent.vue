<template>
  <ul class="toast-container position-absolute top-0 start-50 translate-middle-x p-3 message-list">
    <li class="toast d-flex align-items-center text-white show" :class="`${setClass(item.type)}`" v-show="item.show" v-for="item in messageList" :key="item.seed">
      <div class="toast-body">{{ item.message }}</div>
      <!-- <button type="button" class="btn-close btn-close-white ms-auto me-2" data-bs-dismiss="toast" aria-label="Close"></button> -->
    </li>
    <!-- <li class="toast-container position-absolute top-0 start-50 translate-middle-x p-3" style="z-index: 2000" v-for="(item, index) in messageList" :key="index">
      <div class="toast d-flex align-items-center bg-primary text-white show" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header" v-if="item.title">
          <img src="" class="rounded me-2" alt="..." />
          <strong class="me-auto">{{ item.title }}</strong>
          <small>11 mins ago</small>
          <button @click="show = false" type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">{{ item.message }}</div>
        <button @click="show = false" type="button" class="btn-close btn-close-white ms-auto me-2" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
    </li> -->
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
export interface MessageProps {
  type: string
  title?: string
  message: string
  seed: number
  show: boolean
}
export type MsgList = MessageProps[]
export default defineComponent({
  name: 'MessageComponent',
  props: {
    messageList: {
      type: Array as PropType<MsgList>,
      default: []
    }
  },
  setup() {
    // const setClass = (type: string): string => {
    //   if (type === 'info') {
    //     return 'message-info-item'
    //   } else if (type === 'wraning') {
    //     return 'message-wraning-item'
    //   } else if (type === 'success') {
    //     return 'message-success-item'
    //   } else if (type === 'error') {
    //     return 'message-error-item'
    //   }
    //   return ''
    // }
    const setClass = (type: string): string => {
      if (type === 'info') {
        return 'bg-primary'
      } else if (type === 'wraning') {
        return 'bg-wraning'
      } else if (type === 'success') {
        return 'bg-success'
      } else if (type === 'error') {
        return 'bg-danger'
      }
      return ''
    }
    return {
      setClass,
      close
    }
  }
})
</script>
<style lang="stylus" scoped>
.message-list
  position fixed
  top 64px
  right 24px
  z-index 2000
  max-width 200px
  margin-bottom 0
  text-align right
  .message-item
    display inline-block
    padding 12px 24px
    border 1px solid #b3d0cf
    margin-left 8px
    margin-bottom 12px
    background-color #e6f3ff
    font-size 14p
    color #007bff
    text-align left
    box-shadow 0 1px 1px 0 hsla(0, 0%, 80.4%, 0.5)
    border-radius 2px
    cursor default
  .message-info-item
    border 1px solid #b3d0cf
    background-color #e6f3ff
    color #007bff
  .message-error-item
    border 1px solid #e99
    background-color #f6e3e3
    color #e33
</style>
