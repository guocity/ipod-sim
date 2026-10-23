// Reconstructed from the supplied component; module and API names restored locally.
import { createLogger } from './logging.js';
import { writable } from './vendor/svelte-runtime.js';
var ShuffleMode = /* @__PURE__ */(e => (e.OFF = "off", e.SONGS = "songs", e))(ShuffleMode || {}),
  RepeatMode = /* @__PURE__ */(e => (e.OFF = "off", e.ONE = "one", e.ALL = "all", e))(RepeatMode || {}),
  BacklightMode = /* @__PURE__ */(e => (e.OFF = "off", e.SEC_1 = "1sec", e.SEC_2 = "2sec", e.SEC_3 = "3sec", e.SEC_5 = "5sec", e.ALWAYS_ON = "always_on", e))(BacklightMode || {});
const backlightOptions = [{
  mode: "off",
  labelKey: "ASE.Web.IPod.Backlight.Off"
}, {
  mode: "1sec",
  labelKey: "ASE.Web.IPod.Backlight.OneSecond",
  durationMs: 1e3
}, {
  mode: "2sec",
  labelKey: "ASE.Web.IPod.Backlight.TwoSeconds",
  durationMs: 2e3
}, {
  mode: "3sec",
  labelKey: "ASE.Web.IPod.Backlight.ThreeSeconds",
  durationMs: 3e3
}, {
  mode: "5sec",
  labelKey: "ASE.Web.IPod.Backlight.FiveSeconds",
  durationMs: 5e3
}, {
  mode: "always_on",
  labelKey: "ASE.Web.IPod.Backlight.AlwaysOn"
}];
var ClickerMode = /* @__PURE__ */(e => (e.OFF = "off", e.ON = "on", e))(ClickerMode || {});
const defaultLocale = {
    storefront: "us",
    language: "en-US"
  },
  settingsStorageKey = "apple-ipod:settings",
  ns = 2e3,
  ss = 1e4,
  os = 15,
  hs = 15,
  Ya = 350,
  rs = 100 / Ya * 100,
  cs = 276 / Ya * 100,
  ps = 1e4,
  Oe = 1e3,
  ul = 500,
  Ol = [5, 5, 5, 10, 10, 10, 20],
  ds = 1,
  As = 1e3,
  fs = 5e3,
  vl = {
    minSpeed: 180,
    tierMs: 500,
    tiers: [1, 2, 3, 5, 8, 13, 21, 34]
    // rows per click
  },
  yl = {
    minSpeed: 180,
    tierMs: 500,
    tiers: [1, 2, 3, 5]
    // SEEK_STEP_SECONDS per click
  },
  us = 400,
  vs = Math.min(vl.minSpeed, yl.minSpeed),
  ys = 0.15,
  gs = 300,
  ms = 80,
  bs = 5,
  Ms = 1,
  ws = 5e3,
  ks = 1e3,
  Ps = 1.25 * 360 / 100,
  Es = 1.25 * 360 / 22,
  Is = 5e3,
  Ss = 360,
  Nl = 0.035,
  Xa = createLogger("<Settings>");
var xa;
const Je = typeof window > "u" || (xa = window.matchMedia) == null ? void 0 : xa.call(window, "(prefers-color-scheme: dark)");
function preferredBacklight() {
  return Je != null && Je.matches ? BacklightMode.ALWAYS_ON : BacklightMode.OFF;
}
const defaultSettings = Object.freeze({
  shuffle: ShuffleMode.OFF,
  repeat: RepeatMode.OFF,
  clicker: ClickerMode.ON,
  backlight: preferredBacklight(),
  volume: 50
});
function isEnumValue(values, value) {
  return Object.values(values).includes(value);
}
function isValidVolume(volume) {
  return typeof volume == "number" && Number.isFinite(volume) && volume >= 0 && volume <= 100;
}
function normalizeSettings(input) {
  const saved = input ?? {};
  return {
    shuffle: isEnumValue(ShuffleMode, saved.shuffle) ? saved.shuffle : defaultSettings.shuffle,
    repeat: isEnumValue(RepeatMode, saved.repeat) ? saved.repeat : defaultSettings.repeat,
    clicker: isEnumValue(ClickerMode, saved.clicker) ? saved.clicker : defaultSettings.clicker,
    backlight: isEnumValue(BacklightMode, saved.backlight) ? saved.backlight : defaultSettings.backlight,
    volume: isValidVolume(saved.volume) ? saved.volume : defaultSettings.volume
  };
}
let backlightChosen = false;
function readSettings() {
  try {
    const e = localStorage.getItem(settingsStorageKey),
      t = e === null ? void 0 : JSON.parse(e),
      i = t;
    backlightChosen = (i == null ? void 0 : i.backlightChosen) === true && isEnumValue(BacklightMode, i.backlight);
    const l = t === void 0 ? defaultSettings : normalizeSettings(t);
    return backlightChosen ? l : {
      ...l,
      backlight: preferredBacklight()
    };
  } catch (e) {
    return Xa.error("Failed to read settings from localStorage", e), defaultSettings;
  }
}
function saveSettings({
  backlight: backlight,
  ...remaining
}) {
  try {
    localStorage.setItem(settingsStorageKey, JSON.stringify(backlightChosen ? {
      ...remaining,
      backlight: backlight,
      backlightChosen: true
    } : remaining));
  } catch (i) {
    Xa.error("Failed to write settings to localStorage", i);
  }
}
const settings = writable(readSettings());
settings.subscribe(saveSettings);
const gl = /* @__PURE__ */new Set();
function onSettingsReset(e) {
  return gl.add(e), () => gl.delete(e);
}
function setBacklight(mode) {
  backlightChosen = true;
  settings.update(t => ({
    ...t,
    backlight: mode
  }));
}
Je == null || Je.addEventListener("change", () => {
  backlightChosen || settings.update(e => ({
    ...e,
    backlight: preferredBacklight()
  }));
});
function resetSettings() {
  backlightChosen = false;
  settings.set({
    ...defaultSettings,
    backlight: preferredBacklight()
  });
  gl.forEach(e => e());
}
export { ShuffleMode, RepeatMode, BacklightMode, backlightOptions, ClickerMode, defaultLocale, ns, ss, os, hs, rs, cs, ps, Oe, ul, Ol, ds, As, fs, vl, yl, us, vs, ys, gs, ms, bs, Ms, ws, ks, Ps, Es, Is, Ss, Nl, settings, onSettingsReset, setBacklight, resetSettings };
