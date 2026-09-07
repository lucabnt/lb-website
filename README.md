# Personal Website

Questo repository contiene il codice sorgente del mio sito web personale e blog, disponibile online all'indirizzo:
👉 **[lucabontempi.com](https://lucabontempi.com/)**

Il sito è un generatore di siti statici basato su [Hugo](https://gohugo.io/) con deploy continuo e gestione dei contenuti tramite interfaccia grafica.

## 🛠️ Stack Tecnologico

* **Generatore di siti statici:** [Hugo](https://gohugo.io/) (versione pinnata in `netlify.toml`, `HUGO_VERSION`)
* **CMS per i contenuti:** [Decap CMS](https://decapcms.org/) (accessibile da `/admin/`)
* **Hosting e Deploy:** [Netlify](https://www.netlify.com/) (configurato tramite `netlify.toml`)
* **Analytics:** [GoatCounter](https://www.goatcounter.com/) — gratuito, senza cookie, non richiede privacy policy/cookie banner
* **Lingua del sito:** inglese (`defaultContentLanguage` in `config.yml`); il contenuto è misto e le pagine italiane lo dichiarano una per una — vedi *Lingua delle pagine*

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
* **ogni pagina pubblicata sia effettivamente generata** — nasce da un bug intermittente per cui la build poteva saltare un post senza fallire, lasciando un 404 silenzioso in produzione. La causa è stata trovata e corretta (vedi *Tema PaperMod*), ma il controllo resta come rete di sicurezza: una pagina che sparisce senza far fallire la build è un guasto che Netlify non segnala;
* non ci siano **link interni rotti** (controllo bloccante);
* non ci siano **link esterni rotti** (controllo informativo, non blocca la CI: il link rot su siti di terzi non dipende da questo repository).

## 📚 Serie di articoli

Oltre a `tags` (l'argomento) e `categories`, il sito ha una tassonomia `series` per i post che compongono una sequenza da leggere in ordine. Ogni puntata dichiara:

```yaml
series: ["Ciclismo giovanile e professionismo"]
series_weight: 1   # posizione nella serie
tags: ["ciclismo-giovanile"]
lang: it           # la serie è in italiano, il sito è in inglese
locale: it_IT
```

`series_weight` — e non la data — determina l'ordine: una puntata pubblicata in ritardo o retrodatata resta comunque al posto giusto.

Ogni serie ha una pagina propria in `content/series/<slug>/_index.md`, che serve a due cose: dare alla serie un titolo scritto a mano (altrimenti Hugo lo genera mettendo in maiuscolo ogni parola, congiunzioni comprese) e un'introduzione. Se la serie esce a puntate, `episodes_total` fissa il totale finale, altrimenti il primo post annuncerebbe «puntata 1 di 1»:

```yaml
title: "Ciclismo giovanile e professionismo"
episodes_total: 9
```

> ⚠️ **Il nome della cartella deve combaciare esattamente con lo slug del nome della serie** così come Hugo lo genera dal valore scritto in `series:` nei post. Se non combacia il guasto è silenzioso: Hugo costruisce due pagine separate, una con il titolo e l'introduzione ma senza post, e una con i post ma senza titolo e introduzione, e nessuna delle due segnala l'errore.
>
> Quando lo slug conterrebbe accenti o dieresi, la cartella deve tenerli lo stesso (`content/series/one-year-in-tübingen/`), altrimenti l'accoppiamento salta. Per pubblicare comunque un indirizzo pulito si usa `url:` — `slug:` sui termini di tassonomia viene ignorato:
>
> ```yaml
> title: "One year in Tübingen"
> url: /series/tuebingen/
> ```

Dentro i post non va scritto nulla: `layouts/partials/series_nav.html` aggiunge da sé la riga «Part N of M» sopra il testo e l'elenco delle puntate in fondo, con quella corrente evidenziata. Aggiungere o riordinare una puntata aggiorna tutte le altre.

## 🌍 Lingua delle pagine

Il sito è **in inglese** (`defaultContentLanguage: en`, `locale: en-GB` in `config.yml`): da lì vengono l'attributo `lang` dell'HTML, `og:locale`, la lingua dichiarata nel feed RSS e le stringhe della cornice del tema (`i18n/en.yaml`).

Il contenuto però è misto. Una pagina scritta in un'altra lingua **deve dichiararlo**, altrimenti gli screen reader leggono il testo italiano con la fonetica inglese:

```yaml
lang: it
locale: it_IT
```

`lang` finisce nell'elemento `<html>`, `locale` in `og:locale` per le anteprime social. Vanno messi entrambi: sono due meccanismi diversi.

> Questo non cambia la lingua della cornice: «Table of Contents», i pulsanti di condivisione e le etichette delle serie restano in inglese anche su una pagina italiana, perché seguono la lingua del *sito*. `i18n/it.yaml` esiste ma non è attivo, e lo dice nella propria intestazione.

### Pagine con entrambe le lingue

`/about/` ha la versione inglese e, sotto, quella italiana. In questi casi la pagina resta inglese — è la lingua prevalente e quella del titolo — e si marca **solo la parte italiana**, avvolgendola in un `div`:

```markdown
## About me again, but in Italian

<div lang="it">

Ciao, sono Luca!

</div>
```

Le righe vuote dopo il tag di apertura e prima di quello di chiusura sono obbligatorie: senza, Hugo tratta tutto il blocco come HTML grezzo e non converte più il markdown al suo interno. Il titolo della sezione resta fuori dal `div` perché è scritto in inglese: è il cartello per il lettore inglese, e va letto come tale.

Se un giorno la versione italiana crescesse al punto da meritare una pagina propria, la strada migliore diventa dividerla in due pagine collegate — una lingua per pagina è meglio anche per i motori di ricerca, che su una pagina bilingue devono sceglierne una.

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

Il repository sovrascrive alcuni file del tema: `layouts/baseof.html`, `layouts/single.html` e i partial `head.html`, `footer.html`, `templates/schema_json.html`. Dopo un aggiornamento vanno confrontati con quelli nuovi del tema. `baseof.html` e `templates/schema_json.html` sono copie integrali con una sola modifica ciascuna — l'attributo `lang` nel primo, il blocco `BreadcrumbList` nel secondo — e vanno riallineate a mano se il tema le modifica. In entrambe la modifica è delimitata da un commento, così si vede subito cosa tenere.

> Il perché di `schema_json.html`: il template del tema costruiva il JSON-LD del breadcrumb mettendo la virgola prima dell'ultimo elemento in base alla profondità del percorso, non al numero di elementi effettivamente scritti. Quando `site.GetPage` non risolveva la sezione padre usciva `"itemListElement": [, {...}]`, JSON non valido: il minificatore rifiutava la pagina e la build falliva. Colpiva solo i post del blog, perché sono le uniche pagine dentro una sezione.

### Dipendenze npm e GitHub Action

Gestite da Dependabot (`.github/dependabot.yml`), che apre una pull request mensile. Le action sono pinnate al commit SHA — un tag come `v7` può essere spostato, un SHA no — e Dependabot aggiorna SHA e commento della versione insieme.

### Da verificare su Netlify (non configurabile da questo repository)

Che in **Netlify Identity** la registrazione sia impostata su *Invite only* e non *Open*: con *Open* chiunque potrebbe registrarsi e, a seconda della configurazione di git-gateway, ottenere accesso al CMS.
