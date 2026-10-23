import wheelTextureUrl from './assets/wheel-texture.png';
// Reconstructed from the supplied component; module and API names restored locally.
import { Za, Sl } from './interaction.js';
function ba(e) {
  return (e == null ? void 0 : e.excludeRadiusRatio) ?? 0;
}
const Vh = 8,
  qh = 0.1;
function pointAngle({
  x: x,
  y: y
}) {
  return Math.atan2(y, x) * 180 / Math.PI;
}
function angleDifference(previousAngle, nextAngle) {
  return ((nextAngle - previousAngle) % 360 + 540) % 360 - 180;
}
function rotationDirection(delta) {
  return delta > 0 ? 1 : -1;
}
function segmentDistanceSquared(start, end) {
  const dx = end.x - start.x,
    dy = end.y - start.y,
    lengthSquared = dx * dx + dy * dy,
    projection = lengthSquared === 0 ? 0 : Math.min(1, Math.max(0, -(start.x * dx + start.y * dy) / lengthSquared)),
    nearestX = start.x + projection * dx,
    nearestY = start.y + projection * dy;
  return nearestX * nearestX + nearestY * nearestY;
}
const trackWheelGesture = (e, t) => {
    let i = ba(t),
      l,
      a,
      n,
      o,
      p = 0;
    function h(A) {
      const f = e.getBoundingClientRect(),
        g = f.left + f.width / 2,
        M = f.top + f.height / 2,
        y = Math.min(f.width, f.height) / 2,
        w = y * i,
        E = A.clientX - g,
        I = A.clientY - M,
        x = E * E + I * I;
      return {
        offset: {
          x: E,
          y: I
        },
        radius: y,
        withinWheel:
        // The `+ 1e-6` absorbs floating-point rounding so a point
        // sitting exactly on the outer edge isn't excluded by a hair.
        x <= y * y + 1e-6 && x >= w * w
      };
    }
    function r(A) {
      var M;
      if (l !== void 0) return;
      const {
        offset: f,
        withinWheel: g
      } = h(A);
      g && (l = A.pointerId, a = f, n = A.timeStamp, (M = e.setPointerCapture) == null || M.call(e, l), e.dispatchEvent(new CustomEvent("wheeldragstart")));
    }
    function c(A) {
      if (l !== A.pointerId || a === void 0 || n === void 0) return;
      const {
          offset: f,
          radius: g
        } = h(A),
        M = g * qh,
        y = a,
        w = A.timeStamp - n;
      if (a = f, n = A.timeStamp, segmentDistanceSquared(y, f) < M * M) return;
      const E = angleDifference(pointAngle(y), pointAngle(f));
      if (E === 0) return;
      const I = rotationDirection(E),
        x = Math.abs(E);
      if (o === void 0 || I === o) {
        o = I;
        p = 0;
      } else {
        if (p += x, p < Vh) return;
        o = I;
        p = 0;
      }
      const U = Za(x, w),
        C = {
          step: o,
          degrees: x,
          speed: U
        };
      e.dispatchEvent(new CustomEvent("wheelscroll", {
        detail: C
      }));
    }
    function d(A) {
      var f;
      l === A.pointerId && ((f = e.releasePointerCapture) == null || f.call(e, l), l = void 0, a = void 0, n = void 0, o = void 0, p = 0, e.dispatchEvent(new CustomEvent("wheeldragend")));
    }
    return e.addEventListener("pointerdown", r), e.addEventListener("pointermove", c), e.addEventListener("pointerup", d), e.addEventListener("pointercancel", d), e.addEventListener("lostpointercapture", d), {
      update(A) {
        i = ba(A);
      },
      destroy() {
        e.removeEventListener("pointerdown", r);
        e.removeEventListener("pointermove", c);
        e.removeEventListener("pointerup", d);
        e.removeEventListener("pointercancel", d);
        e.removeEventListener("lostpointercapture", d);
      }
    };
  },
  wa = ["Enter", " "],
  Wi = (e, t) => {
    let i = t,
      l,
      a,
      n = false;
    const o = Sl(I => {
      l !== void 0 && (n = true);
      e.dispatchEvent(new CustomEvent("longpress", {
        detail: {
          repeat: I
        }
      }));
    });
    function p() {
      return l !== void 0 || a !== void 0;
    }
    function h() {
      n = false;
      o.start(i.duration, i.repeatInterval);
    }
    function r() {
      o.stop();
      l = void 0;
      a = void 0;
    }
    function c(I) {
      var x;
      i.disabled || !I.isPrimary || I.button !== 0 || p() || (l = I.pointerId, (x = e.hasPointerCapture) != null && x.call(e, I.pointerId) && e.releasePointerCapture(I.pointerId), h());
    }
    function d(I) {
      I.pointerId === l && (l = void 0, o.stop());
    }
    function A(I) {
      I.pointerId === l && r();
    }
    function f(I) {
      l !== void 0 && I.preventDefault();
    }
    function g(I) {
      i.disabled || i.keyboard === false || !wa.includes(I.key) || (I.preventDefault(), !(I.repeat || p()) && (a = I.key, h()));
    }
    function M(I) {
      i.disabled || i.keyboard === false || !wa.includes(I.key) || (I.preventDefault(), I.key === a && (a = void 0, o.stop() || e.click()));
    }
    function y() {
      a !== void 0 && r();
    }
    function w() {
      n = false;
    }
    function E(I) {
      if (!n) return;
      const [x] = I.composedPath();
      !(x instanceof Node) || !(e.contains(x) || x.contains(e)) || (n = false, I.stopImmediatePropagation(), I.preventDefault());
    }
    return e.addEventListener("pointerdown", c), e.addEventListener("pointerup", d), e.addEventListener("pointercancel", A), e.addEventListener("pointerleave", A), e.addEventListener("contextmenu", f), e.addEventListener("keydown", g), e.addEventListener("keyup", M), e.addEventListener("blur", y), window.addEventListener("blur", r), window.addEventListener("pointerdown", w, true), window.addEventListener("click", E, true), {
      update(I) {
        i = I;
        i.disabled && r();
      },
      destroy() {
        r();
        e.removeEventListener("pointerdown", c);
        e.removeEventListener("pointerup", d);
        e.removeEventListener("pointercancel", A);
        e.removeEventListener("pointerleave", A);
        e.removeEventListener("contextmenu", f);
        e.removeEventListener("keydown", g);
        e.removeEventListener("keyup", M);
        e.removeEventListener("blur", y);
        window.removeEventListener("blur", r);
        window.removeEventListener("pointerdown", w, true);
        window.removeEventListener("click", E, true);
      }
    };
  },
  wheelTexture = wheelTextureUrl;
export { trackWheelGesture, Wi, wheelTexture };
