// Reconstructed from the supplied component; module and API names restored locally.
import { createLogger } from '../logging.js';
import { getStoreValue, writable } from '../vendor/svelte-runtime.js';
const previewLogger = createLogger("<Html5PreviewPlayer>"),
  crossfadeSeconds = 2,
  fadeCurveSamples = 50,
  preloadSeconds = 3;
function fadeInGain(progress) {
  return Math.cos((1 - progress) * Math.PI * 0.5);
}
function fadeOutGain(progress) {
  return Math.cos(progress * Math.PI * 0.5);
}
function createFadeCurve(gain, samples) {
  return Float32Array.from({
    length: samples
  }, (i, l) => gain(l / (samples - 1)));
}
const fadeInCurve = createFadeCurve(fadeInGain, fadeCurveSamples),
  fadeOutCurve = createFadeCurve(fadeOutGain, fadeCurveSamples);
function shuffleItems(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const l = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[l]] = [shuffled[l], shuffled[i]];
  }
  return shuffled;
}
class PreviewChannel {
  constructor(t, i, l) {
    this.audio = new Audio();
    this.audio.preload = "auto";
    this.audio.crossOrigin = "anonymous";
    this.audio.src = i.previewUrl;
    this.context = t;
    this.gainNode = t.createGain();
    this.gainNode.gain.value = 0;
    this.sourceNode = t.createMediaElementSource(this.audio);
    this.sourceNode.connect(this.gainNode).connect(l);
  }
  cancelPendingFade() {
    clearTimeout(this.fadeDoneTimeout);
    this.gainNode.gain.cancelScheduledValues(this.context.currentTime);
  }
  runFade(t, i) {
    this.cancelPendingFade();
    this.gainNode.gain.setValueCurveAtTime(t, this.context.currentTime, crossfadeSeconds);
    i && (this.fadeDoneTimeout = setTimeout(i, crossfadeSeconds * 1e3));
  }
  fadeIn() {
    this.runFade(fadeInCurve);
  }
  fadeOut(t) {
    this.runFade(fadeOutCurve, t);
  }
  cutIn() {
    this.cancelPendingFade();
    this.gainNode.gain.setValueAtTime(1, this.context.currentTime);
  }
  destroy() {
    clearTimeout(this.fadeDoneTimeout);
    this.audio.pause();
    this.audio.removeAttribute("src");
    this.audio.load();
    this.sourceNode.disconnect();
    this.gainNode.disconnect();
  }
}
class PreviewPlayer {
  constructor(t, i, l, {
    shuffle: a = false,
    repeatMode: n = "none"
  } = {}) {
    this.currentIndex = 0;
    this.hasTriggeredFadeForCurrent = false;
    this.isShuffled = false;
    this.currentRepeatMode = "none";
    this.playOrder = [];
    this.fadingOutChannels = /* @__PURE__ */new Set();
    this.isPlayingStore = writable(false);
    this.currentPlaybackTimeStore = writable(0);
    this.currentPlaybackDurationStore = writable(0);
    this.hasLoadedItemStore = writable(false);
    this.shuffleModeStore = writable(false);
    this.repeatModeStore = writable("none");
    this.volumeStore = writable(1);
    this.queuePositionStore = writable(0);
    this.isPlaying = this.isPlayingStore;
    this.currentPlaybackTime = this.currentPlaybackTimeStore;
    this.currentPlaybackDuration = this.currentPlaybackDurationStore;
    this.hasLoadedItem = this.hasLoadedItemStore;
    this.shuffleMode = this.shuffleModeStore;
    this.repeatMode = this.repeatModeStore;
    this.volume = this.volumeStore;
    this.queuePosition = this.queuePositionStore;
    this.items = t;
    this.context = i;
    this.onQueueAdvance = l;
    this.volumeGainNode = i.createGain();
    this.volumeGainNode.connect(i.destination);
    this.isShuffled = a;
    this.shuffleModeStore.set(a);
    this.currentRepeatMode = n;
    this.repeatModeStore.set(n);
  }
  // Sets a queue with index 0 as a default, but changeToQueueItem()
  // is what will actually load the correct starting item.
  async setQueue() {
    this.destroyActiveChannels();
    this.currentIndex = 0;
    this.hasTriggeredFadeForCurrent = false;
    this.queuePositionStore.set(0);
  }
  destroyActiveChannels() {
    var t;
    (t = this.currentChannel) == null || t.destroy();
    this.clearNextChannel();
    this.setCurrentChannel(void 0);
    this.displayChannel = void 0;
  }
  clearNextChannel() {
    var t;
    (t = this.nextChannel) == null || t.destroy();
    this.nextChannel = void 0;
    this.nextIndex = void 0;
  }
  makeNextChannelCurrent() {
    this.setCurrentChannel(this.nextChannel);
    this.nextChannel = void 0;
    this.nextIndex = void 0;
  }
  destroyFadingChannels() {
    this.fadingOutChannels.forEach(t => t.destroy());
    this.fadingOutChannels.clear();
  }
  // Keeps hasLoadedItem in sync with currentChannel everywhere the latter
  // is reassigned, rather than relying on each call site to remember to.
  setCurrentChannel(t) {
    this.currentChannel = t;
    this.hasLoadedItemStore.set(!!t);
  }
  // A channel wraps one queue item's audio node. Like a DJ's two turntables,
  // there are two at a time: the one currently playing, and the one cued
  // up next.
  createChannel(t) {
    const i = this.items[t];
    if (!i) return;
    const l = new PreviewChannel(this.context, i, this.volumeGainNode);
    return this.bindChannelEvents(l), l;
  }
  // Picks up duration as soon as it's known. Skips the write once it's unchanged.
  setDuration(t) {
    Number.isFinite(t.duration) && t.duration !== getStoreValue(this.currentPlaybackDurationStore) && this.currentPlaybackDurationStore.set(t.duration);
  }
  // Duration is 0 until the channel reports its own, rather than showing
  // the previous track's.
  syncStoresToChannel(t) {
    this.currentPlaybackTimeStore.set((t == null ? void 0 : t.audio.currentTime) ?? 0);
    this.currentPlaybackDurationStore.set(t && Number.isFinite(t.audio.duration) ? t.audio.duration : 0);
  }
  // Runs from timeupdate, or as the fallback when no timeupdate will fire.
  promoteToDisplayIfNeeded(t) {
    var i;
    t !== this.displayChannel && (this.displayChannel = t, this.syncStoresToChannel(t), (i = this.onQueueAdvance) == null || i.call(this, this.currentIndex), this.syncQueuePosition(), this.pendingCrossfadeFrom = void 0);
  }
  // Identifies still-active channel by reference, not by index.
  // An index can point at both the outgoing and incoming channels
  // at once (repeat-one crossfades a track into a new instance of itself).
  bindChannelEvents(t) {
    t.audio.addEventListener("durationchange", () => {
      t === this.displayChannel && this.setDuration(t.audio);
    });
    t.audio.addEventListener("timeupdate", () => {
      if (t === this.currentChannel && t.audio.currentTime >= crossfadeSeconds / 2 && this.promoteToDisplayIfNeeded(t), t === this.displayChannel && (this.currentPlaybackTimeStore.set(t.audio.currentTime), this.setDuration(t.audio)), t !== this.currentChannel) return;
      const {
        currentTime: i,
        duration: l
      } = t.audio;
      !Number.isFinite(l) || l <= crossfadeSeconds || this.hasTriggeredFadeForCurrent || i < l - crossfadeSeconds || (this.hasTriggeredFadeForCurrent = true, this.nextChannel ? this.crossfadeToNext() : t.fadeOut());
    });
    t.audio.addEventListener("ended", () => {
      if (t === this.currentChannel) {
        if (this.promoteToDisplayIfNeeded(t), this.nextChannel) {
          this.crossfadeToNext();
          return;
        }
        this.endQueue();
      }
    });
  }
  endQueue() {
    this.destroyActiveChannels();
    this.destroyFadingChannels();
    this.pendingCrossfadeFrom = void 0;
    this.isPlayingStore.set(false);
    this.syncStoresToChannel(void 0);
  }
  // What plays right after `fromIndex` if nobody intervenes -- loops the
  // same track for repeat-one, otherwise the next adjacent index.
  computeAutoAdvanceIndex(t) {
    return this.currentRepeatMode === "one" ? t : this.computeAdjacentIndex(t, 1);
  }
  // Lags currentIndex during a not-yet-promoted crossfade.
  displayedIndex() {
    var t;
    return ((t = this.pendingCrossfadeFrom) == null ? void 0 : t.index) ?? this.currentIndex;
  }
  syncQueuePosition(t = this.currentIndex) {
    this.queuePositionStore.set(this.isShuffled ? this.playOrder.indexOf(t) : t);
  }
  // What manual skip targets -- always a different track (repeat-one never gets here).
  computeAdjacentIndex(t, i) {
    if (!this.isShuffled) {
      const o = t + i;
      return o >= 0 && o < this.items.length ? o : this.currentRepeatMode !== "all" ? void 0 : i === 1 ? 0 : this.items.length - 1;
    }
    const a = this.playOrder.indexOf(t) + i;
    if (a >= 0 && a < this.playOrder.length) return this.playOrder[a];
    if (this.currentRepeatMode !== "all") return;
    const n = i === 1 ? 0 : this.playOrder.length - 1;
    return this.playOrder[n];
  }
  // Destroys/rebuilds nextChannel from the current index + shuffle/repeat
  // state. Called whenever any of those inputs change, like when a DJ cues up
  // a new record on the second turntable.
  prepareNextChannel() {
    if (!this.currentChannel) return;
    const t = this.computeAutoAdvanceIndex(this.currentIndex);
    t !== this.nextIndex && (this.clearNextChannel(), t !== void 0 && (this.nextIndex = t, this.nextChannel = this.createChannel(t)));
  }
  // The display (and queuePosition) switch later, in next's timeupdate.
  crossfadeToNext() {
    const t = this.currentChannel,
      i = this.nextChannel;
    !t || !i || this.nextIndex === void 0 || (this.pendingCrossfadeFrom ?? (this.pendingCrossfadeFrom = {
      channel: t,
      index: this.currentIndex
    }), t.fadeOut(() => {
      var l;
      t.destroy();
      this.fadingOutChannels.delete(t);
      ((l = this.pendingCrossfadeFrom) == null ? void 0 : l.channel) === t ? (this.pendingCrossfadeFrom = void 0, this.currentChannel && this.promoteToDisplayIfNeeded(this.currentChannel)) : i === this.currentChannel && this.promoteToDisplayIfNeeded(i);
    }), this.fadingOutChannels.add(t), i.audio.play().catch(l => {
      previewLogger.error("Failed to play next track during crossfade", l);
      i === this.currentChannel && (this.isPlayingStore.set(false), this.promoteToDisplayIfNeeded(i));
    }), i.fadeIn(), this.currentIndex = this.nextIndex, this.makeNextChannelCurrent(), this.hasTriggeredFadeForCurrent = false, this.prepareNextChannel());
  }
  // Reverts a still-in-flight, not-yet-promoted crossfade, if one is
  // pending.  Handles seeking to a point right before a crossfade, letting
  // it start, then commiting to a seek after it's started but not yet shown.
  revertPendingCrossfade() {
    var i;
    const t = this.pendingCrossfadeFrom;
    t && (this.pendingCrossfadeFrom = void 0, (i = this.currentChannel) == null || i.destroy(), t.channel.cutIn(), this.fadingOutChannels.delete(t.channel), this.destroyFadingChannels(), this.currentIndex = t.index, this.setCurrentChannel(t.channel), this.clearNextChannel(), this.hasTriggeredFadeForCurrent = false, this.syncQueuePosition(), this.prepareNextChannel());
  }
  async resume() {
    const t = this.currentChannel;
    if (!t) {
      await this.jumpTo(this.currentIndex, {
        forceResume: true
      });
      return;
    }
    await t.audio.play();
    t.cutIn();
    this.hasTriggeredFadeForCurrent = false;
    this.isPlayingStore.set(true);
  }
  async pause() {
    var t;
    (t = this.currentChannel) == null || t.audio.pause();
    this.fadingOutChannels.forEach(i => i.audio.pause());
    this.isPlayingStore.set(false);
  }
  // Repeat-one locks Next and Back to the current track
  restartIfRepeatOne() {
    return this.currentRepeatMode !== "one" ? false : (this.currentChannel && this.restartInPlace(this.currentChannel), true);
  }
  async skipToNextItem() {
    if (this.restartIfRepeatOne()) return;
    const t = this.computeAdjacentIndex(this.currentIndex, 1);
    if (t !== void 0) {
      await this.jumpTo(t);
      return;
    }
    !this.pendingCrossfadeFrom && this.currentChannel && this.endQueue();
  }
  // If playing a track past a certain point, restart it instead of skipping.
  // Otherwise skip to previous track (paused/within threshold), or end the
  // queue if there's no previous track to go to.
  async skipToPreviousItem() {
    if (this.restartIfRepeatOne()) return;
    const t = this.currentChannel,
      i = getStoreValue(this.isPlayingStore);
    if (t && i && t.audio.currentTime > preloadSeconds) {
      this.restartInPlace(t);
      return;
    }
    const l = this.computeAdjacentIndex(this.currentIndex, -1);
    if (l !== void 0) {
      await this.jumpTo(l);
      return;
    }
    this.pendingCrossfadeFrom || t && this.endQueue();
  }
  restartInPlace(t) {
    t.audio.currentTime = 0;
    t.cutIn();
    this.hasTriggeredFadeForCurrent = false;
    this.pendingCrossfadeFrom = void 0;
    this.syncStoresToChannel(t);
  }
  async changeToQueueItem(t, i) {
    await this.jumpTo(i, {
      forceResume: true
    });
  }
  async jumpTo(t, {
    forceResume: i = false
  } = {}) {
    var a, n, o;
    if (
    // Only a no-op if we're already there with something loaded
    // -- setQueue() no longer eagerly loads index 0, so the very
    // first jumpTo(0) still needs to build a channel.
    t === this.currentIndex && this.currentChannel || t < 0 || t >= this.items.length) return;
    const l = i || getStoreValue(this.isPlayingStore);
    this.pendingCrossfadeFrom = void 0;
    t === this.nextIndex && this.nextChannel ? ((a = this.currentChannel) == null || a.destroy(), this.makeNextChannelCurrent()) : ((n = this.currentChannel) == null || n.destroy(), this.clearNextChannel(), this.setCurrentChannel(this.createChannel(t)));
    this.displayChannel = this.currentChannel;
    this.syncStoresToChannel(this.currentChannel);
    this.currentIndex = t;
    this.hasTriggeredFadeForCurrent = false;
    this.isShuffled && this.playOrder.length === 0 && this.buildPlayOrder([t]);
    this.syncQueuePosition();
    this.prepareNextChannel();
    (o = this.onQueueAdvance) == null || o.call(this, this.currentIndex);
    l && (await this.resume());
  }
  async seekToTime(t, i) {
    var o;
    if (i !== void 0 && i !== this.currentIndex && i !== ((o = this.pendingCrossfadeFrom) == null ? void 0 : o.index) || (this.revertPendingCrossfade(), i !== void 0 && i !== this.currentIndex)) return;
    const l = this.currentChannel;
    if (!l) return;
    const {
        duration: a
      } = l.audio,
      n = this.computeAutoAdvanceIndex(this.currentIndex);
    if (Number.isFinite(a) && a > crossfadeSeconds && t >= a - crossfadeSeconds && n !== void 0) {
      n === this.currentIndex ? this.restartInPlace(l) : await this.skipToNextItem();
      return;
    }
    l.audio.currentTime = t;
    l.cutIn();
    this.hasTriggeredFadeForCurrent = false;
    l === this.displayChannel && this.currentPlaybackTimeStore.set(t);
  }
  async setShuffle(t) {
    if (t === this.isShuffled) return;
    this.isShuffled = t;
    const i = this.displayedIndex();
    t && this.buildPlayOrder(this.currentIndex === i ? [i] : [i, this.currentIndex]);
    this.shuffleModeStore.set(t);
    this.syncQueuePosition(i);
    this.prepareNextChannel();
  }
  buildPlayOrder(t) {
    const i = this.items.map((l, a) => a).filter(l => !t.includes(l));
    this.playOrder = [...t, ...shuffleItems(i)];
  }
  async setRepeatMode(t) {
    t !== this.currentRepeatMode && (this.currentRepeatMode = t, this.repeatModeStore.set(t), this.prepareNextChannel());
  }
  async setVolume(t) {
    const i = Math.min(1, Math.max(0, t));
    this.volumeGainNode.gain.setTargetAtTime(i, this.context.currentTime, 0.01);
    this.volumeStore.set(i);
  }
  destroy() {
    this.destroyActiveChannels();
    this.destroyFadingChannels();
    this.volumeGainNode.disconnect();
  }
}
function adaptExternalPlayer(e, t, i) {
  const l = i ? t.currentItemIndex.subscribe(i) : void 0;
  return {
    setQueue: () => t.setQueue(e.map(a => a.trackId)),
    resume: () => t.resume(),
    pause: () => t.pause(),
    seekToTime: (a, n) => t.seekToTime(a, n),
    skipToNextItem: () => t.skipToNextItem(),
    skipToPreviousItem: () => t.skipToPreviousItem(),
    changeToQueueItem: (a, n) => t.changeToQueueItem(a, n),
    setShuffle: a => t.setShuffle(a),
    setRepeatMode: a => t.setRepeatMode(a),
    setVolume: a => t.setVolume(a),
    isPlaying: t.isPlaying,
    currentPlaybackTime: t.currentPlaybackTime,
    currentPlaybackDuration: t.currentPlaybackDuration,
    hasLoadedItem: t.hasLoadedItem,
    shuffleMode: t.shuffleMode,
    repeatMode: t.repeatMode,
    volume: t.volume,
    queuePosition: t.queuePosition ?? t.currentItemIndex,
    // Only unsubscribes our own listener
    destroy: () => l == null ? void 0 : l()
  };
}
function createPlayer(items, context, externalPlayer, onQueueAdvance, options) {
  return externalPlayer ? adaptExternalPlayer(items, externalPlayer, onQueueAdvance) : new PreviewPlayer(items, context, onQueueAdvance, options);
}
export { createPlayer };
