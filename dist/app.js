// Fit the full original device instead of clipping it inside a page section.
function fitDevice() {
  const scale = Math.min(1, (window.innerWidth - 40) / 415, (window.innerHeight - 100) / 692);
  document.documentElement.style.setProperty('--device-scale', String(Math.max(.2, scale)));
}
fitDevice();
window.addEventListener('resize', fitDevice);
