<template>
  <div>登录页</div>
  <!-- <ValidateForm @submit="onSubmit">
    <div class="mb-3">
      <label class="form-label">Email address</label>
      <validate-input placeholder="请输入邮箱地址" type="text" v-model="formData.email" :rules="emailRules"></validate-input>
    </div>
    <div class="mb-3">
      <label class="form-label">Password</label>
      <validate-input autocomplete="new-password" placeholder="请输入密码" type="password" v-model="formData.password" :rules="[{ type: 'required', message: '请输入密码！' }]"></validate-input>
    </div>
  </ValidateForm> -->
</template>
<script lang="ts">
// import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
// import ValidateForm from '../components/ValidateForm.vue'
import { useRouter } from 'vue-router'
import { GlobalDataProp } from '@/store'
import { useStore } from 'vuex'
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: '',
  setup() {
    const store = useStore<GlobalDataProp>()
    const router = useRouter()
    // const emailRules: RulesProp = [
    //   { type: 'required', message: '请输入邮箱！' },
    //   { type: 'email', message: '请输入正确格式的邮箱地址！' }
    // ]
    const formData = reactive({
      email: '',
      password: ''
    })
    const onSubmit = async (isValide: boolean) => {
      if (isValide) {
        const res = await store.dispatch('login', {
          username: formData.email,
          password: formData.password
        })
        if (res) {
          router.push({ name: 'home' })
        }
      }
    }
    return {
      // emailRules,
      formData,
      onSubmit
    }
  },
  components: {
    // ValidateInput,
    // ValidateForm
  }
})
</script>
<style scoped lang="stylus"></style>
