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
    upstream: "[nellogan/AwakeOnLANMobile](https://github.com/nellogan/AwakeOnLANMobile), di cui è un fork"
    updates:
        - date: 2026-11-23
          note: "Prima pubblicazione della scheda, con la versione 1.1.0 e la pre-release 1.2.0-rc.4."
---

AwakeOnLANMobile accende i computer della tua rete da un telefono Android. Puoi toccare **Wake** nell'app, oppure non aprirla nemmeno e usare un widget nella schermata Home o un riquadro nelle Impostazioni rapide. È un fork dell'[app di nellogan](https://github.com/nellogan/AwakeOnLANMobile), e i dispositivi che salvi restano sul telefono, cifrati.

{{< progetto >}}

## Perché esiste

L'app l'ha scritta [nellogan](https://github.com/nellogan): sono sue l'interfaccia originale e il codice di rete. Sono partito da lì perché volevo accendere un PC con un tocco solo, senza aprire l'app e senza creare account, e volevo che indirizzi MAC e password restassero protetti sul telefono. Da queste modifiche è nato un fork, che continua a citare l'autore originale e ha la stessa licenza GPL.

## Cosa fa

- Accende un PC salvato mandando un magic packet all'indirizzo e alla porta che scegli, con la password Wake-on-LAN se la usi.
- Ogni widget può accendere un PC diverso, e il riquadro delle Impostazioni rapide accende quello che indichi.
- Dopo l'accensione controlla via TCP se il PC risponde.
- Dispositivi e password sono cifrati con Android Keystore. Per portarli su un altro telefono ci sono i backup protetti da password.
- Può scansionare una sottorete IPv4. La scansione ha dei limiti e la puoi interrompere quando vuoi.
- Niente account, niente pubblicità, niente servizi cloud. C'è il tema chiaro e c'è quello scuro.

## Provarlo

1. Attiva il Wake-on-LAN nel firmware del PC e nelle impostazioni della sua scheda di rete.
2. Scarica l'APK dalle [release](https://github.com/lucabnt/AwakeOnLANMobile/releases). Se non sai quale prendere, **arm64-v8a** va bene per la maggior parte dei telefoni recenti.
3. Aggiungi il PC con il suo indirizzo MAC e, se puoi, l'indirizzo di broadcast della tua rete (per esempio `192.168.1.255`).
4. Tocca **Wake**. Per le volte successive, aggiungi un widget o il riquadro.

Se arrivi da un'altra versione dell'app, una cosa da sapere: il fork è firmato con una chiave sua. Prima di disinstallare la vecchia esporta un backup, perché disinstallandola si cancellano i dispositivi salvati.

## A che punto è

Nella release attuale sono stabili l'accensione, i widget, il riquadro, il controllo dello stato e i backup. Nelle pre-release sto provando le automazioni programmate o legate a eventi (anche da MacroDroid), le regole sul Wi-Fi e la diagnostica di rete, che diventeranno stabili dopo le verifiche su telefoni veri. Un avvertimento: i pacchetti Wake-on-LAN non sono cifrati, quindi usa l'app su una rete di cui ti fidi, o passando da una VPN.

## Come partecipare

Se qualcosa non funziona o ti manca una funzione, apri una [issue](https://github.com/lucabnt/AwakeOnLANMobile/issues). Come funziona l'app lo spiegano le [note tecniche e di sicurezza](https://github.com/lucabnt/AwakeOnLANMobile/blob/main/docs/technical-notes.md), cosa conserva l'[informativa sulla privacy](https://github.com/lucabnt/AwakeOnLANMobile/blob/main/PRIVACY.md).
