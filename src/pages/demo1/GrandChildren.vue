<template>
  <div>
    <p>{{ count }}</p>
  </div>
</template>

<script lang='ts'>
import { ref, defineComponent, onUpdated } from 'vue'
export default defineComponent({
  props: {
    count: {
      type: Number,
      required: true
    }
  },
  watch: {
    count() {
      this.$loading.childLoading.value = !this.$loading.childLoading.value
      this.$loading.fatherLoading.value = !this.$loading.fatherLoading.value
    }
  }
})
</script>
