<template>
  <GlobalHeader :user="userData"></GlobalHeader>
  <div class="container" style="padding-top: 72px">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
const userData: UserProps = {
  isLogin: true,
  name: 'Lucas',
  id: '1'
}
export default defineComponent({
  name: 'App',
  setup() {
    return {
      userData
    }
  },
  components: {
    GlobalHeader
  }
})
</script>
<style lang="stylus"></style>
