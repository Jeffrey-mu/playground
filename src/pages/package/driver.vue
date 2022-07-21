<script setup lang="ts">
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
const driver = new Driver()

onMounted(() => {
  driver.defineSteps([
    {
      element: '#Driver1',
      popover: {
        className: 'Driver1-step-popover-class',
        title: 'Title on Popover',
        description: 'Body of the popover',
        position: 'left',
      },
    },
    {
      element: '#Driver2',
      popover: {
        title: 'Title on Popover',
        description: 'Body of the popover',
        position: 'top',
      },
    },
    {
      element: '#Driver3',
      popover: {
        title: 'Title on Popover',
        description: 'Body of the popover',
        position: 'right',
      },
    },
    {
      element: '#Driver4',
      popover: {
        title: 'Title on Popover',
        description: 'Body of the popover',
        position: 'right',
      },
    },
    {
      element: '#Driver5',
      popover: {
        title: 'Title on Popover',
        description: 'Body of the popover',
        position: 'right',
      },
    },
  ])
  driver.start()
})
const start = driver.start
const IDS = ['Driver1', 'Driver2', 'Driver3', 'Driver4', 'Driver5']
</script>

<template>
  <a href="/package/driver">
    Reset
  </a>

  <div id="some-element" p-x50 flex="~ ">
    <div v-for="id in IDS" :id="id" :key="id" ma w-20 h-20 border />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  name: 指引
</route>

