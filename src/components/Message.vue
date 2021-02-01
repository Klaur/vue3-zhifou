<template>
  <teleport to="message" />
  <div class="alert message-info fixed-top w-50 mx-auto d-flex alert-dismissible fade show" :class="classObject" v-if="isVisible" role="alert">
    <span>{{ message }}</span>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" @click="hide"></button>
  </div>
</template>
<script lang="ts">
type MessageTypes = 'default' | 'success' | 'error' | 'warning'
import useCreateDom from '@/hooks/useCreateDom'
import { defineComponent, PropType, ref } from 'vue'
export default defineComponent({
  name: '',
  props: {
    type: {
      type: String as PropType<MessageTypes>,
      default: 'default'
    },
    message: {
      type: String
    }
  },
  emits: ['close-message'],
  setup(props, context) {
    useCreateDom('message')
    const isVisible = ref(true)
    const classObject = {
      'alert-success': props.type === 'success',
      'alert-danger': props.type === 'error',
      'alert-primary': props.type === 'default',
      'alert-warning': props.type === 'warning'
    }
    const hide = () => {
      isVisible.value = false
      context.emit('close-message')
    }
    return {
      classObject,
      isVisible,
      hide
    }
  }
})
</script>
<style scoped lang="stylus"></style>
