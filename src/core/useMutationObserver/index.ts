import { onMounted, onUnmounted, ref } from "vue";
import type { AnyFunction } from "../../type";

export default function useMutationObserve(el: string, fn: AnyFunction) {
  if (window.MutationObserver) {
    const observer = ref<MutationObserver>();

    const initWatchDom = () => {
      const observeEl = document.querySelector(el);
      const config = { childList: true, subtree: true };
      observer.value = new MutationObserver((mutations) => {
        fn(mutations);
      });

      observer.value.observe(observeEl, config);
    };

    onMounted(() => {
      initWatchDom();
    });

    onUnmounted(() => {
      observer.value?.disconnect();
    });
  }
}
