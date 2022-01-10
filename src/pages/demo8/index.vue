<template>
  <button @click='add'>add {{ count }}</button>
  <Children :count='count' @add="add" />
</template>
<script setup lang='ts'>
import {ref} from 'vue'
import Children from './Children.vue'

const count = ref(0)
function add() {
  count.value = count.value + 1
}
</script>
