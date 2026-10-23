import { createLogger } from './logging.js';
import { writable } from './vendor/svelte-runtime.js';
const logger = createLogger('loadStorefrontData');
const DATA_SCHEMA_VERSION = 3;

// Source and built entry points both keep catalog data beside their JavaScript.
function storefrontDataUrl(storefront, language) {
  return new URL(`./data/${storefront}/${language}.json`, import.meta.url);
}
export async function loadStorefrontData({
  storefront,
  language
}) {
  let response;
  if (language) {
    response = await fetch(storefrontDataUrl(storefront, language));
    if (!response.ok) {
      logger.warn(`"${language}" is not available for storefront "${storefront}" (${response.status}); falling back to its default language`);
    }
  }
  if (!response?.ok) response = await fetch(storefrontDataUrl(storefront, 'index'));
  if (!response.ok) {
    throw new Error(`Failed to load storefront data for "${storefront}": ${response.status} ${response.statusText}`);
  }
  const catalog = await response.json();
  if (catalog.schemaVersion !== DATA_SCHEMA_VERSION) {
    throw new Error(`Unsupported iPod data schema version for "${storefront}": expected ${DATA_SCHEMA_VERSION}, got ${catalog.schemaVersion}`);
  }
  const {
    songs,
    artists,
    playlists
  } = catalog;
  return {
    language: catalog.language,
    data: {
      songs,
      artists,
      playlists
    }
  };
}
export function createDataStore() {
  const iPodData = writable({
    status: 'loading'
  });
  let latestRequest = 0;
  async function loadIPodData(locale) {
    const requestId = ++latestRequest;
    iPodData.set({
      status: 'loading'
    });
    try {
      const {
        language,
        data
      } = await loadStorefrontData(locale);
      // Ignore stale results if the user changes locale before a load finishes.
      if (requestId === latestRequest) iPodData.set({
        status: 'ready',
        language,
        data
      });
    } catch (error) {
      if (requestId === latestRequest) iPodData.set({
        status: 'error',
        error
      });
    }
  }
  return {
    iPodData,
    loadIPodData
  };
}
