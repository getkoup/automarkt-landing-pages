// Package only public static files; the source page also works without a build.
import { readFile, mkdir, rm, copyFile } from 'node:fs/promises';
import { dirname, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = dirname(fileURLToPath(import.meta.url));
const output = resolve(root, 'dist');
const pages = ['index.html', 'thank-you.html'];
const html = (await Promise.all(pages.map(page => readFile(resolve(root, page), 'utf8')))).join('\n');
const css = await readFile(resolve(root, 'styles.css'), 'utf8');
const assets = new Set([
  ...[...html.matchAll(/(?:src|href)="(assets\/[^"?#]+)"/g)].map(m => m[1]),
  ...[...html.matchAll(/srcset="([^"]+)"/g)].flatMap(m => m[1].split(',').map(item => item.trim().split(/\s+/)[0])),
  ...[...css.matchAll(/url\(['"]?(assets\/[^)'"?#]+)['"]?\)/g)].map(m => m[1]),
  'assets/FONT-LICENSES.txt'
]);
const files = [...pages, 'styles.css', 'script.js', 'form-config.js', 'form-submit.js', ...assets];
await rm(output, { recursive: true, force: true });
for (const file of files) {
  const source = resolve(root, file);
  if (!file.startsWith('assets/') && !files.slice(0, 6).includes(file)) throw new Error(`Unexpected public file: ${file}`);
  if (relative(root, source).startsWith('..') || file.startsWith('/')) throw new Error(`Invalid path: ${file}`);
  const destination = resolve(output, file);
  await mkdir(dirname(destination), { recursive: true });
  await copyFile(source, destination);
}
console.log(`Packaged ${files.length} public files in ${output}`);
