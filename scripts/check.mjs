import { readdir } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

async function checkDirectory(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = `${directory}/${entry.name}`;
    if (entry.isDirectory()) await checkDirectory(path);
    else if (/\.m?js$/.test(path)) execFileSync(process.execPath, ['--check', path], { stdio: 'inherit' });
  }
}

await checkDirectory('packages');
await checkDirectory('scripts');
await checkDirectory('dist');
console.log('Package sources, build scripts, and browser output passed syntax checks.');
