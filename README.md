# Personal Website

Questo repository contiene il codice sorgente del mio sito web personale e blog, disponibile online all'indirizzo:
👉 **[lucabontempi.com](https://lucabontempi.com/)**

Il sito è un generatore di siti statici basato su [Hugo](https://gohugo.io/) con deploy continuo e gestione dei contenuti tramite interfaccia grafica.

## 🛠️ Stack Tecnologico

* **Generatore di siti statici:** [Hugo](https://gohugo.io/) (versione pinnata in `netlify.toml`, `HUGO_VERSION`)
* **CMS per i contenuti:** [Decap CMS](https://decapcms.org/) (accessibile da `/admin/`)
* **Hosting e Deploy:** [Netlify](https://www.netlify.com/) (configurato tramite `netlify.toml`)
* **Analytics:** [GoatCounter](https://www.goatcounter.com/) — gratuito, senza cookie, non richiede privacy policy/cookie banner
* **Lingua principale:** Italiano (configurata in `i18n/it.yaml`)

## 🚀 Sviluppo in locale

Se vuoi eseguire il sito in locale sul tuo computer per testare delle modifiche o vedere un'anteprima degli articoli, segui questi passaggi:

### Prerequisiti

* [Git](https://git-scm.com/)
* [Hugo](https://gohugo.io/installation/) — versione **Extended**, stessa versione indicata in `netlify.toml` (`HUGO_VERSION`), per evitare differenze di comportamento tra build locale e build di produzione
* [Node.js](https://nodejs.org/) (LTS) — serve solo per scaricare gli asset di [KaTeX](https://katex.org/) (il rendering delle formule matematiche, usato in alcuni articoli), che vengono auto-ospitati invece di dipendere da un CDN esterno

### Installazione e Avvio

1. Clona questo repository ed entra nella cartella del progetto:
   ```bash
   git clone https://github.com/lucabnt/lb-website.git
   cd lb-website
   ```

2. Inizializza il tema (submodule git):
   ```bash
   git submodule update --init --recursive
   ```

3. Installa le dipendenze npm (genera gli asset di KaTeX in `static/vendor/katex/`):
   ```bash
   npm install
   ```

4. Avvia il server di sviluppo di Hugo:
   ```bash
   hugo server
   ```

5. Apri [http://localhost:1313](http://localhost:1313) nel browser. Il sito si ricarica automaticamente ad ogni modifica dei contenuti o dei template.

> Nota: alcune funzionalità (analytics, Open Graph, dati strutturati) sono attive solo in build "production" — per vederle in locale usa `hugo server --environment production`.

## ✅ Controlli automatici

Ad ogni push su `main`, il workflow `.github/workflows/build-check.yml` esegue la stessa build di produzione usata da Netlify e verifica che:

* la build non produca errori;
* **ogni pagina pubblicata sia effettivamente generata** — nasce da un bug intermittente di Hugo per cui la build può saltare una pagina senza fallire, lasciando un 404 silenzioso in produzione;
* non ci siano **link interni rotti** (controllo bloccante);
* non ci siano **link esterni rotti** (controllo informativo, non blocca la CI: il link rot su siti di terzi non dipende da questo repository).

## 🔒 Manutenzione periodica

Poche cose, ma vanno fatte a mano. Nessuna è urgente: sono tutte "quando capita".

### Decap CMS (`static/admin/index.html`)

Il bundle è caricato da unpkg **bloccato a una versione esatta e verificato con Subresource Integrity**: se il file servito dal CDN cambiasse, il browser si rifiuterebbe di eseguirlo. È la protezione più importante del sito, perché `/admin/` è l'unico punto in cui gira codice di terze parti insieme a una sessione autenticata con accesso in scrittura al repository.

Il rovescio della medaglia è che gli aggiornamenti non sono automatici (Dependabot non sa aggiornare un hash dentro un file HTML). Per aggiornare:

```bash
npm view decap-cms version           # ultima versione disponibile
node scripts/decap-sri.js <versione> # stampa src e integrity aggiornati
```

Incolla i due valori in `static/admin/index.html`, fai il deploy e **apri `/admin/` una volta** per confermare che il CMS carichi. Se l'hash fosse sbagliato la pagina resterebbe vuota: il guasto è evidente, non silenzioso.

Cadenza consigliata: una o due volte l'anno, o quando serve una funzionalità nuova.

### Versione di Hugo (`netlify.toml`)

`HUGO_VERSION` determina sia la build di produzione sia quella della CI. Quando la aggiorni, **allinea anche il binario locale** alla stessa versione: un disallineamento fra locale e produzione è già stato causa di comportamenti divergenti difficili da diagnosticare.

### Tema PaperMod (submodule git)

È pinnato a un commit specifico, quindi non si aggiorna da solo. Per aggiornarlo:

```bash
cd themes/hugo-PaperMod && git fetch && git checkout <tag-o-commit> && cd ../..
git add themes/hugo-PaperMod && git commit -m "Aggiorna PaperMod"
```

Il tema sovrascrive alcuni file in `layouts/partials/` (ci sono override locali di `head.html`, `footer.html`, `single.html`): dopo un aggiornamento conviene confrontarli con quelli nuovi del tema.

### Dipendenze npm e GitHub Action

Gestite da Dependabot (`.github/dependabot.yml`), che apre una pull request mensile. Le action sono pinnate al commit SHA — un tag come `v7` può essere spostato, un SHA no — e Dependabot aggiorna SHA e commento della versione insieme.

### Da verificare su Netlify (non configurabile da questo repository)

Che in **Netlify Identity** la registrazione sia impostata su *Invite only* e non *Open*: con *Open* chiunque potrebbe registrarsi e, a seconda della configurazione di git-gateway, ottenere accesso al CMS.
