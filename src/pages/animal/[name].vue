<script setup lang="ts">
import { CAT_PATH, DOG_PATH } from '~/composables/Animal'
const props = defineProps<{ name: string }>()
const isWhatAnimal = computed(() => {
  if (props.name === 'HttpDogs')
    return 'dog/static/img/medium'
  return 'cat'
})
const suffix = computed(() => {
  return isWhatAnimal.value === 'cat' ? '' : '.jpg'
})
const PATHS = computed(() => {
  return isWhatAnimal.value === 'cat' ? CAT_PATH : DOG_PATH
})
</script>

<template>
  <div>
    <h2 text-center font="~ w-400" text-10>
      {{ props.name }}
    </h2>
    <Back />
    <div flex="~ wrap">
      <HttpAnimal
        v-for="item in PATHS"
        :key="item" :path="`https://http.${isWhatAnimal}${item}${suffix}`" :open="false"
      />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  name: HttpCats
</route>

