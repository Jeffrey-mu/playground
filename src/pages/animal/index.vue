<script setup lang="ts">
import { useDog } from '~/hooks/animal'
const [option, reload] = useDog({
  title: '互联网上最大的开源狗图片集合!',
  url: 'https://dog.ceo/api/breeds/image/random',
})
</script>

<template>
  <div flex="~ wrap"  >
    <Animal
      :option="option"
      @reload="reload"
    />
    <HttpAnimal
      title="HttpCat"
      path="https://http.cat/100" :open="true"
    />
    <HttpAnimal
      title="HttpDog"
      path="https://http.dog/100.jpg" :open="true"
    />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  name: 动物
</route>
