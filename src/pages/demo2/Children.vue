<template>
  <button @click='add'>add {{ count }}</button>
  <p>Children props count {{ count }}</p>
  <p>childrenCount {{ childrenCount }}</p>
</template>

<script lang='ts' setup>
import {ref} from 'vue'

defineProps({
  count: {
    type: Number,
    required: true
  }
})
const emit = defineEmits(['add'])

function add() {
  emit('add')
  childrenCount.value++
}

const childrenCount = ref(0)
</script>
