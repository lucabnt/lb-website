# Personal Website

Questo repository contiene il codice sorgente del mio sito web personale e blog, disponibile online all'indirizzo:
👉 **[lucabontempi.com](https://lucabontempi.com/)**

Il sito è un generatore di siti statici basato su [Hugo](https://gohugo.io/) con deploy continuo e gestione dei contenuti tramite interfaccia grafica.

## 🛠️ Stack Tecnologico

* **Generatore di siti statici:** [Hugo](https://gohugo.io/) (versione pinnata in `netlify.toml`, `HUGO_VERSION`)
* **CMS per i contenuti:** [Decap CMS](https://decapcms.org/) (accessibile da `/admin/`)
* **Hosting e Deploy:** [Netlify](https://www.netlify.com/) (configurato tramite `netlify.toml`)
* **Analytics:** [GoatCounter](https://www.goatcounter.com/) — gratuito, senza cookie, non richiede privacy policy/cookie banner (dashboard: [lucabontempi.goatcounter.com](https://lucabontempi.goatcounter.com))
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
