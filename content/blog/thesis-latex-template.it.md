---
title: "thesis-latex-template: un template LaTeX per tesi magistrali e di dottorato che compila al primo colpo"
description: "Un template LaTeX gratuito per tesi, con capitoli modulari, parti iniziali automatiche, glossari e bibliografia a scelta, compilato con un comando su Windows, Linux e macOS."
date: 2026-11-23T12:00:00+01:00
lastmod: 2026-11-23
draft: false
series: ["Progetti"]
series_weight: 3
tags: ["software", "open-source"]
author: "lb"
showToc: false
cover:
    image: blog/thesis-latex-template/thesis-latex-template-pagine.webp
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

thesis-latex-template è un punto di partenza per una tesi magistrale o di dottorato in LaTeX: lo scarichi, imposti un unico file di configurazione e generi il PDF con un comando. Indice, elenchi e bibliografia si generano da soli.

{{< progetto >}}

## Perché esiste

L'ho adattato dal [template di tesi della KAUST](https://www.overleaf.com/latex/templates/kaust-official-thesis-template/mrcyxjvwpqdn) per la mia tesi magistrale, discussa nel 2023 tra le università di Pavia e Tübingen, quella che ho [riaperto tre anni dopo](/it/blog/reopening-my-thesis/). In seguito ho tolto tutto ciò che apparteneva a quella tesi e l'ho trasformato in un template generico. Ricostruendolo, ho scoperto che non compilava pulito al primo colpo: pacchetti caricati e mai usati, glossari mai generati, numeri di pagina scritti a mano. Sono i problemi che fanno perdere ore nelle settimane prima della consegna, quindi li ho corretti prima di pubblicarlo.

## Cosa fa

- **Capitoli e appendici modulari**, un file ciascuno, con abstract in inglese e in italiano.
- **Parti iniziali generate**: indice, elenchi di figure e tabelle, abbreviazioni e simboli con `glossaries`.
- **Bibliografia a mano o con BibTeX**, scelta con un'unica impostazione in `config.tex`.
- **Un solo file di configurazione** per titolo, autore, margini, interlinea e dimensioni dei titoli.
- **Solo font vettoriali**, così il PDF resta nitido e compatibile con PDF/A.
- **Script di compilazione** per Windows, Linux e macOS che eseguono tutti i passaggi nell'ordine giusto.

## Provarlo

1. Installa una distribuzione LaTeX: MiKTeX su Windows, MacTeX su macOS, TeX Live su Linux. Se manca, gli script te lo segnalano.
2. Scarica il template con il pulsante qui sopra, oppure clona il repository.
3. Apri `config.tex` e inserisci titolo, autore, corso di laurea e università.
4. Esegui `compile.bat` su Windows o `./compile.sh` su Linux e macOS, e apri `output/Thesis.pdf`.

Il [QUICKSTART](https://github.com/lucabnt/thesis-latex-template/blob/main/QUICKSTART.md) ripercorre gli stessi passaggi in circa cinque minuti; `Chapter_1.tex` contiene un esempio di ogni elemento: figure, tabelle, equazioni, citazioni, abbreviazioni.

## A che punto è

Il template è completo e compila senza errori né pacchetti mancanti su TeX Live e MiKTeX. È un punto di partenza, non una tesi finita: controlla il risultato con le norme redazionali del tuo ateneo e, se l'università fornisce un frontespizio ufficiale, usalo come PDF.

## Come partecipare

I miglioramenti sono benvenuti: descrivi il problema, prova la modifica e spiega cosa hai cambiato in una [issue](https://github.com/lucabnt/thesis-latex-template/issues) o in una pull request. La licenza è CC BY 4.0, come l'originale: puoi usare e adattare il template, anche a fini commerciali, purché l'attribuzione resti.
