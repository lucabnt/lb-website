// Copia in static/vendor/katex i soli asset KaTeX effettivamente usati dal
// sito, così Hugo li pubblica senza dipendere da un CDN esterno.
// Eseguito automaticamente da npm dopo "npm install" (vedi "postinstall").
//
// Il pacchetto npm distribuisce l'intero dist (~3 MB): oltre ai file minificati
// contiene le versioni non minificate, i moduli ES, varianti CSS alternative,
// script contrib che qui non servono e un README (quest'ultimo faceva pure
// inciampare il controllo dei link della CI, per via di riferimenti relativi a
// file non copiati). Si copia quindi solo ciò che le pagine richiedono davvero,
// elencato in ASSETS: i tre file referenziati da layouts/partials/extend_head.html
// più la cartella dei font, a cui katex.min.css punta con URL relativi.
//
// Se in futuro servisse un'estensione KaTeX (per esempio contrib/mhchem.min.js
// per le formule chimiche), va aggiunta qui e referenziata in extend_head.html.
const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "..", "node_modules", "katex", "dist");
const dest = path.join(__dirname, "..", "static", "vendor", "katex");

const ASSETS = [
  "katex.min.css",
  "katex.min.js",
  "contrib/auto-render.min.js",
  "fonts", // cartella: i font sono richiamati da katex.min.css via url(fonts/...)
];

if (!fs.existsSync(src)) {
  console.warn("[copy-katex-assets] node_modules/katex/dist non trovato, salto la copia.");
  process.exit(0);
}

fs.rmSync(dest, { recursive: true, force: true });

let copied = 0;
for (const asset of ASSETS) {
  const from = path.join(src, asset);
  const to = path.join(dest, asset);

  if (!fs.existsSync(from)) {
    console.error(`[copy-katex-assets] Asset atteso ma non trovato: ${asset}`);
    process.exit(1);
  }

  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.cpSync(from, to, { recursive: true });
  copied += fs.statSync(from).isDirectory()
    ? fs.readdirSync(from).length
    : 1;
}

console.log(
  `[copy-katex-assets] Copiati ${copied} file in ${path.relative(process.cwd(), dest)}`
);
