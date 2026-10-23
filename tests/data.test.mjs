import test from 'node:test';
import assert from 'node:assert/strict';
import { createDataStore, loadStorefrontData } from '../packages/web-music-ipod/src/data.js';

const catalog = language => ({ schemaVersion: 3, language, songs: [], artists: [], playlists: [] });

test('missing translation falls back to the bundled default catalog', async t => {
  const requests = [];
  t.mock.method(globalThis, 'fetch', async url => {
    requests.push(url.pathname);
    return requests.length === 1
      ? new Response('', { status: 404 })
      : Response.json(catalog('en-US'));
  });
  const result = await loadStorefrontData({ storefront: 'us', language: 'fr-FR' });
  assert.equal(result.language, 'en-US');
  assert.ok(requests[0].endsWith('/data/us/fr-FR.json'));
  assert.ok(requests[1].endsWith('/data/us/index.json'));
});

test('invalid catalog schema produces a useful error', async t => {
  t.mock.method(globalThis, 'fetch', async () => Response.json({ schemaVersion: 99 }));
  await assert.rejects(loadStorefrontData({ storefront: 'us' }), /expected 3, got 99/);
});

test('a late catalog response cannot overwrite a newer locale', async t => {
  let finishFirst;
  const firstResponse = new Promise(resolve => { finishFirst = resolve; });
  t.mock.method(globalThis, 'fetch', async url => url.pathname.endsWith('/first.json')
    ? firstResponse
    : Response.json(catalog('second')));
  const store = createDataStore();
  let state;
  const unsubscribe = store.iPodData.subscribe(value => { state = value; });
  t.after(unsubscribe);
  const firstLoad = store.loadIPodData({ storefront: 'us', language: 'first' });
  await store.loadIPodData({ storefront: 'us', language: 'second' });
  finishFirst(Response.json(catalog('first')));
  await firstLoad;
  assert.equal(state.status, 'ready');
  assert.equal(state.language, 'second');
});

test('catalog fetch failures reach the error state', async t => {
  t.mock.method(globalThis, 'fetch', async () => { throw new Error('unavailable'); });
  const store = createDataStore();
  let state;
  const unsubscribe = store.iPodData.subscribe(value => { state = value; });
  t.after(unsubscribe);
  await store.loadIPodData({ storefront: 'us' });
  assert.equal(state.status, 'error');
  assert.equal(state.error.message, 'unavailable');
});
