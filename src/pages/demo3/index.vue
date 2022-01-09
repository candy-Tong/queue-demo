<template>
  <button @click='add' ref="buttonRef">count: {{ count }}</button>
</template>
<script setup lang='ts'>
import {onUpdated, ref} from 'vue'

const buttonRef = ref<HTMLElement>()
const count = ref(0)

function add() {
  count.value = count.value + 1
  count.value = count.value + 1
}

onUpdated(() => {
  console.log('onUpdated', buttonRef.value?.innerHTML)
})
</script>
