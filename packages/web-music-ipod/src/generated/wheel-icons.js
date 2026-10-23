// Reconstructed compiled Svelte code. See the package README for provenance.
import { noop, pt, bt, _t, jt, ve, H, v, Mt, s, Ct, jn, mt, wt, qn, ye, initComponent, SvelteComponent } from '../vendor/svelte-runtime.js';

function Zh(e) {
  let t,
    i,
    l,
    a,
    n,
    o = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      "xmlns:xlink": "http://www.w3.org/1999/xlink"
    }, {
      width: "400"
    }, {
      height: "150"
    }, {
      viewBox: "0 0 400 150"
    }, /*$$props*/
    e[0]],
    p = {};
  for (let h = 0; h < o.length; h += 1) p = pt(p, o[h]);
  return {
    c() {
      t = v("svg"), i = v("path"), l = v("text"), a = v("textPath"), n = Mt("menu"), this.h();
    },
    l(h) {
      t = wt(h, "svg", {
        xmlns: !0,
        "xmlns:xlink": !0,
        width: !0,
        height: !0,
        viewBox: !0
      });
      var r = mt(t);
      i = wt(r, "path", {
        id: !0,
        fill: !0,
        stroke: !0,
        d: !0
      }), mt(i).forEach(H), l = wt(r, "text", {});
      var c = mt(l);
      a = wt(c, "textPath", {
        "xlink:href": !0,
        startOffset: !0
      });
      var d = mt(a);
      n = qn(d, "menu"), d.forEach(H), c.forEach(H), r.forEach(H), this.h();
    },
    h() {
      s(i, "id", "menu-text-curve"), s(i, "fill", "none"), s(i, "stroke", "none"), s(i, "d", "M31.234 97.495S92.808 41.234 200 41.234c121.84 0 168.766 56.26 168.766 56.26"), jn(a, "xlink:href", "#menu-text-curve"), s(a, "startOffset", "112"), Ct(t, p);
    },
    m(h, r) {
      ve(h, t, r), jt(t, i), jt(t, l), jt(l, a), jt(a, n);
    },
    p(h, [r]) {
      Ct(t, p = ye(o, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        "xmlns:xlink": "http://www.w3.org/1999/xlink"
      }, {
        width: "400"
      }, {
        height: "150"
      }, {
        viewBox: "0 0 400 150"
      }, r & /*$$props*/
      1 && /*$$props*/
      h[0]]));
    },
    i: noop,
    o: noop,
    d(h) {
      h && H(t);
    }
  };
}
function Jh(e, t, i) {
  return e.$$set = l => {
    i(0, t = pt(pt({}, t), _t(l)));
  }, t = _t(t), [t];
}
let $h = class extends SvelteComponent {
  constructor(t) {
    super(), initComponent(this, t, Jh, Zh, bt, {});
  }
};
function tr(e) {
  let t,
    i,
    l = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "24"
    }, {
      height: "12"
    }, {
      viewBox: "0 0 24 12"
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
      s(i, "d", "M9.58 5.635 0 11.212V.057zM19.578 0h3.796v11.273h-3.796zm-5.793 0h3.797v11.273h-3.797z"), Ct(t, a);
    },
    m(n, o) {
      ve(n, t, o), jt(t, i);
    },
    p(n, [o]) {
      Ct(t, a = ye(l, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "24"
      }, {
        height: "12"
      }, {
        viewBox: "0 0 24 12"
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
function er(e, t, i) {
  return e.$$set = l => {
    i(0, t = pt(pt({}, t), _t(l)));
  }, t = _t(t), [t];
}
let ir = class extends SvelteComponent {
  constructor(t) {
    super(), initComponent(this, t, er, tr, bt, {});
  }
};
function lr(e) {
  let t,
    i,
    l = [{
      xmlns: "http://www.w3.org/2000/svg"
    }, {
      width: "23"
    }, {
      height: "12"
    }, {
      viewBox: "0 0 23 12"
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
      s(i, "d", "M9.58 5.635 0 11.212V.057zm9.623 0-9.58 5.577V.057zm0-5.635H23v11.273h-3.797z"), Ct(t, a);
    },
    m(n, o) {
      ve(n, t, o), jt(t, i);
    },
    p(n, [o]) {
      Ct(t, a = ye(l, [{
        xmlns: "http://www.w3.org/2000/svg"
      }, {
        width: "23"
      }, {
        height: "12"
      }, {
        viewBox: "0 0 23 12"
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
function ar(e, t, i) {
  return e.$$set = l => {
    i(0, t = pt(pt({}, t), _t(l)));
  }, t = _t(t), [t];
}
class ka extends SvelteComponent {
  constructor(t) {
    super(), initComponent(this, t, ar, lr, bt, {});
  }
}

export { $h, ir, ka };
