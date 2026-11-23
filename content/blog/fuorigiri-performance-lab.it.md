---
title: "Fuorigiri Performance Lab: l'archivio dei test per le società di ciclismo giovanile"
description: "Un'app open source e offline per registrare, analizzare e confrontare nel tempo i test degli atleti di una società ciclistica, su Windows e Android."
date: 2026-11-23T10:00:00+01:00
draft: false
series: ["Progetti"]
series_weight: 1
tags: ["software", "open-source", "ciclismo-giovanile"]
author: "lb"
showToc: false
cover:
    image: blog/fuorigiri-performance-lab/test-incrementale.webp
    alt: "Un test incrementale in Fuorigiri: potenza, frequenza cardiaca, cadenza, VO2 e prelievi di lattato sovrapposti nello stesso grafico, con dati sintetici."
lang: it
locale: it_IT
project:
    repo: https://github.com/lucabnt/performance-lab
    version: 0.10.0-alpha.1
    status: alpha
    license: GPL-3.0-or-later
    platforms: [Windows, Android]
---

Fuorigiri Performance Lab è un'applicazione per tecnici e preparatori delle società ciclistiche che vogliono conservare i test dei propri atleti e confrontarli nel tempo, stagione dopo stagione. Funziona offline, sul computer o sul telefono, e i dati restano alla società.

**[Scarica la pre-release 0.10.0-alpha.1](https://github.com/lucabnt/performance-lab/releases) · [Codice su GitHub](https://github.com/lucabnt/performance-lab)**

| In breve | |
|---|---|
| **Cos'è** | Archivio e analisi dei test di ciclismo: incrementali, lattato, VO₂, sprint, Wingate, crescita |
| **Per chi** | Tecnici, preparatori e dirigenti di società, soprattutto giovanili |
| **Dove gira** | Windows 10 e 11, Android 8 o successivo; interfaccia in italiano e in inglese |
| **Stato** | Prima alpha pubblica (0.10.0-alpha.1) |
| **Licenza** | GPL-3.0-or-later |

## Perché esiste

L'ho sviluppato per [Progetto Ciclismo - Rodengo Saiano](https://www.asdprogettociclismorodengosaiano.it/), dove i test dei ragazzi finivano sparsi tra file FIT, fogli di calcolo e PDF dei centri test. Ogni misura aveva senso da sola; messe insieme, era difficile capire come stava crescendo un atleta o come si confrontava un gruppo con quello dell'anno prima.

Gli strumenti che esistono sono ottimi per l'allenamento quotidiano del singolo atleta o per la modellazione metabolica a pagamento. Nessuno di quelli che ho provato teneva insieme l'archivio dei test di un vivaio, la crescita dei ragazzi e il controllo dei dati di minorenni da parte della società, senza un server.

## Cosa fa

- **Profili e gruppi**: atleti, categorie, gruppi stagionali e misure antropometriche con il loro storico.
- **Test incrementali** importati da FIT o CSV, o inseriti a mano, con lattato, VO₂ e zone di allenamento.
- **Sprint e Wingate** da 30 e 15 secondi, tenuti come metodi separati e confrontabili solo tra loro.
- **Crescita e maturazione**: velocità di crescita e stime del picco puberale, con metodo e limiti dichiarati.
- **Storici e confronti** con media, mediana e numero di misure, senza nascondere i dati mancanti.
- **Report PDF e Markdown** per società, gruppo, stagione o atleta, e condivisione cifrata tra collaboratori tramite WebDAV o una cartella condivisa.

![Evoluzione stagionale della MAP in Fuorigiri, con mediana, media e numero di atleti per stagione.](/blog/fuorigiri-performance-lab/storici-confronti.webp)
*Storici e confronti: l'andamento di un indicatore per stagione, con la numerosità sempre in vista. Tutti i dati nelle immagini sono sintetici.*

![Profilo atleta con velocità di crescita, picco esplorativo e stime datate di maturazione.](/blog/fuorigiri-performance-lab/crescita-maturazione.webp)
*Crescita e maturazione nel profilo di un atleta di prova.*

## Provarlo

1. Dalla [pagina Releases](https://github.com/lucabnt/performance-lab/releases) scarica l'installer o lo ZIP portabile per Windows, oppure l'APK per Android.
2. Crea una società di esempio e aggiungi un atleta.
3. Registra un test a mano, o importa uno dei file del [corpus sintetico](https://github.com/lucabnt/performance-lab/blob/main/docs/DATI_SINTETICI.md).
4. Apri il profilo dell'atleta ed esporta un report.

Chi vuole partire dai sorgenti trova i passaggi nella [guida di avvio](https://github.com/lucabnt/performance-lab/blob/main/docs/TESTARE_IL_PROGETTO.md).

## A che punto è

È un'alpha, e il README dice con precisione cosa manca: il collaudo su un Windows pulito con Defender attivo, le prove su telefoni reali, la condivisione WebDAV con due account veri e la validazione esterna dei metodi scientifici. Google Drive, Dropbox e OneDrive diretti sono sperimentali. Prima di aggiornare un archivio esistente conviene fare un backup e provare a ripristinarlo.

## Come partecipare

Problemi e proposte si segnalano dalle [issue del repository](https://github.com/lucabnt/performance-lab/issues); le vulnerabilità in privato, come spiega il [SECURITY.md](https://github.com/lucabnt/performance-lab/blob/main/SECURITY.md). Se ti interessa da dove nascono queste domande sui ragazzi e sui loro numeri, c'è la serie [Ciclismo giovanile e professionismo](/series/ciclismo-giovanile-e-professionismo/).
