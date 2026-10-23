import test from 'node:test';
import assert from 'node:assert/strict';
// Settings normally use browser storage. Supply it before importing the module.
const storage = new Map();
Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: {
  getItem: key => storage.get(key) ?? null,
  setItem: (key, value) => storage.set(key, value)
} });
const { createSeekController, createWheelNavigation } = await import('../packages/web-music-ipod/src/wheel-navigation.js');

test('wheel accumulates partial steps and resets them on a direction change', () => {
  const moves = [];
  const wheel = createWheelNavigation({ move: (...args) => { moves.push(args); return true; }, click() {} });
  const scroll = (step, degrees) => wheel.scroll({ step, degrees, target: 'list', multiplier: 2, dragStepDegrees: 15 });
  scroll(1, 10);
  assert.deepEqual(moves, []);
  scroll(1, 10);
  assert.deepEqual(moves, [[1, 2]]);
  scroll(-1, 10);
  assert.equal(moves.length, 1);
  scroll(-1, 5);
  assert.deepEqual(moves[1], [-1, 2]);
});

test('seeking stops at the track boundary and cancels on a track change', () => {
  const controller = createSeekController();
  const state = { isInert: false, isSeeking: false, hasLoadedItem: true,
    currentTrackIndex: 0, currentPlaybackTime: 8, currentPlaybackDuration: 10 };
  assert.equal(controller.step(1, false, state), 10);
  assert.equal(controller.step(1, true, state), undefined);
  assert.equal(controller.step(-1, false, state), 3);
  assert.equal(controller.step(-1, true, { ...state, currentTrackIndex: 1 }), undefined);
});
