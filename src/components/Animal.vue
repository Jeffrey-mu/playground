<script setup lang="ts" name='dog'>
import type { Basic, UseDogOption } from '~/hooks/animal'
interface AnimalProps {
  option: UseDogOption & Basic
}
const { option } = defineProps<AnimalProps>()
const emit = defineEmits(['reload'])
const path = computed(() => option.path.value)
const showReload = computed(() => !option.showReload)

function handleClick() {
  emit('reload')
}
</script>

<template>
  <div id="some-element" b-rd b m-2 p-2>
    <h2 fs-20 p-2 fw-600>
      {{ option.title }}
    </h2>
    <img :src="path" alt="" ma b-rd w100 h90>
    <button v-if="showReload" :disabled="option.disabled" b px-2 mt-2 b-rd hover="bg-black c-#fff cursor-pointer" @click="handleClick">
      reload
    </button>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  name: 动物
</route>

