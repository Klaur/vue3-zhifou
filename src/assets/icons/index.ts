// import { createApp } from 'vue'
// import icon from '@/components/icon.vue'
// const app = createApp({})
// app.component(icon.name, icon)
const req = require.context('@/assets/icons', true, /\.svg$/)
const requireAll = (requireContext: any) => requireContext.keys().map((name: any) => requireContext(name))
requireAll(req)
