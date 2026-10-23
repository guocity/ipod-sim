// Reconstructed from the supplied component; module and API names restored locally.
import { getStoreValue, writable } from './vendor/svelte-runtime.js';
import { BacklightMode, backlightOptions, settings } from './settings.js';
const backlightDurations = new Map(backlightOptions.map(({
  mode: e,
  durationMs: t
}) => [e, t]));
function createBacklightStore() {
  let mode = getStoreValue(settings).backlight;
  const backlit = writable(mode === BacklightMode.ALWAYS_ON);
  let timeout,
    manuallyOn = false,
    manuallyOff = false,
    wasBacklit = mode === BacklightMode.ALWAYS_ON;
  function clearTimer() {
    clearTimeout(timeout);
    timeout = void 0;
  }
  function notifyActivity() {
    if (wasBacklit = getStoreValue(backlit), manuallyOn) return;
    manuallyOff && (manuallyOff = false, backlit.set(mode === BacklightMode.ALWAYS_ON));
    const c = backlightDurations.get(mode);
    c !== void 0 && (clearTimer(), backlit.set(true), timeout = setTimeout(() => {
      timeout = void 0;
      backlit.set(false);
    }, c));
  }
  function toggle() {
    clearTimer();
    manuallyOn = !wasBacklit;
    manuallyOff = wasBacklit;
    wasBacklit = manuallyOn;
    backlit.set(manuallyOn);
  }
  const unsubscribe = settings.subscribe(({
    backlight: c
  }) => {
    c !== mode && (mode = c, manuallyOn = false, manuallyOff = false, clearTimer(), mode === BacklightMode.ALWAYS_ON ? backlit.set(true) : mode === BacklightMode.OFF ? backlit.set(false) : notifyActivity());
  });
  return {
    subscribe: backlit.subscribe,
    notifyActivity: notifyActivity,
    toggle: toggle,
    destroy() {
      clearTimer();
      unsubscribe();
    }
  };
}
export { createBacklightStore };
