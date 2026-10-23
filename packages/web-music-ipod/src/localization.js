// Reconstructed from the supplied component; module and API names restored locally.
import { Xn, Zn, readable, writable } from './vendor/svelte-runtime.js';
import { Rs, bl, Ws } from './interaction.js';
const defaultLanguage = "en-US";
function js(e) {
  if (!e) return defaultLanguage;
  try {
    return Intl.getCanonicalLocales(e)[0];
  } catch {
    return bl.warn(`Invalid language "${e}"; using ${defaultLanguage}`), defaultLanguage;
  }
}
function createTranslator(e, t) {
  const i = e ? js(t) : defaultLanguage,
    l = /* @__PURE__ */new Map(),
    a = new Intl.ListFormat(i, {
      style: "long",
      type: "conjunction"
    });
  return {
    t(n, o) {
      if (e) try {
        const h = e.t(n, o);
        if (h) return h;
      } catch (h) {
        bl.error(`Host i18n failed for "${n}"`, h);
      }
      const p = Rs[n];
      return p === void 0 ? (bl.warn(`No English default for "${n}"`), `**${n}**`) : Ws(p, o);
    },
    formatNumber(n, o) {
      const p = JSON.stringify(o ?? {});
      let h = l.get(p);
      return h || (h = new Intl.NumberFormat(i, o), l.set(p, h)), h.format(n);
    },
    formatList(n) {
      return a.format(n);
    }
  };
}
const defaultTranslator = createTranslator(),
  tn = "i18n";
function getTranslationStore() {
  const e = writable(defaultTranslator);
  return Xn(tn, e), e;
}
function getTranslator() {
  return Zn(tn) ?? readable(defaultTranslator);
}
export { createTranslator, defaultTranslator, getTranslationStore, getTranslator };
