const CACHE = 'ipod-shell-v4';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './offline.js',
  './favicon.svg',
  './reference.css',
  './assets/music-icon.png',
  './assets/fonts/404/ipod/AGaramondPro-Regular.woff2',
  './includes/ipod/web-music-ipod.esm.js',
  './includes/ipod/data/us/index.json',
  './includes/ipod/data/us/en-US.json'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(ASSETS);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith('ipod-shell-') && name !== CACHE).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  // Cache the explicit local shell and graphics; music stays streamed from Apple.
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;
  const knownAsset = ASSETS.some(path => new URL(path, self.registration.scope).href === url.href);
  if (!knownAsset) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      const response = await fetch(event.request);
      if (response.ok && !response.redirected) await cache.put(event.request, response.clone());
      if (!response.ok) {
        const cached = await cache.match(event.request);
        if (cached) return cached;
      }
      return response;
    } catch (error) {
      const cached = await cache.match(event.request);
      if (cached) return cached;
      throw error;
    }
  })());
});
