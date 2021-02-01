<template>
  <svg class="svg-icon" aria-hidden="true" v-bind="$attrs">
    <use :xlink:href="`/sprite.${file}.svg#icon-${name}`" />
  </svg>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'icon',
  props: ['name'],
  data() {
    return {
      file: process.env.VUE_APP_HASH
    }
  }
})
</script>
<style scoped lang="stylus">
.svg-icon
  width 1em
  height 1em
  vertical-align -0.15em
  fill currentColor
  overflow hidden
</style>
