---
title: "Fuorigiri Performance Lab: a test archive for youth cycling clubs"
description: "An open-source, offline app to record, analyse and compare a cycling club's athlete tests over time, on Windows and Android."
date: 2026-11-23T10:00:00+01:00
draft: false
series: ["Progetti"]
series_weight: 1
tags: ["software", "open-source", "ciclismo-giovanile"]
author: "lb"
showToc: false
cover:
    image: blog/fuorigiri-performance-lab/test-incrementale.webp
    alt: "An incremental test in Fuorigiri: power, heart rate, cadence, VO2 and lactate samples on one chart, with synthetic data."
lang: en
aiTranslated: true
originalLanguage: it
project:
    repo: https://github.com/lucabnt/performance-lab
    version: 0.10.0-alpha.1
    status: alpha
    license: GPL-3.0-or-later
    platforms: [Windows, Android]
---

Fuorigiri Performance Lab is an application for coaches and trainers at cycling clubs who want to keep their athletes' tests and compare them over time, season after season. It works offline, on a computer or a phone, and the data stays with the club.

**[Download the 0.10.0-alpha.1 pre-release](https://github.com/lucabnt/performance-lab/releases) · [Code on GitHub](https://github.com/lucabnt/performance-lab)**

| At a glance | |
|---|---|
| **What it is** | Archive and analysis of cycling tests: incremental, lactate, VO₂, sprint, Wingate, growth |
| **For** | Coaches, trainers and staff at clubs, especially youth clubs |
| **Runs on** | Windows 10 and 11, Android 8 or later; Italian and English interface |
| **Status** | First public alpha (0.10.0-alpha.1) |
| **Licence** | GPL-3.0-or-later |

## Why it exists

I built it for [Progetto Ciclismo - Rodengo Saiano](https://www.asdprogettociclismorodengosaiano.it/), where the riders' tests ended up scattered across FIT files, spreadsheets and PDFs from testing centres. Each measurement made sense on its own; put together, it was hard to see how a rider was developing or how a group compared with the previous year's.

The tools that exist are excellent for an individual athlete's day-to-day training, or for paid metabolic modelling. None of the ones I tried brought together a youth club's test archive, the riders' growth, and the club's control over data about minors, without a server.

## What it does

- **Profiles and groups**: athletes, categories, seasonal groups and anthropometric measurements with their history.
- **Incremental tests** imported from FIT or CSV, or entered by hand, with lactate, VO₂ and training zones.
- **Sprint and Wingate** tests of 30 and 15 seconds, kept as separate methods and compared only with each other.
- **Growth and maturation**: growth velocity and estimates of peak height velocity, with the method and its limits stated.
- **History and comparisons** with mean, median and number of measurements, without hiding missing data.
- **PDF and Markdown reports** by club, group, season or athlete, and encrypted sharing between collaborators over WebDAV or a shared folder.

![Seasonal evolution of MAP in Fuorigiri, with median, mean and number of athletes per season.](/blog/fuorigiri-performance-lab/storici-confronti.webp)
*History and comparisons: one indicator by season, with the sample size always visible. All data in the images is synthetic. The screenshots show the Italian interface.*

![Athlete profile with growth velocity, exploratory peak and dated maturation estimates.](/blog/fuorigiri-performance-lab/crescita-maturazione.webp)
*Growth and maturation in a test athlete's profile.*

## Try it

1. From the [Releases page](https://github.com/lucabnt/performance-lab/releases), download the installer or portable ZIP for Windows, or the APK for Android.
2. Create a sample club and add an athlete.
3. Record a test by hand, or import one of the files from the [synthetic corpus](https://github.com/lucabnt/performance-lab/blob/main/docs/DATI_SINTETICI.md).
4. Open the athlete's profile and export a report.

To start from source, follow the [getting-started guide](https://github.com/lucabnt/performance-lab/blob/main/docs/TESTARE_IL_PROGETTO.md) (in Italian).

## Where it stands

It is an alpha, and the README states exactly what is missing: testing on a clean Windows install with Defender on, trials on real phones, WebDAV sharing with two real accounts, and external validation of the scientific methods. Direct Google Drive, Dropbox and OneDrive support is experimental. Before upgrading an existing archive, make a backup and check that it restores.

## Get involved

Report problems and suggest features through the [repository issues](https://github.com/lucabnt/performance-lab/issues); report vulnerabilities privately, as described in [SECURITY.md](https://github.com/lucabnt/performance-lab/blob/main/SECURITY.md). If you are curious where these questions about young riders and their numbers come from, see the series [Youth cycling and professional careers](/en/series/ciclismo-giovanile-e-professionismo/).
