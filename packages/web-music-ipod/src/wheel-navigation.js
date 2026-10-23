import { Ol as seekSteps, Ps as volumeStepDegrees, Es as volumeClickDegrees } from './settings.js';

function divideSteps(distance, stepSize) {
  const count = Math.floor(distance / stepSize);
  return { count, remainder: distance - count * stepSize };
}

export function createWheelNavigation({ move, click }) {
  let accumulatedDegrees = 0;
  let previousDirection;
  let wasVolume;
  let clickDegrees = 0;
  let volumeChanged = false;

  function reset() {
    accumulatedDegrees = 0;
    clickDegrees = 0;
    volumeChanged = false;
  }

  function changeVolume(direction, degrees) {
    const steps = divideSteps(accumulatedDegrees, volumeStepDegrees);
    accumulatedDegrees = steps.remainder;
    if (steps.count >= 1) {
      const changed = move(direction, steps.count);
      volumeChanged = volumeChanged || changed;
    }
    const clicks = divideSteps(clickDegrees + degrees, volumeClickDegrees);
    clickDegrees = clicks.remainder;
    if (clicks.count >= 1) {
      if (volumeChanged) click(clicks.count, 'volume');
      volumeChanged = false;
    }
  }

  function scroll({ step, degrees, target, multiplier, dragStepDegrees }) {
    const isVolume = target === 'volume';
    if (step !== previousDirection || isVolume !== wasVolume) {
      previousDirection = step;
      wasVolume = isVolume;
      reset();
    }
    accumulatedDegrees += degrees;
    if (isVolume) {
      changeVolume(step, degrees);
      return;
    }
    const steps = divideSteps(accumulatedDegrees, dragStepDegrees);
    accumulatedDegrees = steps.remainder;
    if (steps.count >= 1 && move(step, steps.count * multiplier)) {
      click(steps.count, target);
    }
  }
  return { scroll, reset };
}

export function createSeekController() {
  let seekTime;
  let trackIndex;
  let repeatedSteps = 0;

  function step(direction, repeat, state) {
    const { isInert, isSeeking, hasLoadedItem, currentTrackIndex,
      currentPlaybackTime, currentPlaybackDuration } = state;
    if (!repeat) {
      seekTime = isInert ? undefined : currentPlaybackTime;
      trackIndex = currentTrackIndex;
      repeatedSteps = 0;
    }
    if (seekTime === undefined || isInert || isSeeking || !hasLoadedItem ||
        currentPlaybackDuration <= 0 || currentTrackIndex !== trackIndex) return;

    const seconds = seekSteps[Math.min(repeatedSteps, seekSteps.length - 1)];
    const nextTime = Math.min(Math.max(seekTime + direction * seconds, 0), currentPlaybackDuration);
    repeatedSteps += 1;
    seekTime = nextTime > 0 && nextTime < currentPlaybackDuration ? nextTime : undefined;
    return nextTime;
  }
  return { step, cancel() { seekTime = undefined; } };
}
