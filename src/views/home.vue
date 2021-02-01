<template>
  <div>首页</div>
  <!-- <ColumnList :list="list"></ColumnList> -->
  <!-- <Loading v-if="loading" background="gray" text="加载中。。。"></Loading> -->
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
// import ColumnList, { ColumnProps } from '@/components/ColumnList.vue'
// import Loading from '@/components/Loading.vue'
import { useStore } from 'vuex'
// import message from '@/components/createMessage'
// type ColumnListType = ColumnProps[]
export default defineComponent({
  name: '',
  async setup() {
    const store = useStore()
    // const list: ColumnListType = [
    //   {
    //     id: '1',
    //     title: 'hello',
    //     description: '121212'
    //   }
    // ]
    const options = reactive({
      message: '请登录系统',
      title: '',
      type: 'error'
    })
    const loading = computed(() => {
      return store.state.loading
    })
    // message('失败', 'error')
    return {
      // list,
      options,
      loading
    }
  },
  components: {
    // ColumnList
    // Loading
  }
})
</script>
<style scoped lang="stylus"></style>
