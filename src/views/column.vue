<template>
  <div class="mb-4" style="display: flex; align-items: center">
    <div class="avatar">
      <img
        style="width: 150px; height: 150px"
        src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/af1ef49c38364f5dbe1af1a422d2040b~tplv-k3u1fbpfcp-watermark.image"
        class="img-thumbnail"
        alt="..."
      />
    </div>
    <div class="column-content" style="margin-left: 30px">
      <h3 class="">前端专栏</h3>
      <p class="">{{ str }}</p>
    </div>
  </div>
  <div class="card mb-3" style="padding: 16px 0 16px 16px">
    <h4 class="title">前端进阶之路</h4>
    <div class="row g-0">
      <div class="col-md-2">
        <img class="img-thumbnail" width="100%" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3045125733,3436435590&fm=26&gp=0.jpg" alt="..." />
      </div>
      <div class="col-md-10">
        <div class="card-body">
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">by Klaur ,Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { GlobalDataProp } from '@/store'
export default defineComponent({
  name: '',
  setup() {
    const route = useRoute()
    const store = useStore<GlobalDataProp>()
    const str = computed(() => {
      return store.getters.welcomeContent
    })
    return {
      route,
      str
    }
  }
})
</script>
<style scoped lang="stylus"></style>
