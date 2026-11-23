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

Fuorigiri Performance Lab è un'applicazione per tecnici e preparatori delle società ciclistiche che vogliono conservare i test dei propri atleti e confrontarli nel tempo, stagione dopo stagione. Funziona offline, sul computer o sul telefono, e i dati restano alla società.

{{< progetto >}}

## Perché esiste

In una società ciclistica, soprattutto giovanile, i test degli atleti finiscono spesso sparsi tra file FIT, fogli di calcolo e PDF dei centri test. Ogni misura ha senso da sola, ma una volta messe insieme è difficile capire come sta crescendo un atleta o come si confronta un gruppo con quello dell'anno prima.

Gli strumenti che esistono sono ottimi per l'allenamento quotidiano del singolo atleta o per la modellazione metabolica a pagamento. Nessuno di quelli che ho provato teneva insieme l'archivio dei test di un vivaio e la crescita dei ragazzi, senza bisogno di un server.

In particolare, l'ho sviluppata pensando a [Progetto Ciclismo - Rodengo Saiano](https://www.asdprogettociclismorodengosaiano.it/), la società con cui collaboro.

## Cosa fa

- **Profili e gruppi**: atleti, categorie, gruppi stagionali e misure antropometriche con il loro storico.
- **Test incrementali** importati da FIT o CSV, o inseriti a mano, con lattato, VO₂ e zone di allenamento.
- **Sprint e Wingate** da 30 e 15 secondi, tenuti come metodi separati e confrontabili solo tra loro.
- **Crescita e maturazione**: velocità di crescita e stime del picco puberale, con metodo e limiti dichiarati.
- **Storici e confronti** con media, mediana e numero di misure, senza nascondere i dati mancanti.
- **Report PDF e Markdown** per società, gruppo, stagione o atleta, e condivisione cifrata tra collaboratori tramite WebDAV o una cartella condivisa.

![Evoluzione stagionale della MAP in Fuorigiri, con mediana, media e numero di atleti per stagione.](/projects/fuorigiri-performance-lab/storici-confronti.webp)
*Storici e confronti: l'andamento di un indicatore per stagione, con la numerosità sempre in vista. Tutti i dati nelle immagini sono sintetici.*

![Profilo atleta con velocità di crescita, picco esplorativo e stime datate di maturazione.](/projects/fuorigiri-performance-lab/crescita-maturazione.webp)
*Crescita e maturazione nel profilo di un atleta di prova.*

## Provarlo

1. Dalle [release](https://github.com/lucabnt/performance-lab/releases) scarica l'installer o lo ZIP portabile per Windows, oppure l'APK per Android.
2. Crea una società di esempio e aggiungi un atleta.
3. Registra un test a mano, o importa uno dei file del [corpus sintetico](https://github.com/lucabnt/performance-lab/blob/main/docs/DATI_SINTETICI.md).
4. Apri il profilo dell'atleta ed esporta un report.

Chi vuole partire dai sorgenti trova i passaggi nella [guida di avvio](https://github.com/lucabnt/performance-lab/blob/main/docs/TESTARE_IL_PROGETTO.md). Le librerie condivise dell'interfaccia e del runtime sono in un repository a parte, [cycling-suite-common](https://github.com/lucabnt/cycling-suite-common).

## A che punto è

Lo stato di oggi è nella scheda in alto, mentre il [README](https://github.com/lucabnt/performance-lab#readme) dice con precisione cosa è stato provato e cosa no. Finora l'app è stata provata su Windows con Defender attivo, su un Pixel 9 e con la condivisione WebDAV. Durante l'alpha resta aperta soprattutto la validazione esterna dei metodi scientifici. In ogni versione, prima di aggiornare un archivio esistente conviene fare un backup e provare a ripristinarlo.

## Come partecipare

Problemi e proposte si segnalano dalle [issue del repository](https://github.com/lucabnt/performance-lab/issues), le vulnerabilità in privato, come spiega il [SECURITY.md](https://github.com/lucabnt/performance-lab/blob/main/SECURITY.md).

Se ti interessa da dove nascono queste domande sui ragazzi e sui loro numeri, c'è la serie [Ciclismo giovanile e professionismo](/series/ciclismo-giovanile-e-professionismo/).
