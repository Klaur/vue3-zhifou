<template>
  <ColumnList :list="list"></ColumnList>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
type ColumnListType = ColumnProps[]
export default defineComponent({
  name: '',
  setup() {
    const list: ColumnListType = [
      {
        id: '1',
        title: 'hello',
        description: '121212'
      }
    ]
    return {
      list
    }
  },
  components: {
    ColumnList
  }
})
</script>
<style scoped lang="stylus"></style>
