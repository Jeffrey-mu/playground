<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
const HIDE_PATH = ['HttpCats']
const routerPath = computed(() => {
  return useRouter().getRoutes().filter(el => el.name && !HIDE_PATH.includes((el as any).meta.name))
})
const active = computed(() => {
  return useRoute().path
})
</script>

<template>
  <nav flex="~ justify-between" mb-2 bg-black px-5 py-3 c-white>
    <div c-gray mr-10>
      <RouterLink text-left class="icon-btn mx-2" to="/" :title="t('button.home')">
        <div i-carbon-campsite />
      </RouterLink>
    </div>
    <div flex="~ 1 justify-start">
      <RouterLink v-for="route, index in routerPath" :key="index" ml-2 :to="route.path" hover="c-yellow" :class="{ 'c-yellow': active === route.path }">
        {{ route.meta.name }}
      </RouterLink>
    </div>
    <div>
      <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </button>

      <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales()">
        <div i-carbon-language />
      </a>

      <RouterLink class="icon-btn mx-2" to="/about" :title="t('button.about')">
        <div i-carbon-dicom-overlay />
      </RouterLink>

      <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/Jeffrey-mu/vitesse" target="_blank" title="GitHub">
        <div i-carbon-logo-github />
      </a>
    </div>
  </nav>
</template>
