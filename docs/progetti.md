# Serie "Progetti": schede dei software pubblicati

Ogni progetto pubblicato su GitHub ha un post breve sul sito che fa da landing
page: spiega *perché* esiste e *per chi* è, mentre il README resta il posto del
*come*. I post formano la serie **Progetti**, che in Esplora è il secondo
percorso ("Progetti e strumenti"), subito dopo "Ciclismo e dati".

## Creare una scheda

```bash
hugo new --kind progetto blog/<slug>.it.md
hugo new --kind progetto blog/<slug>.en.md
```

Lo scheletro viene da `archetypes/progetto.md`. Le immagini vanno in
`static/blog/<slug>/`, in WebP, larghezza massima 1600 px.

## Regole

- **Lunghezza:** 400-600 parole. Se serve di più, è un post a parte (dietro le
  quinte, release importante) collegato alla scheda.
- **Struttura fissa**, nello stesso ordine per ogni progetto:
  1. apertura (cosa fa, per chi) con il link di download o del repository;
  2. tabella "In breve": cos'è, per chi, dove gira, stato, licenza;
  3. Perché esiste;
  4. Cosa fa (4-6 punti, 1-2 immagini);
  5. Provarlo (3-5 passaggi fino a un risultato visibile);
  6. A che punto è (stato, limiti, prossimi passi);
  7. Come partecipare.
- **Lingua originale:** quella del progetto (README). L'altra versione porta
  `aiTranslated: true` e `originalLanguage`.
- **Serie:** sempre `series: ["Progetti"]` in entrambe le lingue; il titolo
  inglese "Projects" è in `content/series/progetti/_index.en.md`.
- **Ordine (`series_weight`):** prima i prodotti destinati agli utenti finali e
  legati agli altri percorsi del sito, poi gli strumenti per sviluppatori.
  Pesi attuali: 1 Fuorigiri Performance Lab, 2 carbon-marp-deck.
- **Immagini:** solo dati sintetici; nessun nome, risultato o file reale di
  atleti.
- **Fonti:** ogni numero (versione, conteggi, piattaforme) deve essere
  verificabile nel repository alla data del post.
- **Aggiornamento:** a ogni release importante aggiornare versione, stato e
  tabella "In breve", e il blocco `project:` del front matter.
- **Andata e ritorno:** nel campo *Website* del repository su GitHub mettere
  l'indirizzo della scheda.

La serie è dichiarata `catalog: true`: il post non mostra "Puntata N di M",
perché i progetti non vanno letti in ordine.
