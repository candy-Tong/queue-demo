<template>
  <button @click='add' >count: {{ count }}</button>
  <div v-if="count%2" :ref="divRef">count 为双数</div>
  <div v-else :ref="divRef">count 为单数</div>
</template>
<script setup lang='ts'>
import {onUpdated, ref} from 'vue'

const count = ref(0)

function add() {
  count.value = count.value + 1
}
const divRef = ref<HTMLElement>()

onUpdated(() => {
  console.log('onUpdated', divRef.value?.innerHTML)
})
</script>
