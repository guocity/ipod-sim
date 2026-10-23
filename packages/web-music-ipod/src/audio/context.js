// Reconstructed from the supplied component; module and API names restored locally.
import { createLogger } from '../logging.js';
import { onDestroy } from '../vendor/svelte-runtime.js';
function createAudioContext() {
  return new (window.AudioContext || window.webkitAudioContext)();
}
function closeAudioOnDestroy(e) {
  onDestroy(() => {
    e.close().catch(() => {});
  });
}
function isAudioSuspended(state) {
  return state !== "running" && state !== "closed";
}
const cl = /* @__PURE__ */new WeakMap(),
  Nr = 1e3;
function resumeAudioContext(e) {
  if (!isAudioSuspended(e.state) || cl.has(e)) return;
  let t = false;
  const i = () => {
    t || (t = true, cl.delete(e));
  };
  cl.set(e, e.resume().catch(() => {}).finally(i));
  setTimeout(() => {
    t || i();
  }, Nr);
}
const Rr = 0.3,
  Wr = 0.05,
  jr = 0.15,
  Fr = 0.08,
  Vr = 200;
function createClickPlayer(e, t) {
  const i = createLogger("<ClickSoundPlayer>"),
    l = t.createGain();
  l.gain.value = Rr;
  l.connect(t.destination);
  let a = null,
    n = 0,
    o = null;
  async function p() {
    try {
      const d = await (await fetch(e)).arrayBuffer();
      a = await t.decodeAudioData(d);
      i.debug("Click sound loaded successfully");
    } catch (c) {
      i.error("Failed to load or decode click sound", c);
    }
  }
  p();
  function h() {
    if (!a) return;
    const {
      currentTime: c
    } = t;
    if (n - c >= jr) return;
    const d = Math.max(c, n);
    try {
      const A = t.createBufferSource();
      A.buffer = a;
      A.connect(l);
      A.start(d);
      n = d + Wr;
    } catch (A) {
      i.error("Error during click sound playback", A);
    }
  }
  t.addEventListener("statechange", () => {
    if (t.state !== "running" || (n = Math.max(n, t.currentTime + Fr), o === null)) return;
    const c = Date.now() - o > Vr;
    o = null;
    c || h();
  });
  function r() {
    if (t.state !== "running") {
      resumeAudioContext(t);
      o === null && (o = Date.now());
      return;
    }
    h();
  }
  return {
    playClick: r
  };
}
export { createAudioContext, closeAudioOnDestroy, resumeAudioContext, createClickPlayer };
