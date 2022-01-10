<template>
  <div>children {{ count }}</div>
</template>
<script lang='ts' setup>
import {watch} from 'vue'

const props = defineProps({
  count: {
    type: Number,
    required: true
  }
})
const emit = defineEmits(['add'])
watch(() => props.count, () => {
  if (props.count < 10) {
    emit('add')
  }
})

</script>
