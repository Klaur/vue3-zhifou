<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button class="btn btn-primary">登 录</button>
      </slot>
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt, { Emitter } from 'mitt'
export const emitter: Emitter = mitt()
type ValidateFunc = () => boolean
export default defineComponent({
  name: 'ValidateForm',
  emits: ['submit'],
  setup(props, context) {
    const funcArrr: ValidateFunc[] = []
    const submitForm = () => {
      const result: boolean = funcArrr.map(fn => fn()).every(item => item)
      context.emit('submit', result)
    }
    const callback = (func?: ValidateFunc) => {
      if (func) {
        funcArrr.push(func)
      }
    }
    emitter.on('form-item-created', callback)
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
    })
    return {
      submitForm
    }
  }
})
</script>
<style scoped lang="stylus"></style>
