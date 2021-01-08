<template>
  <nav class="navbar fixed-top navbar-dark bg-primary justify-content-between mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">知否专栏</a>
      {{ user }}
      <ul v-if="!user.login" class="list-inline mb-0">
        <li class="list-inline-item">
          <router-link to="/login" class="btn btn-outline-light">登录</router-link>
        </li>
        <li class="list-inline-item">
          <a class="btn btn-outline-light" href="#">注册</a>
        </li>
      </ul>
      <ul v-else class="list-inline mb-0">
        <dropdown :title="`你好,${user.username}`">
          <dropdown-item>
            <a href="#" class="dropdown-item">新建文章</a>
          </dropdown-item>
          <dropdown-item>
            <a href="#" class="dropdown-item">编辑资料</a>
          </dropdown-item>
          <dropdown-item>
            <a href="#" class="dropdown-item">退出登录</a>
          </dropdown-item>
        </dropdown>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProp } from '../store'
import Dropdown from './Dropdown.vue'
import DropdownItem from './DropdownItem.vue'
export interface UserProps {
  isLogin: boolean
  name?: string
  id?: string
}
export default defineComponent({
  name: 'GlobalHeader',
  setup() {
    const store = useStore<GlobalDataProp>()
    return {
      user: computed(() => {
        return store.state.user
      })
    }
  },
  components: {
    Dropdown,
    DropdownItem
  }
})
</script>
<style scoped lang="stylus"></style>
