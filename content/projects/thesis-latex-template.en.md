---
title: "thesis-latex-template: a LaTeX template for Master's and PhD theses that compiles first time"
description: "A free LaTeX thesis template with modular chapters, automatic front matter, glossaries and a switchable bibliography, compiled with one command on Windows, Linux and macOS."
date: 2026-11-23T12:00:00+01:00
lastmod: 2026-11-23
draft: false
series: ["Progetti"]
series_weight: 3
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

thesis-latex-template is a starting point for a Master's or PhD thesis in LaTeX: download it, fill in one configuration file and compile with one command. The front matter, lists and bibliography are generated for you.

{{< progetto >}}

## Why it exists

I adapted it from the [KAUST thesis template](https://www.overleaf.com/latex/templates/kaust-official-thesis-template/mrcyxjvwpqdn) for my Master's thesis, defended in 2023 at the universities of Pavia and Tübingen, the one I [reopened three years later](/blog/reopening-my-thesis/). Afterwards I removed everything that belonged to that thesis and turned it into a generic template. Rebuilding it, I found it did not compile cleanly out of the box: packages that were loaded but never used, glossaries that were never generated, hard-coded page numbers. Those are the problems that cost hours in the weeks before a deadline, so I fixed them before publishing it.

## What it does

- **Modular chapters and appendices**, one file each, with English and Italian abstracts.
- **Generated front matter**: table of contents, lists of figures and tables, abbreviations and symbols through `glossaries`.
- **Bibliography by hand or with BibTeX**, switched by a single setting in `config.tex`.
- **One configuration file** for title, author, margins, line spacing and heading sizes.
- **Vector fonts only**, so the PDF stays sharp and PDF/A-compatible.
- **Compilation scripts** for Windows, Linux and macOS that run every pass in the right order.

## Try it

1. Install a LaTeX distribution: MiKTeX on Windows, MacTeX on macOS, TeX Live on Linux. The scripts tell you if one is missing.
2. Download the template with the button above, or clone the repository.
3. Open `config.tex` and enter title, author, degree and university.
4. Run `compile.bat` on Windows or `./compile.sh` on Linux and macOS, and open `output/Thesis.pdf`.

The [QUICKSTART](https://github.com/lucabnt/thesis-latex-template/blob/main/QUICKSTART.md) covers the same steps in about five minutes; `Chapter_1.tex` contains a worked example of every element: figures, tables, equations, citations, abbreviations.

## Where it stands

The template is complete and compiles without errors or missing packages on TeX Live and MiKTeX. It is a starting point, not a finished thesis: check the result against your institution's formatting rules, and use the official title page as a PDF when your university provides one.

## Get involved

Improvements are welcome: describe the problem, test the change and explain what you altered in an [issue](https://github.com/lucabnt/thesis-latex-template/issues) or a pull request. The licence is CC BY 4.0, like the original: you can use and adapt the template, even commercially, as long as the attribution is kept.
