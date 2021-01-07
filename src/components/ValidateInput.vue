<template>
  <div class="validate-input-container pb-3">
    <input :value="inputRef.val" v-bind="$attrs" class="form-control" :class="{ 'is-invalid': inputRef.error }" @blur="validate" @input="updateValue" />
    <div id="validationServer04Feedback" class="invalid-feedback" v-if="inputRef.error">
      {{ inputRef.message }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive, watch, onMounted } from 'vue'
import { emitter } from '@/components/ValidateForm.vue'
const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
interface RuleProp {
  type: 'required' | 'email'
  message: string
}
export type RulesProp = RuleProp[]
export default defineComponent({
  inheritAttrs: false,
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  name: 'ValidateInput',
  setup(props, context) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })
    watch(
      () => props.modelValue,
      newVal => {
        inputRef.val = newVal || ''
      }
    )
    const validate = (): boolean => {
      if (props.rules) {
        const allPass = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = inputRef.val.trim() !== ''
              console.log('required', inputRef.val.trim(), passed)
              break
            case 'email':
              passed = emailReg.test(inputRef.val)
              console.log('email', inputRef.val, passed)
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPass
        return allPass
      }
      return true
    }
    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }
    onMounted(() => {
      emitter.emit('form-item-created', validate)
    })
    return {
      inputRef,
      validate,
      updateValue
    }
  }
})
</script>
<style scoped lang="stylus"></style>
