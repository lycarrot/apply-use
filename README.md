### vue3常用的hooks集合


### 基础用法

```js
<script setup lang="ts">
import  {useRect}  from "@applyuse";
const {width,height}=useWindowSize()
</script>
```

## API


### CouponList Props

| hooks名称 | 说明 | 参数 |返回值
| --- | --- |  --- | --- | 
useWindowSize | 获取window的width/height |null |width, height
useScrollTo | 元素滚动到具体位置 | el:滚动元素; to：距离; duration：时间,默认500, fn:滚动完触发回调 |start:开始滚动 stop：停止滚动
useMountedOrActivated | 页面挂载或激活执行 |fn:执行方法 |null
useMutationObserver | 指定的DOM发生变化时被调用 |el:监控元素；fn:指定回调 |null
usePageVisibility | 页面隐藏时触发 |null |null
useRect | 获取元素位置大小 |null |top/left/right/bottom/width/height