// Check rendered output rather than reimplementing Hugo's translation lookup.
// Usage: node scripts/check-site-navigation.cjs [public-directory]
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

const root = path.resolve(process.argv[2] || 'public');
const attributes = tag => Object.fromEntries(
  [...tag.matchAll(/([\w-]+)=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)]
    .map(m => [m[1], m[2] ?? m[3] ?? m[4]])
);
const walk = directory => fs.readdirSync(directory, { withFileTypes: true }).flatMap(
  entry => entry.isDirectory() ? walk(path.join(directory, entry.name)) : [path.join(directory, entry.name)]
);
const read = filename => fs.readFileSync(filename, 'utf8');
const menu = html => html.match(/<ul\b[^>]*class=["']?lang-menu["']?[^>]*>([\s\S]*?)<\/ul>/)?.[1] || '';
const fileFor = url => path.join(root, decodeURIComponent(url), 'index.html');

for (const url of ['/', '/it/', '/blog/', '/it/blog/', '/tags/', '/it/tags/']) {
  assert.equal(menu(read(fileFor(url))), '', `Unexpected language switch on ${url}`);
}

let pages = 0;
let switches = 0;
for (const filename of walk(root).filter(f => f.endsWith('index.html'))) {
  const html = read(filename);
  if (!html.includes('<header class=') && !html.includes('<header class =')) continue;
  const sourceURL = '/' + path.relative(root, filename).replaceAll(path.sep, '/').replace(/index\.html$/, '');
  const translations = new Map(
    [...html.matchAll(/<link\b[^>]*>/g)].map(m => attributes(m[0]))
      .filter(a => a.hreflang && a.href)
      .map(a => [a.hreflang, decodeURIComponent(new URL(a.href, 'https://local.invalid').pathname)])
  );
  pages++;
  for (const tag of menu(html).matchAll(/<a\b[^>]*>/g)) {
    const link = attributes(tag[0]);
    assert(link.href?.startsWith('/') && !link.href.startsWith('//'), `Non-relative switch on ${sourceURL}`);
    assert(!['/', '/it/', '/en/'].includes(link.href), `Switch returns home from ${sourceURL}`);
    assert.equal(decodeURIComponent(link.href), translations.get(link.hreflang), `Wrong translation on ${sourceURL}`);
    const targetFile = fileFor(link.href);
    assert(fs.existsSync(targetFile), `Missing translation ${link.href}`);
    const reverseLinks = [...menu(read(targetFile)).matchAll(/<a\b[^>]*>/g)].map(m => decodeURIComponent(attributes(m[0]).href));
    assert(reverseLinks.includes(sourceURL), `No return switch from ${link.href} to ${sourceURL}`);
    switches++;
  }
}
assert(switches > 0, 'No page translation switches found; project partials may not be loaded');
console.log(`Navigation OK: ${pages} pages, ${switches} page translation links; no global language switches.`);
