<script setup lang="ts">
import { useGlobalState } from "./store";
import globalState from './globalState/index.vue'
import draggable from './draggable/index.vue'
const { count } = useGlobalState();
count.value += 100;
const components = [
  { name: "globalState", component: globalState},
  { name: "draggable", component: draggable},
]
const active = ref(globalState)
</script>

<template>
  <div flex="~ wrap">
    <div b w-30 px-2>
      <ul>
        <li v-for="{name, component} in components" :key="name" @click="active = component">{{name}}</li>
      </ul>
    </div>
    <div flex-1 b h="100%">
      <component :is="active" />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  name: vueuse
</route>
