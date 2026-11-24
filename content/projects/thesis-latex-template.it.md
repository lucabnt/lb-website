---
title: "thesis-latex-template: un template LaTeX per tesi magistrali e di dottorato che compila al primo colpo"
description: "Un template LaTeX gratuito per tesi, con capitoli modulari, parti iniziali automatiche, glossari e bibliografia a scelta, compilato con un comando su Windows, Linux e macOS."
date: 2026-11-23T09:00:00+01:00
lastmod: 2026-11-23
draft: false
series: ["Progetti"]
series_weight: 4
tags: ["software", "open-source"]
author: "lb"
showToc: false
cover:
    image: projects/thesis-latex-template/thesis-latex-template-pagine.webp
    alt: "Tre pagine del PDF di esempio del template: il frontespizio, l'indice e una pagina di capitolo con una tabella e un'equazione."
lang: it
locale: it_IT
aiTranslated: true
originalLanguage: en
project:
    repo: lucabnt/thesis-latex-template
    # Versione nel CHANGELOG.md quando la scheda è stata rivista (il progetto non pubblica release su GitHub).
    version: 1.1.0
    status: stable
    # Nessuna release su GitHub: il pulsante scarica l'archivio del branch main.
    download: https://github.com/lucabnt/thesis-latex-template/archive/refs/heads/main.zip
    changelog: https://github.com/lucabnt/thesis-latex-template/blob/main/CHANGELOG.md
    license: "[CC BY 4.0](https://github.com/lucabnt/thesis-latex-template/blob/main/LICENSE)"
    what: "Un template LaTeX per tesi magistrali e di dottorato, con abstract in inglese e in italiano"
    audience: "Studenti che scrivono la tesi in LaTeX, da zero o passando da Word"
    platforms: [TeX Live o MiKTeX su Windows, Linux e macOS; Overleaf]
    upstream: "[KAUST Official Thesis Template](https://www.overleaf.com/latex/templates/kaust-official-thesis-template/mrcyxjvwpqdn) (CC BY 4.0)"
    updates:
        - date: 2026-11-23
          note: "Prima pubblicazione della scheda, con la versione 1.1.0."
---

thesis-latex-template è un punto di partenza per una tesi magistrale o di dottorato in LaTeX. Lo scarichi, imposti un unico file di configurazione e generi il PDF con un comando. Indice, elenchi e bibliografia si generano da soli.

{{< progetto >}}

## Perché esiste

L'ho adattato dal [template di tesi della KAUST](https://www.overleaf.com/latex/templates/kaust-official-thesis-template/mrcyxjvwpqdn) per la mia tesi magistrale, discussa nel 2023 tra le università di Pavia e Tübingen. Dopo ho tolto tutto quello che apparteneva a quella tesi, e con quello che restava ho fatto un template generico. Compila pulito al primo colpo, con un solo comando e senza niente da sistemare a mano.

## Cosa fa

- Capitoli e appendici sono modulari, un file ciascuno, e ci sono gli abstract in inglese e in italiano.
- Le parti iniziali si generano da sole: indice, elenchi di figure e tabelle, abbreviazioni e simboli con `glossaries`.
- La bibliografia la puoi scrivere a mano o fare con BibTeX, e passi dall'una all'altra con un'unica impostazione in `config.tex`.
- Titolo, autore, margini, interlinea e dimensioni dei titoli stanno tutti in un solo file di configurazione.
- Usa solo font vettoriali, così il PDF resta nitido e compatibile con PDF/A.
- Gli script di compilazione per Windows, Linux e macOS eseguono tutti i passaggi nell'ordine giusto.

## Provarlo

1. Installa una distribuzione LaTeX: MiKTeX su Windows, MacTeX su macOS, TeX Live su Linux. Se manca, te lo dicono gli script.
2. Scarica il template con il pulsante qui sopra, oppure clona il repository.
3. Apri `config.tex` e inserisci titolo, autore, corso di laurea e università.
4. Esegui `compile.bat` su Windows o `./compile.sh` su Linux e macOS, poi apri `output/Thesis.pdf`.

Il [QUICKSTART](https://github.com/lucabnt/thesis-latex-template/blob/main/QUICKSTART.md) ripercorre gli stessi passaggi in circa cinque minuti. In `Chapter_1.tex` c'è un esempio di ogni elemento: figure, tabelle, equazioni, citazioni, abbreviazioni.

## A che punto è

Il template è completo, e su TeX Live e MiKTeX compila senza errori e senza pacchetti mancanti. Tieni presente che è un punto di partenza, non una tesi finita. Controlla il risultato con le norme redazionali del tuo ateneo e, se l'università fornisce un frontespizio ufficiale, usa quello in PDF.

Più avanti vorrei trasformarlo anche in una skill per agenti, così che un agente di programmazione possa impostare il template e compilarlo a partire da un brief.

## Come partecipare

I miglioramenti sono benvenuti. Apri una [issue](https://github.com/lucabnt/thesis-latex-template/issues) o una pull request: descrivi il problema, prova la modifica e spiega cosa hai cambiato. La licenza è CC BY 4.0, come l'originale, quindi puoi usare e adattare il template, anche a fini commerciali, purché l'attribuzione resti.
