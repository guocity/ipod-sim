// Reconstructed from the supplied component; module and API names restored locally.
import { createLogger } from '../logging.js';
import { getStoreValue, writable } from '../vendor/svelte-runtime.js';
import { createPlayer } from './preview-player.js';
const initialPlaybackState = {
  isPlaying: false,
  currentPlaybackTime: 0,
  currentPlaybackDuration: 0,
  currentTrackIndex: 0,
  queuePosition: 0,
  queue: [],
  hasLoadedItem: false,
  isLoading: false,
  volume: 1,
  shuffleMode: false,
  repeatMode: "none",
  playerReady: false
};
function trackId(track) {
  var playParams;
  return ((playParams = track.playParams) == null ? void 0 : playParams.id) ?? track.id;
}
const playbackStoreKeys = ["isPlaying", "currentPlaybackTime", "currentPlaybackDuration", "hasLoadedItem", "shuffleMode", "repeatMode", "queuePosition"];
function createPlaybackStore(e) {
  const t = createLogger("<PlaybackStore>"),
    i = writable(initialPlaybackState);
  let l,
    a,
    n = false,
    o = "none",
    p = 0,
    h = [],
    r = [];
  function c(P) {
    return r.push(P), () => {
      r = r.filter(V => V !== P);
    };
  }
  function d() {
    h.forEach(P => P());
    h = [];
    try {
      a == null || a.destroy();
    } finally {
      a = void 0;
      i.update(P => ({
        ...P,
        playerReady: false
      }));
    }
  }
  let A,
    f = Promise.resolve();
  function g(P) {
    t.error("Playback control failed", P);
  }
  function M(P) {
    return f = f.then(async () => {
      try {
        await (P() ?? Promise.resolve());
      } catch (V) {
        g(V);
      }
    }), f;
  }
  function y() {
    return A == null || A.abort(), i.update(P => ({
      ...P,
      queue: [],
      currentTrackIndex: 0,
      queuePosition: 0,
      hasLoadedItem: false,
      isPlaying: false,
      isLoading: false
    })), M(() => (d(), l == null ? void 0 : l.clearQueue()));
  }
  function w(P, V) {
    return V.subscribe(q => i.update(Q => ({
      ...Q,
      [P]: q
    })));
  }
  function E(P, V) {
    let q = false;
    return P.hasLoadedItem.subscribe(Q => {
      q && !Q && !V.aborted && getStoreValue(i).queue.length > 0 && (y(), r.forEach(O => {
        try {
          O();
        } catch (lt) {
          t.error("onQueueFinished listener failed", lt);
        }
      }));
      q = Q;
    });
  }
  function I(P, V) {
    const q = P;
    h = [];
    h.push(E(P, V));
    for (const Q of playbackStoreKeys) h.push(w(Q, q[Q]));
    h.push(P.volume.subscribe(Q => {
      p > 0 || i.update(O => ({
        ...O,
        volume: Q
      }));
    }));
    i.update(Q => ({
      ...Q,
      playerReady: true
    }));
  }
  async function x(P, V) {
    p += 1;
    i.update(q => ({
      ...q,
      volume: P
    }));
    try {
      await V();
    } finally {
      p -= 1;
    }
  }
  function U(P) {
    return x(P, async () => {
      try {
        await (a == null ? void 0 : a.setVolume(P));
      } catch (V) {
        g(V);
      }
    });
  }
  function C(P) {
    i.update(V => P < 0 || P >= V.queue.length ? (t.warn("Ignoring out-of-range queue advance index:", P), V) : {
      ...V,
      currentTrackIndex: P
    });
  }
  async function G(P, V, q) {
    A == null || A.abort();
    const Q = new AbortController();
    A = Q;
    const O = n,
      lt = o,
      L = P.map(F => ({
        trackId: trackId(F),
        previewUrl: F.previewUrl
      }));
    i.update(F => ({
      ...F,
      queue: P,
      currentTrackIndex: V,
      // Shuffle pins the chosen song first, at position 0.
      queuePosition: O ? 0 : V,
      isLoading: true
    }));
    const D = async () => {
      var F;
      if (!Q.signal.aborted) try {
        d();
        const tt = createPlayer(L, e, l, C, {
          shuffle: O,
          repeatMode: lt
        });
        if (a = tt, U(getStoreValue(i).volume), await tt.setQueue(), Q.signal.aborted || (await tt.changeToQueueItem(((F = L[V]) == null ? void 0 : F.trackId) ?? "", V), Q.signal.aborted) || (await Promise.all([tt.setShuffle(O).catch(g), tt.setRepeatMode(lt).catch(g)]), Q.signal.aborted) || (q ? await tt.resume() : await tt.pause(), Q.signal.aborted)) return;
        U(getStoreValue(i).volume);
        I(tt, Q.signal);
      } catch (tt) {
        Q.signal.aborted || t.error("Failed to start playback", tt);
      } finally {
        Q.signal.aborted || i.update(tt => ({
          ...tt,
          isLoading: false
        }));
      }
    };
    return f = f.then(D), f;
  }
  function ot(P, V) {
    if (P.length === 0) return Promise.resolve();
    const q = V ?? (n ? Math.floor(Math.random() * P.length) : 0);
    return G(P, q, true);
  }
  function nt() {
    return M(() => a == null ? void 0 : a.pause());
  }
  function at() {
    return M(() => a == null ? void 0 : a.resume());
  }
  function z() {
    return M(() => a == null ? void 0 : a.skipToNextItem());
  }
  function k() {
    return M(() => a == null ? void 0 : a.skipToPreviousItem());
  }
  function Y(P) {
    const V = getStoreValue(i).currentTrackIndex;
    return M(() => a == null ? void 0 : a.seekToTime(P, V));
  }
  function W(P) {
    return x(P, () => M(() => a == null ? void 0 : a.setVolume(P)));
  }
  function _(P) {
    return n = P, M(() => a == null ? void 0 : a.setShuffle(P));
  }
  function X(P) {
    return o = P, M(() => a == null ? void 0 : a.setRepeatMode(P));
  }
  function K(P) {
    if (P === l) return;
    l = P;
    const {
      queue: V,
      currentTrackIndex: q,
      isPlaying: Q
    } = getStoreValue(i);
    V.length !== 0 && G(V, q, Q);
  }
  function j() {
    A == null || A.abort();
    d();
  }
  return {
    subscribe: i.subscribe,
    play: ot,
    pause: nt,
    resume: at,
    skipNext: z,
    skipPrevious: k,
    seek: Y,
    setVolume: W,
    setShuffle: _,
    setRepeatMode: X,
    setPlayback: K,
    clearQueue: y,
    onQueueFinished: c,
    destroy: j
  };
}
export { createPlaybackStore };
