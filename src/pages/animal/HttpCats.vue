<script setup lang="ts">
console.log(CAT_PATH)
</script>

<template>
  <div flex="~ wrap">
    <HttpCat
      v-for="item in CAT_PATH"
      :key="item" :path="`https://http.cat${item}`" :open="false"
    />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  name: HttpCats
</route>

