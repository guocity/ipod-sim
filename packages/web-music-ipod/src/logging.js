// Enable debug logging with localStorage.onyxLog = '*' or 'namespace=on'.
function isLoggingEnabled(namespace) {
  try {
    const configuration = localStorage.getItem('onyxLog');
    if (configuration === null) return false;
    const entries = configuration.split(',').map(entry => entry.trim());
    const match = entries.find(entry => entry.split('=')[0] === namespace);
    if (match !== undefined) return match.split('=')[1] !== 'off';
    return entries.some(entry => entry === '*' || entry === '*=*');
  } catch {
    return false;
  }
}

export function createLogger(namespace) {
  const prefix = `[${namespace}]`;
  return {
    debug(...args) {
      if (isLoggingEnabled(namespace)) console.log(prefix, ...args);
    },
    info: (...args) => console.info(prefix, ...args),
    warn: (...args) => console.warn(prefix, ...args),
    error: (...args) => console.error(prefix, ...args)
  };
}
