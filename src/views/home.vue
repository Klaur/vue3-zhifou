<template>
  <ColumnList :list="list"></ColumnList>
  <button class="btn btn-success" @click="clickHandle">点击</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import message from '@/plugins/message/index.ts'
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
    const clickHandle = () => {
      message.info('详情跳转')
    }
    return {
      list,
      clickHandle
    }
  },
  components: {
    ColumnList
  }
})
</script>
<style scoped lang="stylus"></style>
