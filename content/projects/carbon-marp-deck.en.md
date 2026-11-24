---
title: "carbon-marp-deck: Carbon-style slide decks from Markdown, written by you or your agent"
description: "An agent skill and a Marp template that turn a brief or a Markdown file into a Carbon-style deck, exported as PDF and editable PowerPoint."
date: 2026-11-23T11:00:00+01:00
draft: false
series: ["Progetti"]
series_weight: 2
tags: ["software", "open-source"]
author: "lb"
showToc: false
cover:
    image: projects/carbon-marp-deck/carbon-marp-deck-esempi.webp
    alt: "Four example slides made with carbon-marp-deck: key metrics, cards, a flow diagram and a five-phase process."
lang: en
lastmod: 2026-11-23
project:
    repo: lucabnt/carbon-marp-deck
    # Latest release checked when the page was reviewed.
    version: 1.2.1
    status: stable
    license: "Apache-2.0; Plex fonts under the SIL Open Font License ([details](https://github.com/lucabnt/carbon-marp-deck#licence-and-trademarks))"
    what: "A Marp theme and an agent skill for Carbon-style decks"
    audience: "Anyone who prepares slide decks: team syncs, demos, reviews, knowledge sharing"
    platforms: [Any computer with Node.js 18+, Python 3.9+ and Chrome or Edge; IBM Bob, Claude Code, Codex, Copilot and other agents]
    updates:
        - date: 2026-11-23
          note: "Page first published, for version 1.2.1."
---

carbon-marp-deck takes a Markdown file, or a brief in plain words given to a coding agent, and turns it into a slide deck in the style of the [Carbon Design System](https://carbondesignsystem.com/). What comes out is a **PDF** and a **PowerPoint file you can edit**.

{{< progetto >}}

> **Unofficial.** This is a community project, built only on Carbon's open-source material: design tokens, guidelines, pictograms and the Plex typeface. It is not affiliated with, endorsed or supported by the Carbon Design System project.

## Why it exists

Making presentations with an agent works very well in Marp. The slides are plain Markdown, so the agent writes, checks and fixes them as easily as it does code, and a brief becomes a first draft in a few minutes. The finish was the weak spot. A deck that looked good still needed CSS tuned by hand, and at the end you had a PDF nobody else could edit. Carbon was a sensible place to start from: its guidelines and tokens are open, and it is a complete, coherent design system.

## What it does

- A Marp theme in Carbon style, with every value taken from Carbon tokens: four themes, the Carbon type scale in Plex, the spacing scale and the grid gutters.
- Layouts and components ready to use: cover, contents, section dividers, two- and three-column grids, cards, KPIs, bar and custom charts, roadmaps, flow and process diagrams, data tables.
- 1,429 Carbon pictograms you can search by keyword. Plex is bundled too, so every PDF comes out in the right typeface.
- An agent skill. The agent collects the brief, writes the slides, exports them and keeps checking the previews until no warnings are left.
- Export to PDF and to a PPTX made of native shapes and text boxes, so it stays editable. There is also a linter for the mistakes that break Marp slides without telling you.

![A flow diagram slide made with carbon-marp-deck: sources, core platform, integration, AI and consumers connected by arrows.](/projects/carbon-marp-deck/carbon-marp-deck-flusso.webp)
*One of the example slides in the repository, written in Markdown and exported as is, with no manual adjustments.*

## Try it

If you use an agent, clone the repository into its skills folder (`~/.bob/skills/carbon-marp-deck` for IBM Bob, `~/.claude/skills/carbon-marp-deck` for Claude Code), install the requirements and ask it for a deck:

> Create a 10-minute deck about our Q3 platform migration for the engineering team. Export PDF and PPTX.

Without an agent:

```bash
git clone https://github.com/lucabnt/carbon-marp-deck.git
cd carbon-marp-deck
pip install -r pptx-export/requirements.txt
python scripts/new_deck.py "Q3 review" --title "Q3 review"
python scripts/export_deck.py q3-review/q3-review.md --strict --preview
```

The [README](https://github.com/lucabnt/carbon-marp-deck#readme) has the skills folders of the other agents, and explains how to upload the skill to claude.ai.

## Where it stands

The first public release came out in November 2026. The theme, the components and the exporters are stable, and the [changelog](https://github.com/lucabnt/carbon-marp-deck/blob/main/CHANGELOG.md) describes every release. In CI, each [example deck](https://github.com/lucabnt/carbon-marp-deck/tree/main/examples) goes through the linter and the PPTX converter runs a regression test.

## Get involved

Issues and pull requests are welcome. If you want to contribute, the [contributing guide](https://github.com/lucabnt/carbon-marp-deck/blob/main/CONTRIBUTING.md) explains how the theme is generated and tested.
