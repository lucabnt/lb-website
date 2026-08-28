// Calcola l'hash SRI del bundle Decap CMS servito da unpkg, per aggiornare
// l'attributo integrity in static/admin/index.html.
//
// Uso:  node scripts/decap-sri.js 3.15.1
//
// Scarica esattamente il file che caricherà il browser e ne stampa l'hash
// sha384 nel formato atteso da Subresource Integrity.
const crypto = require("crypto");
const https = require("https");

const version = process.argv[2];
if (!version) {
  console.error("Uso: node scripts/decap-sri.js <versione>");
  console.error("Esempio: node scripts/decap-sri.js 3.15.1");
  console.error("\nPer conoscere l'ultima versione disponibile: npm view decap-cms version");
  process.exit(1);
}

const url = `https://unpkg.com/decap-cms@${version}/dist/decap-cms.js`;

function fetch(target, redirectsLeft = 5) {
  https
    .get(target, (res) => {
      if ([301, 302, 307, 308].includes(res.statusCode)) {
        if (redirectsLeft === 0) {
          console.error("Troppi redirect.");
          process.exit(1);
        }
        res.resume();
        return fetch(new URL(res.headers.location, target).toString(), redirectsLeft - 1);
      }
      if (res.statusCode !== 200) {
        console.error(`Errore HTTP ${res.statusCode} su ${target}`);
        console.error("Verifica che la versione esista: npm view decap-cms versions");
        res.resume();
        process.exit(1);
      }

      const hash = crypto.createHash("sha384");
      let bytes = 0;
      res.on("data", (chunk) => {
        bytes += chunk.length;
        hash.update(chunk);
      });
      res.on("end", () => {
        console.log(`File:      ${url}`);
        console.log(`Dimensione: ${(bytes / 1024 / 1024).toFixed(1)} MB`);
        console.log(`\nIncolla questi due valori in static/admin/index.html:\n`);
        console.log(`  src="${url}"`);
        console.log(`  integrity="sha384-${hash.digest("base64")}"`);
      });
    })
    .on("error", (err) => {
      console.error(`Impossibile scaricare il file: ${err.message}`);
      process.exit(1);
    });
}

fetch(url);
