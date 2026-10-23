# @ipod-sim/web-music-ipod

A local, private ES module package for the original iPod simulator. The app uses
this workspace package as its component source. No remote component dependency
is needed to build or run it.

From the repository root:

```sh
pnpm install
pnpm run build
pnpm run check
pnpm test
pnpm dev
```

`pnpm run build` bundles `src/index.js` into
`dist/includes/ipod/web-music-ipod.esm.js`, writes a source map for browser
debugging, and copies the local catalog. Edit this package, then rebuild; the
file in `dist/` is generated output.

## Source guide

| Module | Responsibility |
| --- | --- |
| `src/index.js` | Register and export the `WebMusicIPod` custom element |
| `src/data.js` | Load the local catalog, language fallback, and loading state |
| `src/settings.js` | Settings, defaults, persistence, and input constants |
| `src/localization.js` | Translation lookup and locale handling |
| `src/navigation.js` | Menus and navigation definitions |
| `src/wheel-gestures.js` | Pointer geometry and wheel gesture tracking |
| `src/wheel-navigation.js` | Wheel steps, volume changes, and seeking |
| `src/interaction.js` | Timing, keyboard, and interaction helpers |
| `src/backlight.js` | Backlight timers and activity handling |
| `src/audio/preview-player.js` | Preview channels, queue, and crossfades |
| `src/audio/playback-store.js` | Playback state and player integration |
| `src/audio/context.js` | Browser audio context and click playback |
| `src/assets/` | Local font, wheel texture, click effect, and base CSS |
| `src/data/us/` | Bundled song, artist, and playlist metadata |
| `src/generated/` | Reconstructed Svelte rendering and component wiring |
| `src/vendor/` | Original bundled Svelte 4 runtime and object helpers |

For a bundler-based consumer, importing `@ipod-sim/web-music-ipod` registers
`<web-music-ipod>`. It also exports `WebMusicIPod` and `registerIPod()`. The
component requires a browser; registration occurs on import. The consumer must
serve `src/data/` beside its output JavaScript as `data/`. The repository build
does this automatically. Font and image imports use esbuild's `dataurl` loader,
and base CSS uses its `text` loader, keeping graphics embedded in the output.

The element retains its original properties: `locale`, `dragStepDegrees`,
`backlit`, `playback`, `navigateToUrl`, and `i18n`, plus the read-only
`iPodDataStore`. For example:

```js
import '@ipod-sim/web-music-ipod';

const ipod = document.querySelector('web-music-ipod');
ipod.locale = { storefront: 'us', language: 'en-US' };
```

## Provenance and limits

This is a reconstruction of the supplied compiled component from
https://music.apple.com/includes/ipod/web-music-ipod.esm.js, not Apple's original
source package. The source map endpoint returned 404 when checked. Modules were
separated using JavaScript binding information, and central APIs were given
descriptive names. Catalog loading was rewritten as readable source. The
`generated/` rendering functions and `vendor/` runtime still contain compiled
identifiers and Svelte internals; the original `.svelte` templates have not been
recovered. Keep that distinction when editing or describing this package.

All graphics and fonts remain local. The small wheel click sound is a UI effect;
song previews are streamed from Apple and are never bundled or cached. Apple
assets and branding remain the property of their respective owners. This
private package does not grant redistribution rights or claim an open-source
license for the supplied code.
