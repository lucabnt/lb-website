---
# Scheda progetto per la serie "Progetti". Guida completa: docs/progetti.md
# Crea le due lingue con lo stesso nome di file:
#   hugo new --kind progetto blog/<slug>.it.md
#   hugo new --kind progetto blog/<slug>.en.md
# Titolo: "<Nome>: <cosa fa, per chi>" in una riga, senza superlativi.
title: ""
# Una frase, 140-160 caratteri: problema + per chi + dove gira. È anche lo snippet di ricerca.
description: ""
date: {{ .Date }}
draft: true
# Il termine della serie è "Progetti" in entrambe le lingue (il titolo tradotto
# sta in content/series/progetti/_index.en.md). Il peso decide l'ordine in Esplora.
series: ["Progetti"]
series_weight: 0
tags: ["software", "open-source"]
author: "lb"
showToc: false
cover:
    image: blog/<slug>/<immagine>.webp
    alt: ""
# Lingua: tieni solo la riga che vale per questo file.
lang: it
locale: it_IT
# Solo nella versione tradotta:
# aiTranslated: true
# originalLanguage: en
# Dati strutturati del progetto: oggi non vengono resi dal tema, servono a
# tenere uniformi le schede e a generarne in futuro una card automatica.
project:
    repo: https://github.com/lucabnt/<repo>
    version: ""        # es. 1.2.1 oppure 0.10.0-alpha.1
    status: ""         # alpha | beta | stabile
    license: ""        # SPDX, es. GPL-3.0-or-later
    platforms: []      # es. [Windows, Android]
---

<!-- 1. APERTURA (2-3 frasi). Cosa fa e per chi, poi il link principale.
     Niente "in questo articolo": il lettore deve capire subito se fa per lui. -->

**[Scarica la versione X.Y](https://github.com/lucabnt/<repo>/releases) · [Codice su GitHub](https://github.com/lucabnt/<repo>)**

| In breve | |
|---|---|
| **Cos'è** | |
| **Per chi** | |
| **Dove gira** | |
| **Stato** | |
| **Licenza** | |

## Perché esiste

<!-- 2. IL PROBLEMA (1-2 paragrafi). Da dove nasce, in prima persona.
     Quali strumenti esistono e perché non bastavano: una frase, senza polemica. -->

## Cosa fa

<!-- 3. LE FUNZIONI (4-6 punti). Una riga ciascuno, dal punto di vista di chi lo usa,
     non del codice. Una o due immagini con didascalia; mai dati personali reali. -->

-
-
-

## Provarlo

<!-- 4. PRIMI PASSI (3-5 passaggi numerati). Il percorso più corto fino a un risultato
     visibile. Per i dettagli si rimanda al README, non lo si copia. -->

1.
2.
3.

## A che punto è

<!-- 5. STATO E LIMITI (1 paragrafo). Versione, cosa è provato e cosa no, cosa viene dopo.
     Più è onesto, più è credibile. -->

## Come partecipare

<!-- 6. CHIUSURA (2-3 frasi). Dove segnalare problemi o proporre idee, licenza,
     eventuale collegamento a un'altra serie del sito. -->
