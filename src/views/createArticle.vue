<template>
  <div class="container">
    <ValidateForm @submit="onSubmit">
      <div class="mb-3">
        <label class="form-label">文章标题</label>
        <validate-input placeholder="请输入邮箱地址" type="text" v-model="formData.title" :rules="titleRules"></validate-input>
      </div>
      <div class="mb-3">
        <editor ref="editor" :content="formData.content"></editor>
      </div>
    </ValidateForm>
    <button class="btn btn-primary" @click="setHtml('<h1>hello world</h1>')">设置</button>
    <div class="tui-editor-contents" v-html="formData.content"></div>
    <!-- <button class="btn btn-primary" @click="getHtml">获取</button> -->
  </div>
</template>
<script lang="ts">
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'
import { defineComponent, reactive, ref } from 'vue'
import editor from '@/components/editor.vue'
export default defineComponent({
  setup() {
    const formData = reactive({
      title: '',
      avatar: '',
      content: ''
    })
    const editor: any = ref(null)
    const titleRules: RulesProp = [{ type: 'required', message: '请输入文章标题！' }]
    const getHtml = () => {
      formData.content = editor.value.getHtml()
    }
    const setHtml = (str: string) => {
      editor.value.setHtml(str)
    }
    const onSubmit = (isValid: boolean) => {
      getHtml()
      console.log(isValid, formData)
    }
    return {
      formData,
      titleRules,
      getHtml,
      editor,
      setHtml,
      onSubmit
    }
  },
  components: {
    ValidateInput,
    ValidateForm,
    editor
  }
})
</script>
<style scoped lang="stylus"></style>
