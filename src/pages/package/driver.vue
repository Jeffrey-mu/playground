<script setup lang="ts">
// import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
// const driver = new Driver()

// const start = () => {
//   driver.defineSteps([
//     {
//       element: '#Driver1',
//       popover: {
//         className: 'Driver1-step-popover-class',
//         title: 'Title on Popover',
//         description: 'Body of the popover',
//         position: 'left',
//       },
//     },
//     {
//       element: '#Driver2',
//       popover: {
//         title: 'Title on Popover',
//         description: 'Body of the popover',
//         position: 'left',
//       },
//     },
//     {
//       element: '#Driver3',
//       popover: {
//         title: 'Title on Popover',
//         description: 'Body of the popover',
//         position: 'right',
//       },
//     },
//     {
//       element: '#Driver4',
//       popover: {
//         title: 'Title on Popover',
//         description: 'Body of the popover',
//         position: 'right',
//       },
//     },
//     {
//       element: '#Driver5',
//       popover: {
//         title: 'Title on Popover',
//         description: 'Body of the popover',
//         position: 'left',
//       },
//     },
//   ])
//   driver.start()
// }
const IDS = ['Driver1', 'Driver2', 'Driver3', 'Driver4', 'Driver5']
</script>

<template>
  <button border px-2 ma-2 @click.stop="">
    start
  </button>

  <div id="some-element" p-x50 flex="~ ">
    <span v-for="id in IDS" :id="id" :key="id" ma w-20 h-20 border />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  name: 指引
</route>

