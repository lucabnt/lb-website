# Hugo, PaperMod e personalizzazioni del sito

Il tema rimane un submodule, senza modifiche ai suoi file. La revisione di
riferimento di questa revisione del sito è
`154d006e0182dfc7da38008323976b02e6bfab4a`; Hugo è fissato in `netlify.toml`.
Configurazione, contenuti e CSS aggiuntivo hanno precedenza sulle copie di
template: creare un override solo quando non esiste un'opzione o un hook.

## Struttura dei template

Usare `layouts/_partials` e `layouts/_shortcodes`, come il tema installato.
I vecchi nomi `layouts/partials` e `layouts/shortcodes` non devono contenere
file. Hugo ha introdotto questi nomi nel
[nuovo sistema di template](https://gohugo.io/templates/new-templatesystem-overview/).
Mescolare le due convenzioni può far usare il partial del tema anziché
l'override previsto: nell'anteprima il sintomo era il selettore che rimandava
alla home della lingua, insieme al footer standard del tema.

Le chiamate restano `partial "nome.html" .` e `{{< nome >}}`: i nomi delle
cartelle non vanno aggiunti alle chiamate. Non mantenere due copie dello
stesso partial nei percorsi vecchi e nuovi.

## Navigazione e traduzioni

- Home, Blog e Tags sono ingressi neutri: nessun selettore lingua globale.
- Il filtro English / Italiano nel Blog sceglie la versione degli articoli.
  È indipendente dal selettore dell'header.
- Il selettore dell'header compare solo se la pagina è una pagina di contenuto
  (`IsPage`) e ha traduzioni pubblicate (`IsTranslated`). Vale anche per
  About ed Explore / Esplora; non vale per tassonomie, termini o sezioni.
- Il partial `language_switch.html` riceve la pagina corrente e usa solo
  `.Translations`. Non deve mai usare `site.Home.Translations`, che conduce
  alla home della lingua anziché alla pagina corrispondente.
- I collegamenti del selettore usano `.RelPermalink`, mantenendo il dominio e
  la porta dell'anteprima. `lang` e `hreflang` dichiarano la lingua di arrivo.
- Markup e classi `logo-switches`, `nav-sep` e `lang-menu` sono quelli di
  PaperMod: nessuno script intercetta il cambio lingua e non serve CSS nuovo.

I file `nome.en.md` e `nome.it.md` vengono associati nativamente da Hugo.
Se i nomi differiscono, dichiarare lo stesso `translationKey`. Non creare
copie vuote per far apparire un selettore. Le bozze rimangono bozze in entrambe
le lingue: nella build pubblica non devono diventare destinazioni del menu.

`aiTranslated: true` attiva la nota AI e identifica le versioni tradotte nel
Blog. `originalLanguage` registra la lingua di origine. I testi originali
non hanno la nota. I percorsi degli asset condivisi partono da `/blog/`,
non dai prefissi delle traduzioni `/it/blog/` o `/en/blog/`.

## Inventario degli override e degli hook

| File rispetto a `layouts/` | Differenze e motivo |
| --- | --- |
| `_partials/header.html` | Header PaperMod con due modifiche: Home porta alla radice neutra; il blocco lingua chiama `language_switch.html`. |
| `_partials/language_switch.html` | Logica locale del selettore di pagina; riusa il markup del tema. |
| `_partials/head.html` | Head PaperMod; l'icona Safari viene emessa solo se configurata, evitando il riferimento a un file assente. Titolo, ricerca, SEO e asset restano nativi. |
| `_partials/extend_head.html` | Hook nativo: KaTeX locale, Netlify Identity e GoatCounter in produzione. Analytics è qui, non inserito nella copia di `head.html`. |
| `_partials/index_profile.html` | Profile Mode nativo; aggiunge soltanto titolo ed etichetta accessibile configurabili ai pulsanti. |
| `_partials/footer.html` | Footer e script nativi, con la frase personale dei crediti. |
| `_partials/templates/schema_json.html` | JSON-LD del tema con correzione delle virgole del breadcrumb e lingua della pagina. |
| `_partials/extend_post_content.html` | Hook nativo che aggiunge il navigatore completo della serie. |
| `_partials/series_nav.html` | Navigatore locale delle serie, con ordine e RSS. |
| `_partials/translation_notice.html` | Avviso AI localizzato e collegamento all'originale. |
| `baseof.html` | Struttura nativa; supporta `lang` esplicito e usa `.Language.Direction`, nome attuale della proprietà. |
| `single.html` | Pagina nativa con `hideDescription`, avviso AI e riga iniziale della serie. |
| `blog/list.html` | Schede PaperMod, aggregate dalle due lingue e filtrabili senza paginazione. All'apertura mostra gli originali. |
| `index.json` | Indice di ricerca PaperMod aggregato sulle due lingue. |
| `rss.xml` | Feed comune con gli originali senza duplicazioni; feed di serie nella lingua corrispondente. |
| `explore.html` | Layout aggiuntivo, non una copia del tema; dati condivisi e variabili CSS di PaperMod. |
| `_markup/render-link.html` | Nelle traduzioni, i rinvii a puntate ancora in bozza sono mostrati come prossimamente, evitando link inesistenti. |
| `_shortcodes/` | Embed esistenti di Flickr, Strava e altri servizi, migrati alla struttura attuale. |

`post_meta.html` non è sovrascritto: data localizzata, tempo di lettura,
conteggio parole e autore seguono direttamente il tema. Non aggiungere una
copia per cambiare soltanto il formato della data: usare `params.DateFormat`.

## Modificare Esplora

La struttura dei percorsi sta soltanto in `data/explore.yaml`. Le pagine
`content/explore.en.md` e `content/explore.it.md` contengono titolo e descrizione.

Per ogni percorso:

- `series`: percorso della tassonomia, uguale nelle due lingue; non l'URL
  pubblico eventualmente personalizzato della serie.
- `image`: asset esistente in `static`, con percorso pubblico senza `static`.
- `imagePosition`: posizione CSS opzionale, per esempio `center 55%`, che
  controlla l'inquadratura senza modificare o duplicare l'immagine.
- `imageFit: contain`: mostra l'immagine intera su fondo bianco, utile per
  frontespizi o documenti il cui testo non deve essere tagliato. In sua assenza
  si usa l'inquadratura fotografica `cover`.
- `en` e `it`: titolo, descrizione e testo alternativo localizzati.

Gli articoli vengono dalla serie nella lingua corrente, ordinati per
`series_weight`; non sono elenchi da aggiornare a mano. Le bozze sono escluse
dalla build pubblica. Per cambiare immagine non modificare template o CSS.

Le immagini scelte sono il frontespizio della tesi, mostrato integralmente,
e il castello di Hohenzollern fotografato durante un'escursione.
Sono già parte del sito; non richiedono download, CDN o nuove dipendenze.

## Verifica prima della pubblicazione

```sh
hugo --gc --minify --environment production -b https://lucabontempi.com
npm run check:navigation -- public
```

Il controllo usa l'HTML generato e verifica:

1. assenza del selettore su Home, Blog e Tags nelle due lingue;
2. destinazioni relative e corrispondenti agli `hreflang` della pagina;
3. esistenza della pagina tradotta e del collegamento per tornare all'originale;
4. nessun cambio lingua diretto a una homepage.

È eseguito anche dalla CI dopo la build. Ripetere la build con `--buildDrafts`
in una destinazione temporanea separata quando si modificano articoli in bozza.
Nel browser verificare almeno About, Esplora e un articolo, in entrambi i sensi,
oltre ai filtri del Blog. Controllare l'anteprima effettivamente aperta dall'utente,
non soltanto un secondo server avviato per i test. Dopo aver creato o rinominato
cartelle come `data`, `_partials` o `_shortcodes`, riavviare `hugo server`: un
processo avviato prima della creazione può continuare a usare dati o template
già caricati, senza osservare la nuova cartella. Questo è stato verificato
sull’anteprima locale durante la correzione.

## Aggiornare PaperMod

1. Aggiornare il submodule a una revisione scelta e annotarla qui.
2. Confrontare gli override con gli equivalenti del tema. Per esempio:
   `git diff --no-index themes/hugo-PaperMod/layouts/_partials/header.html layouts/_partials/header.html`.
3. Ripartire dal nuovo template nativo e riapplicare solo le differenze della
   tabella. Per l'header devono restare soltanto Home e l'hook lingua.
4. Conservare CSS aggiuntivo in `assets/css/extended/` e dati in `data/`.
   Non modificare i file dentro `themes/hugo-PaperMod`.
5. Eseguire build e controllo navigazione. Controllare anche JSON-LD,
   immagini, shortcode e feed secondo il workflow già presente.

Un codice d'uscita 1 da `git diff --no-index` indica differenze, non un errore
di compilazione. Gli avvisi di deprecazione del tema vanno distinti dai guasti
effettivi e non giustificano copie integrali di altri template senza necessità.
