<template>
  <li class="dropdown-option" :class="{ 'is-disabled': disabled }">
    <slot></slot>
  </li>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: '',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>
<style scoped lang="stylus">
.dropdown-option.is-disabled
  color #6c757d
  pointer-events none
</style>
