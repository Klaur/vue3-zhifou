<template>
  <div class="tui-editor-contents">我是文章详情页</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: '',
  setup() {
    const route = useRoute()
    return {
      route
    }
  }
})
</script>
<style scoped lang="stylus"></style>
