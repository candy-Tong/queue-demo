<template>
  <div>Father {{ count }}</div>
  <Children :count='count' @add="onAdd" />
</template>
<script setup lang='ts'>
import {ref} from 'vue'
import Children from './Children.vue'

const count = ref(0)

function onAdd() {
  count.value = count.value + 1
}
</script>
