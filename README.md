# 队列递归 Demo2
我们构造这么一个用例：
有 0,1,2 三个组件
构造一个这样的加入队列的顺序，0,1,0，以证明这种加入队列的顺序是存在的
因此很有必要对队列中的 job 进行排序

用于证明 vue queue 的按 job.id 排序的必要性
该 demo 创建了一个如下的场景：
1. 递归
2. 

这个用例验证的是，为什么 queue 必须要根据 job.id 进行排序？
因为存在，子组件 update 函数先加入队列的情况。
现在我们就构建这么一种情况的用例

# 构造用例详情
有 0,1,2 三个组件，构造一个这样的加入队列的顺序，0,1,0

组件关系

父组件 id = 0
```vue
<template>
  <div>
    <div>father {{ $loading.fatherLoading.value }}</div>
    <button @click='add'>{{ count }}</button>
    <Children :count='count' />
  </div>
</template>
```
子组件 id = 1
```vue
<template>
  <div>
    <div>children {{ $loading.childLoading.value }}</div>
    <p>{{ count }}</p>
    <GrandChildren :count='count'></GrandChildren>
  </div>
</template>
```
孙子组件 id = 2
```vue
<template>
  <div>
    <p>{{ count }}</p>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
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
```


流程如下：
1. 【父组件 0】的数据 count 被修改，【子组件 0】update 函数被加入到队列
2. count 会被传入到【子组件 1】，【子组件 1】 再透传到 组件 2.
3. 【孙子组件 2 】watch 到 count 被修改，触发 watch
4. childLoading 被修改时，【子组件 1】update 函数被加入到队列
5. fatherLoading 被修改时，【父组件 0】update 函数被加入到队列
