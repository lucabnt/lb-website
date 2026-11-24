---
title: "Fuorigiri Performance Lab: l'archivio dei test per le società di ciclismo giovanile"
description: "Un'app open source e offline per registrare, analizzare e confrontare nel tempo i test degli atleti di una società ciclistica, su Windows e Android."
date: 2026-11-23T12:00:00+01:00
draft: false
series: ["Progetti"]
series_weight: 1
tags: ["software", "open-source", "sport"]
author: "lb"
showToc: false
cover:
    image: projects/fuorigiri-performance-lab/test-incrementale.webp
    alt: "Un test incrementale in Fuorigiri: potenza, frequenza cardiaca, cadenza, VO2 e prelievi di lattato sovrapposti nello stesso grafico, con dati sintetici."
lang: it
locale: it_IT
lastmod: 2026-11-23
project:
    repo: lucabnt/performance-lab
    # Ultima release verificata quando la scheda è stata rivista.
    version: 0.10.0-alpha.1
    status: alpha
    license: "[GPL-3.0-or-later](https://github.com/lucabnt/performance-lab/blob/main/LICENSE)"
    what: "Archivio e analisi dei test di ciclismo: incrementali, lattato, VO₂, sprint, Wingate, crescita"
    audience: "Tecnici, preparatori e dirigenti di società, soprattutto giovanili"
    platforms: [Windows 10 e 11, Android 8 o successivo]
    updates:
        - date: 2026-11-23
          note: "Prima pubblicazione della scheda, con la prima alpha pubblica (0.10.0-alpha.1)."
---

Fuorigiri Performance Lab è un'applicazione per tecnici e preparatori delle società ciclistiche. Serve a conservare i test dei propri atleti e a confrontarli nel tempo, una stagione dopo l'altra. Funziona offline, sul computer o sul telefono, e i dati restano alla società.

{{< progetto >}}

## Perché esiste

In una società ciclistica, e in quelle giovanili ancora di più, i test dei ragazzi finiscono sparsi un po' ovunque: file FIT, fogli di calcolo, PDF dei centri test. Presa da sola ogni misura ha senso. Il problema arriva quando provi a metterle insieme, perché diventa difficile capire come sta crescendo un atleta o come va un gruppo rispetto a quello dell'anno prima.

Gli strumenti che ci sono funzionano molto bene per l'allenamento quotidiano del singolo atleta, o per la modellazione metabolica a pagamento. Tra quelli che ho provato, però, nessuno teneva insieme l'archivio dei test di un vivaio e la crescita dei ragazzi senza bisogno di un server.

L'ho sviluppata pensando soprattutto a [Progetto Ciclismo - Rodengo Saiano](https://www.asdprogettociclismorodengosaiano.it/), la società con cui collaboro.

## Cosa fa

- Tiene profili e gruppi: atleti, categorie, gruppi stagionali e misure antropometriche, con il loro storico.
- I test incrementali si importano da FIT o CSV, o si inseriscono a mano, con lattato, VO₂ e zone di allenamento.
- Sprint e Wingate da 30 e 15 secondi restano metodi separati, e si confrontano solo tra loro.
- Per crescita e maturazione calcola la velocità di crescita e stima il picco puberale, dichiarando sempre il metodo e i suoi limiti.
- Storici e confronti riportano media, mediana e numero di misure, e i dati mancanti non vengono nascosti.
- I report escono in PDF o Markdown, per società, gruppo, stagione o atleta. Tra collaboratori i dati si condividono cifrati, via WebDAV o con una cartella condivisa.

![Evoluzione stagionale della MAP in Fuorigiri, con mediana, media e numero di atleti per stagione.](/projects/fuorigiri-performance-lab/storici-confronti.webp)
*Storici e confronti: un indicatore stagione per stagione, sempre con la numerosità in vista. Tutti i dati nelle immagini sono sintetici.*

![Profilo atleta con velocità di crescita, picco esplorativo e stime datate di maturazione.](/projects/fuorigiri-performance-lab/crescita-maturazione.webp)
*Crescita e maturazione nel profilo di un atleta di prova.*

## Provarlo

1. Dalle [release](https://github.com/lucabnt/performance-lab/releases) scarica l'installer o lo ZIP portabile per Windows, oppure l'APK per Android.
2. Crea una società di esempio e aggiungi un atleta.
3. Registra un test a mano, oppure importa uno dei file del [corpus sintetico](https://github.com/lucabnt/performance-lab/blob/main/docs/DATI_SINTETICI.md).
4. Apri il profilo dell'atleta ed esporta un report.

Se preferisci partire dai sorgenti, i passaggi sono nella [guida di avvio](https://github.com/lucabnt/performance-lab/blob/main/docs/TESTARE_IL_PROGETTO.md). Le librerie condivise di interfaccia e runtime stanno in un repository a parte, [cycling-suite-common](https://github.com/lucabnt/cycling-suite-common).

## A che punto è

Lo stato attuale lo trovi nel riquadro in alto, e il [README](https://github.com/lucabnt/performance-lab#readme) dice con precisione cosa è stato provato e cosa no. Per ora l'app è stata provata su Windows con Defender attivo, su un Pixel 9 e con la condivisione WebDAV. Durante l'alpha la questione aperta più importante è la validazione esterna dei metodi scientifici. Qualunque versione usi, prima di aggiornare un archivio esistente fai un backup e controlla che si ripristini.

## Come partecipare

Problemi e proposte vanno nelle [issue del repository](https://github.com/lucabnt/performance-lab/issues). Le vulnerabilità invece si segnalano in privato, come spiega il [SECURITY.md](https://github.com/lucabnt/performance-lab/blob/main/SECURITY.md).

Se ti incuriosisce da dove vengono queste domande sui ragazzi e sui loro numeri, c'è la serie [Ciclismo giovanile e professionismo](/series/ciclismo-giovanile-e-professionismo/).
