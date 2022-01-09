<template>
  <button @click="emit('add')">add {{ count }}</button>
</template>

<script lang='ts' setup>
defineProps({
  count: {
    type: Number,
    required: true
  }
})
const emit = defineEmits(['add'])
</script>
