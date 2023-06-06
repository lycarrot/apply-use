import type { AnyFunction } from "../../type";
// 防抖
export function useDebounce(fn: AnyFunction, wait: number, immediate: boolean) {
  let timeout, args, context, timestamp, result;
  const later = function () {
    const last = +new Date() - timestamp;
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = fn.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };
  return function (...args) {
    context = this;
    timestamp = +new Date();
    const callNow = immediate && !timeout;
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = fn.apply(context, args);
      context = args = null;
    }
    return result;
  };
}
