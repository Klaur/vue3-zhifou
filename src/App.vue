<template>
  <!-- <GlobalHeader></GlobalHeader> -->
  <div>
    <router-link to="/">首页</router-link>
    <router-link to="/column/1">目录</router-link>
    <router-link to="/login">登录</router-link>
  </div>
  <div class="container" style="padding-top: 72px">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
// import GlobalHeader from './components/GlobalHeader.vue'
export default defineComponent({
  name: 'App',
  setup() {
    return {}
  },
  components: {
    // GlobalHeader
  }
})
</script>
<style lang="stylus"></style>
