// Reconstructed compiled Svelte code. See the package README for provenance.
import { createLogger } from '../logging.js';
import { registerFonts } from '../fonts.js';
import { baseStyles } from '../assets/base-styles.js';
import { noop, ue, Pt, bt, Ut, u, appendStyles, ht, H, T, Mt, rt, ut, s, Ht, Nt, Ra, onDestroy, Jt, Gi, flush, Ae, fe, $, et, Xi, gt, vt, yt, initComponent, defineSvelteElement, SvelteComponent } from '../vendor/svelte-runtime.js';
import { ShuffleMode, ClickerMode, defaultLocale, ns, ss, os, ks, settings, onSettingsReset } from '../settings.js';
import { Ci, ml, Il } from '../interaction.js';
import { createTranslator, getTranslationStore } from '../localization.js';
import { MenuComponent } from './menu.js';
import { ClickWheelComponent } from './click-wheel.js';
import { LoadingOverlay, ErrorOverlay } from './overlays.js';
import { createDataStore } from '../data.js';
import { createPlaybackStore } from '../audio/playback-store.js';
import { createBacklightStore } from '../backlight.js';
import { createAudioContext, closeAudioOnDestroy, resumeAudioContext, createClickPlayer } from '../audio/context.js';
import { clickSound } from '../assets/click-sound.js';
import { createAsyncGuard, online, playerRepeatMode } from '../lifecycle.js';
import { createWheelNavigation, createSeekController } from '../wheel-navigation.js';

function appendIPodStyles(e) {
  appendStyles(e, "svelte-4kg78n", '.ipod.svelte-4kg78n{display:flex;justify-content:center;position:relative;width:100%;color-scheme:light dark}.ipod-shadow.svelte-4kg78n{position:relative;width:415px}.ipod-shadow-inner.svelte-4kg78n{--ipod-scale:1;position:relative;margin:0 auto;width:100%;transform-origin:top;transition:scale 0.25s ease-in-out;scale:var(--ipod-scale)}@container ipod (width < 440px){.ipod-shadow-inner.svelte-4kg78n{--ipod-scale:0.9}}@container ipod (width < 400px){.ipod-shadow-inner.svelte-4kg78n{--ipod-scale:0.8}}@container ipod (width < 360px){.ipod-shadow-inner.svelte-4kg78n{--ipod-scale:0.75}}.ipod-shadow-inner.svelte-4kg78n::before{content:"";position:absolute;height:200px;bottom:0;left:0;z-index:1;width:100%;background:linear-gradient(180deg, #010101 0, rgba(87, 87, 87, 0.8901960784) 5%, rgba(72, 72, 72, 0.4117647059) 17%, transparent 50%);transform:translateY(100%);border-radius:38px 38px 0 0;opacity:0.3;box-shadow:0 -1px 1px 0.5px rgb(112, 112, 112);filter:blur(1px)}.ipod-shadow-inner.svelte-4kg78n::after{content:"";position:absolute;inset:-2px;z-index:1;border-radius:38px;background:linear-gradient(249deg, transparent 79%, #000 84%);background-size:181% 200%;background-position:0% 50%;background-repeat:no-repeat;pointer-events:none}.ipod-container.svelte-4kg78n{position:relative;z-index:2;width:415px;height:692px;border:1px solid transparent;border-radius:38px;background:linear-gradient(42deg, var(--ipod-container-gradient-1, rgba(232, 232, 232, 0.9607843137)) 0, var(--ipod-container-gradient-2, #fff) 149%);-webkit-box-reflect:below 4px linear-gradient(180deg, transparent 50%, rgba(0, 0, 0, 0.15) 100%);box-shadow:inset 0 -1px 3px 2px var(--ipod-container-shadow-1, rgba(168, 168, 168, 0.6705882353)), inset -1px 0 2px 5px var(--ipod-container-shadow-2, white), -1px 1px 0 3px var(--ipod-container-shadow-3, rgba(146, 146, 146, 0.4705882353)), 2px 1px 0 3px var(--ipod-container-shadow-4, #e7e7e7)}@media(prefers-color-scheme: dark){.ipod-container.svelte-4kg78n{--ipod-container-gradient-1:#d4d4d4f5;--ipod-container-gradient-2:#fefefe;--ipod-container-shadow-1:#2d2d2dab;--ipod-container-shadow-2:#9e9e9e;--ipod-container-shadow-3:#00000078;--ipod-container-shadow-4:#777}}.ipod-container.svelte-4kg78n::before,.ipod-container.svelte-4kg78n::after{--border-width:6px;display:block;inset:0;position:absolute;content:"";pointer-events:none;z-index:2;border-radius:38px;width:calc(100% + var(--border-width));height:calc(100% + var(--border-width));top:calc(0% - var(--border-width) / 2);left:calc(0% - var(--border-width) / 2);padding:var(--border-width)}.ipod-container.svelte-4kg78n::before{overflow:clip;background:linear-gradient(249deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.08) 40% 50%, rgba(255, 255, 255, 0) 52% 76%), linear-gradient(257deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.04) 42% 55%, rgba(255, 255, 255, 0) 58% 76%);z-index:3;background-size:181% 200%;background-position:0% 50%;background-repeat:no-repeat}.ipod-container.svelte-4kg78n::after{--angle-2:-23deg;background:conic-gradient(from var(--angle-2) at 50% 50%, transparent 0, rgba(255, 255, 255, 0.4) 1%, rgba(255, 255, 255, 0.4) 2%, rgba(255, 255, 255, 0.4) 2%, transparent 2.5%, transparent 5%, rgba(255, 255, 255, 0.4) 5.5%, rgba(255, 255, 255, 0.4) 6%, rgba(255, 255, 255, 0.4) 6.5%, transparent 8%, transparent 9%, rgba(255, 255, 255, 0.4) 10%, rgba(255, 255, 255, 0.4) 11%, rgba(255, 255, 255, 0.4) 12%, transparent 13%), conic-gradient(from var(--angle-2) at 50% 50%, rgba(0, 0, 0, 0.3) 0, rgba(0, 0, 0, 0.3) 10%, rgba(0, 0, 0, 0.1) 20%, rgba(0, 0, 0, 0.45) 57%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0.2) 95%, rgba(0, 0, 0, 0.2)), linear-gradient(44deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), linear-gradient(44deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3));mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);mask-composite:exclude;box-shadow:inset 0 0 0 calc(var(--border-width) / 2) rgba(255, 255, 255, 0.5)}.menu-layer.svelte-4kg78n{width:100%;height:100%}.menu-layer.hidden.svelte-4kg78n{visibility:hidden}.loading-message.svelte-4kg78n{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap}.ipod-screen.svelte-4kg78n{position:relative;margin:30px auto 0;width:273px;height:223px;background-image:linear-gradient(135deg, #a5a59b, #d6d5d0);border-radius:10px;box-shadow:inset 0 0 10px 2px #4d4d4d;font-size:26px;line-height:1;color:#484647;border:8px solid rgba(0, 0, 0, 0.5);box-sizing:content-box;pointer-events:none}@media(prefers-color-scheme: dark){.ipod-screen.svelte-4kg78n{--ipod-screen-opacity:0.85}}@media(prefers-contrast: more){.ipod-screen.svelte-4kg78n{color:black}}.ipod-screen.svelte-4kg78n::before,.ipod-screen.svelte-4kg78n::after{content:"";position:absolute;display:block;top:50%;left:50%;transform:translate(-50%, -50%);pointer-events:none;z-index:1}.ipod-screen.svelte-4kg78n::before{height:calc(100% - 10px);width:calc(100% - 10px);background-color:var(--ipod-bg-scrim, rgba(72, 70, 71, 0.1));mix-blend-mode:luminosity}@media(prefers-contrast: more){.ipod-screen.svelte-4kg78n::before{--ipod-bg-scrim:#eed;mix-blend-mode:initial}}.ipod-screen.backlit.svelte-4kg78n{--ipod-bg-scrim:#0f69ff;--ipod-faux-backlit:#b5c3d8;--ipod-screen-opacity:0.85;box-shadow:inset 0 0 0 5px rgba(71, 71, 71, 0.85);border:8px solid rgba(24, 24, 24, 0.7)}@media(prefers-contrast: more){.ipod-screen.backlit.svelte-4kg78n{--ipod-faux-backlit:#f0f0e6}}.ipod-screen.backlit.svelte-4kg78n::before{mix-blend-mode:plus-lighter;opacity:0.2;box-shadow:-1px 0 4px 7px white}.ipod-screen.backlit.svelte-4kg78n::after{--backlight-bulb-color:254, 249, 220;height:calc(100% - 10px);width:calc(100% + 2px);transform:translate(calc(-50% - 6px), -50%);background-image:radial-gradient(50% 70% at 0% 19%, rgb(var(--backlight-bulb-color)) 0%, rgb(var(--backlight-bulb-color), 0.85) 6%, rgb(var(--backlight-bulb-color), 0.15) 20%, transparent 50%), radial-gradient(50% 70% at 0% 53%, rgb(var(--backlight-bulb-color)) 0%, rgb(var(--backlight-bulb-color), 0.85) 6%, rgb(var(--backlight-bulb-color), 0.15) 20%, transparent 50%), radial-gradient(50% 70% at 0% 83%, rgb(var(--backlight-bulb-color)) 0%, rgb(var(--backlight-bulb-color), 0.85) 6%, rgb(var(--backlight-bulb-color), 0.15) 20%, transparent 50%), radial-gradient(50% 70% at 0% 19%, rgb(var(--backlight-bulb-color)) 0%, rgb(var(--backlight-bulb-color), 0.85) 6%, transparent 33%), radial-gradient(50% 70% at 0% 53%, rgb(var(--backlight-bulb-color)) 0%, rgb(var(--backlight-bulb-color), 0.85) 6%, transparent 33%), radial-gradient(50% 70% at 0% 83%, rgb(var(--backlight-bulb-color)) 0%, rgb(var(--backlight-bulb-color), 0.85) 6%, transparent 33%), radial-gradient(20% 83% at 100% 19%, rgb(var(--backlight-bulb-color)) 0%, rgb(var(--backlight-bulb-color), 0.7) 6%, transparent 33%), radial-gradient(20% 83% at 100% 54%, rgb(var(--backlight-bulb-color)) 0%, rgb(var(--backlight-bulb-color), 0.7) 6%, transparent 33%), radial-gradient(20% 83% at 100% 83%, rgb(var(--backlight-bulb-color)) 0%, rgb(var(--backlight-bulb-color), 0.7) 6%, transparent 33%);opacity:0.15;mix-blend-mode:plus-lighter}');
}
function createLoadingFragment(e) {
  let t, i;
  return t = new LoadingOverlay({}), {
    c() {
      gt(t.$$.fragment);
    },
    m(l, a) {
      vt(t, l, a), i = !0;
    },
    p: noop,
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
function createErrorFragment(e) {
  let t, i;
  return t = new ErrorOverlay({
    props: {
      message: (/*offlineMessage*/
      e[5])
    }
  }), {
    c() {
      gt(t.$$.fragment);
    },
    m(l, a) {
      vt(t, l, a), i = !0;
    },
    p(l, a) {
      const n = {};
      a[0] & /*offlineMessage*/
      32 && (n.message = /*offlineMessage*/
      l[5]), t.$set(n);
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
function createIPodFragment(e) {
  let t, i, l, a, n, o, p, h, r, c, d, A, f, g, M, y, w, E, I, x;
  const U = [createErrorFragment, createLoadingFragment],
    C = [];
  function G(z, k) {
    return /*$isOnline*/z[8] ? (/*isLoading*/
    z[3] ? 1 : -1) : 0;
  }
  ~(o = G(e)) && (p = C[o] = U[o](e));
  function ot(z) {
    e[42](z);
  }
  function nt(z) {
    e[43](z);
  }
  let at = {
    disabled: (/*isInert*/
    e[2]),
    data: (/*$iPodData*/
    e[6].status === "ready" ? (/*$iPodData*/
    e[6].data) : void 0),
    playback: (/*playbackStore*/
    e[13]),
    navigateToUrl: (/*navigateToUrl*/
    e[0])
  };
  return /*scrollTarget*/e[1] !== void 0 && (at.scrollTarget = /*scrollTarget*/
  e[1]), /*selectHoldMs*/
  e[10] !== void 0 && (at.selectHoldMs = /*selectHoldMs*/
  e[10]), f = new MenuComponent({
    props: at
  }), e[41](f), Jt.push(() => Xi(f, "scrollTarget", ot)), Jt.push(() => Xi(f, "selectHoldMs", nt)), f.$on("menuhold", /*backlight*/
  e[14].toggle), w = new ClickWheelComponent({
    props: {
      scrollTarget: (/*scrollTarget*/
      e[1]),
      isPlaying: (/*$playbackStore*/
      e[7].hasLoadedItem ? (/*$playbackStore*/
      e[7].isPlaying) : (/*$playbackStore*/
      e[7].isLoading)),
      selectHoldMs: (/*selectHoldMs*/
      e[10]),
      disabled: (/*isInert*/
      e[2]),
      disableSkip: (/*isSeeking*/
      e[4])
    }
  }), w.$on("scroll", /*handleScroll*/
  e[20]), w.$on("keyscroll", /*handleKeyScroll*/
  e[21]), w.$on("steer", /*steer_handler*/
  e[44]), w.$on("select", function () {
    Pt(/*ifBooted*/
    e[23](/*select_handler*/
    e[45])) && e[23](/*select_handler*/
    e[45]).apply(this, arguments);
  }), w.$on("selecthold", function () {
    Pt(/*ifBooted*/
    e[23](/*selecthold_handler*/
    e[46])) && e[23](/*selecthold_handler*/
    e[46]).apply(this, arguments);
  }), w.$on("menu", function () {
    Pt(/*ifBooted*/
    e[23](/*menu_handler*/
    e[47])) && e[23](/*menu_handler*/
    e[47]).apply(this, arguments);
  }), w.$on("menuhold", /*backlight*/
  e[14].toggle), w.$on("playpause", function () {
    Pt(/*ifBooted*/
    e[23](/*playpause_handler*/
    e[48])) && e[23](/*playpause_handler*/
    e[48]).apply(this, arguments);
  }), w.$on("dragstart", /*handleDragStart*/
  e[22]), w.$on("dragend", /*dragend_handler*/
  e[49]), w.$on("back", function () {
    Pt(/*ifBooted*/
    e[23](/*back_handler*/
    e[50])) && e[23](/*back_handler*/
    e[50]).apply(this, arguments);
  }), w.$on("forward", function () {
    Pt(/*ifBooted*/
    e[23](/*forward_handler*/
    e[51])) && e[23](/*forward_handler*/
    e[51]).apply(this, arguments);
  }), w.$on("backhold", /*backhold_handler*/
  e[52]), w.$on("forwardhold", /*forwardhold_handler*/
  e[53]), {
    c() {
      t = T("div"), i = T("div"), l = T("div"), a = T("div"), n = T("div"), p && p.c(), h = rt(), r = T("p"), c = Mt(/*screenAnnouncement*/
      e[11]), d = rt(), A = T("div"), gt(f.$$.fragment), y = rt(), gt(w.$$.fragment), s(r, "class", "loading-message svelte-4kg78n"), s(r, "role", "status"), s(A, "class", "menu-layer svelte-4kg78n"), s(A, "data-testid", "menu-layer"), Nt(A, "hidden", /*isInert*/
      e[2]), s(n, "class", "ipod-screen svelte-4kg78n"), s(n, "data-testid", "ipod-screen"), Nt(n, "backlit", /*isBacklit*/
      e[12]), s(a, "class", "ipod-container svelte-4kg78n"), s(a, "data-testid", "ipod-container"), s(l, "class", "ipod-shadow-inner svelte-4kg78n"), s(i, "class", "ipod-shadow svelte-4kg78n"), s(t, "class", "ipod svelte-4kg78n");
    },
    m(z, k) {
      ht(z, t, k), u(t, i), u(i, l), u(l, a), u(a, n), ~o && C[o].m(n, null), u(n, h), u(n, r), u(r, c), u(n, d), u(n, A), vt(f, A, null), u(a, y), vt(w, a, null), E = !0, I || (x = [ut(a, "pointerdown", /*handleUserActivity*/
      e[17]), ut(a, "keydown", /*handleKeyActivity*/
      e[18], !0), ut(a, "click", /*handleUserActivity*/
      e[17])], I = !0);
    },
    p(z, k) {
      e = z;
      let Y = o;
      o = G(e), o === Y ? ~o && C[o].p(e, k) : (p && (Ae(), et(C[Y], 1, 1, () => {
        C[Y] = null;
      }), fe()), ~o ? (p = C[o], p ? p.p(e, k) : (p = C[o] = U[o](e), p.c()), $(p, 1), p.m(n, h)) : p = null), (!E || k[0] & /*screenAnnouncement*/
      2048) && Ht(c, /*screenAnnouncement*/
      e[11]);
      const W = {};
      k[0] & /*isInert*/
      4 && (W.disabled = /*isInert*/
      e[2]), k[0] & /*$iPodData*/
      64 && (W.data = /*$iPodData*/
      e[6].status === "ready" ? (/*$iPodData*/
      e[6].data) : void 0), k[0] & /*navigateToUrl*/
      1 && (W.navigateToUrl = /*navigateToUrl*/
      e[0]), !g && k[0] & /*scrollTarget*/
      2 && (g = !0, W.scrollTarget = /*scrollTarget*/
      e[1], Gi(() => g = !1)), !M && k[0] & /*selectHoldMs*/
      1024 && (M = !0, W.selectHoldMs = /*selectHoldMs*/
      e[10], Gi(() => M = !1)), f.$set(W), (!E || k[0] & /*isInert*/
      4) && Nt(A, "hidden", /*isInert*/
      e[2]), (!E || k[0] & /*isBacklit*/
      4096) && Nt(n, "backlit", /*isBacklit*/
      e[12]);
      const _ = {};
      k[0] & /*scrollTarget*/
      2 && (_.scrollTarget = /*scrollTarget*/
      e[1]), k[0] & /*$playbackStore*/
      128 && (_.isPlaying = /*$playbackStore*/
      e[7].hasLoadedItem ? (/*$playbackStore*/
      e[7].isPlaying) : (/*$playbackStore*/
      e[7].isLoading)), k[0] & /*selectHoldMs*/
      1024 && (_.selectHoldMs = /*selectHoldMs*/
      e[10]), k[0] & /*isInert*/
      4 && (_.disabled = /*isInert*/
      e[2]), k[0] & /*isSeeking*/
      16 && (_.disableSkip = /*isSeeking*/
      e[4]), w.$set(_);
    },
    i(z) {
      E || ($(p), $(f.$$.fragment, z), $(w.$$.fragment, z), E = !0);
    },
    o(z) {
      et(p), et(f.$$.fragment, z), et(w.$$.fragment, z), E = !1;
    },
    d(z) {
      z && H(t), ~o && C[o].d(), e[41](null), yt(f), yt(w), I = !1, ue(x);
    }
  };
}
function createIPodInstance(e, t, i) {
  let l, a, n, o, p, h, r, c, d, A, f, g, M, y, w;
  Ut(e, settings, B => i(38, A = B)), Ut(e, online, B => i(8, y = B));
  let {
      locale: E = defaultLocale
    } = t,
    {
      dragStepDegrees: I = os
    } = t,
    {
      backlit: x = void 0
    } = t,
    {
      playback: U = void 0
    } = t,
    {
      navigateToUrl: C = void 0
    } = t,
    {
      i18n: G = void 0
    } = t;
  const ot = createLogger("<IPod>"),
    nt = createAsyncGuard(),
    at = createAudioContext(),
    z = createClickPlayer(clickSound, at),
    k = createPlaybackStore(at);
  Ut(e, k, B => i(7, g = B));
  const Y = createBacklightStore();
  Ut(e, Y, B => i(40, w = B));
  const W = getTranslationStore();
  Ut(e, W, B => i(39, M = B));
  const {
    iPodData: _,
    loadIPodData: X
  } = createDataStore();
  Ut(e, _, B => i(6, f = B));
  const K = _;
  let j,
    P = !1,
    V = !1,
    q = !1,
    Q = "list",
    O = null,
    lt = !1,
    L = "",
    D = A.volume;
  const F = Il(ks, () => {
      settings.update(B => Object.assign(Object.assign({}, B), {
        volume: D
      }));
    }),
    tt = onSettingsReset(() => {
      F.stop(), i(33, D = A.volume), k.setVolume(ml(D));
    });
  function ct() {
    Y.notifyActivity(), j == null || j.notifyActivity();
  }
  function dt() {
    resumeAudioContext(at), ct();
  }
  function N(B) {
    (!B.repeat || B.key.startsWith("Arrow")) && dt();
  }
  const it = createSeekController();
  function Bt(B, {
    repeat: kt
  }) {
    const {
        hasLoadedItem: zt,
        currentTrackIndex: Vt,
        currentPlaybackTime: Xt,
        currentPlaybackDuration: re
      } = g,
      ce = it.step(B, kt, {
        isInert: r,
        isSeeking: o,
        hasLoadedItem: zt,
        currentTrackIndex: Vt,
        currentPlaybackTime: Xt,
        currentPlaybackDuration: re
      });
    ce !== void 0 && (ct(), k.seek(ce));
  }
  function S(B, kt) {
    if (!(A.clicker !== ClickerMode.ON || kt === "seek")) for (let zt = 0; zt < B; zt += 1) z.playClick();
  }
  const st = createWheelNavigation({
    move: (B, kt) => j.moveBy(B, kt),
    click: S
  });
  function ft(B) {
    if (ct(), r || !j) return;
    const {
        step: kt,
        degrees: zt,
        speed: Vt
      } = B.detail,
      Xt = j.currentScrollTarget();
    if (Xt === "brick") {
      j.turnPaddle(kt * zt);
      return;
    }
    st.scroll({
      step: kt,
      degrees: zt,
      target: Xt,
      multiplier: j.accelerate(Vt, kt),
      dragStepDegrees: I
    });
  }
  function Rt(B) {
    if (ct(), r || !j) return;
    const {
        step: kt,
        heldMs: zt
      } = B.detail,
      Vt = j.currentScrollTarget();
    j.keyStep(kt, zt) && S(1, Vt);
  }
  function Wt() {
    st.reset(), h || j == null || j.seekController.handleDragStart();
  }
  function Lt(B) {
    return () => {
      r || B();
    };
  }
  let se, $t;
  function Ft() {
    clearTimeout(se), clearTimeout($t);
  }
  function Gt(B) {
    if (!B) {
      lt || Ft(), k.pause();
      return;
    }
    lt ? i(31, V = !0) : (i(30, P = !1), i(31, V = !1), se = setTimeout(() => {
      i(30, P = !0);
    }, ns), $t = setTimeout(() => {
      i(31, V = !0);
    }, ss)), f.status !== "ready" && X(n);
  }
  Ra(() => {
    k.setVolume(ml(A.volume)), nt(async kt => {
      await kt(), i(32, q = !0);
    });
    const B = online.subscribe(Gt);
    return () => {
      B(), Ft();
    };
  }), onDestroy(() => {
    F.flush(), tt(), k.destroy(), Y.destroy();
  }), closeAudioOnDestroy(at);
  function oe(B) {
    Jt[B ? "unshift" : "push"](() => {
      j = B, i(9, j);
    });
  }
  function St(B) {
    Q = B, i(1, Q);
  }
  function te(B) {
    O = B, i(10, O);
  }
  const ee = B => j == null ? void 0 : j.steerPaddle(B.detail),
    ge = () => j.select(),
    me = () => j.selectHold(),
    be = () => j.back(),
    Yt = () => j.play(),
    Me = () => j == null ? void 0 : j.seekController.handleDragEnd(),
    we = () => {
      o || k.skipPrevious();
    },
    he = () => {
      o || k.skipNext();
    },
    qt = B => Bt(-1, B.detail),
    ke = B => Bt(1, B.detail);
  return e.$$set = B => {
    "locale" in B && i(24, E = B.locale), "dragStepDegrees" in B && i(25, I = B.dragStepDegrees), "backlit" in B && i(26, x = B.backlit), "playback" in B && i(27, U = B.playback), "navigateToUrl" in B && i(0, C = B.navigateToUrl), "i18n" in B && i(28, G = B.i18n);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*backlit*/
    67108864 && i(37, l = typeof x == "string" ? x !== "false" : x), e.$$.dirty[1] & /*override, $backlight*/
    576 && i(12, a = l ?? w), e.$$.dirty[0] & /*playback*/
    134217728 && k.setPlayback(U), e.$$.dirty[0] & /*locale*/
    16777216 && i(34, n = E ?? defaultLocale), e.$$.dirty[0] & /*hostI18n*/
    268435456 | e.$$.dirty[1] & /*activeLocale*/
    8 && W.set(createTranslator(G, n.language)), e.$$.dirty[0] & /*scrollTarget*/
    2 && i(4, o = Q === "seek"), e.$$.dirty[1] & /*$i18n*/
    256 && i(5, p = M.t("ASE.Web.IPod.Error.NotConnected")), e.$$.dirty[0] & /*$iPodData, minDisplayTimeElapsed*/
    1073741888 | e.$$.dirty[1] & /*maxHoldElapsed*/
    1 && i(3, h = !V && f.status === "loading" || !P), e.$$.dirty[0] & /*isLoading, $isOnline*/
    264 && i(2, r = h || !y), e.$$.dirty[0] & /*isInert*/
    4 && (r || (lt = !0)), e.$$.dirty[0] & /*$isOnline, offlineMessage, isLoading*/
    296 | e.$$.dirty[1] & /*liveRegionMounted, $i18n*/
    258 && q && (y ? i(11, L = M.t(h ? "ASE.Web.IPod.Status.Loading" : "ASE.Web.IPod.Status.Ready")) : i(11, L = p)), e.$$.dirty[0] & /*$iPodData*/
    64 && (f.status === "error" ? ot.error("Failed to load iPod data", f.error) : ot.debug("iPod data status:", f)), e.$$.dirty[0] & /*$playbackStore*/
    128 | e.$$.dirty[1] & /*lastVolumePercent*/
    4 && g.playerReady) {
      const B = Ci(g.volume);
      B !== D && (i(33, D = B), F.start());
    }
    e.$$.dirty[1] & /*$settings*/
    128 && i(36, c = A.shuffle === ShuffleMode.SONGS), e.$$.dirty[1] & /*$settings*/
    128 && i(35, d = playerRepeatMode(A.repeat)), e.$$.dirty[1] & /*shuffleSongs*/
    32 && k.setShuffle(c), e.$$.dirty[1] & /*repeatMode*/
    16 && k.setRepeatMode(d), e.$$.dirty[0] & /*isSeeking*/
    16 && o && it.cancel();
  }, [C, Q, r, h, o, p, f, g, y, j, O, L, a, k, Y, W, _, dt, N, Bt, ft, Rt, Wt, Lt, E, I, x, U, G, K, P, V, q, D, n, d, c, l, A, M, w, oe, St, te, ee, ge, me, be, Yt, Me, we, he, qt, ke];
}
class IPodComponent extends SvelteComponent {
  constructor(t) {
    super(), initComponent(this, t, createIPodInstance, createIPodFragment, bt, {
      locale: 24,
      dragStepDegrees: 25,
      backlit: 26,
      playback: 27,
      navigateToUrl: 0,
      i18n: 28,
      iPodDataStore: 29
    }, appendIPodStyles, [-1, -1, -1]);
  }
  get locale() {
    return this.$$.ctx[24];
  }
  set locale(t) {
    this.$$set({
      locale: t
    }), flush();
  }
  get dragStepDegrees() {
    return this.$$.ctx[25];
  }
  set dragStepDegrees(t) {
    this.$$set({
      dragStepDegrees: t
    }), flush();
  }
  get backlit() {
    return this.$$.ctx[26];
  }
  set backlit(t) {
    this.$$set({
      backlit: t
    }), flush();
  }
  get playback() {
    return this.$$.ctx[27];
  }
  set playback(t) {
    this.$$set({
      playback: t
    }), flush();
  }
  get navigateToUrl() {
    return this.$$.ctx[0];
  }
  set navigateToUrl(t) {
    this.$$set({
      navigateToUrl: t
    }), flush();
  }
  get i18n() {
    return this.$$.ctx[28];
  }
  set i18n(t) {
    this.$$set({
      i18n: t
    }), flush();
  }
  get iPodDataStore() {
    return this.$$.ctx[29];
  }
}
defineSvelteElement(IPodComponent, {
  locale: {},
  dragStepDegrees: {},
  backlit: {},
  playback: {},
  navigateToUrl: {},
  i18n: {}
}, [], ["iPodDataStore"], !0);
const IPodElementBase = IPodComponent.element;
registerFonts();
class WebMusicIPod extends IPodElementBase {
  constructor() {
    var i;
    super();
    const t = document.createElement("style");
    t.textContent = baseStyles, (i = this.shadowRoot) == null || i.prepend(t);
  }
}

export { WebMusicIPod };
