<template>
  <teleport to="body" />
  <div class="toast-container position-absolute top-0 start-50 translate-middle-x p-3" style="z-index: 2000">
    <div class="toast d-flex align-items-center bg-primary text-white" :class="show ? 'show' : ''" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header" v-if="title">
        <img src="" class="rounded me-2" alt="..." />
        <strong class="me-auto">{{ title }}</strong>
        <small>11 mins ago</small>
        <button @click="show = false" type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">{{ message }}</div>
      <button @click="show = false" type="button" class="btn-close btn-close-white ms-auto me-2" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Toasts',
  props: {
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    }
  },
  setup() {
    const show = ref(false)
    return {
      show
    }
  }
})
</script>
<style scoped lang="stylus"></style>
