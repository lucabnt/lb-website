---
title: "AwakeOnLANMobile: wake your PC from an Android phone, a widget or a tile"
description: "An open-source Android app that sends Wake-on-LAN packets to your computers, with home-screen widgets, a Quick Settings tile and encrypted device storage."
date: 2026-11-23T11:00:00+01:00
lastmod: 2026-11-23
draft: false
series: ["Progetti"]
series_weight: 2
tags: ["software", "open-source"]
author: "lb"
showToc: false
cover:
    image: blog/awakeonlanmobile/awakeonlanmobile-icona.webp
    alt: "The AwakeOnLANMobile icon, a power symbol with signal waves, on a turquoise background."
lang: en
project:
    repo: lucabnt/AwakeOnLANMobile
    # Latest stable release checked when the page was reviewed.
    version: 1.1.0
    status: stable
    # Releases list: shows the newest at the top, release candidates included.
    download: https://github.com/lucabnt/AwakeOnLANMobile/releases
    license: "[GPL-3.0](https://github.com/lucabnt/AwakeOnLANMobile/blob/main/LICENSE)"
    what: "A Wake-on-LAN app for Android, with widgets, a Quick Settings tile and a network scanner"
    audience: "Anyone who turns on a computer at home or in the office without walking to it"
    platforms: [Android 7 or later (encrypted backup from Android 8)]
    upstream: "[nellogan/AwakeOnLANMobile](https://github.com/nellogan/AwakeOnLANMobile), of which this is a maintained fork"
    updates:
        - date: 2026-11-23
          note: "Page first published, for version 1.1.0."
---

AwakeOnLANMobile turns on the computers on your network from an Android phone: open the app and tap **Wake**, or use a home-screen widget or a Quick Settings tile. Saved devices stay on the phone, encrypted.

{{< progetto >}}

## Why it exists

<!-- DA PERSONALIZZARE: il motivo concreto per cui hai ripreso il progetto. -->
The app was created by [nellogan](https://github.com/nellogan), who wrote the original interface and the networking code. I started from it because I wanted to wake a PC with a single tap, without opening an app or creating an account, and to keep MAC addresses and passwords protected on the phone. Those features became a maintained fork, which keeps the original author's attribution and the same GPL licence.

## What it does

- **Wake a saved PC** with a magic packet to the address and port you choose, including the optional Wake-on-LAN password.
- **Widgets and Quick Settings tile**: each widget can wake a different PC; the tile wakes the one you pick.
- **Status check** over TCP, so you can see whether the PC answers after the wake.
- **Encrypted storage** of devices and passwords through Android Keystore, and password-protected backups to move them to another phone.
- **Network scan** of an IPv4 subnet, bounded and cancellable.
- **No accounts, ads or cloud services**, in light or dark mode.

## Try it

1. Enable Wake-on-LAN in the PC's firmware and in the settings of its network adapter.
2. Download the APK from the [releases](https://github.com/lucabnt/AwakeOnLANMobile/releases): **arm64-v8a** fits most recent phones.
3. Add the PC with its MAC address and, preferably, the broadcast address of your network (for example `192.168.1.255`).
4. Tap **Wake**, then add a widget or the tile for next time.

The fork is signed with its own key: if you used another version of the app, export a backup before uninstalling it, because uninstalling deletes the saved devices.

## Where it stands

The current release is stable for waking PCs, widgets, tile, status checks and backups. Prereleases are testing scheduled and event-driven automations (also from MacroDroid), Wi-Fi rules and network diagnostics; they wait for checks on real phones before becoming stable. Wake-on-LAN packets are not encrypted: use the app on a network you trust, or through a VPN.

## Get involved

Report problems and suggest features in the [repository issues](https://github.com/lucabnt/AwakeOnLANMobile/issues). The [technical and security notes](https://github.com/lucabnt/AwakeOnLANMobile/blob/main/docs/technical-notes.md) explain how the app works, and the [privacy notice](https://github.com/lucabnt/AwakeOnLANMobile/blob/main/PRIVACY.md) what it stores.
