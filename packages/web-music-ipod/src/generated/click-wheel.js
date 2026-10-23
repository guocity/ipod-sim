// Reconstructed compiled Svelte code. See the package README for provenance.
import { createLogger } from '../logging.js';
import { ue, Pt, bt, Ut, Kt, Ln, u, appendStyles, ht, H, T, rt, ut, s, m, Nt, onDestroy, Hi, Jt, flush, $, et, gt, vt, yt, initComponent, defineSvelteElement, SvelteComponent } from '../vendor/svelte-runtime.js';
import { rs, cs, Oe, ul, gs, ms } from '../settings.js';
import { Sl } from '../interaction.js';
import { getTranslator } from '../localization.js';
import { trackWheelGesture, Wi, wheelTexture } from '../wheel-gestures.js';
import { $h, ir, ka } from './wheel-icons.js';

const {
  window: nr
} = Ln;
function sr(e) {
  appendStyles(e, "svelte-nz296x", '.click-wheel.svelte-nz296x.svelte-nz296x{position:relative;top:30px;margin:0 auto;width:350px;height:350px;border-radius:50%;background-color:var(--control-circle-bgcolor, #f8f8f8);box-shadow:inset -16px 29px 11px 15px var(--control-circle-box-shadow-1, #f4f4f4), inset 8px -7px 34px -15px var(--control-circle-box-shadow-2, rgba(137, 137, 137, 0.8)), 0 0 0 2px var(--control-circle-box-shadow-3, rgba(135, 135, 135, 0.3803921569)), -4px 6px 10px 0 var(--control-circle-box-shadow-4, rgba(131, 131, 131, 0.231372549)), 0 0 1px 3px var(--control-circle-box-shadow-5, rgba(72, 72, 72, 0.1019607843)), 0 -1px 1px 2px var(--control-circle-box-shadow-6, rgba(168, 168, 168, 0.6705882353)), 0 0 1px 3px var(--control-circle-box-shadow-7, #e9e9e8), -2px 3px 1px 2px var(--control-circle-box-shadow-8, #d7d7d7), -1px 1px 0 3px var(--control-circle-box-shadow-9, rgba(229, 229, 229, 0.4705882353));cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}@media(prefers-color-scheme: dark){.click-wheel.svelte-nz296x.svelte-nz296x{--control-circle-bgcolor:#ededed;--control-circle-box-shadow-1:#e9e9e9;--control-circle-box-shadow-2:#1b1b1b87;--control-circle-box-shadow-3:#00000017;--control-circle-box-shadow-4:#0000001f;--control-circle-box-shadow-5:#0000001f;--control-circle-box-shadow-6:#ccccccf7;--control-circle-box-shadow-7:#70707008;--control-circle-box-shadow-8:#d6d6d6;--control-circle-box-shadow-9:#dadada78}}.click-wheel.svelte-nz296x.svelte-nz296x::after{content:"";position:absolute;display:block;top:15px;left:20.5px;width:318px;height:317px;padding:4px;border-radius:50%;background-image:conic-gradient(from 345deg at center, transparent 0, transparent 16%, rgb(255, 255, 255) 22%, transparent 30%, transparent 67%, rgb(255, 255, 255) 72%, transparent 80%);mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);mask-composite:exclude;filter:blur(12px);z-index:1;pointer-events:none}.click-wheel.dragging.svelte-nz296x .wheel-button.svelte-nz296x,.click-wheel.dragging.svelte-nz296x .select-button.svelte-nz296x{pointer-events:none}.wheel-button.svelte-nz296x.svelte-nz296x{position:absolute;inset:0;display:flex;border-radius:50%;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.wheel-button.svelte-nz296x svg{fill:var(--wheel-icon-fill, #a3a3a3)}@media(prefers-contrast: more){.wheel-button.svelte-nz296x.svelte-nz296x{--wheel-icon-fill:#3a3a3a}}.wheel-button.svelte-nz296x:active svg{opacity:0.99;scale:0.97}.menu-button.svelte-nz296x.svelte-nz296x{justify-content:center;align-items:flex-start;padding-top:9.5px;clip-path:polygon(50% 50%, 0% 0%, 100% 0%)}.menu-button.svelte-nz296x.svelte-nz296x::after{content:"";display:block;position:absolute;top:2px;left:50%;width:108px;height:34px;background:radial-gradient(ellipse at 50% -189%, rgba(255, 255, 255, 0.9) 57%, rgba(255, 255, 255, 0.07) 75.6%);transform:translate(-50%);border-radius:35%;opacity:0.25}.menu-button.svelte-nz296x svg{width:136px;height:auto}.menu-button.svelte-nz296x text{font-family:Arial, sans-serif;font-weight:bold;font-size:55px;fill:var(--wheel-menu-text-fill, #898989)}@media(prefers-contrast: more){.menu-button.svelte-nz296x.svelte-nz296x{--wheel-menu-text-fill:#3a3a3a}}.menu-button.svelte-nz296x path{fill:transparent}.menu-button.svelte-nz296x:active svg{scale:0.99}.back-button.svelte-nz296x.svelte-nz296x{justify-content:flex-start;align-items:center;padding-left:6px;clip-path:polygon(50% 50%, 0% 0%, 0% 100%)}.back-button.svelte-nz296x svg{rotate:180deg}.forward-button.svelte-nz296x.svelte-nz296x{justify-content:flex-end;align-items:center;padding-right:6px;clip-path:polygon(50% 50%, 100% 0%, 100% 100%)}.playpause-button.svelte-nz296x.svelte-nz296x{justify-content:center;align-items:flex-end;padding-bottom:12px;clip-path:polygon(50% 50%, 0% 100%, 100% 100%)}.wheel-dividers.svelte-nz296x.svelte-nz296x{position:absolute;inset:0;pointer-events:none;border-radius:50%;outline:var(--wheel-outline, none)}@media(prefers-contrast: more){.wheel-dividers.svelte-nz296x.svelte-nz296x{--wheel-outline:2px solid #3a3a3a}}.wheel-dividers.svelte-nz296x.svelte-nz296x::before,.wheel-dividers.svelte-nz296x.svelte-nz296x::after{position:absolute;top:0;width:0;height:100%;content:"";border:1px solid var(--wheel-divider-color, #888)}@media(prefers-contrast: more){.wheel-dividers.svelte-nz296x.svelte-nz296x::before,.wheel-dividers.svelte-nz296x.svelte-nz296x::after{--wheel-divider-color:#3a3a3a}}.wheel-dividers.svelte-nz296x.svelte-nz296x::before{left:49.7%;transform:rotate(135deg)}.wheel-dividers.svelte-nz296x.svelte-nz296x::after{left:50%;transform:rotate(45deg)}.scroll-wheel.svelte-nz296x.svelte-nz296x{position:absolute;top:50%;left:50%;width:var(--scroll-wheel-pct);height:var(--scroll-wheel-pct);transform:translate(-50%, -50%);background-image:var(--wheel-noise-texture), radial-gradient(circle at 130% -100%, var(--clickwheel-bgcolor-1, #eaeaea), var(--clickwheel-bgcolor-2, #f6f6f6));background-size:30%;border:2px solid #7e7e7e;border-radius:50%;box-shadow:inset 0 0 0 2px var(--clickwheel-box-shadow-1, rgba(249, 249, 249, 0.2705882353)), 4px -5px 18px 0 var(--clickwheel-box-shadow-2, rgba(122, 122, 122, 0.6)), 0 -1px 4px 2px var(--clickwheel-box-shadow-3, rgba(168, 168, 168, 0.6705882353));cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;transition:transform 0.1s ease-out;z-index:1}.scroll-wheel.svelte-nz296x.svelte-nz296x:focus{outline:none}@media(prefers-color-scheme: dark){.scroll-wheel.svelte-nz296x.svelte-nz296x{--clickwheel-bgcolor-1:#f1eeee;--clickwheel-bgcolor-2:#e4e4e4;--clickwheel-box-shadow-1:#c1bcbc45;--clickwheel-box-shadow-2:#b0aeae99;--clickwheel-box-shadow-3:#9b9b9bab}}.select-button.svelte-nz296x.svelte-nz296x{position:absolute;top:50%;left:50%;width:var(--select-button-pct);height:var(--select-button-pct);transform:translate(-50%, -50%) rotate(35deg);background:radial-gradient(ellipse closest-side at 50% 30%, var(--center-button-background-1, rgba(255, 255, 255, 0.2)) 0%, var(--center-button-background-2, rgba(255, 255, 255, 0.2)) 72%, transparent 80.6%), radial-gradient(farthest-side at -9% 209%, var(--center-button-background-3, rgba(22, 22, 22, 0.1882352941)) 0%, var(--center-button-background-4, rgba(250, 250, 250, 0.93)));border:2px solid #9f9f9f;border-radius:50%;touch-action:manipulation;transition:transform 0.1s ease-out, box-shadow 0.1s ease-out;-webkit-tap-highlight-color:transparent;z-index:1}@media(prefers-color-scheme: dark){.select-button.svelte-nz296x.svelte-nz296x{--center-button-background-1:#ecebeb24;--center-button-background-2:#ecebeb24;--center-button-background-3:#46454561;--center-button-background-4:#f2f2f2d9}}.select-button.svelte-nz296x.svelte-nz296x:active{transform:translate(-50%, -50%) rotate(35deg) scale(0.98);box-shadow:0 0 1px 1px #909090}');
}
function or(e) {
  let t,
    i,
    l,
    a,
    n,
    o,
    p,
    h,
    r,
    c,
    d,
    A,
    f,
    g,
    M,
    y,
    w,
    E,
    I,
    x,
    U,
    C,
    G,
    ot,
    nt,
    at,
    z,
    k,
    Y,
    W,
    _,
    X,
    K,
    j,
    P,
    V = `${ /*selectButtonDiameterPercent*/
    e[0]}%`,
    q = `${ /*scrollWheelDiameterPercent*/
    e[1]}%`,
    Q = `url(${wheelTexture})`,
    O,
    lt,
    L;
  return l = new $h({
    props: {
      "aria-hidden": "true"
    }
  }), r = new ka({
    props: {
      "aria-hidden": "true"
    }
  }), M = new ka({
    props: {
      "aria-hidden": "true"
    }
  }), U = new ir({
    props: {
      "aria-hidden": "true"
    }
  }), {
    c() {
      t = T("div"), i = T("button"), gt(l.$$.fragment), p = rt(), h = T("button"), gt(r.$$.fragment), f = rt(), g = T("button"), gt(M.$$.fragment), I = rt(), x = T("button"), gt(U.$$.fragment), nt = rt(), at = T("div"), z = rt(), k = T("div"), W = rt(), _ = T("button"), s(i, "class", "wheel-button menu-button svelte-nz296x"), s(i, "data-testid", "wheel-menu-button"), s(i, "aria-label", a = /*$i18n*/
      e[10].t("ASE.Web.IPod.Wheel.Menu")), s(i, "tabindex", n = /*disabled*/
      e[3] ? -1 : 0), s(i, "aria-disabled", o = /*disabled*/
      e[3] || void 0), s(h, "class", "wheel-button back-button svelte-nz296x"), s(h, "data-testid", "wheel-back-button"), s(h, "aria-label", c = /*$i18n*/
      e[10].t("ASE.Web.IPod.Wheel.Back")), s(h, "tabindex", d = /*disabled*/
      e[3] ? -1 : 0), s(h, "aria-disabled", A = /*disabled*/
      e[3] || /*disableSkip*/
      e[2]), s(g, "class", "wheel-button forward-button svelte-nz296x"), s(g, "data-testid", "wheel-forward-button"), s(g, "aria-label", y = /*$i18n*/
      e[10].t("ASE.Web.IPod.Wheel.Forward")), s(g, "tabindex", w = /*disabled*/
      e[3] ? -1 : 0), s(g, "aria-disabled", E = /*disabled*/
      e[3] || /*disableSkip*/
      e[2]), s(x, "class", "wheel-button playpause-button svelte-nz296x"), s(x, "data-testid", "wheel-playpause-button"), s(x, "aria-label", C = /*$i18n*/
      e[10].t(/*isPlaying*/
      e[4] ? "ASE.Web.IPod.Wheel.Pause" : "ASE.Web.IPod.Wheel.Play")), s(x, "tabindex", G = /*disabled*/
      e[3] ? -1 : 0), s(x, "aria-disabled", ot = /*disabled*/
      e[3] || void 0), s(at, "class", "wheel-dividers svelte-nz296x"), s(k, "class", "scroll-wheel svelte-nz296x"), s(k, "data-testid", "wheel-ring"), s(k, "aria-hidden", "true"), s(k, "tabindex", "-1"), s(_, "class", "select-button svelte-nz296x"), s(_, "data-testid", "wheel-select-button"), s(_, "aria-label", X = /*$i18n*/
      e[10].t("ASE.Web.IPod.Wheel.Select")), s(_, "tabindex", K = /*disabled*/
      e[3] ? -1 : 0), s(_, "aria-disabled", j = /*disabled*/
      e[3] || void 0), s(t, "class", "click-wheel svelte-nz296x"), s(t, "data-testid", "click-wheel"), s(t, "dir", "ltr"), s(t, "tabindex", "-1"), Nt(t, "dragging", /*isDragging*/
      e[8]), m(t, "--select-button-pct", V), m(t, "--scroll-wheel-pct", q), m(t, "--wheel-noise-texture", Q);
    },
    m(D, F) {
      ht(D, t, F), u(t, i), vt(l, i, null), u(t, p), u(t, h), vt(r, h, null), u(t, f), u(t, g), vt(M, g, null), u(t, I), u(t, x), vt(U, x, null), u(t, nt), u(t, at), u(t, z), u(t, k), e[32](k), u(t, W), u(t, _), e[35](t), O = !0, lt || (L = [ut(nr, "blur", /*blur_handler*/
      e[24]), ut(i, "click", /*click_handler*/
      e[25]), Kt(Wi.call(null, i, {
        duration: Oe
      })), ut(i, "longpress", /*longpress_handler*/
      e[26]), ut(h, "click", /*click_handler_1*/
      e[27]), Kt(Wi.call(null, h, {
        duration: Oe,
        repeatInterval: ul
      })), ut(h, "longpress", /*longpress_handler_1*/
      e[28]), ut(g, "click", /*click_handler_2*/
      e[29]), Kt(Wi.call(null, g, {
        duration: Oe,
        repeatInterval: ul
      })), ut(g, "longpress", /*longpress_handler_2*/
      e[30]), ut(x, "click", /*click_handler_3*/
      e[31]), Kt(Y = trackWheelGesture.call(null, k, {
        excludeRadiusRatio: (/*selectButtonRadiusRatio*/
        e[9])
      })), ut(k, "wheelscroll", /*handleWheelScroll*/
      e[15]), ut(k, "wheeldragstart", /*handleWheelDragStart*/
      e[16]), ut(k, "wheeldragend", /*handleWheelDragEnd*/
      e[17]), ut(k, "pointerdown", /*focusRing*/
      e[21]), ut(_, "click", /*click_handler_4*/
      e[33]), Kt(P = Wi.call(null, _, {
        duration: (/*selectHoldMs*/
        e[5] ?? Oe),
        keyboard: !1,
        disabled: (/*selectHoldMs*/
        e[5] === null)
      })), ut(_, "longpress", /*longpress_handler_3*/
      e[34]), ut(t, "keydown", /*handleKeyDown*/
      e[19]), ut(t, "keyup", /*handleKeyUp*/
      e[20]), ut(t, "focusout", /*focusout_handler*/
      e[36]), ut(t, "pointerup", /*handlePointerUp*/
      e[22])], lt = !0);
    },
    p(D, F) {
      (!O || F[0] & /*$i18n*/
      1024 && a !== (a = /*$i18n*/
      D[10].t("ASE.Web.IPod.Wheel.Menu"))) && s(i, "aria-label", a), (!O || F[0] & /*disabled*/
      8 && n !== (n = /*disabled*/
      D[3] ? -1 : 0)) && s(i, "tabindex", n), (!O || F[0] & /*disabled*/
      8 && o !== (o = /*disabled*/
      D[3] || void 0)) && s(i, "aria-disabled", o), (!O || F[0] & /*$i18n*/
      1024 && c !== (c = /*$i18n*/
      D[10].t("ASE.Web.IPod.Wheel.Back"))) && s(h, "aria-label", c), (!O || F[0] & /*disabled*/
      8 && d !== (d = /*disabled*/
      D[3] ? -1 : 0)) && s(h, "tabindex", d), (!O || F[0] & /*disabled, disableSkip*/
      12 && A !== (A = /*disabled*/
      D[3] || /*disableSkip*/
      D[2])) && s(h, "aria-disabled", A), (!O || F[0] & /*$i18n*/
      1024 && y !== (y = /*$i18n*/
      D[10].t("ASE.Web.IPod.Wheel.Forward"))) && s(g, "aria-label", y), (!O || F[0] & /*disabled*/
      8 && w !== (w = /*disabled*/
      D[3] ? -1 : 0)) && s(g, "tabindex", w), (!O || F[0] & /*disabled, disableSkip*/
      12 && E !== (E = /*disabled*/
      D[3] || /*disableSkip*/
      D[2])) && s(g, "aria-disabled", E), (!O || F[0] & /*$i18n, isPlaying*/
      1040 && C !== (C = /*$i18n*/
      D[10].t(/*isPlaying*/
      D[4] ? "ASE.Web.IPod.Wheel.Pause" : "ASE.Web.IPod.Wheel.Play"))) && s(x, "aria-label", C), (!O || F[0] & /*disabled*/
      8 && G !== (G = /*disabled*/
      D[3] ? -1 : 0)) && s(x, "tabindex", G), (!O || F[0] & /*disabled*/
      8 && ot !== (ot = /*disabled*/
      D[3] || void 0)) && s(x, "aria-disabled", ot), Y && Pt(Y.update) && F[0] & /*selectButtonRadiusRatio*/
      512 && Y.update.call(null, {
        excludeRadiusRatio: (/*selectButtonRadiusRatio*/
        D[9])
      }), (!O || F[0] & /*$i18n*/
      1024 && X !== (X = /*$i18n*/
      D[10].t("ASE.Web.IPod.Wheel.Select"))) && s(_, "aria-label", X), (!O || F[0] & /*disabled*/
      8 && K !== (K = /*disabled*/
      D[3] ? -1 : 0)) && s(_, "tabindex", K), (!O || F[0] & /*disabled*/
      8 && j !== (j = /*disabled*/
      D[3] || void 0)) && s(_, "aria-disabled", j), P && Pt(P.update) && F[0] & /*selectHoldMs*/
      32 && P.update.call(null, {
        duration: (/*selectHoldMs*/
        D[5] ?? Oe),
        keyboard: !1,
        disabled: (/*selectHoldMs*/
        D[5] === null)
      }), (!O || F[0] & /*isDragging*/
      256) && Nt(t, "dragging", /*isDragging*/
      D[8]), F[0] & /*selectButtonDiameterPercent*/
      1 && V !== (V = `${ /*selectButtonDiameterPercent*/
      D[0]}%`) && m(t, "--select-button-pct", V), F[0] & /*scrollWheelDiameterPercent*/
      2 && q !== (q = `${ /*scrollWheelDiameterPercent*/
      D[1]}%`) && m(t, "--scroll-wheel-pct", q);
    },
    i(D) {
      O || ($(l.$$.fragment, D), $(r.$$.fragment, D), $(M.$$.fragment, D), $(U.$$.fragment, D), O = !0);
    },
    o(D) {
      et(l.$$.fragment, D), et(r.$$.fragment, D), et(M.$$.fragment, D), et(U.$$.fragment, D), O = !1;
    },
    d(D) {
      D && H(t), yt(l), yt(r), yt(M), yt(U), e[32](null), e[35](null), lt = !1, ue(L);
    }
  };
}
function hr(e, t, i) {
  let l,
    a,
    {
      selectButtonDiameterPercent: n = rs
    } = t,
    {
      scrollWheelDiameterPercent: o = cs
    } = t,
    {
      disableSkip: p = !1
    } = t,
    {
      disabled: h = !1
    } = t,
    {
      scrollTarget: r = "list"
    } = t,
    {
      isPlaying: c = !1
    } = t,
    {
      selectHoldMs: d = null
    } = t;
  const A = getTranslator();
  Ut(e, A, S => i(10, a = S));
  let f,
    g,
    M = !1;
  const y = Hi(),
    w = createLogger("<ClickWheel>");
  function E(S) {
    p && (S === "back" || S === "forward") || (w.debug(`${S} button clicked`), y(S));
  }
  function I(S, st) {
    p || y(S, st);
  }
  function x(S) {
    y("scroll", S.detail);
  }
  let U,
    C,
    G = 0,
    ot,
    nt = null;
  function at() {
    i(8, M = !0), (C == null ? void 0 : C.kind) !== "scroll" && y("dragstart");
  }
  function z() {
    i(8, M = !1), (C == null ? void 0 : C.kind) !== "scroll" && y("dragend");
  }
  function k(S) {
    var st, ft;
    switch (S) {
      case "ArrowUp":
      case "ArrowDown":
        return r === "brick" ? {
          kind: "none"
        } : {
          kind: "scroll",
          step: S === (r === "list" ? "ArrowDown" : "ArrowUp") ? 1 : -1
        };
      case "ArrowLeft":
      case "ArrowRight":
        {
          const Rt = S === "ArrowLeft",
            Wt = Rt ? -1 : 1;
          if (r === "seek") return {
            kind: "scroll",
            step: Wt
          };
          if (r === "brick") return {
            kind: "steer",
            step: Wt
          };
          if (r === "volume") return {
            kind: "hold",
            button: Rt ? "back" : "forward",
            repeatInterval: ul
          };
          const Lt = (ft = (st = f.parentElement) === null || st === void 0 ? void 0 : st.matches(":dir(rtl)")) !== null && ft !== void 0 ? ft : !1;
          return {
            kind: "press",
            button: Rt !== Lt ? "menu" : "select"
          };
        }
      case "Enter":
        return d === null ? {
          kind: "press",
          button: "select"
        } : {
          kind: "hold",
          button: "select",
          duration: d
        };
      case " ":
        return {
          kind: "press",
          button: "playpause"
        };
      case "Escape":
        return {
          kind: "hold",
          button: "menu"
        };
      default:
        return;
    }
  }
  function Y(S) {
    y("keyscroll", {
      step: S,
      heldMs: performance.now() - G
    });
  }
  function W(S) {
    r !== ot || d !== nt ? X(!1) : (C == null ? void 0 : C.kind) === "scroll" ? Y(C.step) : (C == null ? void 0 : C.kind) === "hold" && (C.button === "menu" ? y("menuhold") : C.button === "select" ? y("selecthold") : I(`${C.button}hold`, {
      repeat: S
    }));
  }
  const _ = Sl(W);
  function X(S) {
    const st = C,
      ft = _.stop();
    U = void 0, C = void 0, (st == null ? void 0 : st.kind) === "scroll" ? M || y("dragend") : (st == null ? void 0 : st.kind) === "steer" ? y("steer", null) : st && st.kind !== "none" && S && !ft && E(st.button);
  }
  function K(S) {
    var st;
    if (S.target !== g) return;
    if (S.ctrlKey || S.metaKey || S.altKey) {
      X(!1);
      return;
    }
    const ft = k(S.key);
    ft && (S.preventDefault(), S.stopPropagation(), !(S.repeat || S.key === U) && (X(!1), U = S.key, C = ft, G = performance.now(), ot = r, nt = d, ft.kind === "scroll" ? (M || y("dragstart"), Y(ft.step), _.start(gs, ms)) : ft.kind === "steer" ? y("steer", ft.step) : ft.kind === "hold" && _.start((st = ft.duration) !== null && st !== void 0 ? st : Oe, ft.repeatInterval)));
  }
  function j(S) {
    S.key === U && (S.preventDefault(), S.stopPropagation(), X(!0));
  }
  function P() {
    window.matchMedia("(any-pointer: fine)").matches && g.focus({
      preventScroll: !0
    });
  }
  function V(S) {
    S.pointerType === "mouse" && (S.width > 0 || S.height > 0) && P();
  }
  onDestroy(() => {
    _.stop();
  });
  const q = () => X(!1),
    Q = () => E("menu"),
    O = () => y("menuhold"),
    lt = () => E("back"),
    L = S => I("backhold", S.detail),
    D = () => E("forward"),
    F = S => I("forwardhold", S.detail),
    tt = () => E("playpause");
  function ct(S) {
    Jt[S ? "unshift" : "push"](() => {
      g = S, i(7, g);
    });
  }
  const dt = () => E("select"),
    N = () => y("selecthold");
  function it(S) {
    Jt[S ? "unshift" : "push"](() => {
      f = S, i(6, f);
    });
  }
  const Bt = () => X(!1);
  return e.$$set = S => {
    "selectButtonDiameterPercent" in S && i(0, n = S.selectButtonDiameterPercent), "scrollWheelDiameterPercent" in S && i(1, o = S.scrollWheelDiameterPercent), "disableSkip" in S && i(2, p = S.disableSkip), "disabled" in S && i(3, h = S.disabled), "scrollTarget" in S && i(23, r = S.scrollTarget), "isPlaying" in S && i(4, c = S.isPlaying), "selectHoldMs" in S && i(5, d = S.selectHoldMs);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*selectButtonDiameterPercent, scrollWheelDiameterPercent*/
    3 && i(9, l = n / o);
  }, [n, o, p, h, c, d, f, g, M, l, a, A, y, E, I, x, at, z, X, K, j, P, V, r, q, Q, O, lt, L, D, F, tt, ct, dt, N, it, Bt];
}
class ClickWheelComponent extends SvelteComponent {
  constructor(t) {
    super(), initComponent(this, t, hr, or, bt, {
      selectButtonDiameterPercent: 0,
      scrollWheelDiameterPercent: 1,
      disableSkip: 2,
      disabled: 3,
      scrollTarget: 23,
      isPlaying: 4,
      selectHoldMs: 5
    }, sr, [-1, -1]);
  }
  get selectButtonDiameterPercent() {
    return this.$$.ctx[0];
  }
  set selectButtonDiameterPercent(t) {
    this.$$set({
      selectButtonDiameterPercent: t
    }), flush();
  }
  get scrollWheelDiameterPercent() {
    return this.$$.ctx[1];
  }
  set scrollWheelDiameterPercent(t) {
    this.$$set({
      scrollWheelDiameterPercent: t
    }), flush();
  }
  get disableSkip() {
    return this.$$.ctx[2];
  }
  set disableSkip(t) {
    this.$$set({
      disableSkip: t
    }), flush();
  }
  get disabled() {
    return this.$$.ctx[3];
  }
  set disabled(t) {
    this.$$set({
      disabled: t
    }), flush();
  }
  get scrollTarget() {
    return this.$$.ctx[23];
  }
  set scrollTarget(t) {
    this.$$set({
      scrollTarget: t
    }), flush();
  }
  get isPlaying() {
    return this.$$.ctx[4];
  }
  set isPlaying(t) {
    this.$$set({
      isPlaying: t
    }), flush();
  }
  get selectHoldMs() {
    return this.$$.ctx[5];
  }
  set selectHoldMs(t) {
    this.$$set({
      selectHoldMs: t
    }), flush();
  }
}
defineSvelteElement(ClickWheelComponent, {
  selectButtonDiameterPercent: {},
  scrollWheelDiameterPercent: {},
  disableSkip: {
    type: "Boolean"
  },
  disabled: {
    type: "Boolean"
  },
  scrollTarget: {},
  isPlaying: {
    type: "Boolean"
  },
  selectHoldMs: {}
}, [], [], !0);

export { ClickWheelComponent };
