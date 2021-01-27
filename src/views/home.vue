<template>
  <ColumnList :list="list"></ColumnList>
  <icon name="house"></icon>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
import message from '@/plugins/toasts/src/index.vue'
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
    const options = reactive({
      message: '请登录系统',
      title: '',
      type: 'error'
    })
    return {
      list,
      clickHandle,
      options
    }
  },
  components: {
    ColumnList
  }
})
</script>
<style scoped lang="stylus"></style>
