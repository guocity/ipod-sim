// Reconstructed compiled Svelte code. See the package README for provenance.
import { createLogger } from '../logging.js';
import { noop, pt, ue, Pt, bt, getStoreValue, Ut, _t, Kt, u, appendStyles, jt, ht, ve, H, Wn, T, v, Mt, rt, za, ut, s, Ct, mt, wt, Ht, m, Nt, Ra, onDestroy, Hi, ll, Jt, flush, Ae, fe, $, et, zl, ye, gt, vt, yt, initComponent, defineSvelteElement, SvelteComponent, writable } from '../vendor/svelte-runtime.js';
import { ShuffleMode, RepeatMode, ClickerMode, ds, As, fs, yl, Nl, settings } from '../settings.js';
import { El, Ja, Il } from '../interaction.js';
import { defaultTranslator, getTranslator } from '../localization.js';
import { menuDefinitions } from '../navigation.js';

function Vs(e) {
  let t,
    i,
    l = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "14"
    }, {
      height: "20"
    }, {
      viewBox: "0 0 14 20"
    }, /*$$props*/
    e[0]],
    a = {};
  for (let n = 0; n < l.length; n += 1) a = pt(a, l[n]);
  return {
    c() {
      t = v("svg"), i = v("path"), this.h();
    },
    l(n) {
      t = wt(n, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0
      });
      var o = mt(t);
      i = wt(o, "path", {
        d: !0,
        style: !0,
        transform: !0
      }), mt(i).forEach(H), o.forEach(H), this.h();
    },
    h() {
      s(i, "d", "M6.576-95.378h21.875V0H6.576zm42.578 0h21.94V0h-21.94z"), m(i, "fill-rule", "nonzero"), s(i, "transform", "translate(-1.379 20)scale(.2097)"), Ct(t, a);
    },
    m(n, o) {
      ve(n, t, o), jt(t, i);
    },
    p(n, [o]) {
      Ct(t, a = ye(l, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "14"
      }, {
        height: "20"
      }, {
        viewBox: "0 0 14 20"
      }, o & /*$$props*/
      1 && /*$$props*/
      n[0]]));
    },
    i: noop,
    o: noop,
    d(n) {
      n && H(t);
    }
  };
}
function qs(e, t, i) {
  return e.$$set = l => {
    i(0, t = pt(pt({}, t), _t(l)));
  }, t = _t(t), [t];
}
let Us = class extends SvelteComponent {
  constructor(t) {
    super(), initComponent(this, t, qs, Vs, bt, {});
  }
};
function Ks(e) {
  let t,
    i,
    l = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "17"
    }, {
      height: "20"
    }, {
      viewBox: "0 0 17 20"
    }, /*$$props*/
    e[0]],
    a = {};
  for (let n = 0; n < l.length; n += 1) a = pt(a, l[n]);
  return {
    c() {
      t = v("svg"), i = v("path"), this.h();
    },
    l(n) {
      t = wt(n, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0
      });
      var o = mt(t);
      i = wt(o, "path", {
        d: !0,
        style: !0,
        transform: !0
      }), mt(i).forEach(H), o.forEach(H), this.h();
    },
    h() {
      s(i, "d", "M71.234-28.693 10.883 7.049v-71.533z"), m(i, "fill-rule", "nonzero"), s(i, "transform", "translate(-3.043 18.03)scale(.27959)"), Ct(t, a);
    },
    m(n, o) {
      ve(n, t, o), jt(t, i);
    },
    p(n, [o]) {
      Ct(t, a = ye(l, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "17"
      }, {
        height: "20"
      }, {
        viewBox: "0 0 17 20"
      }, o & /*$$props*/
      1 && /*$$props*/
      n[0]]));
    },
    i: noop,
    o: noop,
    d(n) {
      n && H(t);
    }
  };
}
function Gs(e, t, i) {
  return e.$$set = l => {
    i(0, t = pt(pt({}, t), _t(l)));
  }, t = _t(t), [t];
}
let Ys = class extends SvelteComponent {
  constructor(t) {
    super(), initComponent(this, t, Gs, Ks, bt, {});
  }
};
function Xs(e) {
  appendStyles(e, "svelte-1bjtjdb", '.menu-title.svelte-1bjtjdb{position:relative;flex:none;box-sizing:border-box;height:37px;margin:0 5px;border-bottom:2px solid #484647;text-align:center}.screen-title.svelte-1bjtjdb{position:absolute;top:calc(50% + 3px);left:50%;max-width:calc(100% - 86px);transform:translate(-50%, -50%);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.screen-title.brick-game-title.svelte-1bjtjdb{display:grid;grid-template-columns:1fr 1fr;width:calc(100% - 110px);max-width:calc(100% - 110px);overflow:visible}.balls-left.svelte-1bjtjdb{justify-self:start}.game-score.svelte-1bjtjdb{justify-self:end}.play-icon.svelte-1bjtjdb{position:absolute;top:50%;inset-inline-start:10px;display:inline-block;width:auto;height:20px;transform:translate(0, calc(-50% + 1.2px)) scale(0.9);fill:#484647}.play-icon.pause.svelte-1bjtjdb{--flip:1;transform:translate(calc(2.3px * var(--flip)), calc(-50% + 1.2px)) scale(1, 0.8)}.play-icon.pause.svelte-1bjtjdb:dir(rtl){--flip:-1}.battery-indicator.svelte-1bjtjdb{position:absolute;top:3px;inset-inline-end:5px;box-sizing:content-box;width:98px;height:44px;background:linear-gradient(#484647, #484647) right 0 top -6px/6px calc((100% - 28%) / 2 + 6px) no-repeat, linear-gradient(#484647, #484647) right 0 bottom -6px/6px calc((100% - 28%) / 2 + 6px) no-repeat;border:6px solid #484647;border-right:0;transform:scale(0.3, 0.3);transform-origin:100% 23%}.battery-indicator.svelte-1bjtjdb:dir(rtl){transform-origin:0% 23%}.battery-indicator.svelte-1bjtjdb::before{content:"";position:absolute;top:50%;right:-6px;width:6px;height:28%;border-top:6px solid #484647;border-right:6px solid #484647;border-bottom:6px solid #484647;transform:translate(0, -50%)}.battery-indicator.svelte-1bjtjdb::after{content:"";position:absolute;top:5px;bottom:5px;left:5px;width:84px;background:repeating-linear-gradient(to right, #484647, #484647 16px, transparent 16px, transparent 22px, #484647 22px, #484647 37px, transparent 38px, transparent 43px, #484647 42px, #484647 57px, transparent 59px, transparent 64px, #484647 55px, #484647 55px)}.menu-title.svelte-1bjtjdb{opacity:var(--ipod-screen-opacity, 1)}');
}
function Gl(e) {
  let t, i, l, a;
  const n = [Js, Zs],
    o = [];
  function p(h, r) {
    return /*isPlaying*/h[2] ? 0 : 1;
  }
  return t = p(e), i = o[t] = n[t](e), {
    c() {
      i.c(), l = za();
    },
    m(h, r) {
      o[t].m(h, r), ht(h, l, r), a = !0;
    },
    p(h, r) {
      let c = t;
      t = p(h), t !== c && (Ae(), et(o[c], 1, 1, () => {
        o[c] = null;
      }), fe(), i = o[t], i || (i = o[t] = n[t](h), i.c()), $(i, 1), i.m(l.parentNode, l));
    },
    i(h) {
      a || ($(i), a = !0);
    },
    o(h) {
      et(i), a = !1;
    },
    d(h) {
      h && H(l), o[t].d(h);
    }
  };
}
function Zs(e) {
  let t, i, l;
  return i = new Us({}), {
    c() {
      t = T("div"), gt(i.$$.fragment), s(t, "class", "play-icon pause svelte-1bjtjdb"), s(t, "data-testid", "now-playing-indicator"), s(t, "aria-hidden", "true");
    },
    m(a, n) {
      ht(a, t, n), vt(i, t, null), l = !0;
    },
    i(a) {
      l || ($(i.$$.fragment, a), l = !0);
    },
    o(a) {
      et(i.$$.fragment, a), l = !1;
    },
    d(a) {
      a && H(t), yt(i);
    }
  };
}
function Js(e) {
  let t, i, l;
  return i = new Ys({}), {
    c() {
      t = T("div"), gt(i.$$.fragment), s(t, "class", "play-icon play svelte-1bjtjdb"), s(t, "data-testid", "now-playing-indicator"), s(t, "aria-hidden", "true");
    },
    m(a, n) {
      ht(a, t, n), vt(i, t, null), l = !0;
    },
    i(a) {
      l || ($(i.$$.fragment, a), l = !0);
    },
    o(a) {
      et(i.$$.fragment, a), l = !1;
    },
    d(a) {
      a && H(t), yt(i);
    }
  };
}
function $s(e) {
  let t, i;
  return {
    c() {
      t = T("div"), i = Mt(/*title*/
      e[0]), s(t, "class", "screen-title svelte-1bjtjdb"), s(t, "dir", "auto");
    },
    m(l, a) {
      ht(l, t, a), u(t, i);
    },
    p(l, a) {
      a & /*title*/
      1 && Ht(i, /*title*/
      l[0]);
    },
    d(l) {
      l && H(t);
    }
  };
}
function to(e) {
  let t, i, l, a, n, o;
  return {
    c() {
      t = T("div"), i = T("span"), l = Mt(/*brickBalls*/
      e[4]), a = rt(), n = T("span"), o = Mt(/*brickScore*/
      e[5]), s(i, "class", "balls-left svelte-1bjtjdb"), s(i, "data-testid", "brick-balls"), s(n, "class", "game-score svelte-1bjtjdb"), s(n, "data-testid", "brick-score"), s(t, "class", "screen-title brick-game-title svelte-1bjtjdb"), s(t, "dir", "ltr");
    },
    m(p, h) {
      ht(p, t, h), u(t, i), u(i, l), u(t, a), u(t, n), u(n, o);
    },
    p(p, h) {
      h & /*brickBalls*/
      16 && Ht(l, /*brickBalls*/
      p[4]), h & /*brickScore*/
      32 && Ht(o, /*brickScore*/
      p[5]);
    },
    d(p) {
      p && H(t);
    }
  };
}
function eo(e) {
  let t,
    i,
    l,
    a,
    n,
    o = /*hasLoadedItem*/
    e[1] && Gl(e);
  function p(c, d) {
    return /*isBrick*/c[3] ? to : $s;
  }
  let h = p(e),
    r = h(e);
  return {
    c() {
      t = T("div"), o && o.c(), i = rt(), l = T("div"), a = rt(), r.c(), s(l, "class", "battery-indicator svelte-1bjtjdb"), s(l, "data-testid", "battery-indicator"), s(l, "aria-hidden", "true"), s(t, "id", "menu-title"), s(t, "class", "menu-title svelte-1bjtjdb"), s(t, "data-testid", "menu-title");
    },
    m(c, d) {
      ht(c, t, d), o && o.m(t, null), u(t, i), u(t, l), u(t, a), r.m(t, null), n = !0;
    },
    p(c, [d]) {
      /*hasLoadedItem*/
      c[1] ? o ? (o.p(c, d), d & /*hasLoadedItem*/
      2 && $(o, 1)) : (o = Gl(c), o.c(), $(o, 1), o.m(t, i)) : o && (Ae(), et(o, 1, 1, () => {
        o = null;
      }), fe()), h === (h = p(c)) && r ? r.p(c, d) : (r.d(1), r = h(c), r && (r.c(), r.m(t, null)));
    },
    i(c) {
      n || ($(o), n = !0);
    },
    o(c) {
      et(o), n = !1;
    },
    d(c) {
      c && H(t), o && o.d(), r.d();
    }
  };
}
function io(e, t, i) {
  let {
      title: l
    } = t,
    {
      hasLoadedItem: a
    } = t,
    {
      isPlaying: n
    } = t,
    {
      isBrick: o = !1
    } = t,
    {
      brickBalls: p = 0
    } = t,
    {
      brickScore: h = 0
    } = t;
  return e.$$set = r => {
    "title" in r && i(0, l = r.title), "hasLoadedItem" in r && i(1, a = r.hasLoadedItem), "isPlaying" in r && i(2, n = r.isPlaying), "isBrick" in r && i(3, o = r.isBrick), "brickBalls" in r && i(4, p = r.brickBalls), "brickScore" in r && i(5, h = r.brickScore);
  }, [l, a, n, o, p, h];
}
class en extends SvelteComponent {
  constructor(t) {
    super(), initComponent(this, t, io, eo, bt, {
      title: 0,
      hasLoadedItem: 1,
      isPlaying: 2,
      isBrick: 3,
      brickBalls: 4,
      brickScore: 5
    }, Xs);
  }
  get title() {
    return this.$$.ctx[0];
  }
  set title(t) {
    this.$$set({
      title: t
    }), flush();
  }
  get hasLoadedItem() {
    return this.$$.ctx[1];
  }
  set hasLoadedItem(t) {
    this.$$set({
      hasLoadedItem: t
    }), flush();
  }
  get isPlaying() {
    return this.$$.ctx[2];
  }
  set isPlaying(t) {
    this.$$set({
      isPlaying: t
    }), flush();
  }
  get isBrick() {
    return this.$$.ctx[3];
  }
  set isBrick(t) {
    this.$$set({
      isBrick: t
    }), flush();
  }
  get brickBalls() {
    return this.$$.ctx[4];
  }
  set brickBalls(t) {
    this.$$set({
      brickBalls: t
    }), flush();
  }
  get brickScore() {
    return this.$$.ctx[5];
  }
  set brickScore(t) {
    this.$$set({
      brickScore: t
    }), flush();
  }
}
defineSvelteElement(en, {
  title: {},
  hasLoadedItem: {},
  isPlaying: {},
  isBrick: {
    type: "Boolean"
  },
  brickBalls: {},
  brickScore: {}
}, [], [], !0);
const ln = (e, t) => {
    t && e.focus({
      preventScroll: !0
    });
  },
  lo = {
    off: "ASE.Web.IPod.Settings.Value.Off",
    on: "ASE.Web.IPod.Settings.Value.On",
    songs: "ASE.Web.IPod.Settings.Value.Songs",
    one: "ASE.Web.IPod.Settings.Value.One",
    all: "ASE.Web.IPod.Settings.Value.All"
  };
function Yl(e, t = defaultTranslator) {
  const i = lo[e];
  return i ? t.t(i) : e;
}
const Xl = /* @__PURE__ */new WeakMap();
function ao(e) {
  let t = Xl.get(e);
  return t || (t = new Map(e.songs.map(i => [i.id, i])), Xl.set(e, t)), t;
}
function an(e, t) {
  const i = ao(t);
  return e.map(l => i.get(l)).filter(l => !!l);
}
function xl(e) {
  return e.filter(t => t.action === "play");
}
function no(e, t) {
  return e.length > 0 && e.length === t.length && e.every((i, l) => {
    var a;
    return i === ((a = t[l]) == null ? void 0 : a.id);
  });
}
function Ni(e, {
  queue: t,
  currentTrackIndex: i
}) {
  const l = xl(e);
  return no(l.map(a => a.songId), t) ? e.indexOf(l[i]) : -1;
}
function so(e, t) {
  return an(xl(e).map(i => i.songId), t);
}
const oo = ["songs", "playlist-tracks", "artist-tracks"];
function ho(e) {
  return oo.includes(e);
}
function nn(e, t, i) {
  const l = a => {
    var n;
    return an(((n = a.find(o => o.id === t)) == null ? void 0 : n.songIds) ?? [], i);
  };
  switch (e) {
    case "songs":
      return [...i.songs];
    case "playlist-tracks":
      return l(i.playlists);
    case "artist-tracks":
      return l(i.artists);
    default:
      return e;
  }
}
function sn(e, t = defaultTranslator) {
  const i = Math.max(0, Math.floor(e)),
    l = t.formatNumber(Math.floor(i / 60), {
      useGrouping: !1
    }),
    a = t.formatNumber(i % 60, {
      minimumIntegerDigits: 2
    });
  return `${l}:${a}`;
}
function ro(e, t, i = defaultTranslator) {
  return !Number.isFinite(t) || t <= 0 ? "" : `-${sn(Math.ceil(t - e), i)}`;
}
function Zl(e, t = defaultTranslator) {
  const i = Math.max(0, Math.floor(e)),
    l = (n, o) => t.formatNumber(n, {
      style: "unit",
      unit: o,
      unitDisplay: "long"
    }),
    a = [[Math.floor(i / 3600), "hour"], [Math.floor(i / 60) % 60, "minute"], [i % 60, "second"]].filter(([n]) => n > 0).map(([n, o]) => l(n, o));
  return a.length ? t.formatList(a) : l(0, "second");
}
function co(e) {
  appendStyles(e, "svelte-v01lnd", ".menu-items.svelte-v01lnd.svelte-v01lnd{height:180px;margin:1.7px 0 0;padding:0 5px;overflow:hidden auto;opacity:var(--ipod-screen-opacity, 1)}.menu-items.svelte-v01lnd.svelte-v01lnd::-webkit-scrollbar{width:12px}.menu-items.svelte-v01lnd.svelte-v01lnd::-webkit-scrollbar-track{background-color:rgba(72, 70, 71, 0.1);border:1px solid #484647}.menu-items.svelte-v01lnd.svelte-v01lnd::-webkit-scrollbar-thumb{background-color:#484647;background-clip:padding-box;border:2px solid transparent}.menu-item.svelte-v01lnd.svelte-v01lnd{display:flex;justify-content:space-between;align-items:center;padding:3px 12px 1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.menu-item.centered.svelte-v01lnd.svelte-v01lnd{justify-content:center}.menu-item.selected.svelte-v01lnd.svelte-v01lnd:not([data-action=info]){background-color:#484647;color:var(--ipod-faux-backlit, var(--screen-ink-inverse, #afaea7))}.menu-item.selected.svelte-v01lnd.svelte-v01lnd:not([data-action=info]):dir(rtl){--screen-ink-inverse:#b8b7b1}.menu-item.selected.svelte-v01lnd.svelte-v01lnd:not([data-action=info]):focus-visible{outline:2px solid currentcolor;outline-offset:-2px}@media(prefers-contrast: more){.menu-item.selected.svelte-v01lnd.svelte-v01lnd:not([data-action=info]){background-color:black;color:var(--ipod-faux-backlit, #eed)}}.menu-item.selected.svelte-v01lnd:not([data-action=info]) .item-value.svelte-v01lnd,.menu-item.selected.svelte-v01lnd:not([data-action=info]) .chevron.svelte-v01lnd{border-color:var(--ipod-faux-backlit, var(--item-color-fallback, #c1c1ba));color:var(--ipod-faux-backlit, var(--item-color-fallback, #c1c1ba));fill:var(--ipod-faux-backlit, var(--item-color-fallback, #c1c1ba))}@media(prefers-contrast: more){.menu-item.selected.svelte-v01lnd:not([data-action=info]) .item-value.svelte-v01lnd,.menu-item.selected.svelte-v01lnd:not([data-action=info]) .chevron.svelte-v01lnd{--item-color-fallback:#eed}}.menu-item.selected.svelte-v01lnd:not([data-action=info]) .chevron.svelte-v01lnd{--item-color-fallback:#b9b9b3}.menu-item.selected.svelte-v01lnd:not([data-action=info]) .chevron.svelte-v01lnd:dir(rtl){--item-color-fallback:#a7a79f}@media(prefers-contrast: more){.menu-item.selected.svelte-v01lnd:not([data-action=info]) .chevron.svelte-v01lnd,.menu-item.selected.svelte-v01lnd:not([data-action=info]) .chevron.svelte-v01lnd:dir(rtl){--item-color-fallback:#eed}}.item-title.svelte-v01lnd.svelte-v01lnd{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.item-value.svelte-v01lnd.svelte-v01lnd{font-weight:normal;white-space:nowrap}[data-action=info].svelte-v01lnd .item-value.svelte-v01lnd{color:inherit}[data-action=inline-toggle].svelte-v01lnd .item-value.svelte-v01lnd{color:#333;overflow:hidden;text-overflow:ellipsis}.chevron.svelte-v01lnd.svelte-v01lnd{--flip:1;display:inline-block;box-sizing:border-box;width:12px;height:12px;margin-inline-end:5px;border-block-start:3px solid #333;border-inline-end:3px solid #333;transform:rotate(calc(45deg * var(--flip))) translateY(-2px)}.chevron.svelte-v01lnd.svelte-v01lnd:dir(rtl){--flip:-1}");
}
function Jl(e, t, i) {
  const l = e.slice();
  return l[10] = t[i], l[12] = i, l;
}
function po(e) {
  let t;
  return {
    c() {
      t = T("span"), s(t, "class", "chevron svelte-v01lnd"), s(t, "data-testid", "chevron"), s(t, "aria-hidden", "true");
    },
    m(i, l) {
      ht(i, t, l);
    },
    p: noop,
    d(i) {
      i && H(t);
    }
  };
}
function Ao(e) {
  let t,
    i = Yl(/*$settings*/
    e[5][/*item*/
    e[10].toggleKey], /*$i18n*/
    e[6]) + "",
    l;
  return {
    c() {
      t = T("span"), l = Mt(i), s(t, "class", "item-value svelte-v01lnd"), s(t, "data-testid", "item-value"), s(t, "dir", "auto");
    },
    m(a, n) {
      ht(a, t, n), u(t, l);
    },
    p(a, n) {
      n & /*$settings, items, $i18n*/
      97 && i !== (i = Yl(/*$settings*/
      a[5][/*item*/
      a[10].toggleKey], /*$i18n*/
      a[6]) + "") && Ht(l, i);
    },
    d(a) {
      a && H(t);
    }
  };
}
function fo(e) {
  let t,
    i = /*item*/
    e[10].value + "",
    l;
  return {
    c() {
      t = T("span"), l = Mt(i), s(t, "class", "item-value svelte-v01lnd"), s(t, "data-testid", "item-value"), s(t, "dir", "auto");
    },
    m(a, n) {
      ht(a, t, n), u(t, l);
    },
    p(a, n) {
      n & /*items*/
      1 && i !== (i = /*item*/
      a[10].value + "") && Ht(l, i);
    },
    d(a) {
      a && H(t);
    }
  };
}
function $l(e) {
  let t,
    i,
    l = /*item*/
    e[10].title + "",
    a,
    n,
    o,
    p,
    h,
    r,
    c,
    d,
    A,
    f;
  function g(w, E) {
    if (/*item*/
    w[10].action === "info" && /*item*/
    w[10].value) return fo;
    if (/*item*/
    w[10].action === "inline-toggle") return Ao;
    if (/*item*/
    w[10].action === "navigate") return po;
  }
  let M = g(e),
    y = M && M(e);
  return {
    c() {
      t = T("li"), i = T("span"), a = Mt(l), n = rt(), y && y.c(), o = rt(), s(i, "class", "item-title svelte-v01lnd"), s(i, "data-testid", "item-title"), s(i, "dir", "auto"), s(t, "id", p = `menu-item-${ /*navigationId*/
      e[2]}-${ /*idx*/
      e[12]}`), s(t, "class", "menu-item svelte-v01lnd"), s(t, "data-testid", "menu-item"), s(t, "data-action", h = /*item*/
      e[10].action), s(t, "role", r = /*item*/
      e[10].action === "info" ? void 0 : "option"), s(t, "aria-selected", c = /*item*/
      e[10].action === "info" ? void 0 : (/*idx*/
      e[12] === /*selectedIndex*/
      e[1])), Nt(t, "selected", /*idx*/
      e[12] === /*selectedIndex*/
      e[1]), Nt(t, "centered", /*item*/
      e[10].action === "info" && /*item*/
      e[10].centered);
    },
    m(w, E) {
      ht(w, t, E), u(t, i), u(i, a), u(t, n), y && y.m(t, null), u(t, o), A || (f = Kt(d = vo.call(null, t, /*idx*/
      e[12] === /*selectedIndex*/
      e[1])), A = !0);
    },
    p(w, E) {
      e = w, E & /*items*/
      1 && l !== (l = /*item*/
      e[10].title + "") && Ht(a, l), M === (M = g(e)) && y ? y.p(e, E) : (y && y.d(1), y = M && M(e), y && (y.c(), y.m(t, o))), E & /*navigationId*/
      4 && p !== (p = `menu-item-${ /*navigationId*/
      e[2]}-${ /*idx*/
      e[12]}`) && s(t, "id", p), E & /*items*/
      1 && h !== (h = /*item*/
      e[10].action) && s(t, "data-action", h), E & /*items*/
      1 && r !== (r = /*item*/
      e[10].action === "info" ? void 0 : "option") && s(t, "role", r), E & /*items, selectedIndex*/
      3 && c !== (c = /*item*/
      e[10].action === "info" ? void 0 : (/*idx*/
      e[12] === /*selectedIndex*/
      e[1])) && s(t, "aria-selected", c), d && Pt(d.update) && E & /*selectedIndex*/
      2 && d.update.call(null, /*idx*/
      e[12] === /*selectedIndex*/
      e[1]), E & /*selectedIndex*/
      2 && Nt(t, "selected", /*idx*/
      e[12] === /*selectedIndex*/
      e[1]), E & /*items*/
      1 && Nt(t, "centered", /*item*/
      e[10].action === "info" && /*item*/
      e[10].centered);
    },
    d(w) {
      w && H(t), y && y.d(), A = !1, f();
    }
  };
}
function uo(e) {
  let t,
    i,
    l,
    a,
    n,
    o,
    p = zl(/*items*/
    e[0]),
    h = [];
  for (let r = 0; r < p.length; r += 1) h[r] = $l(Jl(e, p, r));
  return {
    c() {
      t = T("ul");
      for (let r = 0; r < h.length; r += 1) h[r].c();
      s(t, "class", "menu-items svelte-v01lnd"), s(t, "data-testid", "menu-items"), s(t, "role", "listbox"), s(t, "tabindex", "0"), s(t, "aria-activedescendant", i = `menu-item-${ /*navigationId*/
      e[2]}-${ /*selectedIndex*/
      e[1]}`), s(t, "aria-labelledby", "menu-title");
    },
    m(r, c) {
      ht(r, t, c);
      for (let d = 0; d < h.length; d += 1) h[d] && h[d].m(t, null);
      n || (o = [Kt(l = ln.call(null, t, /*shouldFocus*/
      e[3])), Kt(a = /*restoreListScroll*/
      e[8].call(null, t, /*restoredScrollTop*/
      e[4]))], n = !0);
    },
    p(r, [c]) {
      if (c & /*navigationId, items, undefined, selectedIndex, $settings, $i18n*/
      103) {
        p = zl(/*items*/
        r[0]);
        let d;
        for (d = 0; d < p.length; d += 1) {
          const A = Jl(r, p, d);
          h[d] ? h[d].p(A, c) : (h[d] = $l(A), h[d].c(), h[d].m(t, null));
        }
        for (; d < h.length; d += 1) h[d].d(1);
        h.length = p.length;
      }
      c & /*navigationId, selectedIndex*/
      6 && i !== (i = `menu-item-${ /*navigationId*/
      r[2]}-${ /*selectedIndex*/
      r[1]}`) && s(t, "aria-activedescendant", i), l && Pt(l.update) && c & /*shouldFocus*/
      8 && l.update.call(null, /*shouldFocus*/
      r[3]), a && Pt(a.update) && c & /*restoredScrollTop*/
      16 && a.update.call(null, /*restoredScrollTop*/
      r[4]);
    },
    i: noop,
    o: noop,
    d(r) {
      r && H(t), Wn(h, r), n = !1, ue(o);
    }
  };
}
function vo(e, t) {
  return t && e.scrollIntoView({
    block: "nearest"
  }), {
    update(i) {
      i && e.scrollIntoView({
        block: "nearest"
      });
    }
  };
}
function yo(e, t, i) {
  let l, a;
  Ut(e, settings, f => i(5, l = f));
  const n = getTranslator();
  Ut(e, n, f => i(6, a = f));
  const o = Hi();
  let {
      items: p
    } = t,
    {
      selectedIndex: h
    } = t,
    {
      navigationId: r
    } = t,
    {
      shouldFocus: c
    } = t,
    {
      restoredScrollTop: d = void 0
    } = t;
  function A(f, g) {
    return o("listmount", f), g !== void 0 && (f.scrollTop = g), {
      destroy() {
        o("listunmount", f);
      }
    };
  }
  return e.$$set = f => {
    "items" in f && i(0, p = f.items), "selectedIndex" in f && i(1, h = f.selectedIndex), "navigationId" in f && i(2, r = f.navigationId), "shouldFocus" in f && i(3, c = f.shouldFocus), "restoredScrollTop" in f && i(4, d = f.restoredScrollTop);
  }, [p, h, r, c, d, l, a, n, A];
}
class on extends SvelteComponent {
  constructor(t) {
    super(), initComponent(this, t, yo, uo, bt, {
      items: 0,
      selectedIndex: 1,
      navigationId: 2,
      shouldFocus: 3,
      restoredScrollTop: 4
    }, co);
  }
  get items() {
    return this.$$.ctx[0];
  }
  set items(t) {
    this.$$set({
      items: t
    }), flush();
  }
  get selectedIndex() {
    return this.$$.ctx[1];
  }
  set selectedIndex(t) {
    this.$$set({
      selectedIndex: t
    }), flush();
  }
  get navigationId() {
    return this.$$.ctx[2];
  }
  set navigationId(t) {
    this.$$set({
      navigationId: t
    }), flush();
  }
  get shouldFocus() {
    return this.$$.ctx[3];
  }
  set shouldFocus(t) {
    this.$$set({
      shouldFocus: t
    }), flush();
  }
  get restoredScrollTop() {
    return this.$$.ctx[4];
  }
  set restoredScrollTop(t) {
    this.$$set({
      restoredScrollTop: t
    }), flush();
  }
}
defineSvelteElement(on, {
  items: {},
  selectedIndex: {},
  navigationId: {},
  shouldFocus: {},
  restoredScrollTop: {}
}, [], [], !0);
const go = createLogger("linkNavigation");
async function mo(e, t) {
  try {
    await e(t);
  } catch (i) {
    go.error(`Host navigation failed for "${t}"`, i);
  }
}
const bo = (e, t) => {
  let i = t;
  function l(a) {
    const n = a.metaKey || a.ctrlKey || a.shiftKey || a.altKey;
    !i || a.defaultPrevented || a.button !== 0 || n || (a.preventDefault(), mo(i, e.href));
  }
  return e.addEventListener("click", l), {
    update(a) {
      i = a;
    },
    destroy() {
      e.removeEventListener("click", l);
    }
  };
};
function Mo(e) {
  appendStyles(e, "svelte-61q7q9", `.marquee.svelte-61q7q9.svelte-61q7q9{overflow:hidden}.marquee-track.svelte-61q7q9.svelte-61q7q9{--marquee-distance:calc(
      var(--marquee-copy-width, 0) + 30
  );--marquee-direction:-1;display:flex;width:max-content;gap:30px;margin-inline:auto}.marquee.svelte-61q7q9:dir(rtl) .marquee-track.svelte-61q7q9{--marquee-direction:1}.marquee-copy.svelte-61q7q9.svelte-61q7q9{white-space:nowrap}.scrolling.svelte-61q7q9 .marquee-track.svelte-61q7q9{animation:svelte-61q7q9-marquee-scroll calc(var(--marquee-distance) * 0.05s) linear 2s infinite}@media(prefers-reduced-motion: reduce){.marquee-track.svelte-61q7q9.svelte-61q7q9{display:block;width:auto}.scrolling.svelte-61q7q9 .marquee-track.svelte-61q7q9{animation:none}.marquee-copy.svelte-61q7q9.svelte-61q7q9{display:block;max-width:100%;overflow:hidden;text-overflow:ellipsis}.marquee-copy[aria-hidden].svelte-61q7q9.svelte-61q7q9{display:none}}@keyframes svelte-61q7q9-marquee-scroll{to{transform:translateX(calc(var(--marquee-distance) * var(--marquee-direction) * 1px))}}`);
}
function ta(e) {
  let t, i;
  return {
    c() {
      t = T("span"), i = Mt(/*text*/
      e[0]), s(t, "class", "marquee-copy svelte-61q7q9"), s(t, "aria-hidden", "true");
    },
    m(l, a) {
      ht(l, t, a), u(t, i);
    },
    p(l, a) {
      a & /*text*/
      1 && Ht(i, /*text*/
      l[0]);
    },
    d(l) {
      l && H(t);
    }
  };
}
function ea(e) {
  let t,
    i,
    l,
    a,
    n,
    o,
    p,
    h = /*scrolling*/
    e[3] && ta(e);
  return {
    c() {
      t = T("div"), i = T("span"), l = Mt(/*text*/
      e[0]), n = rt(), h && h.c(), s(i, "class", "marquee-copy svelte-61q7q9"), s(t, "class", "marquee-track svelte-61q7q9"), m(t, "--marquee-copy-width", /*copyWidth*/
      e[2]);
    },
    m(r, c) {
      ht(r, t, c), u(t, i), u(i, l), u(t, n), h && h.m(t, null), o || (p = Kt(a = /*measure*/
      e[5].call(null, i, /*measure_function*/
      e[7])), o = !0);
    },
    p(r, c) {
      c & /*text*/
      1 && Ht(l, /*text*/
      r[0]), a && Pt(a.update) && c & /*copyWidth*/
      4 && a.update.call(null, /*measure_function*/
      r[7]), /*scrolling*/
      r[3] ? h ? h.p(r, c) : (h = ta(r), h.c(), h.m(t, null)) : h && (h.d(1), h = null), c & /*copyWidth*/
      4 && m(t, "--marquee-copy-width", /*copyWidth*/
      r[2]);
    },
    d(r) {
      r && H(t), h && h.d(), o = !1, p();
    }
  };
}
function wo(e) {
  let t,
    i = /*restartKey*/
    e[4],
    l,
    a,
    n,
    o = ea(e);
  return {
    c() {
      t = T("div"), o.c(), s(t, "class", "marquee svelte-61q7q9"), s(t, "dir", "auto"), Nt(t, "scrolling", /*scrolling*/
      e[3]);
    },
    m(p, h) {
      ht(p, t, h), o.m(t, null), a || (n = Kt(l = /*measure*/
      e[5].call(null, t, /*measure_function_1*/
      e[8])), a = !0);
    },
    p(p, [h]) {
      h & /*restartKey*/
      16 && bt(i, i = /*restartKey*/
      p[4]) ? (o.d(1), o = ea(p), o.c(), o.m(t, null)) : o.p(p, h), l && Pt(l.update) && h & /*containerWidth*/
      2 && l.update.call(null, /*measure_function_1*/
      p[8]), h & /*scrolling*/
      8 && Nt(t, "scrolling", /*scrolling*/
      p[3]);
    },
    i: noop,
    o: noop,
    d(p) {
      p && H(t), o.d(p), a = !1, n();
    }
  };
}
function ko(e, t, i) {
  let l,
    a,
    {
      text: n
    } = t,
    {
      resetKey: o = void 0
    } = t,
    p = 0,
    h = 0;
  const r = (A, f) => {
      const g = new ResizeObserver(() => f(A));
      return g.observe(A), f(A), {
        destroy: () => g.disconnect()
      };
    },
    c = A => {
      i(2, h = A.offsetWidth);
    },
    d = A => {
      i(1, p = A.clientWidth);
    };
  return e.$$set = A => {
    "text" in A && i(0, n = A.text), "resetKey" in A && i(6, o = A.resetKey);
  }, e.$$.update = () => {
    e.$$.dirty & /*resetKey, text*/
    65 && i(4, l = `${o ?? ""}\0${n}`), e.$$.dirty & /*copyWidth, containerWidth*/
    6 && i(3, a = h - p > 1);
  }, [n, p, h, a, l, r, o, c, d];
}
class Dl extends SvelteComponent {
  constructor(t) {
    super(), initComponent(this, t, ko, wo, bt, {
      text: 0,
      resetKey: 6
    }, Mo);
  }
  get text() {
    return this.$$.ctx[0];
  }
  set text(t) {
    this.$$set({
      text: t
    }), flush();
  }
  get resetKey() {
    return this.$$.ctx[6];
  }
  set resetKey(t) {
    this.$$set({
      resetKey: t
    }), flush();
  }
}
defineSvelteElement(Dl, {
  text: {},
  resetKey: {}
}, [], [], !0);
function Po(e) {
  appendStyles(e, "svelte-rmzg1t", ".progress-bar.svelte-rmzg1t{position:relative;width:100%;height:15px;min-height:12px;border:1.5px solid #484647;border-radius:7px;overflow:hidden;direction:ltr}.progress-bar.svelte-rmzg1t:has(.progress-marker){overflow:visible}.progress-bar.svelte-rmzg1t:has(.range-input:focus-visible){outline:2px solid currentcolor;outline-offset:2px}.progress-fill.svelte-rmzg1t{width:0%;height:15px;background:#484647}.progress-marker.svelte-rmzg1t{position:absolute;top:50%;width:10px;height:10px;background:#484647;transform:translate(-50%, -50%) rotate(45deg)}.range-input.svelte-rmzg1t{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0}");
}
function Eo(e) {
  let t,
    i,
    l = `${ /*percent*/
    e[7]}%`;
  return {
    c() {
      t = T("div"), s(t, "class", "progress-fill svelte-rmzg1t"), s(t, "data-testid", i = /*testId*/
      e[2] + "-fill"), m(t, "width", l);
    },
    m(a, n) {
      ht(a, t, n);
    },
    p(a, n) {
      n & /*testId*/
      4 && i !== (i = /*testId*/
      a[2] + "-fill") && s(t, "data-testid", i), n & /*percent*/
      128 && l !== (l = `${ /*percent*/
      a[7]}%`) && m(t, "width", l);
    },
    d(a) {
      a && H(t);
    }
  };
}
function Io(e) {
  let t,
    i,
    l = `${ /*percent*/
    e[7]}%`;
  return {
    c() {
      t = T("div"), s(t, "class", "progress-marker svelte-rmzg1t"), s(t, "data-testid", i = /*testId*/
      e[2] + "-marker"), m(t, "left", l);
    },
    m(a, n) {
      ht(a, t, n);
    },
    p(a, n) {
      n & /*testId*/
      4 && i !== (i = /*testId*/
      a[2] + "-marker") && s(t, "data-testid", i), n & /*percent*/
      128 && l !== (l = `${ /*percent*/
      a[7]}%`) && m(t, "left", l);
    },
    d(a) {
      a && H(t);
    }
  };
}
function ia(e) {
  let t, i, l;
  return {
    c() {
      t = T("input"), s(t, "class", "range-input svelte-rmzg1t"), s(t, "type", "range"), s(t, "tabindex", "0"), s(t, "min", "0"), s(t, "max", /*max*/
      e[1]), t.value = /*value*/
      e[0], t.disabled = /*disabled*/
      e[6], s(t, "aria-label", /*label*/
      e[4]), s(t, "aria-valuetext", /*valuetext*/
      e[5]);
    },
    m(a, n) {
      ht(a, t, n), i || (l = [ut(t, "focus", /*focus_handler*/
      e[9]), ut(t, "input", /*input_handler*/
      e[12]), ut(t, "change", /*change_handler*/
      e[10]), ut(t, "blur", /*blur_handler*/
      e[11])], i = !0);
    },
    p(a, n) {
      n & /*max*/
      2 && s(t, "max", /*max*/
      a[1]), n & /*value*/
      1 && (t.value = /*value*/
      a[0]), n & /*disabled*/
      64 && (t.disabled = /*disabled*/
      a[6]), n & /*label*/
      16 && s(t, "aria-label", /*label*/
      a[4]), n & /*valuetext*/
      32 && s(t, "aria-valuetext", /*valuetext*/
      a[5]);
    },
    d(a) {
      a && H(t), i = !1, ue(l);
    }
  };
}
function So(e) {
  let t, i, l;
  function a(h, r) {
    return /*variant*/h[3] === "marker" ? Io : Eo;
  }
  let n = a(e),
    o = n(e),
    p = /*label*/
    e[4] && ia(e);
  return {
    c() {
      t = T("div"), o.c(), i = rt(), p && p.c(), s(t, "class", "progress-bar svelte-rmzg1t"), s(t, "data-testid", l = /*testId*/
      e[2] + "-bar");
    },
    m(h, r) {
      ht(h, t, r), o.m(t, null), u(t, i), p && p.m(t, null);
    },
    p(h, [r]) {
      n === (n = a(h)) && o ? o.p(h, r) : (o.d(1), o = n(h), o && (o.c(), o.m(t, i))), /*label*/
      h[4] ? p ? p.p(h, r) : (p = ia(h), p.c(), p.m(t, null)) : p && (p.d(1), p = null), r & /*testId*/
      4 && l !== (l = /*testId*/
      h[2] + "-bar") && s(t, "data-testid", l);
    },
    i: noop,
    o: noop,
    d(h) {
      h && H(t), o.d(), p && p.d();
    }
  };
}
function xo(e, t, i) {
  let l,
    {
      value: a
    } = t,
    {
      max: n
    } = t,
    {
      testId: o
    } = t,
    {
      variant: p = "fill"
    } = t,
    {
      label: h = void 0
    } = t,
    {
      valuetext: r = void 0
    } = t,
    {
      disabled: c = !1
    } = t;
  const d = Hi();
  function A(y) {
    ll.call(this, e, y);
  }
  function f(y) {
    ll.call(this, e, y);
  }
  function g(y) {
    ll.call(this, e, y);
  }
  const M = y => d("input", y.currentTarget.valueAsNumber);
  return e.$$set = y => {
    "value" in y && i(0, a = y.value), "max" in y && i(1, n = y.max), "testId" in y && i(2, o = y.testId), "variant" in y && i(3, p = y.variant), "label" in y && i(4, h = y.label), "valuetext" in y && i(5, r = y.valuetext), "disabled" in y && i(6, c = y.disabled);
  }, e.$$.update = () => {
    e.$$.dirty & /*max, value*/
    3 && i(7, l = n > 0 ? Math.min(100, a * 100 / n) : 0);
  }, [a, n, o, p, h, r, c, l, d, A, f, g, M];
}
class qi extends SvelteComponent {
  constructor(t) {
    super(), initComponent(this, t, xo, So, bt, {
      value: 0,
      max: 1,
      testId: 2,
      variant: 3,
      label: 4,
      valuetext: 5,
      disabled: 6
    }, Po);
  }
  get value() {
    return this.$$.ctx[0];
  }
  set value(t) {
    this.$$set({
      value: t
    }), flush();
  }
  get max() {
    return this.$$.ctx[1];
  }
  set max(t) {
    this.$$set({
      max: t
    }), flush();
  }
  get testId() {
    return this.$$.ctx[2];
  }
  set testId(t) {
    this.$$set({
      testId: t
    }), flush();
  }
  get variant() {
    return this.$$.ctx[3];
  }
  set variant(t) {
    this.$$set({
      variant: t
    }), flush();
  }
  get label() {
    return this.$$.ctx[4];
  }
  set label(t) {
    this.$$set({
      label: t
    }), flush();
  }
  get valuetext() {
    return this.$$.ctx[5];
  }
  set valuetext(t) {
    this.$$set({
      valuetext: t
    }), flush();
  }
  get disabled() {
    return this.$$.ctx[6];
  }
  set disabled(t) {
    this.$$set({
      disabled: t
    }), flush();
  }
}
defineSvelteElement(qi, {
  value: {},
  max: {},
  testId: {},
  variant: {},
  label: {},
  valuetext: {},
  disabled: {
    type: "Boolean"
  }
}, [], [], !0);
function Do(e) {
  let t,
    i,
    l = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "18"
    }, {
      height: "15"
    }, {
      viewBox: "0 0 18 15"
    }, /*$$props*/
    e[0]],
    a = {};
  for (let n = 0; n < l.length; n += 1) a = pt(a, l[n]);
  return {
    c() {
      t = v("svg"), i = v("path"), this.h();
    },
    l(n) {
      t = wt(n, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0
      });
      var o = mt(t);
      i = wt(o, "path", {
        d: !0,
        style: !0,
        transform: !0
      }), mt(i).forEach(H), o.forEach(H), this.h();
    },
    h() {
      s(i, "d", "M24.851-6.64v-3.324H14.294q-.883 0-1.655.3a4.2 4.2 0 0 0-1.347.831 3.8 3.8 0 0 0-.906 1.272 3.9 3.9 0 0 0-.33 1.61q0 .689.277 1.378.277.688.682 1.213L7.062-.141a8.7 8.7 0 0 1-1.565-2.613 8.6 8.6 0 0 1-.562-3.092q0-1.841.697-3.452a8.92 8.92 0 0 1 4.694-4.716 8.5 8.5 0 0 1 3.414-.697h11.111v-3.533l7.232 5.944zm-9.554 2.771V-.56h10.572q.868 0 1.647-.292a4 4 0 0 0 1.348-.824q.569-.53.906-1.273a3.9 3.9 0 0 0 .337-1.624q0-.689-.277-1.355a5.5 5.5 0 0 0-.697-1.221l3.968-3.219a8.6 8.6 0 0 1 2.127 5.705 8.6 8.6 0 0 1-.697 3.451 8.9 8.9 0 0 1-1.894 2.808 9 9 0 0 1-2.8 1.894 8.5 8.5 0 0 1-3.414.697H15.297v3.548L8.08 1.791z"), m(i, "fill-rule", "nonzero"), s(i, "transform", "translate(-2.83 10.464)scale(.57352)"), Ct(t, a);
    },
    m(n, o) {
      ve(n, t, o), jt(t, i);
    },
    p(n, [o]) {
      Ct(t, a = ye(l, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "18"
      }, {
        height: "15"
      }, {
        viewBox: "0 0 18 15"
      }, o & /*$$props*/
      1 && /*$$props*/
      n[0]]));
    },
    i: noop,
    o: noop,
    d(n) {
      n && H(t);
    }
  };
}
function _o(e, t, i) {
  return e.$$set = l => {
    i(0, t = pt(pt({}, t), _t(l)));
  }, t = _t(t), [t];
}
let Co = class extends SvelteComponent {
  constructor(t) {
    super(), initComponent(this, t, _o, Do, bt, {});
  }
};
function Bo(e) {
  let t,
    i,
    l = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "19"
    }, {
      height: "15"
    }, {
      viewBox: "0 0 19 15"
    }, /*$$props*/
    e[0]],
    a = {};
  for (let n = 0; n < l.length; n += 1) a = pt(a, l[n]);
  return {
    c() {
      t = v("svg"), i = v("path"), this.h();
    },
    l(n) {
      t = wt(n, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0
      });
      var o = mt(t);
      i = wt(o, "path", {
        d: !0,
        style: !0,
        transform: !0
      }), mt(i).forEach(H), o.forEach(H), this.h();
    },
    h() {
      s(i, "d", "M.3-.313q.04 0 .077.016.035.015.062.042a.2.2 0 0 1 .042.062q.016.036.016.077a.2.2 0 0 1-.016.076.2.2 0 0 1-.042.062.2.2 0 0 1-.062.042.2.2 0 0 1-.215-.042.2.2 0 0 1-.057-.138.2.2 0 0 1 .015-.077.2.2 0 0 1 .042-.062.2.2 0 0 1 .062-.042A.2.2 0 0 1 .3-.313m.027.302L.326-.23H.29l-.003.011-.005.01-.015.013-.009.004-.01.002-.009.002-.01.001H.225l.002.035h.054v.143h.046zM.7-.354v-.108H.355a.15.15 0 0 0-.09.03.12.12 0 0 0-.046.078.25.25 0 0 0-.147.135.3.3 0 0 1-.022-.109.293.293 0 0 1 .288-.289H.7v-.115l.236.193zm.269-.121a.283.283 0 0 1-.016.39A.3.3 0 0 1 .75 0H.522a.24.24 0 0 0 .029-.116L.55-.135l-.002-.02h.185a.14.14 0 0 0 .054-.01.1.1 0 0 0 .044-.027.1.1 0 0 0 .03-.041.1.1 0 0 0 .011-.053.1.1 0 0 0-.009-.044.2.2 0 0 0-.023-.04z"), m(i, "fill-rule", "nonzero"), s(i, "transform", "translate(-.918 13.44)scale(18.3605)"), Ct(t, a);
    },
    m(n, o) {
      ve(n, t, o), jt(t, i);
    },
    p(n, [o]) {
      Ct(t, a = ye(l, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "19"
      }, {
        height: "15"
      }, {
        viewBox: "0 0 19 15"
      }, o & /*$$props*/
      1 && /*$$props*/
      n[0]]));
    },
    i: noop,
    o: noop,
    d(n) {
      n && H(t);
    }
  };
}
function To(e, t, i) {
  return e.$$set = l => {
    i(0, t = pt(pt({}, t), _t(l)));
  }, t = _t(t), [t];
}
let Ho = class extends SvelteComponent {
  constructor(t) {
    super(), initComponent(this, t, To, Bo, bt, {});
  }
};
function Lo(e) {
  let t,
    i,
    l = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "20"
    }, {
      height: "15"
    }, {
      viewBox: "0 0 20 15"
    }, /*$$props*/
    e[0]],
    a = {};
  for (let n = 0; n < l.length; n += 1) a = pt(a, l[n]);
  return {
    c() {
      t = v("svg"), i = v("path"), this.h();
    },
    l(n) {
      t = wt(n, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0
      });
      var o = mt(t);
      i = wt(o, "path", {
        d: !0,
        style: !0,
        transform: !0
      }), mt(i).forEach(H), o.forEach(H), this.h();
    },
    h() {
      s(i, "d", "M.935-.347v-.111H.812a.1.1 0 0 0-.03.007.1.1 0 0 0-.026.02l-.252.314a1 1 0 0 1-.066.058l-.032.022-.035.019-.036.013A.2.2 0 0 1 .299 0h-.25v-.165h.25a.1.1 0 0 0 .037-.011.3.3 0 0 0 .073-.061L.68-.572l.017-.015.026-.017a.1.1 0 0 1 .035-.014.2.2 0 0 1 .044-.006h.133v-.109l.222.192zM.299-.624q.018 0 .036.006a.4.4 0 0 1 .11.064 1 1 0 0 1 .075.069l-.095.118L.38-.413.36-.429.339-.444.318-.455.299-.458h-.25v-.166zm.636.735V0H.802a.2.2 0 0 1-.044-.005.2.2 0 0 1-.061-.03L.68-.051.608-.14l.095-.116.053.066.026.018a.1.1 0 0 0 .03.007h.123v-.11l.222.192z"), m(i, "fill-rule", "nonzero"), s(i, "transform", "translate(-.864 12.93)scale(17.6389)"), Ct(t, a);
    },
    m(n, o) {
      ve(n, t, o), jt(t, i);
    },
    p(n, [o]) {
      Ct(t, a = ye(l, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "20"
      }, {
        height: "15"
      }, {
        viewBox: "0 0 20 15"
      }, o & /*$$props*/
      1 && /*$$props*/
      n[0]]));
    },
    i: noop,
    o: noop,
    d(n) {
      n && H(t);
    }
  };
}
function zo(e, t, i) {
  return e.$$set = l => {
    i(0, t = pt(pt({}, t), _t(l)));
  }, t = _t(t), [t];
}
let Qo = class extends SvelteComponent {
  constructor(t) {
    super(), initComponent(this, t, zo, Lo, bt, {});
  }
};
function Oo(e) {
  let t,
    i,
    l,
    a = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "18"
    }, {
      height: "16"
    }, {
      viewBox: "0 0 18 16"
    }, /*$$props*/
    e[0]],
    n = {};
  for (let o = 0; o < a.length; o += 1) n = pt(n, a[o]);
  return {
    c() {
      t = v("svg"), i = v("path"), l = v("path"), this.h();
    },
    l(o) {
      t = wt(o, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0
      });
      var p = mt(t);
      i = wt(p, "path", {
        d: !0
      }), mt(i).forEach(H), l = wt(p, "path", {
        d: !0
      }), mt(l).forEach(H), p.forEach(H), this.h();
    },
    h() {
      s(i, "d", "M11.526 15.763c.569.239 1.022.245 1.462-.13 2.568-2.046 4.353-4.826 4.353-7.632S15.55 2.482 13.038.425c-.44-.384-.943-.424-1.512-.185-.455.443-.257 1.07.202 1.454 2.518 1.79 3.852 3.795 3.852 6.3 0 2.493-1.597 4.509-3.816 6.317-.458.384-.7.934-.238 1.452"), s(l, "d", "M10.628 11.546c.426.211 1.023.148 1.365-.22.852-.843 1.45-2.069 1.45-3.311 0-1.243-.598-2.491-1.45-3.344-.342-.369-.939-.432-1.365-.21-.434.428-.343.91.055 1.299.597.6 1.14 1.385 1.14 2.29s-.457 1.746-1.177 2.293c-.384.4-.412.806-.018 1.203M9.476 16V0L4.307 4.495a.25.25 0 0 1-.168.073L0 4.555v6.924l4.138-.014a.24.24 0 0 1 .168.063z"), Ct(t, n);
    },
    m(o, p) {
      ve(o, t, p), jt(t, i), jt(t, l);
    },
    p(o, [p]) {
      Ct(t, n = ye(a, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "18"
      }, {
        height: "16"
      }, {
        viewBox: "0 0 18 16"
      }, p & /*$$props*/
      1 && /*$$props*/
      o[0]]));
    },
    i: noop,
    o: noop,
    d(o) {
      o && H(t);
    }
  };
}
function No(e, t, i) {
  return e.$$set = l => {
    i(0, t = pt(pt({}, t), _t(l)));
  }, t = _t(t), [t];
}
let Ro = class extends SvelteComponent {
  constructor(t) {
    super(), initComponent(this, t, No, Oo, bt, {});
  }
};
function Wo(e) {
  let t,
    i,
    l = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "10"
    }, {
      height: "16"
    }, {
      viewBox: "0 0 10 16"
    }, /*$$props*/
    e[0]],
    a = {};
  for (let n = 0; n < l.length; n += 1) a = pt(a, l[n]);
  return {
    c() {
      t = v("svg"), i = v("path"), this.h();
    },
    l(n) {
      t = wt(n, "svg", {
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0
      });
      var o = mt(t);
      i = wt(o, "path", {
        d: !0
      }), mt(i).forEach(H), o.forEach(H), this.h();
    },
    h() {
      s(i, "d", "M9.476 16V0L4.307 4.495a.25.25 0 0 1-.168.073L0 4.555v6.924l4.138-.014a.24.24 0 0 1 .168.063z"), Ct(t, a);
    },
    m(n, o) {
      ve(n, t, o), jt(t, i);
    },
    p(n, [o]) {
      Ct(t, a = ye(l, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "10"
      }, {
        height: "16"
      }, {
        viewBox: "0 0 10 16"
      }, o & /*$$props*/
      1 && /*$$props*/
      n[0]]));
    },
    i: noop,
    o: noop,
    d(n) {
      n && H(t);
    }
  };
}
function jo(e, t, i) {
  return e.$$set = l => {
    i(0, t = pt(pt({}, t), _t(l)));
  }, t = _t(t), [t];
}
let Fo = class extends SvelteComponent {
  constructor(t) {
    super(), initComponent(this, t, jo, Wo, bt, {});
  }
};
function Vo(e) {
  appendStyles(e, "svelte-w35jhk", '.now-playing.svelte-w35jhk{display:flex;flex-direction:column;box-sizing:border-box;height:180px;margin-top:1.7px;padding:4px 15px 7px;overflow:clip;opacity:var(--ipod-screen-opacity, 1)}.now-playing-index.svelte-w35jhk{display:grid;grid-template-columns:1fr auto;align-items:center;margin-bottom:6px;font-size:20px;line-height:1;text-align:left;direction:ltr}.now-playing-index.svelte-w35jhk:dir(rtl){text-align:right}.play-modifier.svelte-w35jhk{display:flex;align-items:center;gap:6px;fill:#484647}.now-playing-info.svelte-w35jhk{margin-bottom:5px;text-align:center}.song-title.svelte-w35jhk{margin-bottom:2px}.song-title-link.svelte-w35jhk{display:block;color:inherit;text-decoration:none;pointer-events:auto}.song-title-link.svelte-w35jhk:hover,.song-title-link.svelte-w35jhk:focus-visible{text-decoration:underline}.artist.svelte-w35jhk,.album.svelte-w35jhk{margin-bottom:2px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.now-playing-progress.svelte-w35jhk{display:grid;grid-template-columns:1fr 1fr;gap:30px;align-items:center;width:calc(200% + 30px);margin-top:auto;transition:transform 0.3s ease-out}.now-playing-progress[data-mode=volume].svelte-w35jhk,.now-playing-progress[data-mode=scrubbing].svelte-w35jhk{transform:translateX(calc(-50% - 15px))}.now-playing-progress[data-mode=volume].svelte-w35jhk:dir(rtl),.now-playing-progress[data-mode=scrubbing].svelte-w35jhk:dir(rtl){transform:translateX(calc(50% + 15px))}@media(prefers-reduced-motion: reduce){.now-playing-progress.svelte-w35jhk{transition:none}}.time-and-progress.svelte-w35jhk,.scrubbing-indicator.svelte-w35jhk,.volume-labels.svelte-w35jhk{direction:ltr}.scrubbing-indicator.svelte-w35jhk,.volume-labels.svelte-w35jhk{grid-area:1/2}.scrubbing-indicator.inactive.svelte-w35jhk,.volume-labels.inactive.svelte-w35jhk{opacity:0}.time-and-progress.svelte-w35jhk,.scrubbing-indicator.svelte-w35jhk{padding-top:10px}.progress-labels.svelte-w35jhk{display:flex;justify-content:space-between;margin-top:6px;font-size:26px;font-feature-settings:"tnum";font-variant-numeric:tabular-nums}.volume-labels.svelte-w35jhk{display:grid;grid-template-columns:auto 1fr auto;gap:7px;align-items:center;fill:#484647}.visually-hidden.svelte-w35jhk{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}');
}
function la(e) {
  let t, i, l, a, n, o;
  const p = [Uo, qo],
    h = [];
  function r(d, A) {
    return /*repeatMode*/d[10] === "one" ? 0 : (/*repeatMode*/
    d[10] === "all" ? 1 : -1);
  }
  ~(i = r(e)) && (l = h[i] = p[i](e));
  let c = /*shuffleMode*/
  e[9] && aa();
  return {
    c() {
      t = T("div"), l && l.c(), a = rt(), c && c.c(), n = rt(), s(t, "class", "play-modifier svelte-w35jhk"), s(t, "aria-hidden", "true");
    },
    m(d, A) {
      ht(d, t, A), ~i && h[i].m(t, null), u(t, a), c && c.m(t, null), ht(d, n, A), o = !0;
    },
    p(d, A) {
      let f = i;
      i = r(d), i !== f && (l && (Ae(), et(h[f], 1, 1, () => {
        h[f] = null;
      }), fe()), ~i ? (l = h[i], l || (l = h[i] = p[i](d), l.c()), $(l, 1), l.m(t, a)) : l = null), /*shuffleMode*/
      d[9] ? c ? A[0] & /*shuffleMode*/
      512 && $(c, 1) : (c = aa(), c.c(), $(c, 1), c.m(t, null)) : c && (Ae(), et(c, 1, 1, () => {
        c = null;
      }), fe());
    },
    i(d) {
      o || ($(l), $(c), o = !0);
    },
    o(d) {
      et(l), et(c), o = !1;
    },
    d(d) {
      d && (H(t), H(n)), ~i && h[i].d(), c && c.d();
    }
  };
}
function qo(e) {
  let t, i;
  return t = new Co({
    props: {
      class: "repeat-all-icon"
    }
  }), {
    c() {
      gt(t.$$.fragment);
    },
    m(l, a) {
      vt(t, l, a), i = !0;
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
function Uo(e) {
  let t, i;
  return t = new Ho({
    props: {
      class: "repeat-one-icon"
    }
  }), {
    c() {
      gt(t.$$.fragment);
    },
    m(l, a) {
      vt(t, l, a), i = !0;
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
function aa(e) {
  let t, i;
  return t = new Qo({
    props: {
      class: "shuffle-icon"
    }
  }), {
    c() {
      gt(t.$$.fragment);
    },
    m(l, a) {
      vt(t, l, a), i = !0;
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
function na(e) {
  let t, i;
  return {
    c() {
      t = T("span"), i = Mt(/*playModesLabel*/
      e[17]), s(t, "class", "visually-hidden svelte-w35jhk"), s(t, "data-testid", "now-playing-play-modes");
    },
    m(l, a) {
      ht(l, t, a), u(t, i);
    },
    p(l, a) {
      a[0] & /*playModesLabel*/
      131072 && Ht(i, /*playModesLabel*/
      l[17]);
    },
    d(l) {
      l && H(t);
    }
  };
}
function sa(e) {
  let t, i, l, a;
  const n = [Go, Ko],
    o = [];
  function p(h, r) {
    return /*titleUrl*/h[2] ? 0 : 1;
  }
  return i = p(e), l = o[i] = n[i](e), {
    c() {
      t = T("div"), l.c(), s(t, "class", "song-title svelte-w35jhk"), s(t, "data-testid", "now-playing-song-title");
    },
    m(h, r) {
      ht(h, t, r), o[i].m(t, null), a = !0;
    },
    p(h, r) {
      let c = i;
      i = p(h), i === c ? o[i].p(h, r) : (Ae(), et(o[c], 1, 1, () => {
        o[c] = null;
      }), fe(), l = o[i], l ? l.p(h, r) : (l = o[i] = n[i](h), l.c()), $(l, 1), l.m(t, null));
    },
    i(h) {
      a || ($(l), a = !0);
    },
    o(h) {
      et(l), a = !1;
    },
    d(h) {
      h && H(t), o[i].d();
    }
  };
}
function Ko(e) {
  let t, i;
  return t = new Dl({
    props: {
      text: (/*title*/
      e[1]),
      resetKey: (/*songId*/
      e[0])
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
      a[0] & /*title*/
      2 && (n.text = /*title*/
      l[1]), a[0] & /*songId*/
      1 && (n.resetKey = /*songId*/
      l[0]), t.$set(n);
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
function Go(e) {
  let t, i, l, a, n, o;
  return i = new Dl({
    props: {
      text: (/*title*/
      e[1]),
      resetKey: (/*songId*/
      e[0])
    }
  }), {
    c() {
      t = T("a"), gt(i.$$.fragment), s(t, "class", "song-title-link svelte-w35jhk"), s(t, "href", /*titleUrl*/
      e[2]), s(t, "data-testid", "now-playing-song-link");
    },
    m(p, h) {
      ht(p, t, h), vt(i, t, null), a = !0, n || (o = Kt(l = bo.call(null, t, /*navigateToUrl*/
      e[3])), n = !0);
    },
    p(p, h) {
      const r = {};
      h[0] & /*title*/
      2 && (r.text = /*title*/
      p[1]), h[0] & /*songId*/
      1 && (r.resetKey = /*songId*/
      p[0]), i.$set(r), (!a || h[0] & /*titleUrl*/
      4) && s(t, "href", /*titleUrl*/
      p[2]), l && Pt(l.update) && h[0] & /*navigateToUrl*/
      8 && l.update.call(null, /*navigateToUrl*/
      p[3]);
    },
    i(p) {
      a || ($(i.$$.fragment, p), a = !0);
    },
    o(p) {
      et(i.$$.fragment, p), a = !1;
    },
    d(p) {
      p && H(t), yt(i), n = !1, o();
    }
  };
}
function oa(e) {
  let t, i;
  return {
    c() {
      t = T("div"), i = Mt(/*artistName*/
      e[4]), s(t, "class", "artist svelte-w35jhk"), s(t, "data-testid", "now-playing-artist"), s(t, "dir", "auto");
    },
    m(l, a) {
      ht(l, t, a), u(t, i);
    },
    p(l, a) {
      a[0] & /*artistName*/
      16 && Ht(i, /*artistName*/
      l[4]);
    },
    d(l) {
      l && H(t);
    }
  };
}
function ha(e) {
  let t, i;
  return {
    c() {
      t = T("div"), i = Mt(/*albumName*/
      e[5]), s(t, "class", "album svelte-w35jhk"), s(t, "data-testid", "now-playing-album"), s(t, "dir", "auto");
    },
    m(l, a) {
      ht(l, t, a), u(t, i);
    },
    p(l, a) {
      a[0] & /*albumName*/
      32 && Ht(i, /*albumName*/
      l[5]);
    },
    d(l) {
      l && H(t);
    }
  };
}
function Yo(e) {
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
    V,
    q,
    Q,
    O,
    lt,
    L,
    D = /*shuffleMode*/
    (e[9] || /*repeatMode*/
    e[10] !== "none") && la(e),
    F = /*playModesLabel*/
    e[17] && na(e),
    tt = /*title*/
    e[1] && sa(e),
    ct = /*artistName*/
    e[4] && oa(e),
    dt = /*albumName*/
    e[5] && ha(e);
  return f = new qi({
    props: {
      value: (/*displayTime*/
      e[13]),
      max: (/*duration*/
      e[6]),
      testId: "now-playing-progress"
    }
  }), G = new qi({
    props: {
      variant: "marker",
      value: (/*positionValue*/
      e[16]),
      max: (/*duration*/
      e[6]),
      disabled: (/*isPositionDisabled*/
      e[8]),
      label: (/*$i18n*/
      e[14].t("ASE.Web.IPod.NowPlaying.PlaybackProgress")),
      valuetext: Zl(/*positionValue*/
      e[16], /*$i18n*/
      e[14]),
      testId: "now-playing-scrub"
    }
  }), G.$on("focus", /*focus_handler*/
  e[30]), G.$on("input", /*input_handler*/
  e[31]), G.$on("change", /*change_handler*/
  e[32]), G.$on("blur", /*blur_handler*/
  e[33]), K = new Fo({
    props: {
      class: "volume-icon-low",
      "aria-hidden": "true"
    }
  }), P = new qi({
    props: {
      value: (/*volume*/
      e[7]),
      max: 100,
      label: (/*$i18n*/
      e[14].t("ASE.Web.IPod.NowPlaying.Volume")),
      valuetext: (/*$i18n*/
      e[14].formatNumber(/*volume*/
      e[7] / 100, {
        style: "percent"
      })),
      testId: "now-playing-volume"
    }
  }), P.$on("focus", /*focus_handler_1*/
  e[34]), P.$on("input", /*input_handler_1*/
  e[35]), P.$on("blur", /*blur_handler_1*/
  e[36]), q = new Ro({
    props: {
      class: "volume-icon-high",
      "aria-hidden": "true"
    }
  }), {
    c() {
      t = T("div"), i = T("div"), l = T("span"), a = Mt(/*positionLabel*/
      e[18]), D && D.c(), n = za(), F && F.c(), o = rt(), p = T("div"), tt && tt.c(), h = rt(), ct && ct.c(), r = rt(), dt && dt.c(), c = rt(), d = T("div"), A = T("div"), gt(f.$$.fragment), g = rt(), M = T("div"), y = T("span"), w = Mt(/*elapsedLabel*/
      e[20]), E = rt(), I = T("span"), x = Mt(/*remainingLabel*/
      e[19]), U = rt(), C = T("div"), gt(G.$$.fragment), ot = rt(), nt = T("div"), at = T("span"), z = Mt(/*elapsedLabel*/
      e[20]), k = rt(), Y = T("span"), W = Mt(/*remainingLabel*/
      e[19]), _ = rt(), X = T("div"), gt(K.$$.fragment), j = rt(), gt(P.$$.fragment), V = rt(), gt(q.$$.fragment), s(i, "class", "now-playing-index svelte-w35jhk"), s(i, "data-testid", "now-playing-index"), s(p, "class", "now-playing-info svelte-w35jhk"), s(y, "data-testid", "now-playing-elapsed"), s(I, "data-testid", "now-playing-remaining"), s(M, "class", "progress-labels svelte-w35jhk"), s(A, "class", "time-and-progress svelte-w35jhk"), s(A, "aria-hidden", "true"), s(at, "data-testid", "now-playing-scrub-elapsed"), s(Y, "data-testid", "now-playing-scrub-remaining"), s(nt, "class", "progress-labels svelte-w35jhk"), s(nt, "aria-hidden", "true"), s(C, "class", "scrubbing-indicator svelte-w35jhk"), s(C, "data-testid", "now-playing-scrubber"), Nt(C, "inactive", /*indicator*/
      e[15] !== "scrubbing"), s(X, "class", "volume-labels svelte-w35jhk"), s(X, "data-testid", "now-playing-volume-labels"), Nt(X, "inactive", /*indicator*/
      e[15] !== "volume"), s(d, "class", "now-playing-progress svelte-w35jhk"), s(d, "data-testid", "now-playing-progress"), s(d, "data-mode", /*mode*/
      e[12]), s(t, "class", "now-playing svelte-w35jhk"), s(t, "data-testid", "now-playing"), s(t, "role", "group"), s(t, "aria-labelledby", "menu-title"), s(t, "tabindex", "0");
    },
    m(N, it) {
      ht(N, t, it), u(t, i), u(i, l), u(l, a), D && D.m(i, null), u(i, n), F && F.m(i, null), u(t, o), u(t, p), tt && tt.m(p, null), u(p, h), ct && ct.m(p, null), u(p, r), dt && dt.m(p, null), u(t, c), u(t, d), u(d, A), vt(f, A, null), u(A, g), u(A, M), u(M, y), u(y, w), u(M, E), u(M, I), u(I, x), u(d, U), u(d, C), vt(G, C, null), u(C, ot), u(C, nt), u(nt, at), u(at, z), u(nt, k), u(nt, Y), u(Y, W), u(d, _), u(d, X), vt(K, X, null), u(X, j), vt(P, X, null), u(X, V), vt(q, X, null), O = !0, lt || (L = Kt(Q = ln.call(null, t, /*shouldFocus*/
      e[11])), lt = !0);
    },
    p(N, it) {
      (!O || it[0] & /*positionLabel*/
      262144) && Ht(a, /*positionLabel*/
      N[18]), /*shuffleMode*/
      N[9] || /*repeatMode*/
      N[10] !== "none" ? D ? (D.p(N, it), it[0] & /*shuffleMode, repeatMode*/
      1536 && $(D, 1)) : (D = la(N), D.c(), $(D, 1), D.m(i, n)) : D && (Ae(), et(D, 1, 1, () => {
        D = null;
      }), fe()), /*playModesLabel*/
      N[17] ? F ? F.p(N, it) : (F = na(N), F.c(), F.m(i, null)) : F && (F.d(1), F = null), /*title*/
      N[1] ? tt ? (tt.p(N, it), it[0] & /*title*/
      2 && $(tt, 1)) : (tt = sa(N), tt.c(), $(tt, 1), tt.m(p, h)) : tt && (Ae(), et(tt, 1, 1, () => {
        tt = null;
      }), fe()), /*artistName*/
      N[4] ? ct ? ct.p(N, it) : (ct = oa(N), ct.c(), ct.m(p, r)) : ct && (ct.d(1), ct = null), /*albumName*/
      N[5] ? dt ? dt.p(N, it) : (dt = ha(N), dt.c(), dt.m(p, null)) : dt && (dt.d(1), dt = null);
      const Bt = {};
      it[0] & /*displayTime*/
      8192 && (Bt.value = /*displayTime*/
      N[13]), it[0] & /*duration*/
      64 && (Bt.max = /*duration*/
      N[6]), f.$set(Bt), (!O || it[0] & /*elapsedLabel*/
      1048576) && Ht(w, /*elapsedLabel*/
      N[20]), (!O || it[0] & /*remainingLabel*/
      524288) && Ht(x, /*remainingLabel*/
      N[19]);
      const S = {};
      it[0] & /*positionValue*/
      65536 && (S.value = /*positionValue*/
      N[16]), it[0] & /*duration*/
      64 && (S.max = /*duration*/
      N[6]), it[0] & /*isPositionDisabled*/
      256 && (S.disabled = /*isPositionDisabled*/
      N[8]), it[0] & /*$i18n*/
      16384 && (S.label = /*$i18n*/
      N[14].t("ASE.Web.IPod.NowPlaying.PlaybackProgress")), it[0] & /*positionValue, $i18n*/
      81920 && (S.valuetext = Zl(/*positionValue*/
      N[16], /*$i18n*/
      N[14])), G.$set(S), (!O || it[0] & /*elapsedLabel*/
      1048576) && Ht(z, /*elapsedLabel*/
      N[20]), (!O || it[0] & /*remainingLabel*/
      524288) && Ht(W, /*remainingLabel*/
      N[19]), (!O || it[0] & /*indicator*/
      32768) && Nt(C, "inactive", /*indicator*/
      N[15] !== "scrubbing");
      const st = {};
      it[0] & /*volume*/
      128 && (st.value = /*volume*/
      N[7]), it[0] & /*$i18n*/
      16384 && (st.label = /*$i18n*/
      N[14].t("ASE.Web.IPod.NowPlaying.Volume")), it[0] & /*$i18n, volume*/
      16512 && (st.valuetext = /*$i18n*/
      N[14].formatNumber(/*volume*/
      N[7] / 100, {
        style: "percent"
      })), P.$set(st), (!O || it[0] & /*indicator*/
      32768) && Nt(X, "inactive", /*indicator*/
      N[15] !== "volume"), (!O || it[0] & /*mode*/
      4096) && s(d, "data-mode", /*mode*/
      N[12]), Q && Pt(Q.update) && it[0] & /*shouldFocus*/
      2048 && Q.update.call(null, /*shouldFocus*/
      N[11]);
    },
    i(N) {
      O || ($(D), $(tt), $(f.$$.fragment, N), $(G.$$.fragment, N), $(K.$$.fragment, N), $(P.$$.fragment, N), $(q.$$.fragment, N), O = !0);
    },
    o(N) {
      et(D), et(tt), et(f.$$.fragment, N), et(G.$$.fragment, N), et(K.$$.fragment, N), et(P.$$.fragment, N), et(q.$$.fragment, N), O = !1;
    },
    d(N) {
      N && H(t), D && D.d(), F && F.d(), tt && tt.d(), ct && ct.d(), dt && dt.d(), yt(f), yt(G), yt(K), yt(P), yt(q), lt = !1, L();
    }
  };
}
function Xo(e, t, i) {
  let l,
    a,
    n,
    o,
    p,
    h,
    r,
    c,
    {
      songIndex: d
    } = t,
    {
      songCount: A
    } = t,
    {
      songId: f = void 0
    } = t,
    {
      title: g = void 0
    } = t,
    {
      titleUrl: M = void 0
    } = t,
    {
      navigateToUrl: y = void 0
    } = t,
    {
      artistName: w = void 0
    } = t,
    {
      albumName: E = void 0
    } = t,
    {
      currentTime: I = 0
    } = t,
    {
      duration: x = 0
    } = t,
    {
      isSeeking: U = !1
    } = t,
    {
      seekPreviewTime: C = void 0
    } = t,
    {
      isAdjustingVolume: G = !1
    } = t,
    {
      volume: ot = 50
    } = t,
    {
      isPositionDisabled: nt = !1
    } = t,
    {
      shuffleMode: at = !1
    } = t,
    {
      repeatMode: z = "none"
    } = t,
    {
      shouldFocus: k = !1
    } = t;
  const Y = getTranslator();
  Ut(e, Y, L => i(14, c = L));
  const W = {
    "shuffle-none": "ASE.Web.IPod.NowPlaying.ShuffleOn",
    "shuffle-one": "ASE.Web.IPod.NowPlaying.ShuffleOnRepeatOne",
    "shuffle-all": "ASE.Web.IPod.NowPlaying.ShuffleOnRepeatAll",
    "ordered-one": "ASE.Web.IPod.NowPlaying.RepeatOne",
    "ordered-all": "ASE.Web.IPod.NowPlaying.RepeatAll"
  };
  let _ = "progress",
    X = "volume";
  const K = Hi(),
    j = () => K("scrubfocus"),
    P = L => K("scrub", L.detail),
    V = () => K("scrubcommit"),
    q = () => K("scrubblur"),
    Q = () => K("volumefocus"),
    O = L => K("volume", L.detail),
    lt = () => K("volumeblur");
  return e.$$set = L => {
    "songIndex" in L && i(23, d = L.songIndex), "songCount" in L && i(24, A = L.songCount), "songId" in L && i(0, f = L.songId), "title" in L && i(1, g = L.title), "titleUrl" in L && i(2, M = L.titleUrl), "navigateToUrl" in L && i(3, y = L.navigateToUrl), "artistName" in L && i(4, w = L.artistName), "albumName" in L && i(5, E = L.albumName), "currentTime" in L && i(25, I = L.currentTime), "duration" in L && i(6, x = L.duration), "isSeeking" in L && i(26, U = L.isSeeking), "seekPreviewTime" in L && i(27, C = L.seekPreviewTime), "isAdjustingVolume" in L && i(28, G = L.isAdjustingVolume), "volume" in L && i(7, ot = L.volume), "isPositionDisabled" in L && i(8, nt = L.isPositionDisabled), "shuffleMode" in L && i(9, at = L.shuffleMode), "repeatMode" in L && i(10, z = L.repeatMode), "shouldFocus" in L && i(11, k = L.shouldFocus);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*isSeeking, seekPreviewTime, currentTime*/
    234881024 && i(13, l = U && C !== void 0 ? C : I), e.$$.dirty[0] & /*duration, displayTime, $i18n*/
    24640 && i(20, a = x > 0 ? sn(l, c) : ""), e.$$.dirty[0] & /*displayTime, duration, $i18n*/
    24640 && i(19, n = ro(l, x, c)), e.$$.dirty[0] & /*$i18n, songIndex, songCount*/
    25182208 && i(18, o = c.t("ASE.Web.IPod.NowPlaying.Position", {
      index: c.formatNumber(d),
      total: c.formatNumber(A)
    })), e.$$.dirty[0] & /*shuffleMode, repeatMode*/
    1536 && i(29, p = W[`${at ? "shuffle" : "ordered"}-${z}`]), e.$$.dirty[0] & /*playModesKey, $i18n*/
    536887296 && i(17, h = p ? c.t(p) : ""), e.$$.dirty[0] & /*isAdjustingVolume, isSeeking*/
    335544320 && (G ? i(12, _ = "volume") : U ? i(12, _ = "scrubbing") : i(12, _ = "progress")), e.$$.dirty[0] & /*mode*/
    4096 && _ !== "progress" && i(15, X = _), e.$$.dirty[0] & /*duration, displayTime*/
    8256 && i(16, r = x > 0 ? Math.floor(l) : 0);
  }, [f, g, M, y, w, E, x, ot, nt, at, z, k, _, l, c, X, r, h, o, n, a, Y, K, d, A, I, U, C, G, p, j, P, V, q, Q, O, lt];
}
class hn extends SvelteComponent {
  constructor(t) {
    super(), initComponent(this, t, Xo, Yo, bt, {
      songIndex: 23,
      songCount: 24,
      songId: 0,
      title: 1,
      titleUrl: 2,
      navigateToUrl: 3,
      artistName: 4,
      albumName: 5,
      currentTime: 25,
      duration: 6,
      isSeeking: 26,
      seekPreviewTime: 27,
      isAdjustingVolume: 28,
      volume: 7,
      isPositionDisabled: 8,
      shuffleMode: 9,
      repeatMode: 10,
      shouldFocus: 11
    }, Vo, [-1, -1]);
  }
  get songIndex() {
    return this.$$.ctx[23];
  }
  set songIndex(t) {
    this.$$set({
      songIndex: t
    }), flush();
  }
  get songCount() {
    return this.$$.ctx[24];
  }
  set songCount(t) {
    this.$$set({
      songCount: t
    }), flush();
  }
  get songId() {
    return this.$$.ctx[0];
  }
  set songId(t) {
    this.$$set({
      songId: t
    }), flush();
  }
  get title() {
    return this.$$.ctx[1];
  }
  set title(t) {
    this.$$set({
      title: t
    }), flush();
  }
  get titleUrl() {
    return this.$$.ctx[2];
  }
  set titleUrl(t) {
    this.$$set({
      titleUrl: t
    }), flush();
  }
  get navigateToUrl() {
    return this.$$.ctx[3];
  }
  set navigateToUrl(t) {
    this.$$set({
      navigateToUrl: t
    }), flush();
  }
  get artistName() {
    return this.$$.ctx[4];
  }
  set artistName(t) {
    this.$$set({
      artistName: t
    }), flush();
  }
  get albumName() {
    return this.$$.ctx[5];
  }
  set albumName(t) {
    this.$$set({
      albumName: t
    }), flush();
  }
  get currentTime() {
    return this.$$.ctx[25];
  }
  set currentTime(t) {
    this.$$set({
      currentTime: t
    }), flush();
  }
  get duration() {
    return this.$$.ctx[6];
  }
  set duration(t) {
    this.$$set({
      duration: t
    }), flush();
  }
  get isSeeking() {
    return this.$$.ctx[26];
  }
  set isSeeking(t) {
    this.$$set({
      isSeeking: t
    }), flush();
  }
  get seekPreviewTime() {
    return this.$$.ctx[27];
  }
  set seekPreviewTime(t) {
    this.$$set({
      seekPreviewTime: t
    }), flush();
  }
  get isAdjustingVolume() {
    return this.$$.ctx[28];
  }
  set isAdjustingVolume(t) {
    this.$$set({
      isAdjustingVolume: t
    }), flush();
  }
  get volume() {
    return this.$$.ctx[7];
  }
  set volume(t) {
    this.$$set({
      volume: t
    }), flush();
  }
  get isPositionDisabled() {
    return this.$$.ctx[8];
  }
  set isPositionDisabled(t) {
    this.$$set({
      isPositionDisabled: t
    }), flush();
  }
  get shuffleMode() {
    return this.$$.ctx[9];
  }
  set shuffleMode(t) {
    this.$$set({
      shuffleMode: t
    }), flush();
  }
  get repeatMode() {
    return this.$$.ctx[10];
  }
  set repeatMode(t) {
    this.$$set({
      repeatMode: t
    }), flush();
  }
  get shouldFocus() {
    return this.$$.ctx[11];
  }
  set shouldFocus(t) {
    this.$$set({
      shouldFocus: t
    }), flush();
  }
}
defineSvelteElement(hn, {
  songIndex: {},
  songCount: {},
  songId: {},
  title: {},
  titleUrl: {},
  navigateToUrl: {},
  artistName: {},
  albumName: {},
  currentTime: {},
  duration: {},
  isSeeking: {
    type: "Boolean"
  },
  seekPreviewTime: {},
  isAdjustingVolume: {
    type: "Boolean"
  },
  volume: {},
  isPositionDisabled: {
    type: "Boolean"
  },
  shuffleMode: {
    type: "Boolean"
  },
  repeatMode: {},
  shouldFocus: {
    type: "Boolean"
  }
}, [], [], !0);
const Se = 148,
  We = 101,
  Zi = 30,
  Ml = 4,
  Dt = 1.5,
  xi = 4,
  Bi = 12,
  rn = 2,
  Zo = 4,
  cn = 3,
  Jo = 3,
  Di = (Se - cn * 2 - (Bi - 1) * rn) / Bi,
  $o = 2,
  th = 5,
  eh = 3,
  ih = 1e3,
  lh = 40,
  ah = 0.1,
  nh = 1.5,
  Ji = 1.7,
  sh = Math.hypot(Ji, Ji),
  oh = 0.25,
  hh = 0.8,
  wl = Se - Zi,
  ra = We - Ml;
function ca(e, t, i) {
  return Math.min(Math.max(e, t), i);
}
function pn(e) {
  return lh / Math.min(1 + (e - 1) * ah, nh);
}
function dn(e) {
  const t = Math.min($o + e - 1, th),
    i = [];
  for (let l = 0; l < t; l += 1) for (let a = 0; a < Bi; a += 1) i.push({
    x: cn + a * (Di + rn),
    y: Jo + l * (xi + Zo),
    destroyed: !1
  });
  return i;
}
function An() {
  return {
    x: Dt,
    y: We / 2,
    dx: Ji,
    dy: Ji
  };
}
function pa() {
  return {
    paddleX: wl / 2,
    ball: An(),
    isBallInPlay: !1,
    serveTicks: 0,
    bricks: dn(1),
    score: 0,
    balls: eh,
    level: 1,
    isGameOver: !1
  };
}
function rh() {
  const e = pa();
  function t() {
    e.ball = An(), e.isBallInPlay = !1, e.serveTicks = Math.round(ih / pn(e.level));
  }
  function i() {
    e.balls -= 1, e.balls > 0 ? t() : (e.isBallInPlay = !1, e.isGameOver = !0);
  }
  function l() {
    e.level += 1, e.bricks = dn(e.level), t();
  }
  function a() {
    const {
        ball: c
      } = e,
      d = Zi / 2,
      A = ca((c.x - (e.paddleX + d)) / d, -1, 1),
      f = sh * (1 + Math.abs(A) * oh),
      g = A * hh,
      M = Math.hypot(g, 1);
    c.dx = g / M * f, c.dy = -f / M;
  }
  function n(c) {
    var U;
    const {
        ball: d,
        bricks: A
      } = e,
      {
        x: f,
        y: g,
        destroyed: M
      } = A[c],
      y = c - Math.sign(d.dx);
    if (M || d.x + Dt < f || d.x - Dt > f + Di || d.y + Dt < g || d.y - Dt > g + xi) return null;
    const w = d.dx > 0 ? d.x + Dt - f : f + Di - d.x + Dt,
      E = d.dy > 0 ? d.y + Dt - g : g + xi - d.y + Dt;
    return !(Math.floor(y / Bi) === Math.floor(c / Bi) && ((U = A[y]) == null ? void 0 : U.destroyed) === !1) && w * Math.abs(d.dy) < E * Math.abs(d.dx) ? (f + Di / 2 - d.x) * d.dx > 0 ? "side" : null : (g + xi / 2 - d.y) * d.dy > 0 ? "face" : null;
  }
  function o() {
    const {
      ball: c
    } = e;
    for (const [d, A] of e.bricks.entries()) {
      const f = n(d);
      if (f) return A.destroyed = !0, e.score += 1, f === "face" ? c.dy = -c.dy : c.dx = -c.dx, !0;
    }
    return !1;
  }
  function p() {
    const {
      ball: c
    } = e;
    if (e.serveTicks > 0 && (e.serveTicks -= 1, e.isBallInPlay = e.serveTicks === 0), !e.isBallInPlay) return;
    const d = c.y + Dt < ra;
    if (c.x += c.dx, c.y += c.dy, (c.x <= Dt && c.dx < 0 || c.x >= Se - Dt && c.dx > 0) && (c.dx = -c.dx), c.y <= Dt && c.dy < 0 && (c.dy = -c.dy), c.y >= We) {
      i();
      return;
    }
    c.dy > 0 && d && c.y + Dt >= ra && c.x + Dt >= e.paddleX && c.x - Dt <= e.paddleX + Zi && a(), o() && e.bricks.every(({
      destroyed: A
    }) => A) && l();
  }
  function h(c) {
    e.isGameOver || (e.paddleX = ca(e.paddleX + c * wl, 0, wl));
  }
  function r() {
    e.isGameOver ? Object.assign(e, pa()) : (e.isBallInPlay = !0, e.serveTicks = 0);
  }
  return {
    state: e,
    movePaddle: h,
    launchBall: r,
    tick: p
  };
}
const ch = 20,
  ph = 70,
  dh = 25,
  da = 1 / 255,
  Ah = 1,
  fn = 2;
function fh(e, t) {
  const i = new Uint8Array(e * t),
    l = new Float32Array(e * t),
    a = new Float32Array(e * t),
    n = new Uint8Array(e * t);
  function o(h) {
    const r = 1 - Math.exp(-h / ch),
      c = 1 - Math.exp(-h / ph),
      d = 1 - Math.exp(-h / dh);
    let A = !1;
    for (let f = 0; f < a.length; f += 1) {
      const g = i[f] === 0 ? 0 : 1;
      if (n[f] = i[f] || n[f], Math.abs(g - l[f]) > da || Math.abs(g - a[f]) > da) {
        const M = n[f] === fn ? d : c,
          y = g - l[f];
        l[f] += y * (y > 0 ? r : M);
        const w = l[f] - a[f];
        a[f] += w * (w > 0 ? r : M), A = !0;
      } else A || (A = l[f] !== g || a[f] !== g), l[f] = g, a[f] = g;
    }
    return A;
  }
  function p() {
    for (let h = 0; h < a.length; h += 1) n[h] = i[h] || n[h], l[h] = i[h] === 0 ? 0 : 1, a[h] = l[h];
  }
  return {
    width: e,
    height: t,
    drive: i,
    ink: a,
    fade: o,
    settle: p
  };
}
const uh = 0.7,
  vh = 3;
function Aa(e, t) {
  const i = Math.round((e + 0.5) / t) * t;
  return 1 - (1 - uh) * Math.max(0, 1 - Math.abs(e + 0.5 - i));
}
function yh(e, t) {
  const i = e.getContext("2d");
  let l,
    a = new Int32Array(0),
    n = new Float32Array(0),
    o;
  function p() {
    const {
        width: f,
        height: g
      } = e,
      M = f / t.width,
      y = M > 1;
    a = new Int32Array(f * g), n = new Float32Array(f * g);
    for (let w = 0; w < g; w += 1) {
      const E = Math.min(Math.floor((w + 0.5) / M), t.height - 1),
        I = y ? Aa(w, M) : 1;
      for (let x = 0; x < f; x += 1) {
        const U = Math.floor((x + 0.5) / M),
          C = y ? Aa(x, M) : 1;
        a[w * f + x] = E * t.width + U, n[w * f + x] = I * C * 255;
      }
    }
  }
  function h() {
    if (i && l) {
      for (let f = 0; f < a.length; f += 1) l.data[f * 4 + 3] = t.ink[a[f]] * n[f];
      i.putImageData(l, 0, 0);
    }
  }
  function r() {
    var w;
    const f = getComputedStyle(e),
      g = Number(f.getPropertyValue("--ipod-scale")) || 1,
      M = Math.round(e.clientWidth * g * devicePixelRatio),
      y = M >= t.width * vh ? M : t.width;
    if (!(l && y === e.width)) {
      if (e.width = y, e.height = Math.round(y * t.height / t.width), p(), l = i == null ? void 0 : i.createImageData(e.width, e.height), l) {
        const [E = 0, I = 0, x = 0] = ((w = f.color.match(/\d+/g)) == null ? void 0 : w.map(Number)) ?? [];
        for (let U = 0; U < l.data.length; U += 4) l.data.set([E, I, x], U);
      }
      h();
    }
  }
  function c() {
    o == null || o.removeEventListener("change", c), o = matchMedia(`(resolution: ${devicePixelRatio}dppx)`), o.addEventListener("change", c), r();
  }
  const d = e.getRootNode(),
    A = new ResizeObserver(() => r());
  return A.observe(d instanceof ShadowRoot ? d.host : document.documentElement), c(), {
    paint: h,
    destroy() {
      A.disconnect(), o == null || o.removeEventListener("change", c);
    }
  };
}
function gh(e) {
  appendStyles(e, "svelte-80k3la", ".brick-game-screen.svelte-80k3la{height:180px;margin-top:1.7px;padding:0 5px;opacity:var(--ipod-screen-opacity, 1)}.game-area.svelte-80k3la{display:block;width:100%;color:#484647;image-rendering:pixelated}.game-message.svelte-80k3la{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip-path:inset(50%);white-space:nowrap}");
}
function mh(e) {
  let t, i, l, a, n;
  return {
    c() {
      t = T("div"), i = T("canvas"), l = rt(), a = T("p"), n = Mt(/*message*/
      e[1]), s(i, "class", "game-area svelte-80k3la"), s(i, "data-testid", "game-area"), s(i, "aria-hidden", "true"), s(i, "width", Se), s(i, "height", We), s(a, "class", "game-message svelte-80k3la"), s(a, "data-testid", "game-message"), s(a, "role", "status"), s(t, "class", "brick-game-screen svelte-80k3la"), s(t, "data-testid", "brick-game");
    },
    m(o, p) {
      ht(o, t, p), u(t, i), e[11](i), u(t, l), u(t, a), u(a, n);
    },
    p(o, [p]) {
      p & /*message*/
      2 && Ht(n, /*message*/
      o[1]);
    },
    i: noop,
    o: noop,
    d(o) {
      o && H(t), e[11](null);
    }
  };
}
const bh = 10;
function Mh(e, t, i) {
  let l,
    {
      paused: a = !1
    } = t,
    {
      score: n = 0
    } = t,
    {
      balls: o = 0
    } = t;
  const p = getTranslator();
  Ut(e, p, W => i(10, l = W));
  const h = rh(),
    r = fh(Se, We);
  let {
      state: c
    } = h,
    d,
    A,
    f,
    g,
    M = 0,
    y = !1,
    w = 0,
    E = !1;
  function I() {
    i(9, c = h.state), i(3, {
      score: n,
      balls: o
    } = c, n, i(4, o));
  }
  function x(W, _, X, K, j = Ah) {
    const P = Math.round(W),
      V = Math.round(_),
      q = Math.max(P, 0),
      Q = Math.min(P + X, Se),
      O = Math.min(V + K, We);
    for (let lt = Math.max(V, 0); lt < O; lt += 1) r.drive.fill(j, lt * Se + q, lt * Se + Q);
  }
  function U() {
    r.drive.fill(0);
    for (const W of c.bricks) W.destroyed || x(W.x, W.y, Di, xi);
    x(c.paddleX, We - Ml, Zi, Ml, fn), x(c.ball.x - Dt, c.ball.y - Dt, Dt * 2, Dt * 2), y = !1;
  }
  function C(W) {
    const _ = g === void 0 ? 0 : W - g,
      X = pn(c.level);
    g = W, M = Math.min(M + _, X * bh);
    let K = !1;
    for (; M >= X;) M -= X, K = !0, a || (h.movePaddle(w * Nl), E || (E = w !== 0), h.tick());
    K && (U(), I());
    const j = r.fade(_);
    (K || j) && (A == null || A.paint()), f = (c.isBallInPlay || c.serveTicks > 0) && !a || y || j || w !== 0 && !a ? requestAnimationFrame(C) : void 0;
  }
  function G() {
    f === void 0 && (g = void 0, f = requestAnimationFrame(C));
  }
  function ot() {
    f !== void 0 && (cancelAnimationFrame(f), f = void 0);
  }
  function nt(W) {
    h.movePaddle(W), y = !0, G();
  }
  function at(W) {
    W === 0 && !E && !a && nt(w * Nl), w = W, E = !1, G();
  }
  function z() {
    h.launchBall(), y = !0, I(), G();
  }
  Ra(() => (U(), r.settle(), A = yh(d, r), () => A == null ? void 0 : A.destroy())), I(), onDestroy(ot);
  let k = "";
  function Y(W) {
    Jt[W ? "unshift" : "push"](() => {
      d = W, i(0, d);
    });
  }
  return e.$$set = W => {
    "paused" in W && i(5, a = W.paused), "score" in W && i(3, n = W.score), "balls" in W && i(4, o = W.balls);
  }, e.$$.update = () => {
    e.$$.dirty & /*paused*/
    32 && (a || G()), e.$$.dirty & /*state, $i18n*/
    1536 && (c.isGameOver ? i(1, k = l.t("ASE.Web.IPod.Game.GameOver")) : c.isBallInPlay || c.serveTicks > 0 ? i(1, k = "") : i(1, k = l.t("ASE.Web.IPod.Game.LaunchBall")));
  }, [d, k, p, n, o, a, nt, at, z, c, l, Y];
}
class un extends SvelteComponent {
  constructor(t) {
    super(), initComponent(this, t, Mh, mh, bt, {
      paused: 5,
      score: 3,
      balls: 4,
      movePaddle: 6,
      steerPaddle: 7,
      launchBall: 8
    }, gh);
  }
  get paused() {
    return this.$$.ctx[5];
  }
  set paused(t) {
    this.$$set({
      paused: t
    }), flush();
  }
  get score() {
    return this.$$.ctx[3];
  }
  set score(t) {
    this.$$set({
      score: t
    }), flush();
  }
  get balls() {
    return this.$$.ctx[4];
  }
  set balls(t) {
    this.$$set({
      balls: t
    }), flush();
  }
  get movePaddle() {
    return this.$$.ctx[6];
  }
  get steerPaddle() {
    return this.$$.ctx[7];
  }
  get launchBall() {
    return this.$$.ctx[8];
  }
}
defineSvelteElement(un, {
  paused: {
    type: "Boolean"
  },
  score: {},
  balls: {}
}, [], ["movePaddle", "steerPaddle", "launchBall"], !0);
function vn({
  timeoutMs: e,
  isActive: t,
  enter: i,
  onLeave: l
}) {
  let a = !1,
    n;
  function o() {
    t() && (n.stop(), l());
  }
  n = Il(e, o);
  function p() {
    a || n.start();
  }
  function h() {
    a = !0, n.stop(), t() || i();
  }
  function r() {
    a = !1, t() && n.start();
  }
  function c() {
    a = !1, o();
  }
  function d() {
    const f = a;
    o(), f && i();
  }
  function A(f) {
    f || c();
  }
  return {
    restartIdleTimer: p,
    keepOpen: h,
    release: r,
    exit: c,
    reenter: d,
    handleScreenChange: A,
    destroy: n.destroy
  };
}
const fa = {
  isSeeking: !1,
  seekPreviewTime: void 0
};
function wh(e) {
  const t = writable(fa),
    i = Ja(yl);
  let l,
    a,
    n,
    o,
    p = !1,
    h = 0,
    r;
  function c() {
    if (clearTimeout(a), a = void 0, l === void 0) return;
    const z = l;
    l = void 0;
    const k = ++h;
    e.seek(z).then(() => {
      t.update(Y => k === h ? {
        ...Y,
        seekPreviewTime: void 0
      } : Y);
    });
  }
  function d() {
    clearTimeout(a), a = setTimeout(c, As);
  }
  function A() {
    c(), n = void 0, o = void 0, p = !1, t.set(fa);
  }
  function f() {
    clearTimeout(a), a = void 0, l = void 0;
  }
  function g() {
    return getStoreValue(t);
  }
  function M() {
    const {
      currentTrackIndex: z,
      queue: k
    } = getStoreValue(e);
    n = z, o = k, r.restartIdleTimer(), t.set({
      isSeeking: !0,
      seekPreviewTime: void 0
    });
  }
  r = vn({
    timeoutMs: fs,
    isActive: () => g().isSeeking,
    enter: M,
    onLeave: A
  });
  function y() {
    if (g().isSeeking) {
      r.exit();
      return;
    }
    M();
  }
  function w() {
    c(), r.release();
  }
  function E() {
    return g().seekPreviewTime ?? Math.floor(getStoreValue(e).currentPlaybackTime);
  }
  function I(z) {
    if (!g().isSeeking) return !1;
    const k = E(),
      {
        currentPlaybackDuration: Y
      } = getStoreValue(e),
      W = Y > 0 ? Y : 1 / 0,
      _ = Math.min(W, Math.max(0, Math.round(z)));
    return r.restartIdleTimer(), _ === k ? !1 : (l = _, h += 1, p || d(), t.update(X => ({
      ...X,
      seekPreviewTime: _
    })), !0);
  }
  function x(z) {
    return I(E() + z * ds);
  }
  function U(z, k) {
    const {
      isSeeking: Y
    } = g();
    return Y && r.restartIdleTimer(), i.next(z, k, Y);
  }
  function C(z) {
    return El(yl, z);
  }
  function G() {
    p = !0, clearTimeout(a), a = void 0;
  }
  function ot() {
    p = !1, l !== void 0 && d();
  }
  const nt = e.subscribe(({
    currentTrackIndex: z,
    queue: k,
    currentPlaybackDuration: Y,
    hasLoadedItem: W
  }) => {
    if (!g().isSeeking) return;
    if (z !== n || k !== o) {
      f(), W ? r.reenter() : r.exit();
      return;
    }
    const {
      seekPreviewTime: _
    } = g();
    Y > 0 && _ !== void 0 && _ > Y && (l !== void 0 && (l = Y), t.update(X => ({
      ...X,
      seekPreviewTime: Y
    })));
  });
  function at() {
    c(), r.destroy(), nt();
  }
  return {
    subscribe: t.subscribe,
    peek: g,
    toggle: y,
    seek: x,
    seekTo: I,
    commit: c,
    keepOpen: r.keepOpen,
    release: w,
    exit: r.exit,
    handleDragStart: G,
    handleDragEnd: ot,
    handleScreenChange: r.handleScreenChange,
    accelerate: U,
    accelerateHold: C,
    destroy: at
  };
}
const kh = Object.values(ShuffleMode),
  Ph = Object.values(RepeatMode),
  Eh = Object.values(ClickerMode);
function yn(e) {
  return [{
    id: "no-music",
    title: e.t("ASE.Web.IPod.Menu.NoMusic"),
    action: "info",
    centered: !0
  }];
}
function _l(e, t) {
  return e.length ? e : yn(t);
}
function Ee(e, t) {
  return {
    id: e,
    // eslint-disable-next-line no-use-before-define -- read at call time
    title: t.t(menuDefinitions[e].titleKey),
    action: "navigate",
    target: e
  };
}
function Ih(e, t) {
  return {
    id: e,
    title: t,
    action: "toggle",
    target: e
  };
}
function ol(e, t, i) {
  return {
    id: e,
    title: t,
    action: "inline-toggle",
    toggleKey: e,
    values: i
  };
}

export { en, xl, Ni, so, ho, nn, on, hn, un, vn, wh, kh, Ph, Eh, yn, _l, Ee, Ih, ol };
