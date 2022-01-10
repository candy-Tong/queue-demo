<template>
  <div>Father {{ count }}</div>
  <!-- 这里加了 v-if -->
  <Children v-if="(count+1)%2" :count='count' @add="onAdd" />
</template>
<script setup lang='ts'>
import {ref} from 'vue'
import Children from './Children.vue'

const count = ref(0)

function onAdd() {
  count.value = count.value + 1
}
</script>
