---
title: "AwakeOnLANMobile: wake your PC from an Android phone, a widget or a tile"
description: "An open-source Android app that sends Wake-on-LAN packets to your computers, with home-screen widgets, a Quick Settings tile and encrypted device storage."
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
    alt: "The AwakeOnLANMobile icon, a power symbol with signal waves, on a turquoise background."
lang: en
project:
    repo: lucabnt/AwakeOnLANMobile
    # Latest stable release checked when the page was reviewed.
    version: 1.1.0
    status: stable
    # Latest pre-release tested when the page was reviewed.
    prerelease: 1.2.0-rc.4
    # Releases list: shows the newest at the top, release candidates included.
    download: https://github.com/lucabnt/AwakeOnLANMobile/releases
    license: "[GPL-3.0](https://github.com/lucabnt/AwakeOnLANMobile/blob/main/LICENSE)"
    what: "A Wake-on-LAN app for Android, with widgets, a Quick Settings tile and a network scanner"
    audience: "Anyone who turns on a computer at home or in the office without walking to it"
    platforms: [Android 7 or later (encrypted backup from Android 8)]
    upstream: "[nellogan/AwakeOnLANMobile](https://github.com/nellogan/AwakeOnLANMobile), of which this is a fork"
    updates:
        - date: 2026-11-23
          note: "Page first published, for version 1.1.0 and pre-release 1.2.0-rc.4."
---

AwakeOnLANMobile turns on the computers on your network from an Android phone. You can tap **Wake** in the app, or not open it at all and use a home-screen widget or a Quick Settings tile instead. It is a fork of [nellogan's app](https://github.com/nellogan/AwakeOnLANMobile), and the devices you save stay on the phone, encrypted.

{{< progetto >}}

## Why it exists

The app was written by [nellogan](https://github.com/nellogan), who built the original interface and the networking code. I picked it up because I wanted to wake a PC with a single tap, without opening an app or creating an account, and I wanted MAC addresses and passwords kept safe on the phone. Those changes grew into a fork. It still credits the original author and keeps the same GPL licence.

## What it does

- It wakes a saved PC by sending a magic packet to the address and port you choose, with the Wake-on-LAN password if you use one.
- Each widget can wake a different PC, and the Quick Settings tile wakes whichever one you pick.
- After the wake, it checks over TCP whether the PC answers.
- Devices and passwords are encrypted with Android Keystore. To move them to another phone, there are password-protected backups.
- It can scan an IPv4 subnet. The scan has limits, and you can stop it whenever you want.
- No accounts, no ads, no cloud services. Light and dark mode are both there.

## Try it

1. Turn on Wake-on-LAN in the PC's firmware and in the settings of its network adapter.
2. Download the APK from the [releases](https://github.com/lucabnt/AwakeOnLANMobile/releases). If you are not sure which one to pick, **arm64-v8a** fits most recent phones.
3. Add the PC with its MAC address and, if you can, the broadcast address of your network (for example `192.168.1.255`).
4. Tap **Wake**. For next time, add a widget or the tile.

If you are coming from another version of the app, one thing to know: the fork is signed with its own key. Export a backup before you uninstall the old one, because uninstalling deletes the saved devices.

## Where it stands

Waking PCs, widgets, the tile, status checks and backups are all stable in the current release. In the pre-releases I am testing scheduled and event-driven automations (MacroDroid included), Wi-Fi rules and network diagnostics. They will move to stable once they have been checked on real phones. One caveat: Wake-on-LAN packets are not encrypted, so use the app on a network you trust, or through a VPN.

## Get involved

If something does not work or you would like a feature, open an [issue](https://github.com/lucabnt/AwakeOnLANMobile/issues). The [technical and security notes](https://github.com/lucabnt/AwakeOnLANMobile/blob/main/docs/technical-notes.md) explain how the app works, and the [privacy notice](https://github.com/lucabnt/AwakeOnLANMobile/blob/main/PRIVACY.md) what it stores.
