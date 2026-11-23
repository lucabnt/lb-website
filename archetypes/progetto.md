---
# Scheda progetto della serie "Progetti". Guida completa: docs/progetti.md
# Crea le due lingue con lo stesso nome di file:
#   hugo new --kind progetto blog/<slug>.it.md
#   hugo new --kind progetto blog/<slug>.en.md
#
# La scheda è una pagina viva: il testo non contiene numeri di versione, e
# tutto ciò che cambia con le release sta nel blocco "project:" qui sotto.
#
# Titolo: "<Nome>: <cosa fa, per chi>" in una riga, senza superlativi.
title: ""
# Una frase, 140-160 caratteri: problema + per chi + dove gira. È anche lo snippet di ricerca.
description: ""
date: {{ .Date }}
# Data dell'ultima revisione della scheda: deve coincidere con la voce più
# recente di project.updates, altrimenti la build si ferma.
lastmod: {{ now.Format "2006-01-02" }}
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
project:
    repo: lucabnt/<repo>
    # Ultima release verificata quando la scheda è stata rivista.
    version: ""
    status: alpha        # alpha | beta | stable
    license: ""          # markdown ammesso, es. "[GPL-3.0-or-later](https://…/LICENSE)"
    what: ""             # Cos'è, in una riga
    audience: ""         # Per chi
    platforms: []        # Dove gira, es. [Windows 10 e 11, Android 8 o successivo]
    updates:
        - date: {{ now.Format "2006-01-02" }}
          note: "Prima pubblicazione della scheda, con la versione X.Y."
          # link: /blog/<post-di-approfondimento>/   # facoltativo, per le major
---

<!-- APERTURA (2-3 frasi): cosa fa e per chi. Niente numeri di versione. -->

{{ "{{< progetto >}}" }}

## Perché esiste

<!-- Il problema da cui nasce, in prima persona (1-2 paragrafi). Quali strumenti
     esistono e perché non bastavano: una frase, senza polemica. È la parte che
     cambia di meno: riscriverla solo se cambia lo scopo del progetto. -->

## Cosa fa

<!-- 4-6 punti, una riga ciascuno, dal punto di vista di chi lo usa. Funzioni
     consolidate, non le novità dell'ultima release. 1-2 immagini con didascalia,
     solo dati sintetici. -->

-
-
-

## Provarlo

<!-- 3-5 passaggi fino a un risultato visibile. Rimanda alle release e al README
     senza citare file o versioni precise. -->

1.
2.
3.

## A che punto è

<!-- Stato e limiti in termini di fase (alpha, beta, stabile), non di versione.
     Rimanda al README per l'elenco preciso. Va riletto a ogni revisione. -->

## Come partecipare

<!-- Dove segnalare problemi o proporre idee; eventuale collegamento a
     un'altra serie del sito. -->
