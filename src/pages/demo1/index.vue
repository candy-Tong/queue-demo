<template>
  <div>{{count}}</div>
  <button @click='add'>Add</button>
</template>
<script setup lang='ts'>
import { ref } from 'vue'

const count = ref(0)

function add() {
  count.value = count.value + 1
  count.value = count.value + 2
}
</script>
