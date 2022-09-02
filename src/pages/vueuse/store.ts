// store.js
import { ref } from 'vue'
import { createGlobalState } from '@vueuse/core'

export const useGlobalState = createGlobalState(
  () => {
    const count = ref(0)
    return { count }
  }
)
