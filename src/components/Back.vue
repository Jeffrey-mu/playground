<script setup lang="ts">
const { t } = useI18n()
const router = useRouter()
</script>

<template>
  <button
    btn m="3 t6" text-sm
    @click="router.back()"
  >
    {{ t('button.back') }}
  </button>
</template>
