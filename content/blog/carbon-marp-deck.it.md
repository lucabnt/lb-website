---
title: "carbon-marp-deck: presentazioni in stile Carbon da Markdown, scritte da te o dal tuo agente"
description: "Una skill per agenti e un template Marp che trasformano un brief o un file Markdown in una presentazione in stile Carbon, in PDF e PowerPoint modificabile."
date: 2026-11-23T10:00:00+01:00
draft: false
series: ["Progetti"]
series_weight: 2
tags: ["software", "open-source"]
author: "lb"
showToc: false
cover:
    image: blog/carbon-marp-deck/carbon-marp-deck-esempi.webp
    alt: "Quattro slide di esempio fatte con carbon-marp-deck: indicatori chiave, card, un diagramma di flusso e un processo in cinque fasi."
lang: it
locale: it_IT
aiTranslated: true
originalLanguage: en
project:
    repo: https://github.com/lucabnt/carbon-marp-deck
    version: 1.2.1
    status: stable
    license: Apache-2.0
    platforms: [Node.js 18+, Python 3.9+, Chrome or Edge]
---

carbon-marp-deck trasforma un file Markdown, o un brief scritto a parole a un agente di programmazione, in una presentazione nello stile del [Carbon Design System](https://carbondesignsystem.com/), esportata in **PDF** e in **PowerPoint modificabile**.

**[Scaricalo da GitHub](https://github.com/lucabnt/carbon-marp-deck) · [Release 1.2.1](https://github.com/lucabnt/carbon-marp-deck/releases)**

| In breve | |
|---|---|
| **Cos'è** | Un tema Marp e una skill per agenti per presentazioni in stile Carbon |
| **Per chi** | Chi prepara presentazioni informali: riunioni di team, demo, bozze, condivisione di conoscenze |
| **Dove gira** | Qualsiasi computer con Node.js 18+, Python 3.9+ e Chrome o Edge; funziona con Claude Code, Codex, Copilot e altri agenti |
| **Stato** | Stabile, versione 1.2.1 |
| **Licenza** | Apache-2.0; font Plex con SIL Open Font License ([dettagli](https://github.com/lucabnt/carbon-marp-deck#licence-and-trademarks)) |

> **Non ufficiale.** È un progetto della comunità costruito solo su materiale open source di Carbon (token di design, linee guida, pittogrammi, il carattere Plex). Non è affiliato, approvato o supportato dal progetto Carbon Design System e non è pensato per presentazioni che devono seguire un template aziendale approvato.

## Perché esiste

<!-- DA PERSONALIZZARE: il motivo concreto per cui l'hai costruito. -->
La maggior parte delle presentazioni che preparo è informale, e scrivo quasi tutti i miei appunti in Markdown. Marp trasforma già il Markdown in slide, ma per avere un risultato curato serviva CSS sistemato a mano, e il risultato era un PDF che nessun altro poteva modificare. Le linee guida e i token aperti di Carbon mi hanno dato un sistema di design completo e coerente da cui partire; gli agenti, un modo per passare da un brief a una prima bozza in pochi minuti.

## Cosa fa

- **Un tema Marp in stile Carbon** con tutti i valori presi dai token di Carbon: quattro temi, la scala tipografica in Plex, la scala delle spaziature e i margini della griglia.
- **Layout e componenti pronti**: copertina, indice, divisori di sezione, griglie a due e tre colonne, card, indicatori chiave, grafici a barre e personalizzati, roadmap, diagrammi di flusso e di processo, tabelle di dati.
- **1.429 pittogrammi Carbon** con ricerca per parola chiave, e Plex incluso, così ogni PDF esce con il carattere giusto.
- **Una skill per agenti**: l'agente raccoglie il brief, scrive le slide, le esporta e controlla le anteprime finché non restano avvisi.
- **PDF e PPTX modificabile**, fatto di forme e caselle di testo native, più un linter per gli errori che rompono le slide Marp senza segnalarlo.

![Una slide con un diagramma di flusso fatta con carbon-marp-deck: sorgenti, piattaforma centrale, integrazione, AI e consumatori collegati da frecce.](/blog/carbon-marp-deck/carbon-marp-deck-flusso.webp)
*Una delle slide di esempio del repository, scritta in Markdown ed esportata senza ritocchi.*

## Provarlo

Con un agente, clona il repository nella sua cartella delle skill (per Claude Code, `~/.claude/skills/carbon-marp-deck`), installa i requisiti e chiedi una presentazione:

> Create a 10-minute deck about our Q3 platform migration for the engineering team. Export PDF and PPTX.

Senza agente:

```bash
git clone https://github.com/lucabnt/carbon-marp-deck.git
cd carbon-marp-deck
pip install -r pptx-export/requirements.txt
python scripts/new_deck.py "Q3 review" --title "Q3 review"
python scripts/export_deck.py q3-review/q3-review.md --strict --preview
```

Il [README](https://github.com/lucabnt/carbon-marp-deck#readme) elenca le cartelle delle skill degli altri agenti e spiega come caricare la skill su claude.ai.

## A che punto è

La 1.0.0 è stata la prima release pubblica, il 21 novembre 2026; la 1.2.1 è arrivata due giorni dopo con correzioni ai percorsi dei pittogrammi e alle celle delle heatmap. In CI ogni [presentazione di esempio](https://github.com/lucabnt/carbon-marp-deck/tree/main/examples) passa dal linter e il convertitore PPTX ha un test di regressione. Nelle app di chat web, senza un browser sulla macchina, l'agente può scrivere la presentazione ma non esportarla.

## Come partecipare

Issue e pull request sono benvenute; la [guida per chi contribuisce](https://github.com/lucabnt/carbon-marp-deck/blob/main/CONTRIBUTING.md) spiega come si genera e si verifica il tema. Il [changelog](https://github.com/lucabnt/carbon-marp-deck/blob/main/CHANGELOG.md) registra ogni modifica.
