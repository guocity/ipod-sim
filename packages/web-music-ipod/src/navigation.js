// Reconstructed from the supplied component; module and API names restored locally.
import { backlightOptions, Is } from './settings.js';
import { defaultTranslator } from './localization.js';
import { nn, kh, Ph, Eh, yn, _l, Ee, Ih, ol } from './generated/screens-and-games.js';
function createMainMenu({
  i18n: e,
  hasNowPlaying: t
}) {
  return [Ee("playlists", e), Ee("artists", e), Ee("songs", e), Ee("settings", e),
  // Now Playing is the only row driven by playback state.
  ...(t ? [Ee("now-playing", e)] : [])];
}
function createSettingsMenu({
  i18n: e
}) {
  return [Ee("about", e), ol("shuffle", e.t("ASE.Web.IPod.Settings.Shuffle"), kh), ol("repeat", e.t("ASE.Web.IPod.Settings.Repeat"), Ph), Ee("backlight", e), ol("clicker", e.t("ASE.Web.IPod.Settings.Clicker"), Eh), Ee("reset-settings", e)];
}
function Dh({
  i18n: e
}) {
  return backlightOptions.map(({
    mode: t,
    labelKey: i
  }) => Ih(t, e.t(i)));
}
function _h({
  i18n: e
}) {
  return [{
    id: "cancel",
    title: e.t("ASE.Web.IPod.Reset.Cancel"),
    action: "cancel"
  }, {
    id: "reset-all",
    title: e.t("ASE.Web.IPod.Reset.Reset"),
    action: "reset-all"
  }];
}
function createArtistsMenu({
  data: e,
  i18n: t
}) {
  const i = l => t.formatNumber(l, {
    style: "unit",
    unit: "gigabyte"
  });
  return [
  // Product names are typically not localized.
  {
    id: "ipod",
    title: "iPod",
    action: "info",
    centered: true
  }, {
    id: "songs-count",
    title: t.t("ASE.Web.IPod.About.Songs"),
    action: "info",
    value: t.formatNumber((e == null ? void 0 : e.songs.length) ?? 0)
  }, {
    id: "capacity",
    title: t.t("ASE.Web.IPod.About.Capacity"),
    action: "info",
    value: i(9.2)
  }, {
    id: "available",
    title: t.t("ASE.Web.IPod.About.Available"),
    action: "info",
    value: i(4.5)
  }, {
    id: "version",
    title: t.t("ASE.Web.IPod.About.Version"),
    action: "info",
    value: "2644.1.0"
  }];
}
function createSongsMenu({
  data: e,
  i18n: t
}) {
  const i = ((e == null ? void 0 : e.playlists) ?? []).map(l => ({
    id: l.id,
    title: l.name,
    action: "navigate",
    target: "playlist-tracks",
    contextId: l.id
  }));
  return _l(i, t);
}
function createPlaylistsMenu({
  data: e,
  i18n: t
}) {
  const i = ((e == null ? void 0 : e.artists) ?? []).map(l => ({
    id: l.id,
    title: l.name,
    action: "navigate",
    target: "artist-tracks",
    contextId: l.id
  }));
  return i.length && e != null && e.songs.length && i.unshift({
    id: "all",
    title: t.t("ASE.Web.IPod.Menu.All"),
    action: "navigate",
    target: "songs",
    screenTitleKey: "ASE.Web.IPod.Menu.AllSongs"
  }), _l(i, t);
}
function hl(e) {
  return ({
    data: t,
    contextId: i,
    i18n: l
  }) => {
    if (!t) return yn(l);
    const a = nn(e, i, t).map(n => ({
      id: n.id,
      title: n.name,
      action: "play",
      songId: n.id
    }));
    return _l(a, l);
  };
}
const menuDefinitions = {
  main: {
    view: "list",
    // Product names are usually not localized.
    title: () => "iPod",
    items: createMainMenu,
    listsNowPlaying: true
  },
  settings: {
    view: "list",
    titleKey: "ASE.Web.IPod.Menu.Settings",
    items: createSettingsMenu
  },
  about: {
    view: "list",
    titleKey: "ASE.Web.IPod.Settings.About",
    items: createArtistsMenu,
    selectHold: {
      ms: Is,
      target: "brick"
    }
  },
  backlight: {
    view: "list",
    titleKey: "ASE.Web.IPod.Settings.BacklightTimer",
    items: Dh
  },
  "reset-settings": {
    view: "list",
    titleKey: "ASE.Web.IPod.Settings.ResetAllSettings",
    items: _h,
    forgetsSelection: true
  },
  playlists: {
    view: "list",
    titleKey: "ASE.Web.IPod.Menu.Playlists",
    items: createSongsMenu
  },
  artists: {
    view: "list",
    titleKey: "ASE.Web.IPod.Menu.Artists",
    items: createPlaylistsMenu
  },
  songs: {
    view: "list",
    titleKey: "ASE.Web.IPod.Menu.Songs",
    items: hl("songs")
  },
  "playlist-tracks": {
    view: "list",
    titleKey: "ASE.Web.IPod.Menu.Playlists",
    title: ({
      data: e,
      contextId: t
    }) => {
      var i;
      return (i = e == null ? void 0 : e.playlists.find(l => l.id === t)) == null ? void 0 : i.name;
    },
    items: hl("playlist-tracks")
  },
  "artist-tracks": {
    view: "list",
    titleKey: "ASE.Web.IPod.Menu.Artists",
    title: ({
      data: e,
      contextId: t
    }) => {
      var i;
      return (i = e == null ? void 0 : e.artists.find(l => l.id === t)) == null ? void 0 : i.name;
    },
    items: hl("artist-tracks")
  },
  "now-playing": {
    view: "now-playing",
    titleKey: "ASE.Web.IPod.Menu.NowPlaying",
    blocksIdleJump: true
  },
  brick: {
    view: "brick",
    titleKey: "ASE.Web.IPod.Game.Title",
    blocksIdleJump: true
  }
};
function getMenuDefinition(e) {
  return menuDefinitions[e];
}
function ua(e, t) {
  return t && !!getMenuDefinition(e).listsNowPlaying;
}
function va(e, t) {
  var i, l;
  return ((l = (i = getMenuDefinition(e.key)).items) == null ? void 0 : l.call(i, {
    ...t,
    contextId: e.contextId
  })) ?? [];
}
function Hh(e, t, i = defaultTranslator) {
  var n;
  if (e.titleKey) return i.t(e.titleKey);
  const l = getMenuDefinition(e.key),
    a = (n = l.title) == null ? void 0 : n.call(l, {
      data: t,
      contextId: e.contextId
    });
  return a !== void 0 ? a : l.titleKey ? i.t(l.titleKey) : "";
}
function Ri({
  key: e,
  contextId: t
}) {
  return `${e}:${t ?? ""}`;
}
function Lh() {
  const e = /* @__PURE__ */new Map();
  let t, i, l;
  function a({
    queue: r,
    currentTrackIndex: c
  }, d) {
    if (r === i && c === l) return false;
    i = r;
    l = c;
    const A = r[c];
    return t && A && !d.some(f => Ri(f) === t) && e.set(t, {
      itemId: A.id,
      index: c
    }), true;
  }
  function n(r, c, d) {
    const A = c[d];
    !A || getMenuDefinition(r.key).forgetsSelection || e.set(Ri(r), {
      itemId: A.id,
      index: d
    });
  }
  function o(r, c) {
    var A;
    const d = e.get(Ri(r));
    return d ? ((A = c[d.index]) == null ? void 0 : A.id) === d.itemId ? d.index : c.findIndex(f => f.id === d.itemId) : -1;
  }
  function p(r) {
    t = Ri(r);
  }
  function h() {
    t && (e.delete(t), t = void 0);
  }
  return {
    syncQueue: a,
    remember: n,
    rememberedIndexIn: o,
    setQueueSource: p,
    clearQueueSource: h
  };
}
const ya = {
  isAdjustingVolume: false
};
export { menuDefinitions, getMenuDefinition, ua, va, Hh, Lh, ya };
