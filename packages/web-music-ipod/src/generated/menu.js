// Reconstructed compiled Svelte code. See the package README for provenance.
import { createLogger } from '../logging.js';
import { noop, Pt, bt, Ii, getStoreValue, Ut, Kt, u, appendStyles, ht, H, T, rt, s, onDestroy, Hi, Jt, $e, Gi, flush, Ae, fe, $, et, es, is, Xi, gt, vt, yt, initComponent, defineSvelteElement, SvelteComponent, writable } from '../vendor/svelte-runtime.js';
import { hs, ps, vl, bs, Ms, ws, Ss, settings, setBacklight, resetSettings } from '../settings.js';
import { Ls, El, Ja, Ci, ml, Il, Qs, Kl } from '../interaction.js';
import { getTranslator } from '../localization.js';
import { en, xl, Ni, so, ho, nn, on, hn, un, vn, wh } from './screens-and-games.js';
import { getMenuDefinition, ua, va, Hh, Lh, ya } from '../navigation.js';

function zh(e) {
  const t = writable(ya);
  function i() {
    return getStoreValue(t);
  }
  function l() {
    t.update(c => ({
      ...c,
      isAdjustingVolume: !0
    }));
  }
  const a = vn({
    timeoutMs: ws,
    isActive: () => i().isAdjustingVolume,
    enter: l,
    onLeave: () => t.set(ya)
  });
  function n() {
    a.restartIdleTimer(), i().isAdjustingVolume || l();
  }
  function o(c) {
    const d = Ci(getStoreValue(e).volume),
      A = Math.min(100, Math.max(0, c));
    return n(), A === d ? !1 : (e.setVolume(ml(A)), !0);
  }
  function p(c) {
    return o(Ci(getStoreValue(e).volume) + c * Ms);
  }
  function h(c = 1) {
    return p(c);
  }
  function r(c = 1) {
    return p(-c);
  }
  return {
    subscribe: t.subscribe,
    peek: i,
    increase: h,
    decrease: r,
    set: o,
    keepOpen: a.keepOpen,
    release: a.release,
    handleScreenChange: a.handleScreenChange,
    exit: a.exit,
    destroy: a.destroy
  };
}
function Qh(e) {
  appendStyles(e, "svelte-1cxxedm", ".menu.svelte-1cxxedm{position:relative;display:flex;flex-direction:column;width:100%;height:100%;z-index:2}.screen-body.svelte-1cxxedm{position:relative;flex:none;height:181.7px;overflow:clip}.screen.svelte-1cxxedm{position:absolute;top:0;left:0;width:100%}");
}
function Oh(e) {
  let t, i;
  return t = new on({
    props: {
      items: (/*currentItems*/
      e[10]),
      selectedIndex: (/*selectedIndex*/
      e[7]),
      navigationId: (/*navigationId*/
      e[18]),
      shouldFocus: (/*shouldFocusNextScreen*/
      e[15]),
      restoredScrollTop: (/*restoredScrollTop*/
      e[14])
    }
  }), t.$on("listmount", /*listmount_handler*/
  e[59]), t.$on("listunmount", /*listunmount_handler*/
  e[60]), {
    c() {
      gt(t.$$.fragment);
    },
    m(l, a) {
      vt(t, l, a), i = !0;
    },
    p(l, a) {
      const n = {};
      a[0] & /*currentItems*/
      1024 && (n.items = /*currentItems*/
      l[10]), a[0] & /*selectedIndex*/
      128 && (n.selectedIndex = /*selectedIndex*/
      l[7]), a[0] & /*navigationId*/
      262144 && (n.navigationId = /*navigationId*/
      l[18]), a[0] & /*shouldFocusNextScreen*/
      32768 && (n.shouldFocus = /*shouldFocusNextScreen*/
      l[15]), a[0] & /*restoredScrollTop*/
      16384 && (n.restoredScrollTop = /*restoredScrollTop*/
      l[14]), t.$set(n);
    },
    i(l) {
      i || ($(t.$$.fragment, l), i = !0);
    },
    o(l) {
      et(t.$$.fragment, l), i = !1;
    },
    d(l) {
      yt(t, l);
    }
  };
}
function Nh(e) {
  let t, i, l, a;
  function n(h) {
    e[57](h);
  }
  function o(h) {
    e[58](h);
  }
  let p = {
    paused: (/*disabled*/
    e[2])
  };
  return /*brickScore*/e[21] !== void 0 && (p.score = /*brickScore*/
  e[21]), /*brickBalls*/
  e[22] !== void 0 && (p.balls = /*brickBalls*/
  e[22]), t = new un({
    props: p
  }), e[56](t), Jt.push(() => Xi(t, "score", n)), Jt.push(() => Xi(t, "balls", o)), {
    c() {
      gt(t.$$.fragment);
    },
    m(h, r) {
      vt(t, h, r), a = !0;
    },
    p(h, r) {
      const c = {};
      r[0] & /*disabled*/
      4 && (c.paused = /*disabled*/
      h[2]), !i && r[0] & /*brickScore*/
      2097152 && (i = !0, c.score = /*brickScore*/
      h[21], Gi(() => i = !1)), !l && r[0] & /*brickBalls*/
      4194304 && (l = !0, c.balls = /*brickBalls*/
      h[22], Gi(() => l = !1)), t.$set(c);
    },
    i(h) {
      a || ($(t.$$.fragment, h), a = !0);
    },
    o(h) {
      et(t.$$.fragment, h), a = !1;
    },
    d(h) {
      e[56](null), yt(t, h);
    }
  };
}
function Rh(e) {
  var l, a, n, o, p;
  let t, i;
  return t = new hn({
    props: {
      songIndex: (/*$playback*/
      e[11].queuePosition + 1),
      songCount: (/*$playback*/
      e[11].queue.length),
      songId: (/*nowPlayingTrack*/
      (l = e[24]) == null ? void 0 : l.id),
      title: (/*nowPlayingTrack*/
      (a = e[24]) == null ? void 0 : a.name),
      titleUrl: (/*nowPlayingTrack*/
      (n = e[24]) == null ? void 0 : n.url),
      navigateToUrl: (/*navigateToUrl*/
      e[1]),
      artistName: (/*nowPlayingTrack*/
      (o = e[24]) == null ? void 0 : o.artistName),
      albumName: (/*nowPlayingTrack*/
      (p = e[24]) == null ? void 0 : p.albumName),
      currentTime: (/*$playback*/
      e[11].currentPlaybackTime),
      duration: (/*$playback*/
      e[11].currentPlaybackDuration),
      shouldFocus: (/*shouldFocusNextScreen*/
      e[15]),
      isSeeking: (/*isSeeking*/
      e[8]),
      seekPreviewTime: (/*seekPreviewTime*/
      e[16]),
      isAdjustingVolume: (/*isAdjustingVolume*/
      e[17]),
      volume: Ci(/*$playback*/
      e[11].volume),
      isPositionDisabled: ! /*$playback*/
      e[11].hasLoadedItem,
      shuffleMode: (/*$playback*/
      e[11].shuffleMode),
      repeatMode: (/*$playback*/
      e[11].repeatMode)
    }
  }), t.$on("scrubfocus", /*ensureScrubbing*/
  e[29]), t.$on("scrub", /*handleScrub*/
  e[31]), t.$on("scrubcommit", /*seekController*/
  e[3].commit), t.$on("scrubblur", /*seekController*/
  e[3].release), t.$on("volumefocus", /*handleVolumeFocus*/
  e[30]), t.$on("volume", /*handleVolume*/
  e[32]), t.$on("volumeblur", /*volumeController*/
  e[4].release), {
    c() {
      gt(t.$$.fragment);
    },
    m(h, r) {
      vt(t, h, r), i = !0;
    },
    p(h, r) {
      var d, A, f, g, M;
      const c = {};
      r[0] & /*$playback*/
      2048 && (c.songIndex = /*$playback*/
      h[11].queuePosition + 1), r[0] & /*$playback*/
      2048 && (c.songCount = /*$playback*/
      h[11].queue.length), r[0] & /*nowPlayingTrack*/
      16777216 && (c.songId = /*nowPlayingTrack*/
      (d = h[24]) == null ? void 0 : d.id), r[0] & /*nowPlayingTrack*/
      16777216 && (c.title = /*nowPlayingTrack*/
      (A = h[24]) == null ? void 0 : A.name), r[0] & /*nowPlayingTrack*/
      16777216 && (c.titleUrl = /*nowPlayingTrack*/
      (f = h[24]) == null ? void 0 : f.url), r[0] & /*navigateToUrl*/
      2 && (c.navigateToUrl = /*navigateToUrl*/
      h[1]), r[0] & /*nowPlayingTrack*/
      16777216 && (c.artistName = /*nowPlayingTrack*/
      (g = h[24]) == null ? void 0 : g.artistName), r[0] & /*nowPlayingTrack*/
      16777216 && (c.albumName = /*nowPlayingTrack*/
      (M = h[24]) == null ? void 0 : M.albumName), r[0] & /*$playback*/
      2048 && (c.currentTime = /*$playback*/
      h[11].currentPlaybackTime), r[0] & /*$playback*/
      2048 && (c.duration = /*$playback*/
      h[11].currentPlaybackDuration), r[0] & /*shouldFocusNextScreen*/
      32768 && (c.shouldFocus = /*shouldFocusNextScreen*/
      h[15]), r[0] & /*isSeeking*/
      256 && (c.isSeeking = /*isSeeking*/
      h[8]), r[0] & /*seekPreviewTime*/
      65536 && (c.seekPreviewTime = /*seekPreviewTime*/
      h[16]), r[0] & /*isAdjustingVolume*/
      131072 && (c.isAdjustingVolume = /*isAdjustingVolume*/
      h[17]), r[0] & /*$playback*/
      2048 && (c.volume = Ci(/*$playback*/
      h[11].volume)), r[0] & /*$playback*/
      2048 && (c.isPositionDisabled = ! /*$playback*/
      h[11].hasLoadedItem), r[0] & /*$playback*/
      2048 && (c.shuffleMode = /*$playback*/
      h[11].shuffleMode), r[0] & /*$playback*/
      2048 && (c.repeatMode = /*$playback*/
      h[11].repeatMode), t.$set(c);
    },
    i(h) {
      i || ($(t.$$.fragment, h), i = !0);
    },
    o(h) {
      et(t.$$.fragment, h), i = !1;
    },
    d(h) {
      yt(t, h);
    }
  };
}
function ga(e) {
  let t, i, l, a, n, o;
  const p = [Rh, Nh, Oh],
    h = [];
  function r(c, d) {
    return /*view*/c[9] === "now-playing" ? 0 : (/*view*/
    c[9] === "brick" ? 1 : 2);
  }
  return i = r(e), l = h[i] = p[i](e), {
    c() {
      t = T("div"), l.c(), s(t, "class", "screen svelte-1cxxedm"), s(t, "data-testid", "screen");
    },
    m(c, d) {
      ht(c, t, d), h[i].m(t, null), o = !0;
    },
    p(c, d) {
      e = c;
      let A = i;
      i = r(e), i === A ? h[i].p(e, d) : (Ae(), et(h[A], 1, 1, () => {
        h[A] = null;
      }), fe(), l = h[i], l ? l.p(e, d) : (l = h[i] = p[i](e), l.c()), $(l, 1), l.m(t, null));
    },
    i(c) {
      o || ($(l), c && $e(() => {
        o && (n && n.end(1), a = es(t, Kl, {
          back: (/*isNavigatingBack*/
          e[19])
        }), a.start());
      }), o = !0);
    },
    o(c) {
      et(l), a && a.invalidate(), c && (n = is(t, Kl, {
        back: (/*isNavigatingBack*/
        e[19])
      })), o = !1;
    },
    d(c) {
      c && H(t), h[i].d(), c && n && n.end();
    }
  };
}
function Wh(e) {
  let t,
    i,
    l,
    a,
    n = /*navigationId*/
    e[18],
    o,
    p,
    h,
    r;
  i = new en({
    props: {
      title: (/*title*/
      e[25]),
      hasLoadedItem: (/*$playback*/
      e[11].hasLoadedItem),
      isPlaying: (/*$playback*/
      e[11].isPlaying),
      isBrick: (/*view*/
      e[9] === "brick"),
      brickBalls: (/*brickBalls*/
      e[22]),
      brickScore: (/*brickScore*/
      e[21])
    }
  });
  let c = ga(e);
  return {
    c() {
      t = T("div"), gt(i.$$.fragment), l = rt(), a = T("div"), c.c(), s(a, "class", "screen-body svelte-1cxxedm"), s(t, "class", "menu svelte-1cxxedm"), s(t, "data-testid", "menu");
    },
    m(d, A) {
      ht(d, t, A), vt(i, t, null), u(t, l), u(t, a), c.m(a, null), e[62](t), p = !0, h || (r = Kt(o = Qs.call(null, a, {
        disabled: (/*disabled*/
        e[2]),
        navigationId: (/*navigationId*/
        e[18]),
        mode: (/*keysMode*/
        e[23]),
        onArrow: (/*handleArrowKey*/
        e[28]),
        onSelect: (/*select*/
        e[6]),
        onBack: (/*back*/
        e[5]),
        onMenuHold: (/*screenKeyboard_function*/
        e[61])
      })), h = !0);
    },
    p(d, A) {
      const f = {};
      A[0] & /*title*/
      33554432 && (f.title = /*title*/
      d[25]), A[0] & /*$playback*/
      2048 && (f.hasLoadedItem = /*$playback*/
      d[11].hasLoadedItem), A[0] & /*$playback*/
      2048 && (f.isPlaying = /*$playback*/
      d[11].isPlaying), A[0] & /*view*/
      512 && (f.isBrick = /*view*/
      d[9] === "brick"), A[0] & /*brickBalls*/
      4194304 && (f.brickBalls = /*brickBalls*/
      d[22]), A[0] & /*brickScore*/
      2097152 && (f.brickScore = /*brickScore*/
      d[21]), i.$set(f), A[0] & /*navigationId*/
      262144 && bt(n, n = /*navigationId*/
      d[18]) ? (Ae(), et(c, 1, 1, noop), fe(), c = ga(d), c.c(), $(c, 1), c.m(a, null)) : c.p(d, A), o && Pt(o.update) && A[0] & /*disabled, navigationId, keysMode*/
      8650756 && o.update.call(null, {
        disabled: (/*disabled*/
        d[2]),
        navigationId: (/*navigationId*/
        d[18]),
        mode: (/*keysMode*/
        d[23]),
        onArrow: (/*handleArrowKey*/
        d[28]),
        onSelect: (/*select*/
        d[6]),
        onBack: (/*back*/
        d[5]),
        onMenuHold: (/*screenKeyboard_function*/
        d[61])
      });
    },
    i(d) {
      p || ($(i.$$.fragment, d), $(c), p = !0);
    },
    o(d) {
      et(i.$$.fragment, d), et(c), p = !1;
    },
    d(d) {
      d && H(t), yt(i), c.d(d), e[62](null), h = !1, r();
    }
  };
}
const jh = "now-playing";
function ma() {
  var e;
  let t = document.activeElement;
  for (; !((e = t == null ? void 0 : t.shadowRoot) === null || e === void 0) && e.activeElement;) t = t.shadowRoot.activeElement;
  return t;
}
function Ge(e) {
  return e[e.length - 1];
}
function rl() {
  return {
    key: "now-playing"
  };
}
function Fh(e, t, i) {
  let l,
    a,
    n,
    o,
    p,
    h,
    r,
    c,
    d,
    A,
    f = noop,
    g = () => (f(), f = Ii(k, b => i(11, A = b)), k),
    M,
    y,
    w,
    E = noop,
    I = () => (E(), E = Ii(K, b => i(54, w = b)), K),
    x,
    U = noop,
    C = () => (U(), U = Ii(_, b => i(55, x = b)), _);
  Ut(e, settings, b => i(64, M = b)), e.$$.on_destroy.push(() => f()), e.$$.on_destroy.push(() => E()), e.$$.on_destroy.push(() => U());
  var G, ot;
  const nt = createLogger("<Menu>"),
    at = getTranslator();
  Ut(e, at, b => i(53, y = b));
  let {
      data: z = void 0
    } = t,
    {
      playback: k
    } = t;
  g();
  let {
      navigateToUrl: Y = void 0
    } = t,
    {
      disabled: W = !1
    } = t;
  const _ = wh(k);
  C();
  const X = Ja(vl),
    K = zh(k);
  I();
  const j = Lh(),
    P = {
      list: "list",
      "now-playing": "volume",
      brick: "brick"
    },
    V = {
      list: "list",
      "now-playing": "now-playing",
      brick: "passthrough"
    };
  let q = [{
      key: "main"
    }],
    Q = 0,
    O,
    lt,
    L,
    D,
    F = !1,
    tt = !1,
    ct,
    dt = !1,
    {
      scrollTarget: N = "list"
    } = t,
    {
      selectHoldMs: it = null
    } = t,
    Bt = 0,
    S = !1;
  function st() {
    const b = ma();
    return !!b && b !== document.body && !(O != null && O.contains(b));
  }
  function ft(b) {
    return va(b, {
      data: z,
      hasNowPlaying: ua(b.key, l),
      i18n: y
    });
  }
  function Rt(b, Z) {
    return b ? "seek" : P[getMenuDefinition(Z).view];
  }
  function Wt() {
    return Rt(_.peek().isSeeking, Ge(q).key);
  }
  let Lt = !1;
  function se(b) {
    var Z;
    const At = ft(b);
    if (((Z = At[0]) === null || Z === void 0 ? void 0 : Z.action) !== "toggle") {
      const Tt = Ni(At, A);
      return Tt >= 0 ? Tt : Math.max(0, j.rememberedIndexIn(b, At));
    }
    const xt = At.findIndex(Tt => Tt.action === "toggle" && Tt.target === M[b.key]);
    return xt >= 0 ? xt : 0;
  }
  function $t(b) {
    const Z = getMenuDefinition(b).view === "now-playing";
    _.handleScreenChange(Z), K.handleScreenChange(Z);
  }
  function Ft(b, Z = !1) {
    var At;
    i(15, F = Z ? !!(O != null && O.contains(ma())) : !st()), i(19, S = !1), i(18, Bt += 1), i(14, D = void 0), L = void 0;
    const xt = Ge(q);
    j.remember(xt, h, Q);
    const Tt = Object.assign(Object.assign({}, xt), {
      selectedItemId: (At = h[Q]) === null || At === void 0 ? void 0 : At.id,
      selectedIndexAtPush: Q,
      scrollTopAtPush: lt == null ? void 0 : lt.scrollTop,
      // An idle jump wasn't the user's choice, so it keeps their row.
      suppressNowPlayingSyncAtPush: Z && Lt
    });
    i(47, q = [...q.slice(0, -1), Tt, b]), i(7, Q = se(b)), i(48, Lt = !1), $t(b.key), X.reset();
  }
  function Gt() {
    var b;
    if (q.length <= 1) return;
    i(15, F = !st()), i(19, S = !0), i(18, Bt += 1), L = void 0, j.remember(Ge(q), h, Q), i(47, q = q.slice(0, -1));
    const Z = Ge(q);
    i(48, Lt = (b = Z.suppressNowPlayingSyncAtPush) !== null && b !== void 0 ? b : !1), $t(Z.key), X.reset();
    const At = ft(Z),
      xt = Ni(At, A),
      {
        selectedIndexAtPush: Tt,
        scrollTopAtPush: Qe
      } = Z;
    xt >= 0 && !Lt ? i(7, Q = xt) : i(7, Q = Math.max(0, j.rememberedIndexIn(Z, At))), i(14, D = Q === Tt ? Qe : void 0);
  }
  function oe() {
    Gt();
  }
  let St = null,
    te = 0,
    ee = 0;
  function ge() {
    const b = getMenuDefinition(a.key).selectHold;
    b && Ft({
      key: b.target
    });
  }
  function me(b) {
    St == null || St.movePaddle(b / Ss);
  }
  function be(b) {
    St == null || St.steerPaddle(b ?? 0);
  }
  const Yt = Il(ps, () => Ft(rl(), !0));
  function Me() {
    c && Yt.start();
  }
  onDestroy(k.onQueueFinished(() => {
    j.clearQueueSource(), n === "now-playing" && (oe(), Ge(q).selectedItemId === jh && (i(7, Q = 0), i(14, D = void 0)));
  }));
  function we(b) {
    if (h.length === 0) return !1;
    const Z = Math.min(h.length - 1, Math.max(0, Q + b)),
      At = Z !== Q;
    return i(7, Q = Z), At && i(48, Lt = !0), At;
  }
  function he(b, Z) {
    const At = Wt(),
      xt = _.accelerate(b, Z),
      Tt = X.next(b, Z, At === "list");
    return At === "seek" ? xt : Tt;
  }
  function qt(b, Z = 1) {
    switch (Wt()) {
      case "seek":
        return _.seek(b * Z);
      case "volume":
        return b > 0 ? K.increase(Z) : K.decrease(Z);
      case "list":
        return we(b * Z);
      default:
        return !1;
    }
  }
  function ke(b, Z) {
    switch (Wt()) {
      case "seek":
        return qt(b, _.accelerateHold(Z));
      case "volume":
        return qt(b, bs);
      default:
        return qt(b, El(vl, Z));
    }
  }
  function B() {
    if (n === "brick") {
      St == null || St.launchBall();
      return;
    }
    if (n === "now-playing") {
      if (K.peek().isAdjustingVolume) {
        K.exit();
        return;
      }
      if (!A.hasLoadedItem) return;
      _.toggle();
      return;
    }
    const b = h[Q];
    if (b) switch (b.action) {
      case "navigate":
        Ft({
          key: b.target,
          contextId: b.contextId,
          titleKey: b.screenTitleKey
        });
        break;
      case "inline-toggle":
        {
          const Z = M[b.toggleKey],
            At = b.values.indexOf(Z),
            xt = b.values[(At + 1) % b.values.length];
          settings.update(Tt => Object.assign(Object.assign({}, Tt), {
            [b.toggleKey]: xt
          }));
          break;
        }
      case "toggle":
        setBacklight(b.target), Gt();
        break;
      case "cancel":
        Gt();
        break;
      case "reset-all":
        resetSettings(), Gt();
        break;
      case "play":
        {
          if (z) {
            const Z = xl(h).indexOf(b);
            Z >= 0 ? (Ni(h, A) === Q ? A.isPlaying || k.resume() : (j.setQueueSource(a), k.play(so(h, z), Z)), Ft(rl())) : nt.warn("Selected song not found in queue:", b.songId);
          }
          break;
        }
      case "info":
        break;
      default:
        nt.warn("Unhandled menu item action:", b);
        break;
    }
  }
  function kt(b) {
    if ((b == null ? void 0 : b.action) !== "navigate" || !ho(b.target) || !z) return !1;
    const Z = nn(b.target, b.contextId, z);
    return Z.length === 0 ? !1 : (j.setQueueSource({
      key: b.target,
      contextId: b.contextId
    }), k.play(Z), Ft(rl()), !0);
  }
  function zt() {
    if (A.hasLoadedItem) {
      A.isPlaying ? k.pause() : k.resume();
      return;
    }
    if (A.isLoading) {
      k.pause();
      return;
    }
    const b = h[Q];
    if (!kt(b)) {
      if ((b == null ? void 0 : b.action) === "play") {
        B();
        return;
      }
      A.queue.length > 0 && k.resume();
    }
  }
  const Vt = Hi();
  function Xt(b, Z) {
    const At = Ls(b.timeStamp, L, hs);
    L = b.timeStamp;
    const xt = he(At, Z);
    qt(Z, xt);
  }
  function re() {
    A.hasLoadedItem && (K.exit(), _.keepOpen());
  }
  function ce() {
    _.exit(), K.keepOpen();
  }
  function xe(b) {
    re(), _.seekTo(b.detail);
  }
  function De(b) {
    K.keepOpen(), K.set(b.detail);
  }
  onDestroy(() => {
    _.destroy(), K.destroy(), Yt.destroy();
  });
  function _e(b) {
    Jt[b ? "unshift" : "push"](() => {
      St = b, i(20, St);
    });
  }
  function Ce(b) {
    te = b, i(21, te);
  }
  function Be(b) {
    ee = b, i(22, ee);
  }
  const Te = b => {
      i(13, lt = b.detail);
    },
    He = b => {
      lt === b.detail && i(13, lt = void 0);
    },
    Le = () => Vt("menuhold");
  function ze(b) {
    Jt[b ? "unshift" : "push"](() => {
      O = b, i(12, O);
    });
  }
  return e.$$set = b => {
    "data" in b && i(35, z = b.data), "playback" in b && g(i(0, k = b.playback)), "navigateToUrl" in b && i(1, Y = b.navigateToUrl), "disabled" in b && i(2, W = b.disabled), "scrollTarget" in b && i(33, N = b.scrollTarget), "selectHoldMs" in b && i(34, it = b.selectHoldMs);
  }, e.$$.update = () => {
    if (e.$$.dirty[1] & /*$seekController*/
    16777216 && i(8, {
      isSeeking: tt,
      seekPreviewTime: ct
    } = x, tt, (i(16, ct), i(55, x))), e.$$.dirty[1] & /*$volumeController*/
    8388608 && i(17, {
      isAdjustingVolume: dt
    } = w, dt), e.$$.dirty[0] & /*$playback*/
    2048 && i(52, l = A.queue.length > 0), e.$$.dirty[1] & /*screenStack*/
    65536 && i(49, a = Ge(q)), e.$$.dirty[1] & /*currentScreen*/
    262144 && i(9, n = getMenuDefinition(a.key).view), e.$$.dirty[1] & /*currentScreen, data, $i18n*/
    4456464 && i(25, o = Hh(a, z, y)), e.$$.dirty[0] & /*isSeeking*/
    256 | e.$$.dirty[1] & /*currentScreen*/
    262144 && i(33, N = Rt(tt, a.key)), e.$$.dirty[1] & /*currentScreen, _a, _b*/
    311296 && i(34, it = i(46, ot = i(45, G = getMenuDefinition(a.key).selectHold) === null || G === void 0 ? void 0 : G.ms) !== null && ot !== void 0 ? ot : null), e.$$.dirty[1] & /*currentScreen, hasNowPlaying*/
    2359296 && i(51, p = ua(a.key, l)), e.$$.dirty[1] & /*currentScreen, data, currentHasNowPlaying, $i18n*/
    5505040 && i(10, h = va(a, {
      data: z,
      hasNowPlaying: p,
      i18n: y
    })), e.$$.dirty[0] & /*selectedIndex, currentItems*/
    1152 && Q >= h.length && i(7, Q = Math.max(0, h.length - 1)), e.$$.dirty[0] & /*view, $playback*/
    2560 && i(24, r = n === "now-playing" ? A.queue[A.currentTrackIndex] : void 0), e.$$.dirty[0] & /*$playback, currentItems*/
    3072 | e.$$.dirty[1] & /*screenStack, suppressNowPlayingSync*/
    196608 && j.syncQueue(A, q)) {
      const Z = Ni(h, A);
      Z >= 0 && !Lt && i(7, Q = Z);
    }
    e.$$.dirty[0] & /*$playback*/
    2048 | e.$$.dirty[1] & /*currentScreen*/
    262144 && i(50, c = A.isPlaying && !getMenuDefinition(a.key).blocksIdleJump), e.$$.dirty[1] & /*isNowPlayingIdleArmed*/
    524288 && (c ? Yt.start() : Yt.stop()), e.$$.dirty[0] & /*view*/
    512 && i(23, d = V[n]);
  }, [k, Y, W, _, K, oe, B, Q, tt, n, h, A, O, lt, D, F, ct, dt, Bt, S, St, te, ee, d, r, o, at, Vt, Xt, re, ce, xe, De, N, it, z, Wt, ge, me, be, Me, he, qt, ke, zt, G, ot, q, Lt, a, c, p, l, y, w, x, _e, Ce, Be, Te, He, Le, ze];
}
class MenuComponent extends SvelteComponent {
  constructor(t) {
    super(), initComponent(this, t, Fh, Wh, bt, {
      data: 35,
      playback: 0,
      navigateToUrl: 1,
      disabled: 2,
      seekController: 3,
      volumeController: 4,
      scrollTarget: 33,
      selectHoldMs: 34,
      currentScrollTarget: 36,
      back: 5,
      selectHold: 37,
      turnPaddle: 38,
      steerPaddle: 39,
      notifyActivity: 40,
      accelerate: 41,
      moveBy: 42,
      keyStep: 43,
      select: 6,
      play: 44
    }, Qh, [-1, -1, -1]);
  }
  get data() {
    return this.$$.ctx[35];
  }
  set data(t) {
    this.$$set({
      data: t
    }), flush();
  }
  get playback() {
    return this.$$.ctx[0];
  }
  set playback(t) {
    this.$$set({
      playback: t
    }), flush();
  }
  get navigateToUrl() {
    return this.$$.ctx[1];
  }
  set navigateToUrl(t) {
    this.$$set({
      navigateToUrl: t
    }), flush();
  }
  get disabled() {
    return this.$$.ctx[2];
  }
  set disabled(t) {
    this.$$set({
      disabled: t
    }), flush();
  }
  get seekController() {
    return this.$$.ctx[3];
  }
  get volumeController() {
    return this.$$.ctx[4];
  }
  get scrollTarget() {
    return this.$$.ctx[33];
  }
  set scrollTarget(t) {
    this.$$set({
      scrollTarget: t
    }), flush();
  }
  get selectHoldMs() {
    return this.$$.ctx[34];
  }
  set selectHoldMs(t) {
    this.$$set({
      selectHoldMs: t
    }), flush();
  }
  get currentScrollTarget() {
    return this.$$.ctx[36];
  }
  get back() {
    return this.$$.ctx[5];
  }
  get selectHold() {
    return this.$$.ctx[37];
  }
  get turnPaddle() {
    return this.$$.ctx[38];
  }
  get steerPaddle() {
    return this.$$.ctx[39];
  }
  get notifyActivity() {
    return this.$$.ctx[40];
  }
  get accelerate() {
    return this.$$.ctx[41];
  }
  get moveBy() {
    return this.$$.ctx[42];
  }
  get keyStep() {
    return this.$$.ctx[43];
  }
  get select() {
    return this.$$.ctx[6];
  }
  get play() {
    return this.$$.ctx[44];
  }
}
defineSvelteElement(MenuComponent, {
  data: {},
  playback: {},
  navigateToUrl: {},
  disabled: {
    type: "Boolean"
  },
  scrollTarget: {},
  selectHoldMs: {}
}, [], ["seekController", "volumeController", "currentScrollTarget", "back", "selectHold", "turnPaddle", "steerPaddle", "notifyActivity", "accelerate", "moveBy", "keyStep", "select", "play"], !0);

export { MenuComponent };
