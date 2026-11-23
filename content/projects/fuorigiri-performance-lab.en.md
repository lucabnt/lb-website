---
title: "Fuorigiri Performance Lab: a test archive for youth cycling clubs"
description: "An open-source, offline app to record, analyse and compare a cycling club's athlete tests over time, on Windows and Android."
date: 2026-11-23T12:00:00+01:00
draft: false
series: ["Progetti"]
series_weight: 1
tags: ["software", "open-source", "sport"]
author: "lb"
showToc: false
cover:
    image: projects/fuorigiri-performance-lab/test-incrementale.webp
    alt: "An incremental test in Fuorigiri: power, heart rate, cadence, VO2 and lactate samples on one chart, with synthetic data."
lang: en
aiTranslated: true
originalLanguage: it
lastmod: 2026-11-23
project:
    repo: lucabnt/performance-lab
    # Latest release checked when the page was reviewed.
    version: 0.10.0-alpha.1
    status: alpha
    license: "[GPL-3.0-or-later](https://github.com/lucabnt/performance-lab/blob/main/LICENSE)"
    what: "Archive and analysis of cycling tests: incremental, lactate, VO₂, sprint, Wingate, growth"
    audience: "Coaches, trainers and staff at clubs, especially youth clubs"
    platforms: [Windows 10 and 11, Android 8 or later]
    updates:
        - date: 2026-11-23
          note: "Page first published, with the first public alpha (0.10.0-alpha.1)."
---

Fuorigiri Performance Lab is an application for coaches and trainers at cycling clubs who want to keep their athletes' tests and compare them over time, season after season. It works offline, on a computer or a phone, and the data stays with the club.

{{< progetto >}}

## Why it exists

In a cycling club, especially a youth one, riders' tests often end up scattered across FIT files, spreadsheets and PDFs from testing centres. Each measurement makes sense on its own, but once they are put together it is hard to see how a rider is developing or how a group compares with the previous year's.

The tools that exist are excellent for an individual athlete's day-to-day training, or for paid metabolic modelling. None of the ones I tried brought together a youth club's test archive and the riders' growth, without needing a server.

In particular, I built it with [Progetto Ciclismo - Rodengo Saiano](https://www.asdprogettociclismorodengosaiano.it/) in mind, the club I work with.

## What it does

- **Profiles and groups**: athletes, categories, seasonal groups and anthropometric measurements with their history.
- **Incremental tests** imported from FIT or CSV, or entered by hand, with lactate, VO₂ and training zones.
- **Sprint and Wingate** tests of 30 and 15 seconds, kept as separate methods and compared only with each other.
- **Growth and maturation**: growth velocity and estimates of peak height velocity, with the method and its limits stated.
- **History and comparisons** with mean, median and number of measurements, without hiding missing data.
- **PDF and Markdown reports** by club, group, season or athlete, and encrypted sharing between collaborators over WebDAV or a shared folder.

![Seasonal evolution of MAP in Fuorigiri, with median, mean and number of athletes per season.](/projects/fuorigiri-performance-lab/storici-confronti.webp)
*History and comparisons: one indicator by season, with the sample size always visible. All data in the images is synthetic. The screenshots show the Italian interface.*

![Athlete profile with growth velocity, exploratory peak and dated maturation estimates.](/projects/fuorigiri-performance-lab/crescita-maturazione.webp)
*Growth and maturation in a test athlete's profile.*

## Try it

1. From the [releases](https://github.com/lucabnt/performance-lab/releases), download the installer or portable ZIP for Windows, or the APK for Android.
2. Create a sample club and add an athlete.
3. Record a test by hand, or import one of the files from the [synthetic corpus](https://github.com/lucabnt/performance-lab/blob/main/docs/DATI_SINTETICI.md).
4. Open the athlete's profile and export a report.

To start from source, follow the [getting-started guide](https://github.com/lucabnt/performance-lab/blob/main/docs/TESTARE_IL_PROGETTO.md) (in Italian). The shared interface and runtime libraries live in a separate repository, [cycling-suite-common](https://github.com/lucabnt/cycling-suite-common).

## Where it stands

The current status is in the summary at the top, while the [README](https://github.com/lucabnt/performance-lab#readme) states exactly what has and has not been tested. So far the app has been tested on Windows with Defender on, on a Pixel 9 and with WebDAV sharing. What mainly remains open during the alpha is external validation of the scientific methods. With any version, before upgrading an existing archive, make a backup and check that it restores.

## Get involved

Report problems and suggest features through the [repository issues](https://github.com/lucabnt/performance-lab/issues), and report vulnerabilities privately, as described in [SECURITY.md](https://github.com/lucabnt/performance-lab/blob/main/SECURITY.md).

If you are curious where these questions about young riders and their numbers come from, see the series [Youth cycling and professional careers](/en/series/ciclismo-giovanile-e-professionismo/).
