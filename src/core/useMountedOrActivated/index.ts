import { nextTick, onActivated, onMounted } from "vue";
import type { AnyFunction } from "../../type";
function onMountedOrActivated(fn: AnyFunction) {
  let mounted: boolean;

  onMounted(() => {
    fn();
    nextTick(() => {
      mounted = true;
    });
  });

  onActivated(() => {
    if (mounted) {
      fn();
    }
  });
}

export { onMountedOrActivated };
