---
title: "thesis-latex-template: a LaTeX template for Master's and PhD theses that compiles first time"
description: "A free LaTeX thesis template with modular chapters, automatic front matter, glossaries and a switchable bibliography, compiled with one command on Windows, Linux and macOS."
date: 2026-11-23T09:00:00+01:00
lastmod: 2026-11-23
draft: false
series: ["Progetti"]
series_weight: 4
tags: ["software", "open-source"]
author: "lb"
showToc: false
cover:
    image: projects/thesis-latex-template/thesis-latex-template-pagine.webp
    alt: "Three pages of the template's sample PDF: the title page, the table of contents and a chapter page with a table and an equation."
lang: en
project:
    repo: lucabnt/thesis-latex-template
    # Version in CHANGELOG.md when the page was reviewed (the project has no GitHub releases).
    version: 1.1.0
    status: stable
    # No GitHub releases: the download button points to the archive of the main branch.
    download: https://github.com/lucabnt/thesis-latex-template/archive/refs/heads/main.zip
    changelog: https://github.com/lucabnt/thesis-latex-template/blob/main/CHANGELOG.md
    license: "[CC BY 4.0](https://github.com/lucabnt/thesis-latex-template/blob/main/LICENSE)"
    what: "A LaTeX template for Master's and PhD theses, with English and Italian abstracts"
    audience: "Students writing a thesis in LaTeX, starting today or moving from Word"
    platforms: [TeX Live or MiKTeX on Windows, Linux and macOS; Overleaf]
    upstream: "[KAUST Official Thesis Template](https://www.overleaf.com/latex/templates/kaust-official-thesis-template/mrcyxjvwpqdn) (CC BY 4.0)"
    updates:
        - date: 2026-11-23
          note: "Page first published, for version 1.1.0."
---

thesis-latex-template is a starting point for a Master's or PhD thesis in LaTeX. You download it, fill in one configuration file and compile with a single command. The front matter, the lists and the bibliography are generated for you.

{{< progetto >}}

## Why it exists

I adapted it from the [KAUST thesis template](https://www.overleaf.com/latex/templates/kaust-official-thesis-template/mrcyxjvwpqdn) for my Master's thesis, which I defended in 2023 at the universities of Pavia and Tübingen. Afterwards I stripped out everything that belonged to that thesis and turned what was left into a generic template. It compiles cleanly out of the box, with one command and nothing to fix by hand.

## What it does

- Chapters and appendices are modular, one file each, and there are abstracts in English and Italian.
- The front matter is generated for you: table of contents, lists of figures and tables, abbreviations and symbols through `glossaries`.
- You can write the bibliography by hand or use BibTeX, and switch between the two with a single setting in `config.tex`.
- Title, author, margins, line spacing and heading sizes all live in one configuration file.
- It uses vector fonts only, so the PDF stays sharp and PDF/A-compatible.
- The compilation scripts for Windows, Linux and macOS run every pass in the right order.

## Try it

1. Install a LaTeX distribution: MiKTeX on Windows, MacTeX on macOS, TeX Live on Linux. If one is missing, the scripts will tell you.
2. Download the template with the button above, or clone the repository.
3. Open `config.tex` and enter title, author, degree and university.
4. Run `compile.bat` on Windows or `./compile.sh` on Linux and macOS, then open `output/Thesis.pdf`.

The [QUICKSTART](https://github.com/lucabnt/thesis-latex-template/blob/main/QUICKSTART.md) goes through the same steps in about five minutes. In `Chapter_1.tex` there is a worked example of every element: figures, tables, equations, citations, abbreviations.

## Where it stands

The template is complete, and it compiles on TeX Live and MiKTeX with no errors and no missing packages. Keep in mind that it is a starting point, not a finished thesis. Check the result against your institution's formatting rules, and if your university provides an official title page, use that as a PDF.

At some point I would also like to turn it into an agent skill, so that a coding agent could set up the template and fill it in from a brief.

## Get involved

Improvements are welcome. Open an [issue](https://github.com/lucabnt/thesis-latex-template/issues) or a pull request: describe the problem, test the change and explain what you altered. The licence is CC BY 4.0, the same as the original, so you can use and adapt the template, commercially too, as long as you keep the attribution.
