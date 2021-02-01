<template>
  <teleport to="#back" />
  <div class="d-flex justify-content-center align-items-center h-100 loading-container" :style="{ backgroundColor: background }">
    <div class="loading-content">
      <div class="spinner-grow" style="width: 3rem; height: 3rem" role="status">
        <span class="visually-hidden">{{ text || 'Loading' }}</span>
      </div>
      <p v-if="text" class="text-primary samll">{{ text }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
  name: '',
  props: {
    text: {
      type: String
    },
    background: {
      type: String,
      default: ''
    },
    setup() {
      const node = document.createElement('div')
      node.id = 'back'
      document.body.appendChild(node)
      onMounted(() => {
        document.body.removeChild(node)
      })
    }
  }
})
</script>
<style scoped lang="stylus">
.loading-container
  width 100%
  height 100%
  position fixed
  z-index 100
  background-color rgba(255, 255, 255, 0.5)
  top 0
  left 0
  text-align center
</style>
