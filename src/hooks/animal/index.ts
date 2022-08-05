import type { Ref } from 'vue'
import { F } from '~/utils/axios'
export interface UseDogOption {
  title: string
  url: string
  showReload?: boolean
  showDetails?: Boolean
}
export interface Basic {
  path: Ref<string>
  disabled: Ref<boolean>
  hideDetails: Ref<boolean>
  details: Ref<{}>
}
export function useDog(opthion: UseDogOption) {
  const path = ref('')
  const details = ref({})
  const hideDetails = ref(false)
  const disabled = ref(true)
  function reload() {
    reset()
    F.get(opthion.url).then((res) => {
      if (opthion.showDetails) {
        path.value = res.image_link
        details.value = res
      }

      else { path.value = res.message }

      setTimeout(() => {
        disabled.value = false
      }, 1000)
    })
  }
  function switchDetails() {
    hideDetails.value = !hideDetails.value
  }
  function reset() {
    disabled.value = true
    path.value = ''
  }
  onMounted(() => {
    reload()
  })
  const methods = {
    reload, switchDetails,
  }
  return [{ path, disabled, ...opthion, details, hideDetails }, methods]
}
