# 考点八：事件模型

### 1.说说什么是时间流

> 事件是文档或者浏览器窗口中发生的，特定的交互瞬间。而事件流，描述的是从页面中接收事件的顺序。

### 2.什么是事件冒泡？什么是事件捕获

1. 事件捕获阶段：事件从最上一级标签开始往下查找，直到捕获到事件目标(target)。
2. 事件冒泡阶段：事件从事件目标(target)开始，往上冒泡直到页面的最上一级标签。

### 3.请说出阻止事件冒泡的几个办法？

1. event.stopPropagation()

> 事件处理过程中，阻止了事件冒泡，但不会阻击默认行为，比如：点击事件绑定在 a 标签的话，会执行了 超链接的跳转。

2. return false;

> 事件处理过程中，阻止了事件冒泡，也阻止了默认行为。比如：点击事件绑定在 a 标签的话，不会执行超 链接的跳转。
