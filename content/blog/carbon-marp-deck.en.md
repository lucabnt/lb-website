---
title: "carbon-marp-deck: Carbon-style slide decks from Markdown, written by you or your agent"
description: "An agent skill and a Marp template that turn a brief or a Markdown file into a Carbon-style deck, exported as PDF and editable PowerPoint."
date: 2026-11-23T10:00:00+01:00
draft: false
series: ["Progetti"]
series_weight: 2
tags: ["software", "open-source"]
author: "lb"
showToc: false
cover:
    image: blog/carbon-marp-deck/carbon-marp-deck-esempi.webp
    alt: "Four example slides made with carbon-marp-deck: key metrics, cards, a flow diagram and a five-phase process."
lang: en
project:
    repo: https://github.com/lucabnt/carbon-marp-deck
    version: 1.2.1
    status: stable
    license: Apache-2.0
    platforms: [Node.js 18+, Python 3.9+, Chrome or Edge]
---

carbon-marp-deck turns a Markdown file, or a plain-language brief given to a coding agent, into a slide deck in the style of the [Carbon Design System](https://carbondesignsystem.com/), exported as a **PDF** and an **editable PowerPoint** file.

**[Get it on GitHub](https://github.com/lucabnt/carbon-marp-deck) · [Release 1.2.1](https://github.com/lucabnt/carbon-marp-deck/releases)**

| At a glance | |
|---|---|
| **What it is** | A Marp theme and an agent skill for Carbon-style decks |
| **For** | Anyone who writes informal decks: team syncs, demos, drafts, knowledge sharing |
| **Runs on** | Any computer with Node.js 18+, Python 3.9+ and Chrome or Edge; works with Claude Code, Codex, Copilot and other agents |
| **Status** | Stable, version 1.2.1 |
| **Licence** | Apache-2.0; Plex fonts under the SIL Open Font License ([details](https://github.com/lucabnt/carbon-marp-deck#licence-and-trademarks)) |

> **Unofficial.** A community project built only on open-source Carbon material (design tokens, guidelines, pictograms, the Plex typeface). It is not affiliated with, endorsed or supported by the Carbon Design System project, and it is not meant for decks that must follow a reviewed corporate template.

## Why it exists

<!-- DA PERSONALIZZARE: il motivo concreto per cui l'hai costruito. -->
Most of the decks I make are informal, and I write most of my notes in Markdown. Marp already turns Markdown into slides, but a good-looking deck still needed hand-tuned CSS, and the output was a PDF nobody else could edit. Carbon's open guidelines and tokens gave me a complete, coherent design system to build on, and agents gave me a way to go from a brief to a first draft in minutes.

## What it does

- **A Carbon-style Marp theme** whose values all come from Carbon tokens: four themes, the Carbon type scale in Plex, the spacing scale and grid gutters.
- **Ready-made layouts and components**: cover, contents, section dividers, two- and three-column grids, cards, KPIs, bar and custom charts, roadmaps, flow and process diagrams, data tables.
- **1,429 Carbon pictograms** with a keyword search, and Plex bundled so every PDF renders in the right typeface.
- **An agent skill**: the agent gathers the brief, writes the slides, exports them and checks the previews until there are no warnings.
- **PDF and editable PPTX** made of native shapes and text boxes, plus a linter for the mistakes that silently break Marp slides.

![A flow diagram slide made with carbon-marp-deck: sources, core platform, integration, AI and consumers connected by arrows.](/blog/carbon-marp-deck/carbon-marp-deck-flusso.webp)
*One of the example slides in the repository, written in Markdown and exported without manual adjustments.*

## Try it

With an agent, clone the repository into its skills folder (for Claude Code, `~/.claude/skills/carbon-marp-deck`), install the requirements and ask for a deck:

> Create a 10-minute deck about our Q3 platform migration for the engineering team. Export PDF and PPTX.

Without an agent:

```bash
git clone https://github.com/lucabnt/carbon-marp-deck.git
cd carbon-marp-deck
pip install -r pptx-export/requirements.txt
python scripts/new_deck.py "Q3 review" --title "Q3 review"
python scripts/export_deck.py q3-review/q3-review.md --strict --preview
```

The [README](https://github.com/lucabnt/carbon-marp-deck#readme) lists the skills folders of the other agents and how to upload the skill to claude.ai.

## Where it stands

Version 1.0.0 was the first public release, on 21 November 2026; 1.2.1 followed two days later with fixes to pictogram paths and heatmap cells. In CI every [example deck](https://github.com/lucabnt/carbon-marp-deck/tree/main/examples) is linted and the PPTX converter runs a regression test. In web chat apps without a browser on the machine, an agent can write the deck but not export it.

## Get involved

Issues and pull requests are welcome; the [contributing guide](https://github.com/lucabnt/carbon-marp-deck/blob/main/CONTRIBUTING.md) explains how the theme is generated and tested. The [changelog](https://github.com/lucabnt/carbon-marp-deck/blob/main/CHANGELOG.md) records every change.
