# Sezione Projects: schede dei software pubblicati

Ogni progetto pubblicato su GitHub ha sul sito una **scheda**: una pagina breve
che fa da landing page e spiega *perché* esiste e *per chi* è, mentre il
README resta il posto del *come*.

Le schede vivono in una sezione propria, separata dal blog, così i progetti non
occupano l'elenco degli articoli né il suo feed RSS:

- **Sezione Projects** (`content/projects/`, pagine `/projects/` e
  `/it/projects/`): elenco unico per le due lingue con il filtro della lingua,
  come `/blog/`, nell'ordine di `series_weight`, con stato, versione e data di
  revisione di ogni scheda (`layouts/projects/list.html`). Voce "Projects" nel
  menu della home, subito dopo Blog.
- **Serie Progetti**: le stesse schede formano la serie che in Esplora è il
  secondo percorso ("Progetti e strumenti"), dopo "Ciclismo e dati". Il piede
  di Esplora rimanda anche a "Tutti i progetti".

Una scheda **non è un articolo di release**: è una pagina viva, scritta una
volta e aggiornata nel tempo, con la data dell'ultima revisione in vista.

## Come è fatta

| Parte | Dove sta | Cambia con le release? |
|---|---|---|
| Titolo, apertura, "Perché esiste" | testo del post | quasi mai |
| "Cosa fa", "Provarlo", "A che punto è" | testo del post, **senza numeri di versione** | da rileggere a ogni revisione |
| Link di download, tabella "In breve", data di revisione | blocco `project:` del front matter, reso da `{{< progetto >}}` | sì |
| Cronologia della scheda | `project.updates`, resa in fondo al post | una voce per revisione |

- `{{< progetto >}}` (`layouts/_shortcodes/progetto.html`) mostra il pulsante
  di download, il link al codice, la tabella "In breve" e la riga
  *"Scheda aggiornata il … con la versione …"*.
- Il pulsante punta a `/releases/latest` se lo stato è `stable`, altrimenti
  all'elenco `/releases` (con sole pre-release `/latest` non esiste). Non va
  quindi toccato a ogni release.
- Campi facoltativi: `download` sostituisce il link alle release per i
  progetti che non ne pubblicano (per esempio lo ZIP del branch principale);
  `changelog` cambia la destinazione del link "Le novità successive…"
  (predefinito: le release); `upstream` aggiunge alla tabella la riga
  "Basato su", obbligatoria per fork e progetti derivati; `prerelease`
  (per esempio `1.2.0-rc.4`) affianca a `version` la pre-release più recente
  provata, e la riga diventa *"… con la versione stabile … e la
  pre-release …"*. `version` resta sempre l'ultima stabile; si toglie
  `prerelease` quando la pre-release diventa stabile.
- La cronologia (`layouts/_partials/project_updates.html`) compare in fondo a
  ogni pagina con `project.updates`, dalla voce più recente.
- `lastmod` nel front matter è la data di revisione. In `config.yml` ha la
  precedenza sulla data di git, così una correzione di battitura non
  "aggiorna" la scheda agli occhi del lettore e dei motori di ricerca.

La build si ferma con un messaggio chiaro se manca un campo obbligatorio, se
`status` non è `alpha`, `beta` o `stable`, se `lastmod` non coincide con la
data della voce più recente di `updates`, o se le due lingue non sono
allineate: `repo`, `version`, `prerelease`, `status`, `download`,
`changelog`, `lastmod` e il numero di voci di `updates` devono essere uguali
nella scheda italiana e in quella inglese.

## Quando fare cosa

**Release minore o di correzione (1.2.0 → 1.2.1, 1.2 → 1.3).** Niente, oppure
una revisione se la release cambia qualcosa che la scheda dice. Non serve
inseguire ogni release: la scheda dichiara la versione con cui è stata
rivista e il pulsante porta comunque all'ultima.

**Revisione della scheda** (anche periodica, per esempio ogni pochi mesi),
nelle due lingue:

1. aggiorna `project.version` ed eventualmente `project.status`;
2. rileggi "Cosa fa", "Provarlo" e "A che punto è"; cambia immagini se
   l'interfaccia è cambiata molto;
3. aggiungi in cima a `project.updates` una voce con data e nota breve
   (cosa è cambiato *nella pagina*, non tutto il changelog);
4. metti la stessa data in `lastmod`.

**Release maggiore importante (1.x → 2.0, alpha → stabile).** Una revisione
come sopra, più, se c'è qualcosa da raccontare, un **post a parte** (fuori
dalla serie, nel blog, con gli stessi tag) su cosa cambia e perché. Il post si collega
dalla voce di cronologia con `link:` e, a sua volta, rimanda alla scheda.
Così la serie resta un catalogo con una pagina per progetto.

## Creare una scheda

```bash
hugo new projects/<slug>.it.md
hugo new projects/<slug>.en.md
```

Lo scheletro viene da `archetypes/projects.md`. Le immagini vanno in
`static/projects/<slug>/`, in WebP: copertina in 16:9, le altre con larghezza
massima 1600 px.

## Regole di scrittura

- **Lunghezza:** 400-600 parole.
- **Niente versioni nel testo:** né "la 1.2.1 introduce…", né "la prima
  alpha". Si scrive per fase ("durante l'alpha") e si rimanda a release,
  README e changelog per il dettaglio.
- **Struttura fissa:** apertura, `{{< progetto >}}`, Perché esiste, Cosa fa,
  Provarlo, A che punto è, Come partecipare.
- **Lingua originale:** quella del progetto (README). L'altra versione porta
  `aiTranslated: true` e `originalLanguage`, e va rivista insieme.
- **Serie:** sempre `series: ["Progetti"]` in entrambe le lingue; il titolo
  inglese "Projects" è in `content/series/progetti/_index.en.md`.
- **Ordine (`series_weight`):** prima le app per utenti finali, a partire da
  quelle legate agli altri percorsi del sito, poi template e strumenti per chi
  scrive o sviluppa. Pesi attuali: 1 Fuorigiri Performance Lab,
  2 AwakeOnLANMobile, 3 thesis-latex-template, 4 carbon-marp-deck.
- **Copertina:** in 16:9 (1600x900 o 1920x1080, WebP). Lo shortcode ferma la
  build se le proporzioni sono diverse. Se lo screenshot di partenza ha
  un'altra forma, va ritagliato o messo su uno sfondo neutro, non deformato.
- **Fork e derivati:** il progetto originale va citato in `upstream` e nel
  "Perché esiste", con il nome dell'autore.
- **Immagini:** niente screenshot di versioni superate (per esempio quelli
  ereditati da un progetto originale); meglio solo la copertina. Solo dati sintetici; nessun nome, risultato o file reale di
  atleti.
- **Fonti:** ogni affermazione deve essere verificabile nel repository alla
  data di `lastmod`.
- **Andata e ritorno:** nel campo *Website* del repository su GitHub mettere
  l'indirizzo della scheda.

La serie è dichiarata `catalog: true`: il post non mostra "Puntata N di M",
perché i progetti non vanno letti in ordine.
