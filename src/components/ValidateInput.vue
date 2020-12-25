<template>
  <div class="validate-input-container pb-3">
    <input v-model="inputRef.val" type="text" class="form-control" :class="{ 'is-invalid': inputRef.error }" @blur="validate" />
    <div id="validationServer04Feedback" class="invalid-feedback" v-if="inputRef.error">
      {{ inputRef.message }}
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
interface RuleProp {
  type: 'required' | 'email'
  message: string
}
export type RulesProp = RuleProp[]
export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>
  },
  name: 'ValidateInput',
  setup(props) {
    const inputRef = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validate = () => {
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
        console.log('inputRef.error', inputRef.error, 'allPass', allPass)
      }
    }
    return {
      inputRef,
      validate
    }
  }
})
</script>
<style scoped lang="stylus"></style>
