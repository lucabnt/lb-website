---
title: "In youth cycling, does performance or improvement matter more?"
description: "How much does improvement add to level? We follow riders through youth rankings to see what their trajectories tell us about future professional careers."
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

*The third of four instalments. In the [second](/en/blog/ciclismo-giovanile-a-che-eta-si-riconosce-un-futuro-professionista/) we saw how well ranking position helps distinguish future professionals, and from what age. Here we also follow riders over time: how much does knowing whether they are gaining or losing ground add?*

One rider is among the best in his category but has been losing ground for several seasons. Another is further back but keeps closing the gap. How much should that difference matter when we decide whom to follow? In the previous instalment we looked at placings at each age. Now we follow the trajectory: beyond the level reached, does it also matter whether a rider is moving up or down the ranking?

For once, the data can answer. Youth rankings form a time series, and a time series shows both where someone stands and where they are heading.

First, though, we need to agree on what ‘improving’ means, because the word promises more than it measures. Here it means **rising in percentile**, gaining places relative to ranked peers. Getting faster in absolute terms is different. The two often coincide, but the ranking renews itself each year, and the typical trajectory of a rider who stays is slightly downwards, by almost one percentile point a year[^traiettorie], as newcomers arrive behind them. Moving upwards in that population already means swimming against the current.

## The answer without coefficients

We use two measures to describe each trajectory: estimated level around fifteen and the direction of ranking position over the seasons observed up to eighteen. Later we will see how they are derived.

We begin with the most readable result: divide riders into three groups by level and three by improvement, then count how many became professionals in each of the nine combinations[^traiettorie].

| | low improvement | medium | high |
|---|---|---|---|
| **high level** | 2.1% (7 of 333) | 13.3% (20 of 150) | **20.5% (31 of 151)** |
| **medium level** | 0.0% (0 of 214) | 0.9% (2 of 234) | 5.9% (11 of 186) |
| **low level** | 1.1% (1 of 88) | 0.0% (0 of 250) | 0.7% (2 of 297) |

*The share of future professionals in each cell, with the underlying counts in brackets. Five cells contain fewer than five professionals, including two with none.*

{{< figure
  src="/blog/ciclismo-giovanile-conta-di-piu-quanto-vai-forte-o-quanto-migliori/traiettorie_incrocio.webp"
  alt="Bars grouped by level and improvement: 20.5% for high level and strong growth, 13.3% for high level with medium improvement, 5.9% for medium level with strong growth, and 2.1% for high level in decline."
  caption="In the lowest-level group, few riders turn professional in any of the three improvement bands. The largest differences appear in the high-level group."
>}}

The first thing we see is the importance of level: **58 of the 74 future professionals come from the top third**, 13 from the middle and 3 from the bottom. Improvement matters, but level remains important.

Now look at the high-level riders. In the group with the least improvement, 2.1% become professionals; in the middle group, 13.3%; in the group with the most improvement, 20.5%. The largest difference is already between the first and second groups.

Another comparison is worth noting: among mid-level riders with the most improvement, 11 out of 186 made it, or 5.9%. Among high-level riders with the least improvement, 7 out of 333 made it, or 2.1%.

We cannot use these frequencies to choose confidently between two individual riders. The numbers of professionals are small, and even in the most favourable combination almost four in five did not make it. We can, however, recognise a limitation of rankings alone: **level does not tell the whole story of a rider's development**.

## The same numbers, with a model

A line can describe each rider's percentile as a function of age. Two numbers summarise it: level, where the line passes around fifteen, and slope, how much it rises or falls each year[^traiettorie].

| | odds multiplier |
|---|---|
| ten additional percentile points in level | **×3.03** (2.51–3.71) |
| one standard deviation of annual improvement | **×3.35** (2.54–4.51) |

*Odds are the ratio of the probability of making it to the probability of not making it. With a rare outcome, multiplying odds by 3.35 roughly triples probability, from 2.7% to 8.5%; these are not additional percentage points. One standard deviation of improvement is about 3.1 percentile points a year.*

Three percentile points a year sound modest. Over three years they add up to about nine points: a move from the 70th to the 79th percentile. We are therefore also talking about gradual progress that becomes visible over several seasons.

Both matter, and improvement is no poor relation. A model knowing only level ranks the future professional ahead in around 85 **pairs** out of 100; adding slope raises that to 92. Direction therefore tells us something current level does not. Notice, however, the second interval's width, from 2.54 to 4.51: the coefficient supporting this post's title is also the less precise of the two. Read it as ‘large’ rather than ‘3.35’.

With only two seasons, a bad day or a different calendar can make a rider look as though he is improving or declining sharply. That is why we use a model that is more cautious when observations are few: it pulls those trajectories towards the average and gives more scope to differences supported by many seasons.

The trajectories in the table therefore also account for how much we know about each rider. A simple line between two placings would often give a much more extreme impression.

*For more detail in the technical document, in Italian: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#conta-il-livello-o-il-miglioramento" target="_blank" rel="noopener">Does level or improvement matter?</a> and <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#la-stessa-risposta-senza-coefficienti" target="_blank" rel="noopener">The same answer without coefficients</a>.*

## Could it be career length again?

The most pronounced trajectories often belong to riders we observe for longer. We therefore need to check whether improvement really adds information or whether we are mainly measuring the length of the pathway.

We add the number of observed seasons to the model. The multiplier associated with improvement moves from **3.35** to **3.09**: it falls but remains high. Duration therefore does not seem to explain the whole association. This check reduces the concern without eliminating it, because season count does not describe every aspect of remaining in cycling.

Three limitations remain. First, slopes are estimated for riders ranked in at least two seasons: **1,903 youngsters, including 74 professionals**. This post says nothing about a rider's first point-scoring season, the situation for almost one in three. Second, riders with two or more seasons are not a random sample, because remaining ranked also depends on performance. The conclusion therefore concerns riders whose trajectories we can observe: in this group, direction adds information beyond level. Third, what lies inside a slope? Rising in percentile can mean maturing, beginning serious training, joining a team that takes you to suitable races, or simply riders ahead of you quitting. The model cannot distinguish them.

*For more detail in the technical document, in Italian: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#non-sar%C3%A0-di-nuovo-la-durata-della-carriera" target="_blank" rel="noopener">Could it be career length again?</a> and <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#il-modello-si-sta-giudicando-troppo-bene" target="_blank" rel="noopener">Is the model judging itself too generously?</a>.*

So far we have looked at trajectories in the ranking. Now we also consider context: team changes, starting club and region. These aspects can accompany different careers, but interpreting them requires some care.

## Does changing teams help?

Among riders who never changed clubs, **0.68%** become professionals; among those who changed three times, **7.32%**[^contesto]. Looking only at these percentages, we might think that changing teams helps riders turn professional.

But consider the observed seasons too: an average of **1.8** for riders who never changed clubs and **6.0** for those who changed three times. Riders who remain in cycling longer also have more opportunities to change teams. When we compare pathways of the same duration, at most 1.16 percentage points of the original 6.64-point gap remain.

There is another reason for caution: changes are often unavoidable because not every club operates in every category. From juniors to Under 23, **96.3%** of riders change teams. These data cannot separate choice from necessity. The number of changes therefore also describes the length and stages of a rider's pathway. This comparison cannot tell us how much changing teams actually helps.

*For more detail in the technical document, in Italian: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#lo-stesso-confronto-a-parit%C3%A0-di-carriera" target="_blank" rel="noopener">The same comparison at equal career length</a> and <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#cambiare-societ%C3%A0-spesso-non-%C3%A8-una-scelta" target="_blank" rel="noopener">Changing teams is often not a choice</a>.*

## Starting club and region

Let us also look at starting club. Among riders who begin at a club that had produced no professionals in earlier cohorts, **2.90%** make it; among those starting at the clubs with the best results, **3.79%** do. The observed difference is indistinguishable from chance. Moreover, **67%** of riders begin at a club that had produced no professionals in the preceding cohorts.

Geographically, we see a clear concentration: **Lombardy, Veneto and Tuscany account for about 51% of ranked riders**. This describes where the observed group is concentrated, but does not establish where a rider has a better chance of making it. Regional groups are small, and the data needed to compare areas with different numbers and opportunities are missing.

These figures help us describe the context; they do not establish how much starting club or region affects the transition to professional racing.

*For more detail in the technical document, in Italian: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#regione-e-societ%C3%A0-di-partenza" target="_blank" rel="noopener">Region and starting club</a>.*

## When a variable tells the outcome twice

The mechanism is always the same, and appears everywhere. A variable measures how far you got; you compare it with the outcome; you see a strong correlation; you read it as an explanation of how far you will go.

It applies to team changes, seasons raced, race counts and anything that requires staying in the game to accumulate. Before believing a gradient, ask **what it took to reach its highest cell**. If it required getting far, that gradient is telling the outcome twice.

## What remains

Let us return to the two riders at the start. The data do not choose for a coach, but help us understand why both are worth following: level and trajectory describe different aspects of development.

When we assess a rider's profile, we should therefore consider **level together with direction**. Among high-level riders, the group with the least improvement had far fewer transitions to professional racing. A mid-level rider who is improving deserves attention even if he is not among the leaders.

We have also seen how easy it is to misread an association: without considering observed seasons, we might have attributed an advantage to team changes that the raw comparison cannot establish.

A practical question remains: how much can we trust a list of riders to follow? In the [next instalment](/en/blog/ciclismo-giovanile-scegliere-chi-seguire/) we start with the simplest criterion, ranking position, and count how many future professionals it identifies and how many it leaves out.

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
