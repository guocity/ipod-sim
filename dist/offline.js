// Cache the simulator itself. Song previews remain streamed from Apple.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(error => {
      console.warn('Offline page caching is unavailable:', error);
    });
  }, { once: true });
}
