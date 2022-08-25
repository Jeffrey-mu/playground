<script setup lang="ts">
defineProps({msg: String})
</script>
<template>
  <div>{{state(props)}}</div>
  {{props.msg}}
</template>

