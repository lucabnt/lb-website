---
title: "In youth cycling, does performance or improvement matter more?"
description: "Current level and improvement both predict professional careers, but progression matters most when it leads to a high level. Team changes tell a different story."
date: 2026-10-16T10:00:00+02:00
draft: true
series: ["Ciclismo giovanile e professionismo"]
series_weight: 3
tags: ["ciclismo-giovanile", "sport"]
author: "lb"
showToc: true
TocOpen: false
# COPERTINA: nessun file ancora caricato. Togliere il commento quando il file
# esiste, in static/blog/ciclismo-giovanile-conta-di-piu-quanto-vai-forte-o-quanto-migliori/.
# cover:
#     image: blog/ciclismo-giovanile-conta-di-piu-quanto-vai-forte-o-quanto-migliori/nome-file.webp
#     alt: "..."
lang: en
locale: en-GB
url: /en/blog/ciclismo-giovanile-conta-di-piu-quanto-vai-forte-o-quanto-migliori/
aiTranslated: true
originalLanguage: it
---

*The third of four instalments. In the [second](/en/blog/ciclismo-giovanile-a-che-eta-si-riconosce-un-futuro-professionista/) I measured how well ranking position predicts a professional career, and from what age. Here I add the direction in which a rider is moving, then examine three things often taken for granted in youth cycling.*

Two riders, both sixteen. The first has performed steadily for three seasons, around the 75th percentile in his category: consistent, no surprises, no collapses. Three years ago the second was at the 40th percentile, then the 55th, then the 70th; now he is at the 90th. If you could back only one, whom would you choose?

For once, the data can answer. Youth rankings form a time series, and a time series shows both where someone stands and where they are heading.

First, though, we need to agree on what ‘improving’ means, because the word promises more than it measures. Here it means **rising in percentile**, gaining places relative to ranked peers. Getting faster in absolute terms is different. The two often coincide, but the ranking renews itself each year, and the typical trajectory of a rider who stays is slightly downwards, by almost one percentile point a year[^traiettorie], as newcomers arrive behind them. Moving upwards in that population already means swimming against the current.

## The answer without coefficients

Again, we can begin without statistics: divide riders into three groups by level and three by direction, then count how many became professionals in each of the nine cells[^traiettorie].

| | low improvement | medium | high |
|---|---|---|---|
| **high level** | 2.1% (7 of 333) | 13.3% (20 of 150) | **20.5% (31 of 151)** |
| **medium level** | 0.0% (0 of 214) | 0.9% (2 of 234) | 5.9% (11 of 186) |
| **low level** | 1.1% (1 of 88) | 0.0% (0 of 250) | 0.7% (2 of 297) |

*The share of future professionals in each cell, with the underlying counts in brackets. Five cells contain fewer than five professionals, including two with none.*

{{< figure
  src="/blog/ciclismo-giovanile-conta-di-piu-quanto-vai-forte-o-quanto-migliori/traiettorie_incrocio.webp"
  alt="Bars grouped by level and improvement: 20.5% for high level and strong growth, 13.3% for high level with medium improvement, 5.9% for medium level with strong growth, and 2.1% for high level in decline."
  caption="The bottom of the chart is not compressed by accident: in the lowest third, improvement rescues almost nobody."
>}}

The table can be read in two directions; the answer comes from combining them.

Horizontally, across the top row: among high-level riders, those also improving became professionals in **20.5%** of cases; those declining reached only **2.1%**. Almost ten times less, at the same level.

But that jump is not spread evenly across the row, which surprised me most. Almost all of it lies between declining and holding steady. High-level riders with only **medium** improvement already reach **13.3%**, six times the declining group's rate. From there to the strongest improvers' 20.5% is only another factor of one and a half. A steep upward slope is not necessary to belong among those who make it. Not falling is enough.

Vertically, level matters enormously, and counts explain it better than percentages. The three thirds contain almost equal numbers, 634, 634 and 635, and their seventy-four future professionals split as follows: **58 in the top third, 13 in the middle and 3 in the bottom**. Four in five come from the upper third. The bottom row is flat: among strong improvers the rate rises from 0.7% at low level to 20.5% at high level, and improvement rescues almost nobody in the lowest third. For those starting far behind, climbing changes their ranking far more than their eventual outcome.

Then there is the cell that, for me, justifies this instalment: strongly improving mid-level riders, at **5.9%**, almost three times the 2.1% of high-level riders in decline. The comparison holds in absolute counts too, the stricter reading: that cell produced **eleven** professionals from 186 riders, while the strong but declining group produced **seven** from 333. Four fewer, from almost twice as many riders.

A warning is needed. As **groups**, improving mid-level riders did better than declining high-level riders. That does not settle individual comparisons: these are rates for two sets of riders, not the outcome of a contest between two individuals, and the overwhelming majority in both groups did not make it. Even the best cell, strong riders improving, leaves almost 80% short. Eleven professionals are also few: treat that cell as an indication, not a precise estimate.

If you coach, this is the row that concerns you most: it is the only one supporting a bet on a rider who is not among the strongest today. The other eight cells confirm what you knew. This one says a mid-ranked rider rising for two seasons deserves as much attention as a strong rider declining. If you can watch only one, the data do not tell you to choose the latter.

<!-- DA COMPLETARE: un caso che hai visto di persona, un ragazzo di metà classifica in salita, se ne hai uno -->

**Level is a condition; improvement is a multiplier**. Without the former, the latter is insufficient. With it, the latter changes everything.

## The same numbers, with a model

A line can describe each rider's percentile as a function of age. Two numbers summarise it: level, where the line passes around fifteen, and slope, how much it rises or falls each year[^traiettorie].

| | odds multiplier |
|---|---|
| ten additional percentile points in level | **×3.03** (2.51–3.71) |
| one standard deviation of annual improvement | **×3.35** (2.54–4.51) |

*Odds are the ratio of the probability of making it to the probability of not making it. With a rare outcome, multiplying odds by 3.35 roughly triples probability, from 2.7% to 8.5%; these are not additional percentage points. One standard deviation of improvement is about 3.1 percentile points a year.*

Three percentile points a year sound modest. They amount to nine over three seasons, moving from the 70th percentile to the 79th, far from the spectacular trajectory in the opening example. It is the movement of someone gaining a few places each year while others stand still or fall.

Both matter, and improvement is no poor relation. A model knowing only level ranks the future professional ahead in around 85 **pairs** out of 100; adding slope raises that to 92. Direction therefore tells us something current level does not. Notice, however, the second interval's width, from 2.54 to 4.51: the coefficient supporting this post's title is also the less precise of the two. Read it as ‘large’ rather than ‘3.35’.

One technical precaution explains why this analysis is not trivial. A rider observed for only two seasons would have a slope based on two points, and two points always make a straight line. One poor season, a crash or a different calendar could make that line say ‘freefall’ or ‘rising fast’ when neither had happened.

The model estimates all lines together rather than individually, pulling those based on little data towards the population mean. It gives someone with two seasons a cautious slope and trusts someone with six much more. That is appropriate and has two consequences. Almost all the most pronounced trajectories in the table belong to riders with many observations. Anyone repeating the calculation manually, one line per rider, would obtain much more extreme and less reliable slopes: the nine-cell table would look clearer than the data justify.

*For more detail in the technical document, in Italian: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#conta-il-livello-o-il-miglioramento" target="_blank" rel="noopener">Does level or improvement matter?</a> and <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#la-stessa-risposta-senza-coefficienti" target="_blank" rel="noopener">The same answer without coefficients</a>.*

## Could it be career length again?

The suspicion is obvious and technically justified. A pronounced slope also suggests a long career, and longer careers correlate with making it. Am I measuring who stayed longer and calling it improvement?

Add the number of observed seasons to the model. If improvement merely disguised duration, its coefficient would collapse. Instead it moves from 3.35 to **3.09**. Smaller, but still large: improvement does not seem to be merely career length in disguise. Take ‘merely’ literally, because season count is only one measure of duration. The suspicion weakens; it does not disappear.

Three limitations remain. First, slopes are estimated for riders ranked in at least two seasons: **1,903 youngsters, including 74 professionals**. This post says nothing about a rider's first point-scoring season, the situation for almost one in three. Second, riders with two or more seasons are not a random sample, because remaining ranked also depends on performance. The precise conclusion is ‘among riders whose trajectory I can observe, direction adds information’. Third, what lies inside a slope? Rising in percentile can mean maturing, beginning serious training, joining a team that takes you to suitable races, or simply riders ahead of you quitting. The model cannot distinguish them.

*For more detail in the technical document, in Italian: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#non-sar%C3%A0-di-nuovo-la-durata-della-carriera" target="_blank" rel="noopener">Could it be career length again?</a> and <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#il-modello-si-sta-giudicando-troppo-bene" target="_blank" rel="noopener">Is the model judging itself too generously?</a>.*

## Three things that seem to matter

Anyone familiar with youth cycling knows three things matter. January-born riders have almost an extra year of development. Riders joining well-run teams make it, while those staying in village clubs get lost. And being born in Veneto or Lombardy means racing every Sunday, while elsewhere you get one race a month.

All three claims sound reasonable. Two are clearly visible in the data. **None means what it seems to mean.**

**Birth month** was covered in the [second instalment](/en/blog/ciclismo-giovanile-a-che-eta-si-riconosce-un-futuro-professionista/), but a brief recap helps the comparison. The early-year advantage is large and fades with age: at thirteen first-quarter births outnumber last-quarter births by 2.13 to one; among Under 23s the ratio is 1.09. Among those who make it, it is absent: 1.5 against 1.7 among all ranked riders, indistinguishable from chance. Girls mature earlier and have a smaller imbalance at thirteen, suggesting the advantage is mainly development. It helps entry into the ranking, not talent: selecting at thirteen partly means selecting birth dates.

*For more detail in the technical document, in Italian: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#leffetto-dellet%C3%A0-relativa" target="_blank" rel="noopener">The relative age effect</a> and <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#chi-arriva-fra-quelli-entrati" target="_blank" rel="noopener">Who makes it among those who entered</a>.*

## Changing teams looks like a tenfold advantage

The raw figure is spectacular: between riders who never changed teams and those who changed three times, the professional rate rises from **0.68%** to **7.32%**[^contesto]. A ready-made headline: changing teams helps.

But nobody looks at the seasons-raced column. Those who never changed raced 1.8 seasons on average; those with three changes raced 6.0. You have to remain in the sport to change teams. Indeed, holding seasons raced constant leaves at most 1.16 of the 6.64-percentage-point gap.

There is another reason not to build on it: changing teams is often unavoidable because not every club operates in every category. From juniors to Under 23, **96.3%** of riders change teams. These data cannot separate choice from necessity. Mobility therefore describes how far you got; it does not explain it.

*For more detail in the technical document, in Italian: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#lo-stesso-confronto-a-parit%C3%A0-di-carriera" target="_blank" rel="noopener">The same comparison at equal career length</a> and <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#cambiare-societ%C3%A0-spesso-non-%C3%A8-una-scelta" target="_blank" rel="noopener">Changing teams is often not a choice</a>.*

## Starting club and region

The other two candidates run out even faster.

Your starting club says very little. Professional rates range from **2.90%** among riders starting at clubs that had never produced a professional to **3.79%** among those starting at the best clubs, a difference indistinguishable from chance in a statistical test. There is a structural reason too: **67%** of youngsters begin at a club that produced no professionals in the preceding cohorts.

Region is the most frustrating, because it is the one question I cannot answer. Geographical concentration is real and strong: Lombardy, Veneto and Tuscany alone account for about **51%** of ranked riders. Regional professional rates remain uninterpretable even across nine birth cohorts and 4,823 riders: from 6.32% in Trentino-Alto Adige to 0% in Campania, with two or three riders enough to reorder the table. The right question is whether region adds anything after allowing for rider numbers and available races. That requires membership totals for each region, which are not publicly available. I prefer to state the gap rather than fill it with a meaningless ranking.

*For more detail in the technical document, in Italian: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#regione-e-societ%C3%A0-di-partenza" target="_blank" rel="noopener">Region and starting club</a>.*

## When a variable tells the outcome twice

The mechanism is always the same, and appears everywhere. A variable measures how far you got; you compare it with the outcome; you see a strong correlation; you read it as an explanation of how far you will go.

It applies to team changes, seasons raced, race counts and anything that requires staying in the game to accumulate. Before believing a gradient, ask **what it took to reach its highest cell**. If it required getting far, that gradient is telling the outcome twice.

## What remains

Back to the two riders at the start. The data favour the second, but only because the 90th percentile is real. What matters is growth that takes you high. Moving from the 20th to the 40th percentile is exactly as much improvement as moving from the 70th to the 90th; their probabilities look nothing alike.

In practice, when looking at a rider's record: **level first, direction second**. Level tells you whether the rider is in the range where the question makes sense; direction tells you, within that range, how much confidence is warranted. It matters particularly in the unfavourable direction: among strong riders, those declining made it six times less often than those merely keeping pace.

The negative finding helped too. Without controlling for seasons raced, I would have published that changing teams helps, supported by a tenfold difference. It would have been false.

At this point we seem to have everything needed for selection: take the strongest, then the strongest improvers among them. In the [next instalment](/en/blog/ciclismo-giovanile-scegliere-chi-seguire/) I actually try it, and count how many selections would come to nothing.

---

> **How we know**
>
> Trajectories come from a mixed-effects model fitted to 7,595 observations from 2,743 riders. It assigns each an individual level and slope using shrinkage, pulling estimates based on few seasons towards the mean. The window ends at eighteen: Under 23 begins afterwards, when some riders are already professionals. Including those seasons would predict an outcome using observations collected after it occurred.
>
> Level and slope always enter the model together, because they are correlated by construction: percentile is capped at 100, leaving high starters less room to rise.
>
> Club and region are not control variables in any study model. Team changes occur during careers, often in response to results, so they lie on the path between performance and outcome. Controlling for them would remove part of the effect being measured.

[^traiettorie]: Mixed model in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/21_traiettorie.R" target="_blank" rel="noopener">R/21_traiettorie.R</a>, rendered by <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/report/moduli/traiettorie.py" target="_blank" rel="noopener">report/moduli/traiettorie.py</a>.

[^contesto]: Calculated in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/report/moduli/contesto.py" target="_blank" rel="noopener">report/moduli/contesto.py</a>. The comparison between the lowest and highest starting-club groups uses Fisher's exact test, p = 0.43.
