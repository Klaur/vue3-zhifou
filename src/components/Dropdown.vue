<template>
  <div class="dropdown" ref="dropdownRef">
    <span class="btn btn-outline-light my-2 dropdown-toggle" @click="toggleOpen">{{ title }}</span>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="display: block" v-show="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useClickOutside from '@/hooks/useClickOutside'
export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String
    }
  },
  setup() {
    const dropdownRef = ref<null | HTMLElement>(null)
    const isOpen = ref(false)
    const toggleOpen = () => {
      isOpen.value = !isOpen.value
    }
    const isClickOutside = useClickOutside(dropdownRef)
    watch(isClickOutside, () => {
      if (isOpen.value === true && isClickOutside.value === true) {
        isOpen.value = false
      }
    })
    return {
      isOpen,
      toggleOpen,
      dropdownRef
    }
  }
})
</script>
<style scoped lang="stylus"></style>
