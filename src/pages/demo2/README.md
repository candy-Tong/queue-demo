#Demo 2 —— 队列 Job 能够被删除

该 Demo 构造并证明以下内容：
1. 父组件 update 函数和子组件 update 函数，先后进入队列
2. 父组件 update 函数先执行，子组件 update 函数会被删除

## 建议的打断点位置：
全局搜索 invalidateJob 进行打点，如图：
![img.png](img.png)
