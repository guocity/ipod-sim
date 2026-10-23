import { WebMusicIPod } from './generated/ipod.js';

/** Register the component once, including when imported by multiple apps. */
export function registerIPod(tagName = 'web-music-ipod') {
  if (!customElements.get(tagName)) {
    customElements.define(tagName, WebMusicIPod);
  }
}
export { WebMusicIPod };
registerIPod();
