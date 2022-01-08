<template>
  <div>
    <div>children {{ $loading.childLoading.value }}</div>
    <p>{{ count }}</p>
    <GrandChildren :count='count'></GrandChildren>
  </div>
</template>

<script lang='ts'>
import { ref, defineComponent, onUpdated } from 'vue'
import GrandChildren from './GrandChildren.vue'
export default defineComponent({
  props: {
    count: {
      type: Number,
      required: true
    }
  },
  components:{
    GrandChildren
  },
})
</script>
