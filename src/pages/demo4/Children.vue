<template>
  <button @click='add'>add {{ count }}</button>
  <p>Children props count {{ count }}</p>
  <p>ChildrenCount {{ ChildrenCount }}</p>
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
  ChildrenCount.value++
  emit('add')
}

const ChildrenCount = ref(0)
</script>
