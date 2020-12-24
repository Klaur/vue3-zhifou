import { onMounted, onUnmounted, ref, Ref } from 'vue'
const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutside = ref(false)
  const handlerClick = (e: MouseEvent) => {
    if (elementRef.value) {
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = false
      } else {
        isClickOutside.value = true
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handlerClick)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handlerClick)
  })
  return isClickOutside
}
export default useClickOutside
