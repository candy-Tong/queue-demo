<template>
  <div>
    <div>father {{ $loading.fatherLoading.value }}</div>
    <button @click='add'>{{ count }}</button>
    <Children :count='count' />
  </div>
</template>
<script setup lang='ts'>
// 省略 import
import { ref } from 'vue'
import Children from './Children.vue'

const count = ref(0)

function add() {
  count.value = count.value + 1
}
</script>
