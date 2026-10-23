# Original Apple Music iPod experience
A local reproduction of the interactive iPod on https://music.apple.com/us/jfdsalkfavsd.

Run `pnpm install`, then `pnpm dev` and open http://localhost:5173.

Run `pnpm check` to check the JavaScript. This project runs locally; publishing is not required.

The iPod uses the original public `web-music-ipod` web component from the supplied reference, including its embedded ChicagoKare font, wheel behavior, menu transitions, lighting, reflection, and audio crossfades. Only the original device is displayed. The Apple Music sidebar, page headings, sign-in controls, and subscription banner are removed. The whole iPod scales to fit desktop and mobile viewports without cropping its top edge.

The original US song/artist/playlist data is bundled locally. Music plays through Apple’s public preview URLs, which require an internet connection and may expire or vary by region; these are previews, not full subscription tracks. No sign-in credentials are collected: Apple Music links open the real service.

Original reference component: https://music.apple.com/includes/ipod/web-music-ipod.esm.js
Original reference styles: https://music.apple.com/assets/NotFoundPage~fd10aec657.css
Apple assets and branding belong to their respective owners. Independent reference reproduction.

## Offline behavior
All graphic assets are kept in this repository: the device, controls, and error graphics are embedded in `dist/includes/ipod/web-music-ipod.esm.js` as SVG, CSS, or image data; the ChicagoKare font is embedded there too. The music icon, favicon, and reference font are also bundled under `dist/`. No graphics or fonts need to be fetched from Apple or another external site. Keep the complete `dist/` directory together when copying or serving the simulator. Music previews are excluded from the local copy and offline cache.

The service worker precaches all bundled graphics, fonts, styles, scripts, and menu data, and falls back to cached files on connection failures or server error responses. With the local server running, the simulator's graphics remain available even if the original Apple site is down.

The original component shows its sad-iPod error graphic and “You are not connected to the internet” message when the browser goes offline, and restores its menus on reconnect. A service worker caches the page, exact fonts, component, and menu data after the first successful visit, so reopening or refreshing offline still displays the original error screen. The first visit needs a connection; music previews are streamed and require the internet. No operating-system network settings are changed.
