<script setup lang="ts" name='dog'>
import type { Basic, UseDogOption } from '~/hooks/animal'
interface AnimalProps {
  option: UseDogOption & Basic
}

const { option } = defineProps<AnimalProps>()
const emit = defineEmits(['reload', 'switchDetails'])
const path = computed(() => option.path.value)
const detailsNotIncludedKey = ['image_link', 'id']
const details = computed(() =>
  Object.entries(option.details.value).filter(item => !detailsNotIncludedKey.includes(item[0])),
)
const showReload = computed(() => !option.showReload)
const { isLoading, error } = useImage(path, { delay: 3000 })
</script>

<template>
  <div id="some-element" b-rd b m-2 p-2 relative>
    <h2 fs-20 p-2 fw-600 text-5>
      {{ option.title }}
    </h2>
    <div v-if="isLoading" b-rd w100 h90 class="animate-pulse bg-gray-500/30 p-2">
      Loading...
    </div>
    <img v-else :src="path" alt="" ma b-rd w100 h90>
    <div v-show="option.hideDetails.value" b-rd w100 h90 class=" bg-yellow-300/20 p-2" position="absolute top-13">
      <p v-for="[label, value] in details" :key="label" c-black>
        <span fw-600>{{ label }}:</span> {{ value }}
      </p>
    </div>
    <button v-if="showReload" :disabled="option.disabled.value" btn m="3 t6" text-sm hover="bg-black c-#fff cursor-pointer" @click="emit('reload')">
      reload
    </button>
    <button v-if="option.showDetails" btn m="3 t6" text-sm hover="bg-black c-#fff cursor-pointer" @click="emit('switchDetails')">
      details
    </button>
  </div>
</template>

