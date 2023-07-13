### vue3常用的hooks集合

### 安装方法
```
npm i applyuse--save-dev 
或
yarn install applyuse--save-dev
```

### 基础用法
np
```js
<script setup lang="ts">
import  {useRect}  from "@applyuse";
const {width,height}=useWindowSize()
</script>
```

### API集合

| hooks名称 | 说明 | 参数 |返回值
| --- | --- |  --- | --- | 
useWindowSize | 获取window的width/height |null |width, height
useScrollTo | 元素滚动到具体位置 | el:滚动元素; to：距离; duration：时间,默认500, fn:滚动完触发回调 |start:开始滚动 stop：停止滚动
useMountedOrActivated | 页面挂载或激活执行 |fn:执行方法 |null
useMutationObserver | 指定的DOM发生变化时被调用 |el:监控元素；fn:指定回调 |null
usePageVisibility | 页面隐藏时触发 |null |null
useRect | 获取元素位置大小 |null |top/left/right/bottom/width/height
useThrottle | 防抖 |fn: 执行方法, wait: 时间间隔执行, immediate：是否在wait 时间间隔的开始调用这个回调|防抖绑定回调
useThrottle | 节流 |fn: 执行方法, wait: 时间间隔执行, options:第一次和最后一次执行控制 |节流绑定回调
