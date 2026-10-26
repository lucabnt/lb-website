---
title: "Choosing whom to follow in youth cycling"
description: "Following the top ten per cent at eighteen identifies 59% of future professionals, but 52% of those selected will not make it. No threshold removes the trade-off."
date: 2026-10-16T10:00:00+02:00
draft: true
series: ["Ciclismo giovanile e professionismo"]
series_weight: 4
tags: ["ciclismo-giovanile", "sport"]
author: "lb"
showToc: true
TocOpen: false
# COPERTINA: nessun file ancora caricato. Togliere il commento quando il file
# esiste, in static/blog/ciclismo-giovanile-scegliere-chi-seguire/.
# cover:
#     image: blog/ciclismo-giovanile-scegliere-chi-seguire/nome-file.webp
#     alt: "..."
lang: en
locale: en-GB
url: /en/blog/ciclismo-giovanile-scegliere-chi-seguire/
aiTranslated: true
originalLanguage: it
---

*The last of four instalments. The [previous three](/en/series/ciclismo-giovanile-e-professionismo/) measured how well youth performance predicts professional careers, [from what age](/en/blog/ciclismo-giovanile-a-che-eta-si-riconosce-un-futuro-professionista/) and [with what effect sizes](/en/blog/ciclismo-giovanile-conta-di-piu-quanto-vai-forte-o-quanto-migliori/). Here I try using that measure to choose riders, a very different task. Then I explain how much you can trust the rest.*

Take the category in which prediction works best, second-year juniors at eighteen, and apply the most natural rule a club might adopt: follow the top ten per cent. Of 901 ranked riders, I select 91[^metriche].

| | |
|---|---|
| future professionals identified | **59%** |
| selected riders who will not become professionals | **52%** |

{{< figure
  src="/blog/ciclismo-giovanile-scegliere-chi-seguire/metriche_soglie.webp"
  alt="Bars by category: the share of future professionals identified rises from 32% at thirteen to 59% at eighteen; the share of selected riders who succeed remains low, from 11% to 48%."
  caption="The bars show sensitivity and positive predictive value. Youth cycling studies almost always report the former; no previous study using race results had reported the latter."
>}}

Both are true, and almost always you are quoted only one. Someone defending selection gives you the first: following the top ten per cent catches 44 of 74 future professionals, almost six in ten. Someone attacking it gives you the second: 47 of the 91 chosen riders will not make it.

**No threshold solves the problem.** Widen selection to the top 25% and you identify 82% of future professionals, but the share of selected riders who make it falls to 27%. You catch more than eight in ten of the right riders, alongside almost three times as many who will not succeed. Tighten it and you lose actual future professionals. The columns always move in opposite directions because they describe the same trade-off from opposite sides.

At thirteen it is worse. How much worse? Selecting the top ten per cent of first-year Esordienti identifies **32%** of future professionals; **11%** of those 168 selected riders will make it. Nine in ten of Italy's best thirteen-year-olds will not become professionals, and two in three future professionals are not in that leading group yet.

In the [second instalment](/en/blog/ciclismo-giovanile-a-che-eta-si-riconosce-un-futuro-professionista/) I wrote that there is already something to see at thirteen, and that remains true. The signal exists: selection triples the share who make it, from 3.5% in the entire ranking to 11% among those chosen. Those numbers can help decide whom to follow. They are insufficient for deciding whom to discard.

## Why the criterion is not to blame

The central issue is arithmetic more than statistics, best explained through an example from another field.

Imagine a blood test for a disease affecting three people in a hundred. It is a good test, finding the disease almost whenever it is present. Screen a thousand people: thirty have the disease and nine hundred and seventy do not. If the test flags about a hundred, far fewer than half of those hundred will actually be ill. The test is not poor. Healthy people simply outnumbered sick people thirty-two to one; even a small error rate in a huge group produces more false alarms than true cases.

Selecting young cyclists poses the same problem, with one difference. In screening, someone flagged gets a second test and that is the end of it. In cycling, the youngster not flagged stops being followed.

A better model, algorithm or experienced observer could move the boundary, not remove it. When the outcome affects 3% of the population, producing lists mostly made up of riders who succeed requires very few errors among the many who will not. No measure of youth performance I know comes close. **The outcome's rarity constrains the problem: better measurement does not remove it.**

The practical consequence: ask anyone proposing a selection criterion **how many selected riders make it**, before asking how many future professionals it identifies. The latter is always flattering. The former describes the list you actually have in your hands.

One row looks excellent but is not. Among Under 23s, 93% of riders in the top ten per cent make it. Does selection work brilliantly at that age? It works exactly as before. The group has changed: those still ranked as Under 23s have passed three selections, and professionals make up over a third of the list. Whenever a percentage appears to improve, ask whether the measure improved or the group changed.

*For more detail in the technical document, in Italian: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#se-il-ranking-si-usasse-per-selezionare" target="_blank" rel="noopener">If the ranking were used for selection</a>.*

## What it means in probabilities

Reverse the question. Forget thresholds: what can we say about an individual rider[^qualita]?

| placing at eighteen | professional | at least world top 500 | top 100 |
|---|---|---|---|
| 50th percentile | 1.1% | 0.4% | 0.04% |
| 75th percentile | 10.0% | 4.6% | 0.73% |
| 90th percentile | **30.0%** | **15.8%** | 3.4% |

A rider at the 90th percentile, the lower edge of Italy's top ten per cent, has about a 30% probability of becoming professional. Those higher up have more, which is why almost one in two of the whole top-ten-per-cent group made it: 48%. The first figure is a model prediction at a specific ranking position; the second is what happened across the group. Both are huge relative to average and tiny relative to certainty. Neither promises success nor failure: they suggest between one in three and one in two.

You may also hear a number used to argue the opposite, and should recognise it. Among first-year Esordienti outside the top ten per cent, **97.4%** would not have become professionals anyway. It sounds like proof that discarding them costs nothing. With an outcome this rare, however, almost any criterion produces an enormous figure: even random selection would give 96.5%. The remaining 2.6% includes 40 of the ranking's 59 future professionals, two in three. This is negative predictive value, reassuring exactly where it should not be.

## When it happens, and why remaining ranked matters

Clubs also face a timing question: how long is it worth waiting?

Nobody turns professional before nineteen[^sopravvivenza]. This is a rule rather than a finding: it is not allowed. The hazard then rises to twenty-one and stays around seven to eight transitions per thousand riders, peaking at **23**, the last age I can follow. I stop observing it afterwards, which does not mean it falls: beyond Under 23 there is no youth ranking to measure performance. The door does not close there. The cohorts studied include 10 transitions after twenty-three, against 121 observed up to that age.

{{< figure
  src="/blog/ciclismo-giovanile-scegliere-chi-seguire/sopravvivenza_hazard.webp"
  alt="Two hazard curves from nineteen to twenty-three, rising and remaining high at the final three ages."
  caption="Before nineteen the hazard is zero by rule; from twenty-one it stays high to the final observed age. The curve ends at twenty-three because the youth ranking ends there; transitions continue."
>}}

One coefficient dominates the model of this process and concerns remaining ranked more than performance: a rider unranked the previous year has a twentyfold lower hazard of turning professional than someone ranked. Interpret it cautiously. As explained in the [first instalment](/en/blog/ciclismo-giovanile-di-chi-stiamo-parlando/), leaving a ranking does not mean quitting. The coefficient therefore largely measures the difficulty of returning after leaving the observed group. Another figure makes it less dramatic: in **87.4%** of at-risk seasons, the rider was unranked the previous year. Among Under 23s, absence is normal.

For those present every year, estimated probabilities are **11.1%** with average ranking performance, 30.9% twenty percentile points higher and 3.7% twenty lower.

*For more detail in the technical document, in Italian: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#quando-si-diventa-professionisti" target="_blank" rel="noopener">When riders become professionals</a> and <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#cosa-sposta-il-rischio" target="_blank" rel="noopener">What shifts the hazard</a>.*

## Beyond the doorway, the ranking cannot see

One final question remains, with the clearest answer in the series.

So far I have treated professional status as a doorway: in or out. But professionals range from riders spending three seasons in a second-division team to the world's top hundred. Does an eighteen-year-old's placing say anything about that too[^qualita]?

| | odds multiplier for ten additional percentile points |
|---|---|
| becoming professional | **×2.47** |
| reaching the top 500, **among professionals** | ×1.20 *(indistinguishable from chance)* |
| reaching the top 100, **among the top 500** | ×1.28 *(indistinguishable from chance)* |

{{< figure
  src="/blog/ciclismo-giovanile-scegliere-chi-seguire/qualita_catena.webp"
  alt="Three rising, almost parallel curves: at the 90th percentile, a 30% probability of turning professional, 15.8% of reaching the top 500 and 3.4% of reaching the top 100."
  caption="The highest step rests on fifteen riders. The curves say no effect is detectable; saying there is no effect would be a different claim."
>}}

Italy's youth ranking predicts entry well. Beyond that, the data show no association distinguishable from chance. Wording matters because the wrong claim is only a step away. The data do not say talent ceases to matter among professionals. They say whatever the youth ranking knows about it is too little to detect with these numbers. The highest step rests on fifteen riders.

<!-- DA COMPLETARE: da chi mi e' stata proposta l'osservazione, se vuoi citarlo -->

There is a partial explanation, suggested to me by someone else's observation. Italian professional teams need Italian riders, so the best domestic juniors form their recruitment pool: perhaps the ranking predicts entry simply by ordering that pool well. Separate riders debuting for predominantly Italian teams from those debuting abroad, and percentile predicts both almost identically, 0.863 against 0.867. The strong version therefore fails. But the doors do not lead to the same destination: **33%** of Italian-team entrants reach the top 500, against **59%** of foreign-team entrants, and 60% enter through the first door. ‘Becoming professional’ therefore combines two different events, partly explaining what the ranking cannot predict. One unresolved caution: the difference may reflect who chooses the door rather than the door itself, because already stronger riders tend to go abroad.

*For more detail in the technical document, in Italian: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#non-solo-se-si-arriva-ma-fino-a-dove" target="_blank" rel="noopener">Not just making it, but how far</a>, <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#la-catena-delle-probabilit%C3%A0" target="_blank" rel="noopener">The chain of probabilities</a> and <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#da-quale-porta-si-entra" target="_blank" rel="noopener">Which doorway riders enter through</a>.*

## Girls, within what we can say

The question I have been asked most is why the study concerns boys alone. The honest answer is that this was not a judgement about importance: I had not collected women's career outcomes, and without knowing who made it, the question behind the series cannot be answered.

Many questions do not require knowing who made it, however, and women's cycling can be studied perfectly well on those. Rider numbers, race counts, ranking structure and entry can all be measured through rankings and demographics.

Two have already appeared alongside the corresponding male findings, where they mean something: the female Esordienti rule change in the [first instalment](/en/blog/ciclismo-giovanile-di-chi-stiamo-parlando/) and birth month in the [second](/en/blog/ciclismo-giovanile-a-che-eta-si-riconosce-un-futuro-professionista/). What remains here concerns women's cycling itself.

The population is smaller than one might think and, above all, races much less. There are **864** female Esordienti against 6,356 boys, about a seventh. The [second instalment](/en/blog/ciclismo-giovanile-a-che-eta-si-riconosce-un-futuro-professionista/) counted 874 because that comparison used the male–female comparison window; here it is all usable seasons. By juniors the ratio is one to ten. In the comparable Allievi and junior categories, women's races are on average **six to eight times fewer** across seasons[^ragazze]. There are few riders, and they race much less often. The category supplying almost all useful information in men's cycling is also absent: no women's Under 23 ranking existed during the study period.

One thing does not change, though I expected it would: ranking shape. The top ten per cent collect 41–44% of women's points and 40–45% of men's, category by category[^ragazze]. Rider numbers, race numbers and list structure differ. Point concentration remains the same.

The reason I cannot describe outcomes changed while I was writing. I downloaded them: **51 Italian women** appear in first- and second-division teams between 2020 and 2025. The problem is different and cannot be solved by downloading more: women's professional divisions are very recent, the first dating from 2020 and the second from 2025. Before 2020 there was a single category, so ‘professional’, as defined for men here, cannot be defined identically for women. A study is possible, but it would be a different study on far fewer people, and should be designed as such rather than presented as the same work.

*For more detail in the technical document, in Italian: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#le-ragazze" target="_blank" rel="noopener">Girls</a> and <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#le-cose-che-non-cambiano" target="_blank" rel="noopener">What does not change</a>.*

## How much you can trust all this

Every study should face this question, and almost nobody asks it. A model measured on its own training data judges itself, and judges generously.

First check: is the model fooling itself? I rebuild it **500 times** on randomly drawn samples, measuring its self-overestimation each time. The answer is **0.001** in discrimination, against a conventional alarm threshold fifty times larger[^validazione]. This is not luck: the models have two or three parameters, with dozens of professionals per parameter, leaving little room to fit noise.

Second: does it work on riders it has never seen? I train on older cohorts and test on newer ones, as one would use it in practice. Discrimination does not fall and, if anything, rises, although the test cohorts contain only 27 cases.

Third, and most importantly: several study decisions were defensible but not inevitable, including what counts as professional, the age window and the threshold for the top group. I changed them all, one at a time. Depending on the professional definition, the number of professionals ranges **from 26 to 151**, while discrimination varies by **0.069**, seven hundredths[^sensibilita]. Moving the age window changes almost nothing, because almost all transitions happen earlier. Definitions therefore change enormously who counts as successful, and barely change how well youth performance distinguishes them.

Another check is not statistical but matters just as much. The study depends on recognising that a youngster in an Italian ranking and a rider in an international archive are the same person. I have **727** such links, **707 exact on name and full date of birth**. I checked the remaining twenty individually, looking only at names and dates, never careers, to avoid being influenced by outcomes. In doing so I corrected **18 birth dates**[^provenienza].

Finally, what I cannot know. No source publishes height, weight, specialism, training or races entered: I know where each rider finished, not how they got there. Foreign results enter the ranking only if riders report them; track races are excluded, as are riders registered with foreign clubs. The regional denominator is missing. Every conclusion therefore holds conditional on what the ranking records, far less than a coach sees from the roadside.

*For more detail in the technical document, in Italian: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#quanto-regge-tutto-questo" target="_blank" rel="noopener">How robust all this is</a> and <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#quanti-professionisti-e-perch%C3%A9-i-conteggi-non-coincidono" target="_blank" rel="noopener">How many professionals, and why the counts differ</a>.*

## What changes, depending on your role

**If you run a youth club.** Your problem is keeping youngsters riding long enough to see who makes it; guessing early matters much less. Category transitions are critical: a rider doing exactly what they should suddenly loses positive feedback, because first-year riders in a combined ranking take just over a quarter of point-scoring places. Knowing this lets you explain it before it happens rather than afterwards.

**If you coach.** Results matter, from the beginning. Direction matters too, provided the level is there, particularly downwards: among strong riders, those declining made it six times less often than those keeping pace. Leaving the ranking is not a final rejection: almost a third of those who disappear return.

**If you are a parent.** There is no rush. Nobody becomes professional before nineteen; the transition generally occurs between twenty-one and twenty-three. Everything earlier is preparation; the verdict comes later. If your child is in Italy's top ten per cent at eighteen, almost one in two in that group became professional, while someone at its lower edge has about a one-in-three chance. Huge relative to average, far short of a promise. These are group frequencies; your child's probability is a different matter.

**If you select a representative team.** Up to eighteen, whatever threshold you choose, most selected riders will not make it: just over half in the best case, nine in ten at thirteen. Use the criterion to decide whom to watch, not whom to exclude. Selecting at thirteen also partly selects January births: checking birth date alongside placing costs nothing.

**For everyone.** Be wary of spectacular gradients. Before believing a variable explains something, ask what it took to reach its highest cell.

## What remains

Imagine a thirteen-year-old who has just won his first race. What can we tell him?

That the result really says something, and pretending otherwise would be dishonest. That nine times in ten it will not be enough, because of the structure of the problem, not because of anything it tells us about him. That understanding will take six or seven years, and meanwhile disappearing from a ranking means almost nothing.

And that the most important thing these data say concerns somebody else: the person looking at that same ranking and deciding to stop watching him.

---

> **How we know**
>
> The two columns juxtaposed here are sensitivity, the share of future professionals selected, and positive predictive value, the share of selected riders who make it. No previous race-results study in youth cycling had reported the latter.
>
> The timing model uses discrete-time survival analysis, with one row for every season in which a rider could become professional but had not yet done so. Riders who have not completed the window contribute observed seasons without being counted as failures; standard errors are clustered by rider.
>
> Percentile-specific probabilities are model predictions, not observed frequencies, and should be read as orders of magnitude.
>
> Every number in this series can be regenerated with one command. The complete technical document, with methods, confidence intervals and limitations section by section, is public alongside its code: <https://github.com/lucabnt/ciclismo-giovanile-vs-pro>. The posts are written manually, which is why each figure in them is checked against the results archive before publication.

[^metriche]: Calculated in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/19_metriche.R" target="_blank" rel="noopener">R/19_metriche.R</a>, rendered by <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/report/moduli/metriche.py" target="_blank" rel="noopener">report/moduli/metriche.py</a>.

[^qualita]: Ordinal model and stage chain in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/22_qualita_carriera.R" target="_blank" rel="noopener">R/22_qualita_carriera.R</a>; entry-route comparison in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/report/moduli/porta.py" target="_blank" rel="noopener">report/moduli/porta.py</a>.

[^sopravvivenza]: Survival model in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/20_sopravvivenza.R" target="_blank" rel="noopener">R/20_sopravvivenza.R</a>.

[^ragazze]: Calculated in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/report/moduli/ragazze.py" target="_blank" rel="noopener">report/moduli/ragazze.py</a>.

[^validazione]: Optimism correction and temporal validation in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/24_validazione.R" target="_blank" rel="noopener">R/24_validazione.R</a>.

[^sensibilita]: Sensitivity analysis in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/scripts/10_sensibilita.py" target="_blank" rel="noopener">scripts/10_sensibilita.py</a>.

[^provenienza]: Match counts in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/report/moduli/provenienza.py" target="_blank" rel="noopener">report/moduli/provenienza.py</a>; procedure in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/scripts/05_match_pcs.py" target="_blank" rel="noopener">scripts/05_match_pcs.py</a>.
