<template>
  <div>
    <button @click='add'>count: {{ count }}</button>
    <div>watch value: {{ watchValue }}</div>
  </div>
</template>
<script setup lang='ts'>
import {ref, watch} from 'vue'

const count = ref(0)
const watchValue = ref(100)

function add() {
  count.value = count.value + 1
  watchValue.value = watchValue.value + 1
  watchValue.value = watchValue.value - 1
}

watch(watchValue, () => {
  console.log('watch', watchValue.value)
})
</script>
