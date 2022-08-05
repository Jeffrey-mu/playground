<script setup lang="ts" name='dog'>
import type { Basic, UseDogOption } from '~/hooks/animal'
interface AnimalProps {
  option: UseDogOption & Basic
}

const { option } = defineProps<AnimalProps>()
const emit = defineEmits(['reload'])
const path = computed(() => option.path.value)
const showReload = computed(() => !option.showReload)
const { isLoading, error } = useImage(path, { delay: 3000 })
function handleClick() {
  emit('reload')
}
</script>

<template>
  <div id="some-element" b-rd b m-2 p-2>
    <h2 fs-20 p-2 fw-600>
      {{ option.title }}
    </h2>
    <div v-if="isLoading" b-rd w100 h90 class="animate-pulse bg-gray-500/30 p-2" />
    <img v-else :src="path" alt="" ma b-rd w100 h90>
    <button v-if="showReload" :disabled="disabled" btn m="3 t6" text-sm hover="bg-black c-#fff cursor-pointer" @click="handleClick">
      reload
    </button>
  </div>
</template>

