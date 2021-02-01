import { onUnmounted } from 'vue'
function useCreateDom(nodeId: string) {
  const dom = document.createElement('div')
  dom.id = nodeId
  document.body.appendChild(dom)
  onUnmounted(() => {
    document.body.removeChild(dom)
  })
}
export default useCreateDom
