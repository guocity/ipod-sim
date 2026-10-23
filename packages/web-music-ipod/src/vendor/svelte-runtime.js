// Reconstructed compiled Svelte code. See the package README for provenance.
import { Zt } from './object-helpers.js';

function noop() {}
const Da = e => e;
function pt(e, t) {
  for (const i in t) e[i] = t[i];
  return /** @type {T & S} */e;
}
function _a(e) {
  return e();
}
function Ll() {
  return /* @__PURE__ */Object.create(null);
}
function ue(e) {
  e.forEach(_a);
}
function Pt(e) {
  return typeof e == "function";
}
function bt(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Hn(e) {
  return Object.keys(e).length === 0;
}
function Ii(e, ...t) {
  if (e == null) {
    for (const l of t) l(void 0);
    return noop;
  }
  const i = e.subscribe(...t);
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
function getStoreValue(e) {
  let t;
  return Ii(e, i => t = i)(), t;
}
function Ut(e, t, i) {
  e.$$.on_destroy.push(Ii(t, i));
}
function _t(e) {
  const t = {};
  for (const i in e) i[0] !== "$" && (t[i] = e[i]);
  return t;
}
function Kt(e) {
  return e && Pt(e.destroy) ? e.destroy : noop;
}
const Ca = typeof window < "u";
let Ba = Ca ? () => window.performance.now() : () => Date.now(),
  kl = Ca ? e => requestAnimationFrame(e) : noop;
const Xe = /* @__PURE__ */new Set();
function Ta(e) {
  Xe.forEach(t => {
    t.c(e) || (Xe.delete(t), t.f());
  }), Xe.size !== 0 && kl(Ta);
}
function Ha(e) {
  let t;
  return Xe.size === 0 && kl(Ta), {
    promise: new Promise(i => {
      Xe.add(t = {
        c: e,
        f: i
      });
    }),
    abort() {
      Xe.delete(t);
    }
  };
}
const Ln = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis :
// @ts-ignore Node typings have this
global;
let $i = !1;
function zn() {
  $i = !0;
}
function Qn() {
  $i = !1;
}
function On(e, t, i, l) {
  for (; e < t;) {
    const a = e + (t - e >> 1);
    i(a) <= l ? e = a + 1 : t = a;
  }
  return e;
}
function Nn(e) {
  if (e.hydrate_init) return;
  e.hydrate_init = !0;
  let t = /** @type {ArrayLike<NodeEx2>} */
  e.childNodes;
  if (e.nodeName === "HEAD") {
    const h = [];
    for (let r = 0; r < t.length; r++) {
      const c = t[r];
      c.claim_order !== void 0 && h.push(c);
    }
    t = h;
  }
  const i = new Int32Array(t.length + 1),
    l = new Int32Array(t.length);
  i[0] = -1;
  let a = 0;
  for (let h = 0; h < t.length; h++) {
    const r = t[h].claim_order,
      c = (a > 0 && t[i[a]].claim_order <= r ? a + 1 : On(1, a, A => t[i[A]].claim_order, r)) - 1;
    l[h] = i[c] + 1;
    const d = c + 1;
    i[d] = h, a = Math.max(d, a);
  }
  const n = [],
    o = [];
  let p = t.length - 1;
  for (let h = i[a] + 1; h != 0; h = l[h - 1]) {
    for (n.push(t[h - 1]); p >= h; p--) o.push(t[p]);
    p--;
  }
  for (; p >= 0; p--) o.push(t[p]);
  n.reverse(), o.sort((h, r) => h.claim_order - r.claim_order);
  for (let h = 0, r = 0; h < o.length; h++) {
    for (; r < n.length && o[h].claim_order >= n[r].claim_order;) r++;
    const c = r < n.length ? n[r] : null;
    e.insertBefore(o[h], c);
  }
}
function u(e, t) {
  e.appendChild(t);
}
function appendStyles(e, t, i) {
  const l = Pl(e);
  if (!l.getElementById(t)) {
    const a = T("style");
    a.id = t, a.textContent = i, La(l, a);
  }
}
function Pl(e) {
  if (!e) return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (/** @type {ShadowRoot} */
  t) : e.ownerDocument;
}
function Rn(e) {
  const t = T("style");
  return t.textContent = "/* empty */", La(Pl(e), t), t.sheet;
}
function La(e, t) {
  return u(/** @type {Document} */
  e.head || e, t), t.sheet;
}
function jt(e, t) {
  if ($i) {
    for (Nn(e), (e.actual_end_child === void 0 || e.actual_end_child !== null && e.actual_end_child.parentNode !== e) && (e.actual_end_child = e.firstChild); e.actual_end_child !== null && e.actual_end_child.claim_order === void 0;) e.actual_end_child = e.actual_end_child.nextSibling;
    t !== e.actual_end_child ? (t.claim_order !== void 0 || t.parentNode !== e) && e.insertBefore(t, e.actual_end_child) : e.actual_end_child = t.nextSibling;
  } else (t.parentNode !== e || t.nextSibling !== null) && e.appendChild(t);
}
function ht(e, t, i) {
  e.insertBefore(t, i || null);
}
function ve(e, t, i) {
  $i && !i ? jt(e, t) : (t.parentNode !== e || t.nextSibling != i) && e.insertBefore(t, i || null);
}
function H(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Wn(e, t) {
  for (let i = 0; i < e.length; i += 1) e[i] && e[i].d(t);
}
function T(e) {
  return document.createElement(e);
}
function v(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function Mt(e) {
  return document.createTextNode(e);
}
function rt() {
  return Mt(" ");
}
function za() {
  return Mt("");
}
function ut(e, t, i, l) {
  return e.addEventListener(t, i, l), () => e.removeEventListener(t, i, l);
}
function s(e, t, i) {
  i == null ? e.removeAttribute(t) : e.getAttribute(t) !== i && e.setAttribute(t, i);
}
function Ct(e, t) {
  for (const i in t) s(e, i, t[i]);
}
function jn(e, t, i) {
  e.setAttributeNS("http://www.w3.org/1999/xlink", t, i);
}
function mt(e) {
  return Array.from(e.childNodes);
}
function Fn(e) {
  e.claim_info === void 0 && (e.claim_info = {
    last_index: 0,
    total_claimed: 0
  });
}
function Qa(e, t, i, l, a = !1) {
  Fn(e);
  const n = (() => {
    for (let o = e.claim_info.last_index; o < e.length; o++) {
      const p = e[o];
      if (t(p)) {
        const h = i(p);
        return h === void 0 ? e.splice(o, 1) : e[o] = h, a || (e.claim_info.last_index = o), p;
      }
    }
    for (let o = e.claim_info.last_index - 1; o >= 0; o--) {
      const p = e[o];
      if (t(p)) {
        const h = i(p);
        return h === void 0 ? e.splice(o, 1) : e[o] = h, a ? h === void 0 && e.claim_info.last_index-- : e.claim_info.last_index = o, p;
      }
    }
    return l();
  })();
  return n.claim_order = e.claim_info.total_claimed, e.claim_info.total_claimed += 1, n;
}
function Vn(e, t, i, l) {
  return Qa(e, /** @returns {node is Element | SVGElement} */
  a => a.nodeName === t, /** @param {Element} node */
  a => {
    const n = [];
    for (let o = 0; o < a.attributes.length; o++) {
      const p = a.attributes[o];
      i[p.name] || n.push(p.name);
    }
    n.forEach(o => a.removeAttribute(o));
  }, () => l(t));
}
function wt(e, t, i) {
  return Vn(e, t, i, v);
}
function qn(e, t) {
  return Qa(e, /** @returns {node is Text} */
  i => i.nodeType === 3, /** @param {Text} node */
  i => {
    const l = "" + t;
    if (i.data.startsWith(l)) {
      if (i.data.length !== l.length) return i.splitText(l.length);
    } else i.data = l;
  }, () => Mt(t), !0
  // Text nodes should not update last index since it is likely not worth it to eliminate an increasing subsequence of actual elements
  );
}
function Ht(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function m(e, t, i, l) {
  i == null ? e.style.removeProperty(t) : e.style.setProperty(t, i, "");
}
function Nt(e, t, i) {
  e.classList.toggle(t, !!i);
}
function Oa(e, t, {
  bubbles: i = !1,
  cancelable: l = !1
} = {}) {
  return new CustomEvent(e, {
    detail: t,
    bubbles: i,
    cancelable: l
  });
}
function Un(e) {
  const t = {};
  return e.childNodes.forEach(/** @param {Element} node */
  i => {
    t[i.slot || "default"] = !0;
  }), t;
}
const Ui = /* @__PURE__ */new Map();
let Ki = 0;
function Kn(e) {
  let t = 5381,
    i = e.length;
  for (; i--;) t = (t << 5) - t ^ e.charCodeAt(i);
  return t >>> 0;
}
function Gn(e, t) {
  const i = {
    stylesheet: Rn(t),
    rules: {}
  };
  return Ui.set(e, i), i;
}
function Na(e, t, i, l, a, n, o, p = 0) {
  const h = 16.666 / l;
  let r = `{
`;
  for (let y = 0; y <= 1; y += h) {
    const w = t + (i - t) * n(y);
    r += y * 100 + `%{${o(w, 1 - w)}}
`;
  }
  const c = r + `100% {${o(i, 1 - i)}}
}`,
    d = `__svelte_${Kn(c)}_${p}`,
    A = Pl(e),
    {
      stylesheet: f,
      rules: g
    } = Ui.get(A) || Gn(A, e);
  g[d] || (g[d] = !0, f.insertRule(`@keyframes ${d} ${c}`, f.cssRules.length));
  const M = e.style.animation || "";
  return e.style.animation = `${M ? `${M}, ` : ""}${d} ${l}ms linear ${a}ms 1 both`, Ki += 1, d;
}
function dl(e, t) {
  const i = (e.style.animation || "").split(", "),
    l = i.filter(t ? n => n.indexOf(t) < 0 : n => n.indexOf("__svelte") === -1
    // remove all Svelte animations
    ),
    a = i.length - l.length;
  a && (e.style.animation = l.join(", "), Ki -= a, Ki || Yn());
}
function Yn() {
  kl(() => {
    Ki || (Ui.forEach(e => {
      const {
        ownerNode: t
      } = e.stylesheet;
      t && H(t);
    }), Ui.clear());
  });
}
let _i;
function Si(e) {
  _i = e;
}
function Ti() {
  if (!_i) throw new Error("Function called outside component initialization");
  return _i;
}
function Ra(e) {
  Ti().$$.on_mount.push(e);
}
function onDestroy(e) {
  Ti().$$.on_destroy.push(e);
}
function Hi() {
  const e = Ti();
  return (t, i, {
    cancelable: l = !1
  } = {}) => {
    const a = e.$$.callbacks[t];
    if (a) {
      const n = Oa(/** @type {string} */
      t, i, {
        cancelable: l
      });
      return a.slice().forEach(o => {
        o.call(e, n);
      }), !n.defaultPrevented;
    }
    return !0;
  };
}
function Xn(e, t) {
  return Ti().$$.context.set(e, t), t;
}
function Zn(e) {
  return Ti().$$.context.get(e);
}
function ll(e, t) {
  const i = e.$$.callbacks[t.type];
  i && i.slice().forEach(l => l.call(this, t));
}
const Ye = [],
  Jt = [];
let Ze = [];
const Al = [],
  Wa = /* @__PURE__ */Promise.resolve();
let fl = !1;
function ja() {
  fl || (fl = !0, Wa.then(flush));
}
function tick() {
  return ja(), Wa;
}
function $e(e) {
  Ze.push(e);
}
function Gi(e) {
  Al.push(e);
}
const al = /* @__PURE__ */new Set();
let qe = 0;
function flush() {
  if (qe !== 0) return;
  const e = _i;
  do {
    try {
      for (; qe < Ye.length;) {
        const t = Ye[qe];
        qe++, Si(t), $n(t.$$);
      }
    } catch (t) {
      throw Ye.length = 0, qe = 0, t;
    }
    for (Si(null), Ye.length = 0, qe = 0; Jt.length;) Jt.pop()();
    for (let t = 0; t < Ze.length; t += 1) {
      const i = Ze[t];
      al.has(i) || (al.add(i), i());
    }
    Ze.length = 0;
  } while (Ye.length);
  for (; Al.length;) Al.pop()();
  fl = !1, al.clear(), Si(e);
}
function $n(e) {
  if (e.fragment !== null) {
    e.update(), ue(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach($e);
  }
}
function ts(e) {
  const t = [],
    i = [];
  Ze.forEach(l => e.indexOf(l) === -1 ? t.push(l) : i.push(l)), i.forEach(l => l()), Ze = t;
}
let Pi;
function Fa() {
  return Pi || (Pi = Promise.resolve(), Pi.then(() => {
    Pi = null;
  })), Pi;
}
function Yi(e, t, i) {
  e.dispatchEvent(Oa(`${t ? "intro" : "outro"}${i}`));
}
const ji = /* @__PURE__ */new Set();
let Ie;
function Ae() {
  Ie = {
    r: 0,
    c: [],
    p: Ie
    // parent group
  };
}
function fe() {
  Ie.r || ue(Ie.c), Ie = Ie.p;
}
function $(e, t) {
  e && e.i && (ji.delete(e), e.i(t));
}
function et(e, t, i, l) {
  if (e && e.o) {
    if (ji.has(e)) return;
    ji.add(e), Ie.c.push(() => {
      ji.delete(e), l && (i && e.d(1), l());
    }), e.o(t);
  } else l && l();
}
const Va = {
  duration: 0
};
function es(e, t, i) {
  const l = {
    direction: "in"
  };
  let a = t(e, i, l),
    n = !1,
    o,
    p,
    h = 0;
  function r() {
    o && dl(e, o);
  }
  function c() {
    const {
      delay: A = 0,
      duration: f = 300,
      easing: g = Da,
      tick: M = noop,
      css: y
    } = a || Va;
    y && (o = Na(e, 0, 1, f, A, g, y, h++)), M(0, 1);
    const w = Ba() + A,
      E = w + f;
    p && p.abort(), n = !0, $e(() => Yi(e, !0, "start")), p = Ha(I => {
      if (n) {
        if (I >= E) return M(1, 0), Yi(e, !0, "end"), r(), n = !1;
        if (I >= w) {
          const x = g((I - w) / f);
          M(x, 1 - x);
        }
      }
      return n;
    });
  }
  let d = !1;
  return {
    start() {
      d || (d = !0, dl(e), Pt(a) ? (a = a(l), Fa().then(c)) : c());
    },
    invalidate() {
      d = !1;
    },
    end() {
      n && (r(), n = !1);
    }
  };
}
function is(e, t, i) {
  const l = {
    direction: "out"
  };
  let a = t(e, i, l),
    n = !0,
    o;
  const p = Ie;
  p.r += 1;
  let h;
  function r() {
    const {
      delay: c = 0,
      duration: d = 300,
      easing: A = Da,
      tick: f = noop,
      css: g
    } = a || Va;
    g && (o = Na(e, 1, 0, d, c, A, g));
    const M = Ba() + c,
      y = M + d;
    $e(() => Yi(e, !1, "start")), "inert" in e && (h = /** @type {HTMLElement} */
    e.inert, e.inert = !0), Ha(w => {
      if (n) {
        if (w >= y) return f(0, 1), Yi(e, !1, "end"), --p.r || ue(p.c), !1;
        if (w >= M) {
          const E = A((w - M) / d);
          f(1 - E, E);
        }
      }
      return n;
    });
  }
  return Pt(a) ? Fa().then(() => {
    a = a(l), r();
  }) : r(), {
    end(c) {
      c && "inert" in e && (e.inert = h), c && a.tick && a.tick(1, 0), n && (o && dl(e, o), n = !1);
    }
  };
}
function zl(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function ye(e, t) {
  const i = {},
    l = {},
    a = {
      $$scope: 1
    };
  let n = e.length;
  for (; n--;) {
    const o = e[n],
      p = t[n];
    if (p) {
      for (const h in o) h in p || (l[h] = 1);
      for (const h in p) a[h] || (i[h] = p[h], a[h] = 1);
      e[n] = p;
    } else for (const h in o) a[h] = 1;
  }
  for (const o in l) o in i || (i[o] = void 0);
  return i;
}
function Xi(e, t, i) {
  const l = e.$$.props[t];
  l !== void 0 && (e.$$.bound[l] = i, i(e.$$.ctx[l]));
}
function gt(e) {
  e && e.c();
}
function vt(e, t, i) {
  const {
    fragment: l,
    after_update: a
  } = e.$$;
  l && l.m(t, i), $e(() => {
    const n = e.$$.on_mount.map(_a).filter(Pt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...n) : ue(n), e.$$.on_mount = [];
  }), a.forEach($e);
}
function yt(e, t) {
  const i = e.$$;
  i.fragment !== null && (ts(i.after_update), ue(i.on_destroy), i.fragment && i.fragment.d(t), i.on_destroy = i.fragment = null, i.ctx = []);
}
function ls(e, t) {
  e.$$.dirty[0] === -1 && (Ye.push(e), ja(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function initComponent(e, t, i, l, a, n, o = null, p = [-1]) {
  const h = _i;
  Si(e);
  const r = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: n,
    update: noop,
    not_equal: a,
    bound: Ll(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (h ? h.$$.context : [])),
    // everything else
    callbacks: Ll(),
    dirty: p,
    skip_bound: !1,
    root: t.target || h.$$.root
  };
  o && o(r.root);
  let c = !1;
  if (r.ctx = i ? i(e, t.props || {}, (d, A, ...f) => {
    const g = f.length ? f[0] : A;
    return r.ctx && a(r.ctx[d], r.ctx[d] = g) && (!r.skip_bound && r.bound[d] && r.bound[d](g), c && ls(e, d)), A;
  }) : [], r.update(), c = !0, ue(r.before_update), r.fragment = l ? l(r.ctx) : !1, t.target) {
    if (t.hydrate) {
      zn();
      const d = mt(t.target);
      r.fragment && r.fragment.l(d), d.forEach(H);
    } else r.fragment && r.fragment.c();
    t.intro && $(e.$$.fragment), vt(e, t.target, t.anchor), Qn(), flush();
  }
  Si(h);
}
let qa;
typeof HTMLElement == "function" && (qa = class extends HTMLElement {
  constructor(t, i, l) {
    super();
    /** The Svelte component constructor */
    Zt(this, "$$ctor");
    /** Slots */
    Zt(this, "$$s");
    /** The Svelte component instance */
    Zt(this, "$$c");
    /** Whether or not the custom element is connected */
    Zt(this, "$$cn", !1);
    /** Component props data */
    Zt(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Zt(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Zt(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    Zt(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    Zt(this, "$$l_u", /* @__PURE__ */new Map());
    this.$$ctor = t, this.$$s = i, l && this.attachShadow({
      mode: "open"
    });
  }
  addEventListener(t, i, l) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(i), this.$$c) {
      const a = this.$$c.$on(t, i);
      this.$$l_u.set(i, a);
    }
    super.addEventListener(t, i, l);
  }
  removeEventListener(t, i, l) {
    if (super.removeEventListener(t, i, l), this.$$c) {
      const a = this.$$l_u.get(i);
      a && (a(), this.$$l_u.delete(i));
    }
    if (this.$$l[t]) {
      const a = this.$$l[t].indexOf(i);
      a >= 0 && this.$$l[t].splice(a, 1);
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function (n) {
        return () => {
          let o;
          return {
            c: function () {
              o = T("slot"), n !== "default" && s(o, "name", n);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function (r, c) {
              ht(r, o, c);
            },
            d: function (r) {
              r && H(o);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c) return;
      const i = {},
        l = Un(this);
      for (const n of this.$$s) n in l && (i[n] = [t(n)]);
      for (const n of this.attributes) {
        const o = this.$$g_p(n.name);
        o in this.$$d || (this.$$d[o] = Fi(o, n.value, this.$$p_d, "toProp"));
      }
      for (const n in this.$$p_d) !(n in this.$$d) && this[n] !== void 0 && (this.$$d[n] = this[n], delete this[n]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: i,
          $$scope: {
            ctx: []
          }
        }
      });
      const a = () => {
        this.$$r = !0;
        for (const n in this.$$p_d) if (this.$$d[n] = this.$$c.$$.ctx[this.$$c.$$.props[n]], this.$$p_d[n].reflect) {
          const o = Fi(n, this.$$d[n], this.$$p_d, "toAttribute");
          o == null ? this.removeAttribute(this.$$p_d[n].attribute || n) : this.setAttribute(this.$$p_d[n].attribute || n, o);
        }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(a), a();
      for (const n in this.$$l) for (const o of this.$$l[n]) {
        const p = this.$$c.$on(n, o);
        this.$$l_u.set(o, p);
      }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, i, l) {
    var a;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Fi(t, l, this.$$p_d, "toProp"), (a = this.$$c) == null || a.$set({
      [t]: this.$$d[t]
    }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(t) {
    return Object.keys(this.$$p_d).find(i => this.$$p_d[i].attribute === t || !this.$$p_d[i].attribute && i.toLowerCase() === t) || t;
  }
});
function Fi(e, t, i, l) {
  var n;
  const a = (n = i[e]) == null ? void 0 : n.type;
  if (t = a === "Boolean" && typeof t != "boolean" ? t != null : t, !l || !i[e]) return t;
  if (l === "toAttribute") switch (a) {
    case "Object":
    case "Array":
      return t == null ? null : JSON.stringify(t);
    case "Boolean":
      return t ? "" : null;
    case "Number":
      return t ?? null;
    default:
      return t;
  } else switch (a) {
    case "Object":
    case "Array":
      return t && JSON.parse(t);
    case "Boolean":
      return t;
    case "Number":
      return t != null ? +t : t;
    default:
      return t;
  }
}
function defineSvelteElement(e, t, i, l, a, n) {
  let o = class extends qa {
    constructor() {
      super(e, i, a), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(p => (t[p].attribute || p).toLowerCase());
    }
  };
  return Object.keys(t).forEach(p => {
    Object.defineProperty(o.prototype, p, {
      get() {
        return this.$$c && p in this.$$c ? this.$$c[p] : this.$$d[p];
      },
      set(h) {
        var r;
        h = Fi(p, h, t), this.$$d[p] = h, (r = this.$$c) == null || r.$set({
          [p]: h
        });
      }
    });
  }), l.forEach(p => {
    Object.defineProperty(o.prototype, p, {
      get() {
        var h;
        return (h = this.$$c) == null ? void 0 : h[p];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
class SvelteComponent {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Zt(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Zt(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    yt(this, 1), this.$destroy = noop;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, i) {
    if (!Pt(i)) return noop;
    const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return l.push(i), () => {
      const a = l.indexOf(i);
      a !== -1 && l.splice(a, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !Hn(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const as = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = {
  v: /* @__PURE__ */new Set()
})).v.add(as);
const Ue = [];
function readable(e, t) {
  return {
    subscribe: writable(e, t).subscribe
  };
}
function writable(e, t = noop) {
  let i;
  const l = /* @__PURE__ */new Set();
  function a(p) {
    if (bt(e, p) && (e = p, i)) {
      const h = !Ue.length;
      for (const r of l) r[1](), Ue.push(r, e);
      if (h) {
        for (let r = 0; r < Ue.length; r += 2) Ue[r][0](Ue[r + 1]);
        Ue.length = 0;
      }
    }
  }
  function n(p) {
    a(p(e));
  }
  function o(p, h = noop) {
    const r = [p, h];
    return l.add(r), l.size === 1 && (i = t(a, n) || noop), p(e), () => {
      l.delete(r), l.size === 0 && i && (i(), i = null);
    };
  }
  return {
    set: a,
    update: n,
    subscribe: o
  };
}

export { noop, pt, ue, Pt, bt, Ii, getStoreValue, Ut, _t, Kt, Ln, u, appendStyles, jt, ht, ve, H, Wn, T, v, Mt, rt, za, ut, s, Ct, jn, mt, wt, qn, Ht, m, Nt, Ra, onDestroy, Hi, Xn, Zn, ll, Jt, tick, $e, Gi, flush, Ae, fe, $, et, es, is, zl, ye, Xi, gt, vt, yt, initComponent, defineSvelteElement, SvelteComponent, readable, writable };
