// Reconstructed from the supplied component; module and API names restored locally.
import { onDestroy, tick, readable } from './vendor/svelte-runtime.js';
import { RepeatMode } from './settings.js';
class DestroyedError extends Error {
  constructor() {
    super("component was destroyed before tick resolved.");
    this.name = "DestroyedError";
  }
}
const createAsyncGuard = () => {
    let e = false;
    return onDestroy(() => {
      e = true;
    }), async t => {
      try {
        await t(async () => {
          if (await tick(), e) throw new DestroyedError();
        });
      } catch (i) {
        if (!(i instanceof DestroyedError)) throw i;
      }
    };
  },
  online = readable(true, e => {
    function t() {
      e(navigator.onLine);
    }
    return t(), window.addEventListener("online", t), window.addEventListener("offline", t), () => {
      window.removeEventListener("online", t);
      window.removeEventListener("offline", t);
    };
  }),
  repeatModes = {
    [RepeatMode.OFF]: "none",
    [RepeatMode.ONE]: "one",
    [RepeatMode.ALL]: "all"
  };
function playerRepeatMode(mode) {
  return repeatModes[mode];
}
export { createAsyncGuard, online, playerRepeatMode };
