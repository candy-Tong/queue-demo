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

const childrenCount = ref(0)
function add() {
  // 交换了两者的顺序，改为先修改子组件依赖
  childrenCount.value++		// 先改变 ChildrenCount
  emit('add')				// 再通过事件 emit，改变属性 count
}

</script>
