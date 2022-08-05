<script setup lang="ts" name='cat'>
const props = defineProps<{
  title: String
  path: String
  open: Boolean
}>()
const { isLoading, error } = useImage(props.path, { delay: 2000 })
</script>

<template>
  <div id="some-element" b-rd b m-2 p-2>
    <h2 v-show="title" fs-20 p-2 fw-600 text-5>
      {{ title }}
    </h2>
    <div v-if="isLoading" b-rd w100 h90 class="animate-pulse bg-gray-500/30 p-2">
      Loading...
    </div>
    <img v-else :src="path" alt="" ma b-rd w100 h90>
    <router-link v-if="open" :to="`/animal/${title}s`">
      <button btn m="3 t6" text-sm hover="c-#ddd cursor-pointer">
        See more
      </button>
    </router-link>
  </div>
</template>

