// Reconstructed from the supplied component; module and API names restored locally.
import { createLogger } from './logging.js';
import { Oe, us, vs, ys } from './settings.js';
function Za(e, t) {
  return t > 0 ? e / t * 1e3 : 0;
}
function Ls(e, t, i) {
  const l = t !== void 0 ? e - t : 0;
  return Math.min(Za(i, l), vs);
}
function El(e, t) {
  const i = Math.min(e.tiers.length - 1, Math.floor(t / e.tierMs));
  return e.tiers[i];
}
const zs = 250;
function Ja(e) {
  let t = 0,
    i,
    l,
    a;
  function n() {
    t = 0;
    i = void 0;
    l = void 0;
    a = void 0;
  }
  function o(p, h, r) {
    if (!r) return n(), e.tiers[0];
    const c = performance.now(),
      d = l !== void 0 && c - l > zs;
    l = c;
    const A = Math.min(p, us);
    return h !== i || d ? (t = A, i = h, a = void 0) : t += ys * (A - t), t <= e.minSpeed ? (a = void 0, e.tiers[0]) : (a ?? (a = c), El(e, c - a));
  }
  return {
    next: o,
    reset: n
  };
}
function Ci(e) {
  return Math.round(e * 100);
}
function ml(e) {
  return e / 100;
}
function Il(e, t) {
  let i;
  function l() {
    clearTimeout(i);
    i = void 0;
  }
  function a() {
    l();
    i = setTimeout(() => {
      i = void 0;
      t();
    }, e);
  }
  function n() {
    i !== void 0 && (l(), t());
  }
  return {
    start: a,
    stop: l,
    flush: n,
    destroy: l
  };
}
function Sl(e) {
  let t,
    i,
    l = false;
  function a() {
    clearTimeout(t);
    clearInterval(i);
    t = void 0;
    i = void 0;
  }
  function n() {
    a();
    const p = l;
    return l = false, p;
  }
  function o(p, h) {
    n();
    t = setTimeout(() => {
      t = void 0;
      l = true;
      e(false);
      l && h !== void 0 && (i = setInterval(() => e(true), h));
    }, p);
  }
  return {
    start: o,
    stop: n
  };
}
const Rl = /* @__PURE__ */new Set(["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft", "Enter", " ", "Escape"]),
  Wl = /* @__PURE__ */new Set(["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft", "Home", "End", "PageUp", "PageDown"]);
function Ke(e) {
  e.preventDefault();
  e.stopPropagation();
}
const Qs = (e, t) => {
  let i = t;
  const l = Sl(() => i.onMenuHold());
  let a = false;
  function n() {
    a = false;
    l.stop();
  }
  function o(r) {
    Ke(r);
    r.repeat || (a = true, l.start(Oe));
  }
  function p(r) {
    if (i.mode !== "passthrough") {
      if (i.disabled) {
        (Rl.has(r.key) || Wl.has(r.key)) && Ke(r);
        return;
      }
      if (i.mode === "now-playing" && r.key !== "Escape") {
        const c = r.target instanceof HTMLInputElement && Wl.has(r.key),
          d = r.target instanceof HTMLAnchorElement && r.key === "Enter",
          A = c || d;
        (A || Rl.has(r.key)) && (r.stopPropagation(), A || r.preventDefault());
        return;
      }
      switch (r.key) {
        case "ArrowDown":
          Ke(r);
          i.onArrow(r, 1);
          break;
        case "ArrowUp":
          Ke(r);
          i.onArrow(r, -1);
          break;
        case "ArrowRight":
        case "ArrowLeft":
          Ke(r);
          break;
        case "Enter":
        case " ":
          Ke(r);
          r.repeat || i.onSelect();
          break;
        case "Escape":
          o(r);
          break;
      }
    }
  }
  function h(r) {
    r.key !== "Escape" || !a || (a = false, l.stop() || i.onBack());
  }
  return e.addEventListener("keydown", p), e.addEventListener("keyup", h), e.addEventListener("focusout", n), window.addEventListener("blur", n), {
    update(r) {
      const c = r.navigationId !== i.navigationId;
      i = r;
      (i.disabled || c) && n();
    },
    destroy() {
      e.removeEventListener("keydown", p);
      e.removeEventListener("keyup", h);
      e.removeEventListener("focusout", n);
      window.removeEventListener("blur", n);
      n();
    }
  };
};
function jl(e) {
  return -0.5 * (Math.cos(Math.PI * e) - 1);
}
function Fl(e) {
  return Math.sin(e * Math.PI / 2);
}
const Vl = 240,
  nl = /* @__PURE__ */new WeakMap(),
  ql = /* @__PURE__ */new WeakMap();
function Ul(e, t) {
  const i = ql.get(e) ?? /* @__PURE__ */new Map(),
    l = i.get(t) ?? [];
  return i.set(t, l), ql.set(e, i), l;
}
function sl(e) {
  if (!e || e.duration <= 0) return;
  const t = (performance.now() - e.startedAt) / e.duration;
  if (!(t >= 1)) return e.from + (e.to - e.from) * e.easing(t);
}
function Os(e) {
  const {
    transform: t
  } = getComputedStyle(e);
  if (!(!t || t === "none") && !(typeof DOMMatrixReadOnly > "u")) try {
    return new DOMMatrixReadOnly(t).m41;
  } catch {
    return;
  }
}
function Ns() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function Kl(e, {
  back: t = false
}, i) {
  const l = e.parentElement,
    a = (l == null ? void 0 : l.clientWidth) ?? 0;
  if (Ns() || a === 0) return {
    duration: 0
  };
  const n = e.matches(":dir(rtl)"),
    o = (t === n ? 1 : -1) * a;
  if (i.direction !== "out") {
    const c = l ? Ul(l, Math.sign(o)).pop() : void 0,
      d = sl(c),
      A = d !== void 0 && c != null && c.node ? Os(c.node) ?? d : d;
    c != null && c.node && (c.node.style.display = "none");
    const f = A ?? o,
      g = {
        node: e,
        startedAt: performance.now(),
        from: f,
        to: 0,
        // Hold the speed, not the duration, so a pickup does not crawl.
        duration: Vl * (Math.abs(f) / a),
        // Already moving when picked up, so easing in again would stutter.
        easing: A === void 0 ? jl : Fl
      };
    return nl.set(e, g), {
      duration: g.duration,
      easing: g.easing,
      css: (M, y) => `transform: translateX(${f * y}px)`
    };
  }
  const p = sl(nl.get(e)) ?? 0;
  nl.delete(e);
  const h = -o,
    r = {
      node: e,
      startedAt: performance.now(),
      from: p,
      to: h,
      // Capped so a screen caught at the far edge does not crawl.
      duration: Vl * Math.min(1, Math.abs(h - p) / a),
      easing: p === 0 ? jl : Fl
    };
  if (l) {
    const c = Ul(l, Math.sign(h));
    c.forEach(d => {
      sl(d) === void 0 && (d.node = void 0);
    });
    c.push(r);
  }
  return {
    duration: r.duration,
    easing: r.easing,
    // Svelte counts the outro's second arg up from 0, unlike the intro's.
    // _t in this case is Svelte's per-direction easing fraction, which we don't
    // use because our math is built on its complement.
    css: (c, d) => `transform: translateX(${p + (h - p) * d}px)`
  };
}
const Rs = {
    "ASE.Web.IPod.Menu.Playlists": "Playlists",
    "ASE.Web.IPod.Menu.Artists": "Artists",
    "ASE.Web.IPod.Menu.Songs": "Songs",
    "ASE.Web.IPod.Menu.Settings": "Settings",
    "ASE.Web.IPod.Menu.NowPlaying": "Now Playing",
    "ASE.Web.IPod.Menu.All": "All",
    "ASE.Web.IPod.Menu.AllSongs": "All Songs",
    "ASE.Web.IPod.Menu.NoMusic": "No Music",
    "ASE.Web.IPod.Settings.About": "About",
    "ASE.Web.IPod.Settings.Shuffle": "Shuffle",
    "ASE.Web.IPod.Settings.Repeat": "Repeat",
    "ASE.Web.IPod.Settings.BacklightTimer": "Backlight Timer",
    "ASE.Web.IPod.Settings.Clicker": "Clicker",
    "ASE.Web.IPod.Settings.ResetAllSettings": "Reset All Settings",
    "ASE.Web.IPod.Settings.Value.Off": "Off",
    "ASE.Web.IPod.Settings.Value.On": "On",
    "ASE.Web.IPod.Settings.Value.Songs": "Songs",
    "ASE.Web.IPod.Settings.Value.One": "One",
    "ASE.Web.IPod.Settings.Value.All": "All",
    "ASE.Web.IPod.Backlight.Off": "Off",
    "ASE.Web.IPod.Backlight.OneSecond": "1 second",
    "ASE.Web.IPod.Backlight.TwoSeconds": "2 seconds",
    "ASE.Web.IPod.Backlight.ThreeSeconds": "3 seconds",
    "ASE.Web.IPod.Backlight.FiveSeconds": "5 seconds",
    "ASE.Web.IPod.Backlight.AlwaysOn": "Always On",
    "ASE.Web.IPod.Reset.Cancel": "Cancel",
    "ASE.Web.IPod.Reset.Reset": "Reset",
    "ASE.Web.IPod.About.Songs": "Songs",
    "ASE.Web.IPod.About.Capacity": "Capacity",
    "ASE.Web.IPod.About.Available": "Available",
    "ASE.Web.IPod.About.Version": "Version",
    "ASE.Web.IPod.NowPlaying.Position": "@@index@@ of @@total@@",
    "ASE.Web.IPod.NowPlaying.ShuffleOn": "Shuffle on",
    "ASE.Web.IPod.NowPlaying.RepeatOne": "Repeat one",
    "ASE.Web.IPod.NowPlaying.RepeatAll": "Repeat all",
    "ASE.Web.IPod.NowPlaying.ShuffleOnRepeatOne": "Shuffle on, Repeat one",
    "ASE.Web.IPod.NowPlaying.ShuffleOnRepeatAll": "Shuffle on, Repeat all",
    "ASE.Web.IPod.NowPlaying.PlaybackProgress": "Playback Progress",
    "ASE.Web.IPod.NowPlaying.Volume": "Volume",
    "ASE.Web.IPod.Wheel.Menu": "Menu",
    "ASE.Web.IPod.Wheel.Back": "Back",
    "ASE.Web.IPod.Wheel.Forward": "Forward",
    "ASE.Web.IPod.Wheel.Play": "Play",
    "ASE.Web.IPod.Wheel.Pause": "Pause",
    "ASE.Web.IPod.Wheel.Select": "Select",
    "ASE.Web.IPod.Game.Title": "Brick",
    "ASE.Web.IPod.Game.GameOver": "GAME OVER",
    "ASE.Web.IPod.Game.LaunchBall": "Press Center to Launch Ball",
    "ASE.Web.IPod.Status.Loading": "Loading",
    "ASE.Web.IPod.Status.Ready": "Ready",
    "ASE.Web.IPod.Error.NotConnected": "You are not connected to the internet"
  },
  bl = createLogger("i18n");
function Ws(e, t) {
  return t ? e.replace(/@@(\w+)@@/g, (i, l) => l in t ? String(t[l]) : i) : e;
}
export { Za, Ls, El, Ja, Ci, ml, Il, Sl, Qs, Kl, Rs, bl, Ws };
