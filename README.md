# Personal Website

Questo repository contiene il codice sorgente del mio sito web personale e blog, disponibile online all'indirizzo:
👉 **[lucabontempi.com](https://lucabontempi.com/)**

Il sito è un generatore di siti statici basato su [Hugo](https://gohugo.io/) con deploy continuo e gestione dei contenuti tramite interfaccia grafica.

La struttura dei template, gli override rispetto a PaperMod e le verifiche del
cambio lingua sono descritti in [docs/theme-maintenance.md](docs/theme-maintenance.md).

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

Dentro i post non va scritto nulla: `layouts/_partials/series_nav.html` aggiunge da sé la riga «Part N of M» sopra il testo e l'elenco delle puntate in fondo, con quella corrente evidenziata. Aggiungere o riordinare una puntata aggiorna tutte le altre.

## 🌍 Lingua delle pagine

Hugo usa ora il multilingua nativo `en` e `it`. I nomi dei file determinano
la lingua: `articolo.md` o `articolo.en.md` per inglese, `articolo.it.md`
per italiano. `lang` e `locale` descrivono anche HTML e anteprime social.
Le pagine italiane esistenti mantengono il loro URL con `url: /blog/.../`.

Per aggiungere una traduzione con un nome diverso, dare alle due versioni
lo stesso `translationKey`, ad esempio `translationKey: app-store-review`.
Hugo collega le pagine e PaperMod mostra il selettore verso la versione reale,
sia nell'header sia nei metadati. I contenuti monolingua non hanno selettore.
La homepage non mostra il selettore e Home rimanda sempre alla radice. Un pulsante a bussola apre Explore / Esplora.
About e ora separato in due versioni, riusando i testi esistenti.

Le traduzioni AI vengono scritte e revisionate come normali pagine Markdown:
nessuna traduzione automatica lato lettore. Non creare versioni vuote o copie
nella lingua sbagliata. I nuovi file italiani hanno normalmente URL `/it/.../`;
`url` con slash iniziale permette di mantenere un indirizzo preesistente.
Per i riferimenti ad altre lingue usare, ad esempio,
`{{< ref path="cv" lang="en" >}}`.

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

L’inventario degli override, le differenze rispetto al tema e i controlli
da eseguire dopo un aggiornamento sono nella
[guida di manutenzione](docs/theme-maintenance.md). I file del submodule
non vengono modificati.

> Il perché di `schema_json.html`: il template del tema costruiva il JSON-LD del breadcrumb mettendo la virgola prima dell'ultimo elemento in base alla profondità del percorso, non al numero di elementi effettivamente scritti. Quando `site.GetPage` non risolveva la sezione padre usciva `"itemListElement": [, {...}]`, JSON non valido: il minificatore rifiutava la pagina e la build falliva. Colpiva solo i post del blog, perché sono le uniche pagine dentro una sezione.

### Dipendenze npm e GitHub Action

Gestite da Dependabot (`.github/dependabot.yml`), che apre una pull request mensile. Le action sono pinnate al commit SHA — un tag come `v7` può essere spostato, un SHA no — e Dependabot aggiorna SHA e commento della versione insieme.

### Da verificare su Netlify (non configurabile da questo repository)

Che in **Netlify Identity** la registrazione sia impostata su *Invite only* e non *Open*: con *Open* chiunque potrebbe registrarsi e, a seconda della configurazione di git-gateway, ottenere accesso al CMS.

## Ricerca, RSS e filtro delle lingue

La homepage resta in Profile Mode e non mostra RSS o selezione della lingua.
Il blog e le serie espongono il proprio RSS, collegato anche dal riquadro
in fondo alle puntate. Il pulsante apre XML; l'iscrizione si effettua nel
proprio lettore RSS. Il feed del blog unisce gli originali nelle due lingue, senza duplicarli con le traduzioni;
i feed delle serie seguono la lingua della serie. Le bozze sono escluse.
`layouts/rss.xml` personalizza il feed per evitare che il multilingua escluda
le pubblicazioni italiane dal feed comune.

La ricerca nativa PaperMod in `/search/` legge `layouts/index.json`, che
include i contenuti pubblicati di tutti i siti lingua, senza le bozze.

`layouts/blog/list.html` deriva da PaperMod e aggrega entrambe le lingue.
Mostra tutti i post senza paginazione per filtrare l'intero archivio.
I pulsanti English e Italiano partono entrambi inattivi: si vedono solo le
versioni originali, una scheda per articolo. Un clic mostra le versioni nella
lingua scelta; un secondo clic sul pulsante attivo ripristina gli originali.
Anche senza JavaScript le traduzioni sono nascoste e restano gli originali.

Decap crea nuovi post con suffisso `.en.md` o `.it.md` secondo il campo lingua.
La chiave traduzione collega articoli che hanno titoli o nomi di file diversi.
Gli override `layouts/blog/list.html` e `layouts/_partials/header.html` vanno
confrontati con il tema dopo un aggiornamento di PaperMod. L'header cambia
solo Home (sempre radice) e il selettore (solo traduzioni della pagina).


## Traduzioni AI ed Esplora

Ogni post ha una versione nell'altra lingua, comprese le bozze, che restano
bozze. Le traduzioni hanno aiTranslated: true e originalLanguage nel front
matter. La nota in layouts/_partials/translation_notice.html appare solo sulle
versioni tradotte e rimanda all'originale. Il campo e disponibile in Decap.

La versione italiana di determinants_of_download_on_mobile_app_stores traduce
soltanto la Premessa: titolo e testo da Abstract in poi sono conservati, con
marcatura della lingua per gli screen reader. Gli altri post sono tradotti
integralmente, incluse note e didascalie. I testi dentro le immagini restano
quelli dei grafici originali. Le traduzioni usano gli stessi asset, con percorsi
assoluti per evitare immagini rotte negli URL tradotti.

Explore (/explore/) ed Esplora (/it/explore/) usano layouts/explore.html e
data/explore.yaml. Mostrano solo tre percorsi, senza selezione iniziale. Gli
elenchi provengono dalle serie della lingua corrente, ordinati con series_weight;
le bozze non appaiono in produzione. Le pagine delle serie sono collegate come
traduzioni native. La struttura condivisa evita duplicazioni del layout.

Dopo un aggiornamento del tema confrontare anche index_profile.html: l'override
aggiunge solo etichette accessibili ai pulsanti della homepage.
