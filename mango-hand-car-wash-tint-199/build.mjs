// Package only the two static pages, their local dependencies and font licenses.
import { readFile, mkdir, rm, copyFile } from 'node:fs/promises';
import { dirname, resolve, relative, posix } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const output = resolve(root, 'dist');
const entries = ['index.html'];
const files = new Set([...entries, 'assets/alata-license.txt', 'assets/inter-license.txt']);
const visited = new Set();

function localReference(reference, from) {
  if (!reference || /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(reference)) return null;
  const path = reference.split(/[?#]/)[0];
  if (!path) return null;
  if (path.startsWith('/') || path.split('/').includes('..') || path.includes('\\')) {
    throw new Error(`Non-relative or escaping asset: ${reference}`);
  }
  let file = posix.normalize(posix.join(posix.dirname(from), path));
  if (file === '.' || path.endsWith('/')) file = posix.join(file, 'index.html');
  if (!/^(?:index\.html|page\.css|site\.js|ghl-thanks\.js|assets\/[a-z\d-]+\.(?:css|woff2|webp|png))$/.test(file)) {
    throw new Error(`Unexpected public dependency: ${file}`);
  }
  return file;
}

async function inspect(file) {
  if (visited.has(file)) return;
  visited.add(file);
  if (!/\.(?:html|css)$/.test(file)) return;
  const contents = await readFile(resolve(root, file), 'utf8');
  const references = file.endsWith('.html')
    ? [...contents.matchAll(/(?:src|href)=["']([^"']+)["']/g)].map(match => match[1])
    : [...contents.matchAll(/url\(\s*["']?([^)'"\s]+)["']?\s*\)/g)].map(match => match[1]);
  for (const reference of references) {
    const dependency = localReference(reference, file);
    if (!dependency) continue;
    files.add(dependency);
    await inspect(dependency);
  }
}

for (const entry of entries) await inspect(entry);
if (relative(root, output) !== 'dist') throw new Error('Unexpected output directory');
await rm(output, { recursive: true, force: true });
for (const file of [...files].sort()) {
  const destination = resolve(output, file);
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(resolve(root, file), destination);
}
console.log(`Packaged ${files.size} public files in ${output}`);
