<script setup lang="ts">
import { useDog } from '~/hooks/animal'
const [option, reload] = useDog({
  title: '互联网上最大的开源狗图片集合.',
  url: 'https://dog.ceo/api/breeds/image/random',
})
</script>

<template>
  <div flex>
    <Animal
      :option="option"
      @reload="reload"
    />
    <HttpCat
      path="https://http.cat/100" :open="true"
    />
  </div>
</template>

<route lang="yaml">
meta:
layout: home
name: 动物
</route>
