<script setup lang="ts">
import {useGlobalState} from '../store'
const {count} = useGlobalState()
</script>

<template>
  <div flex="~ wrap">
    {{count}}
  </div>
</template>

