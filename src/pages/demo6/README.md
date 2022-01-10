# Demo6 —— Post 队列

该 Demo 构造以下内容：
1. 使用 updated 生命周期

要证明的内容：updated 生命周期，运行在组件 DOM 更新之后

## 建议的断点调试位置
> 在页面加载完，点击按钮前加断点。

全局搜索 `flushJobs`，找到函数的定义，如图：
![img.png](img.png)
