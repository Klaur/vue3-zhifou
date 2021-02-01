<template>
  <nav class="navbar fixed-top navbar-dark bg-primary justify-content-between mb-4">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">知否专栏</a>
      <ul class="list-inline mb-0">
        <li class="list-inline-item">
          <router-link to="/login" class="btn btn-outline-light">登录</router-link>
        </li>
        <li class="list-inline-item">
          <router-link to="/" class="btn btn-outline-light">首页</router-link>
        </li>
        <li class="list-inline-item">
          <router-link to="/column/1" class="btn btn-outline-light">目录</router-link>
        </li>
        <!-- <li class="list-inline-item" v-else>
          <a class="btn btn-outline-light" @click.prevent="logout">退出</a>
        </li> -->
      </ul>
      <!-- <ul v-else class="list-inline mb-0">
        <dropdown :title="`你好,${user.username}`">
          <dropdown-item>
            <span class="dropdown-item">新建文章</span>
          </dropdown-item>
          <dropdown-item>
            <span class="dropdown-item">编辑资料</span>
          </dropdown-item>
          <dropdown-item>
            <span class="dropdown-item" @click.stop="logout">退出登录</span>
          </dropdown-item>
        </dropdown>
      </ul> -->
    </div>
  </nav>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProp } from '../store'
// import Dropdown from './Dropdown.vue'
// import DropdownItem from './DropdownItem.vue'
import { useRouter } from 'vue-router'
export interface UserProps {
  isLogin: boolean
  name?: string
  id?: string
}
export default defineComponent({
  name: 'GlobalHeader',
  setup() {
    const store = useStore<GlobalDataProp>()
    const router = useRouter()
    const logout = () => {
      store.commit('logout')
      console.log(router)
      // setTimeout(() => {
      //   router.push({ name: 'login' })
      // }, 3000)
    }
    return {
      login: computed(() => {
        return store.state.login
      }),
      user: computed(() => {
        return store.state.user
      }),
      logout,
      router
    }
  },
  components: {
    // Dropdown,
    // DropdownItem
  }
})
</script>
<style scoped lang="stylus"></style>
