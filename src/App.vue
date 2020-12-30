<template>
  <GlobalHeader :user="userData"></GlobalHeader>
  <div class="container" style="padding-top: 72px">
    <ColumnList :list="list"></ColumnList>
    <button @click="formData.email = '123@qq.com'">123@qq.com</button>
    <form>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <validate-input v-model="formData.email" :rules="emailRules"></validate-input>
        <div id="emailHelp" class="form-text">{{ formData.email }}We'll never share your email with anyone else.</div>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'
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
    const emailRules: RulesProp = [
      { type: 'required', message: '请输入邮箱！' },
      { type: 'email', message: '请输入正确格式的邮箱地址！' }
    ]
    const formData = reactive({
      email: '',
      password: ''
    })
    return {
      list: testData,
      userData,
      emailRules,
      formData
    }
  },
  components: {
    ColumnList,
    GlobalHeader,
    ValidateInput
  }
})
</script>
<style lang="stylus"></style>
