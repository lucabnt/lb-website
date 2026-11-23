---
title: "AwakeOnLANMobile: accendi il PC da un telefono Android, da un widget o da un riquadro"
description: "Un'app Android open source che invia pacchetti Wake-on-LAN ai tuoi computer, con widget, riquadro nelle Impostazioni rapide e archivio dei dispositivi cifrato."
date: 2026-11-23T10:00:00+01:00
lastmod: 2026-11-23
draft: false
series: ["Progetti"]
series_weight: 3
tags: ["software", "open-source"]
author: "lb"
showToc: false
cover:
    image: projects/awakeonlanmobile/awakeonlanmobile-icona.webp
    alt: "L'icona di AwakeOnLANMobile, un simbolo di accensione con onde di segnale, su sfondo turchese."
lang: it
locale: it_IT
aiTranslated: true
originalLanguage: en
project:
    repo: lucabnt/AwakeOnLANMobile
    # Ultima release stabile verificata quando la scheda è stata rivista.
    version: 1.1.0
    status: stable
    # Ultima pre-release provata quando la scheda è stata rivista.
    prerelease: 1.2.0-rc.4
    # Elenco delle release: mostra in cima la più recente, rc comprese.
    download: https://github.com/lucabnt/AwakeOnLANMobile/releases
    license: "[GPL-3.0](https://github.com/lucabnt/AwakeOnLANMobile/blob/main/LICENSE)"
    what: "Un'app Wake-on-LAN per Android, con widget, riquadro nelle Impostazioni rapide e scansione della rete"
    audience: "Chi accende un computer di casa o dell'ufficio senza andarci fisicamente"
    platforms: [Android 7 o successivo (backup cifrato da Android 8)]
    upstream: "[nellogan/AwakeOnLANMobile](https://github.com/nellogan/AwakeOnLANMobile), di cui è un fork mantenuto"
    updates:
        - date: 2026-11-23
          note: "Prima pubblicazione della scheda, con la versione 1.1.0 e la pre-release 1.2.0-rc.4."
---

AwakeOnLANMobile, fork mantenuto dell'[app di nellogan](https://github.com/nellogan/AwakeOnLANMobile), accende i computer della tua rete da un telefono Android: apri l'app e tocchi **Wake**, oppure usi un widget nella schermata Home o un riquadro nelle Impostazioni rapide. I dispositivi salvati restano sul telefono, cifrati.

{{< progetto >}}

## Perché esiste

L'app è nata da [nellogan](https://github.com/nellogan), che ne ha scritto l'interfaccia originale e il codice di rete. Sono partito da lì perché volevo accendere un PC con un solo tocco, senza aprire un'app né creare un account, e tenere protetti sul telefono indirizzi MAC e password. Queste funzioni sono diventate un fork mantenuto, che conserva l'attribuzione all'autore originale e la stessa licenza GPL.

## Cosa fa

- **Accende un PC salvato** con un magic packet verso l'indirizzo e la porta che scegli, compresa l'eventuale password Wake-on-LAN.
- **Widget e riquadro delle Impostazioni rapide**: ogni widget può accendere un PC diverso e il riquadro accende quello che indichi.
- **Controllo dello stato** via TCP, per vedere se il PC risponde dopo l'accensione.
- **Archivio cifrato** di dispositivi e password con Android Keystore, e backup protetti da password per spostarli su un altro telefono.
- **Scansione della rete** su una sottorete IPv4, limitata e interrompibile.
- **Nessun account, pubblicità o servizio cloud**, in tema chiaro o scuro.

## Provarlo

1. Attiva il Wake-on-LAN nel firmware del PC e nelle impostazioni della sua scheda di rete.
2. Scarica l'APK dalle [release](https://github.com/lucabnt/AwakeOnLANMobile/releases): **arm64-v8a** va bene per la maggior parte dei telefoni recenti.
3. Aggiungi il PC con il suo indirizzo MAC e, meglio, l'indirizzo di broadcast della tua rete (per esempio `192.168.1.255`).
4. Tocca **Wake**, poi aggiungi un widget o il riquadro per le volte successive.

Il fork è firmato con una chiave propria: se usavi un'altra versione dell'app, esporta un backup prima di disinstallarla, perché la disinstallazione cancella i dispositivi salvati.

## A che punto è

La release attuale è stabile per accensione, widget, riquadro, controllo dello stato e backup. Nelle pre-release sono in prova le automazioni programmate o legate a eventi (anche da MacroDroid), le regole sul Wi-Fi e la diagnostica di rete, che diventeranno stabili dopo le verifiche su telefoni reali. I pacchetti Wake-on-LAN non sono cifrati: usa l'app su una rete di cui ti fidi, o attraverso una VPN.

## Come partecipare

Problemi e proposte si segnalano dalle [issue del repository](https://github.com/lucabnt/AwakeOnLANMobile/issues). Le [note tecniche e di sicurezza](https://github.com/lucabnt/AwakeOnLANMobile/blob/main/docs/technical-notes.md) spiegano come funziona l'app, e l'[informativa sulla privacy](https://github.com/lucabnt/AwakeOnLANMobile/blob/main/PRIVACY.md) cosa conserva.
