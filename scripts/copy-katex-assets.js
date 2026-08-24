// Copia gli asset compilati di KaTeX da node_modules a static/vendor/katex,
// così Hugo li pubblica così come sono (font inclusi, path relativi intatti)
// senza dipendere da un CDN esterno. Eseguito automaticamente da npm dopo
// "npm install" (vedi "postinstall" in package.json).
const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "..", "node_modules", "katex", "dist");
const dest = path.join(__dirname, "..", "static", "vendor", "katex");

if (!fs.existsSync(src)) {
  console.warn("[copy-katex-assets] node_modules/katex/dist non trovato, salto la copia.");
  process.exit(0);
}

fs.rmSync(dest, { recursive: true, force: true });
fs.mkdirSync(dest, { recursive: true });
fs.cpSync(src, dest, { recursive: true });

console.log(`[copy-katex-assets] Copiati gli asset KaTeX in ${path.relative(process.cwd(), dest)}`);
