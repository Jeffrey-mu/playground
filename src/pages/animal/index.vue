<script setup lang="ts">
import { useDog } from '~/hooks/animal'
import { Animal as A } from '~/enum/animal'
import { CAT_PATH as PATHS } from '~/composables/animal'
const [option, reload] = useDog({
  title: '互联网上最大的开源狗图片集合!',
  url: 'https://dog.ceo/api/breeds/image/random',
})
const PREFIX = A.ANIMAL_PATH_PREFIX
const isOpen = {
  open: true,
}
const ANIMALS = [
  {
    path: `${PREFIX}${A.CAT}${PATHS[0]}`,
    title: 'HttpCat',
    ...isOpen,
  },
  {
    path: `${PREFIX}${A.DOG}${PATHS[0]}.jpg`,
    title: 'HttpDog',
    ...isOpen,
  },
]
</script>

<template>
  <div flex="~ wrap">
    <Animal
      :option="option"
      @reload="reload"
    />
    <HttpAnimal
      v-for="item in ANIMALS"
      v-bind="item" :key="item.path"
    />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  name: 动物
</route>
