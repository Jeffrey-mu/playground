import type { Ref } from 'vue'
import { F } from '~/utils/axios'
export interface UseDogOption {
  title: string
  url: string
  showReload?: boolean
}
export interface Basic {
  path: Ref<string>
  disabled: Ref<boolean>
}
export function useDog(opthion: UseDogOption) {
  const path = ref('')
  const disabled = ref(true)
  function reload() {
    reset()
    F.get(opthion.url).then((res) => {
      path.value = res.message
      setTimeout(() => {
        disabled.value = false
      }, 1000)
    })
  }
  function reset() {
    disabled.value = true
    path.value = ''
  }
  onMounted(() => {
    reload()
  })
  return [{ path, disabled, ...opthion }, reload]
}
