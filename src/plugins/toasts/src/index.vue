<template>
  <div
    class="position-absolute start-50 translate-middle-x toast d-flex align-items-center text-white totast-position"
    :class="[toastType, showClass]"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    @mouseenter="clearTimer"
    @mouseleave="startTimer"
  >
    <div class="toast-header" v-if="options.title">
      <img src="" class="rounded me-2" alt="..." />
      <strong class="me-auto">{{ options.title }}</strong>
      <small>11 mins ago</small>
      <button @click="show = false" type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">{{ options.message }}</div>
    <button @click="close" type="button" class="btn-close btn-close-white ms-auto me-2" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
type ToastsType = 'info' | 'success' | 'error' | 'warning'
export interface ToastsProp {
  title?: string
  message: string
  type?: ToastsType
  duration?: number
  onClose?: () => {}
}
export default defineComponent({
  name: 'Toasts',
  props: {
    options: {
      type: Object as PropType<ToastsProp>,
      required: true
    }
  },
  setup(props) {
    const timer: any = ref(null)
    const show = ref(false)
    const toastType = computed(() => {
      let toastStyle = ''
      switch (props.options.type) {
        case 'info':
          toastStyle = 'bg-info'
          break
        case 'success':
          toastStyle = 'bg-success'
          break
        case 'error':
          toastStyle = 'bg-danger'
          break
        case 'warning':
          toastStyle = 'bg-warning'
          break
        default:
          toastStyle = 'bg-light'
          break
      }
      return toastStyle
    })
    const showClass = computed(() => {
      return show.value ? 'show' : ''
    })
    const close = () => {
      show.value = false
      if (typeof props.options.onClose === 'function') {
        props.options.onClose()
      }
    }
    return {
      timer,
      show,
      close,
      showClass,
      toastType
    }
  },
  mounted() {
    this.startTimer()
    this.show = true
  },
  methods: {
    startTimer() {
      console.log('触发startTimer', this.options.duration)
      this.timer = setTimeout(() => {
        if (this.show) {
          this.close()
        }
        console.log('this.close')
      }, this.options.duration || 2000)
    },
    // clear timer
    clearTimer() {
      clearTimeout(this.timer)
      this.timer = null
    }
  }
})
</script>
<style scoped lang="stylus"></style>
