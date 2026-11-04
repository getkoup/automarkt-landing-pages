// Package the plain static page and its referenced assets. Keep handoffs/QA private.
import { readFile, mkdir, rm, copyFile } from 'node:fs/promises';
import { dirname, resolve, relative, posix } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = dirname(fileURLToPath(import.meta.url));
const output = resolve(root, 'dist');
const files = new Set(['index.html', 'thank-you.html', 'assets/alata-license.txt', 'assets/inter-license.txt']);
const visited = new Set();
function localReference(reference, from) {
  if (!reference || /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(reference)) return null;
  const file = posix.normalize(posix.join(posix.dirname(from), reference.split(/[?#]/)[0]));
  if (file.startsWith('/') || file === '..' || file.startsWith('../')) throw new Error(`Asset leaves page folder: ${reference}`);
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
await inspect('index.html');
await inspect('thank-you.html');
if (relative(root, output) !== 'dist') throw new Error('Unexpected output directory');
await rm(output, { recursive: true, force: true });
for (const file of [...files].sort()) {
  const destination = resolve(output, file);
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(resolve(root, file), destination);
}
console.log(`Packaged ${files.size} public files in ${output}`);
