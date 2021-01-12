<template>
  <div id="MarkDownEditor"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import Editor from '@toast-ui/editor'
import 'codemirror/lib/codemirror.css' // Editor's Dependency Style
import '@toast-ui/editor/dist/toastui-editor.css' // Editor's Style
export default defineComponent({
  name: 'MarkDownEditor',
  props: {
    content: String
  },
  setup() {
    let editor: any = null
    // watch(
    //   () => props.content,
    //   newVal => {
    //     editor.setHtml(newVal, true)
    //   }
    // )
    const getHtml = () => {
      return editor.getHtml()
    }
    const setHtml = (str: string) => {
      editor.setHtml(str)
    }
    onMounted(() => {
      const el: HTMLElement = document.querySelector('#MarkDownEditor') as HTMLElement
      editor = new Editor({
        el: el,
        height: '600px',
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        initialValue: '',
        placeholder: '请输入文本'
      })
    })
    return {
      getHtml,
      setHtml
    }
  }
})
</script>
<style scoped lang="stylus"></style>
