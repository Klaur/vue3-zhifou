<template>
  <GlobalHeader :user="userData"></GlobalHeader>
  <div class="container" style="padding-top: 72px">
    <ColumnList :list="list"></ColumnList>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
const userData: UserProps = {
  isLogin: true,
  name: 'Lucas',
  id: '1'
}
const testData: ColumnProps[] = [
  {
    id: '1',
    title: '测试专栏1',
    description: '这是一个测试专栏的描述',
    avatar: 'https://tva1.sinaimg.cn/large/9bd9b167ly1g1p9q194r8j20b40b4dgf.jpg'
  },
  {
    id: '2',
    title: '测试专栏2',
    description: '这是一个测试专栏2的描述',
    avatar: 'https://tva2.sinaimg.cn/large/9bd9b167ly1fzjxzrg125j20b40b4gn2.jpg'
  },
  {
    id: '3',
    title: '测试专栏3',
    description: '这是一个测试专栏3的描述,很有趣很有趣，哈哈哈！',
    avatar: ''
  }
]
export default defineComponent({
  name: 'App',
  setup() {
    return {
      list: testData,
      userData
    }
  },
  components: {
    ColumnList,
    GlobalHeader
  }
})
</script>
<style lang="stylus"></style>
