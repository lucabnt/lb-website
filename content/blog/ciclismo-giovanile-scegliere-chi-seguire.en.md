---
title: "Choosing whom to follow in youth cycling"
description: "Following the top ten per cent at eighteen identifies 59% of future professionals. But how many riders do we leave out, and how many of those selected will actually make it?"
date: 2026-11-14T10:00:00+02:00
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

*The last of four instalments. In the [previous instalments](/en/series/ciclismo-giovanile-e-professionismo/) we saw how well youth results help distinguish future professionals, [from what age](/en/blog/ciclismo-giovanile-a-che-eta-si-riconosce-un-futuro-professionista/) and [how much improvement matters](/en/blog/ciclismo-giovanile-conta-di-piu-quanto-vai-forte-o-quanto-migliori/). Now we try using them to choose whom to follow: how many future professionals do we find, how many do we leave out, and how many selected riders will actually make it? Finally, we consider how much we can trust these findings.*

Take 901 riders in the second-year junior ranking, at eighteen. We decide to follow the top ten per cent: **91 names**.[^metriche] In later years, **44** of those 91 **become professionals** and 47 do not. Another **30 future professionals were outside the list**.

We have identified **59% of the future professionals** in that ranking. Among the selected riders, **48%** made it. These are two different ways to assess the same list, and we need both.

{{< figure
  src="/blog/ciclismo-giovanile-scegliere-chi-seguire/metriche_soglie.webp"
  alt="Bars by category: the share of future professionals identified rises from 32% at thirteen to 59% at eighteen; the share of selected riders who succeed remains low, from 11% to 48%."
  caption="The bars answer two questions: how many future professionals do we find, and how many selected riders will make it? These are sensitivity and positive predictive value."
>}}

If we look only at how many future professionals we found, the list seems effective. If we look at how many selected riders will make it, the uncertainty becomes clear. And the thirty left out show the cost of using that same list to decide whom to stop following.

**Changing the threshold changes the trade-off, but does not remove it**. If we widen selection to the top 25%, we find 82% of future professionals, but only 27% of selected riders make it. We include more riders who will become professionals, alongside many others who will not.

Narrowing the list lets us focus on a more promising group, but leaves out other future professionals. We therefore also need to judge the threshold by its consequences for excluded riders.

At thirteen the uncertainty is greater still. Selecting the top ten per cent of the ranking identifies **32%** of the future professionals in that list. Of the 168 selected riders, **11%** become professionals. Around nine in ten selected riders do not make it. At the same time, we leave out around two thirds of the ranking's future professionals.

In the [second instalment](/en/blog/ciclismo-giovanile-a-che-eta-si-riconosce-un-futuro-professionista/) we saw that placings at thirteen already carry information about the future. We see it here too: the share of professionals among selected riders is roughly three times that of the full ranking, **11% against 3.5%**. The criterion can therefore help focus our attention. On its own, however, it does not justify a decision to stop following everyone else.

## A rare outcome

Becoming professional is a rare outcome. In the study's main cohorts, it concerns **around three riders in a hundred** among those who appeared in a ranking at least once.

This makes it difficult to build a reliable list: riders who will not make it are far more numerous, and even a useful criterion can include many of them. In the eighteen-year-old example, the starting group is already more selected, yet the uncertainty remains visible: 44 make it, 47 do not.

A better criterion might reduce errors. To assess it, however, we need to count them **in both directions**: selected riders who will not make it, and future professionals left out.

When assessing a selection criterion, we should therefore ask both questions: **how many future professionals does it identify**, and **how many selected riders make it**? The first describes whom we manage to find; the second describes the list we will work with.

Among Under 23s we find a very different result: **93%** of riders selected from the top ten per cent make it. That is a high proportion, but it concerns an already highly selected group in which professionals account for over a third of the list. We cannot attribute the entire difference to a more effective criterion, because the population to which we apply it has also changed.

*For more detail in the technical document, in Italian: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#se-il-ranking-si-usasse-per-selezionare" target="_blank" rel="noopener">If the ranking were used for selection</a>.*

## What it means in probabilities

Let us set thresholds aside for a moment. What probability does the model associate with a particular ranking position at eighteen? We can estimate it from the available data, but the estimate does not include everything we know about an individual rider.[^qualita]

| placing at eighteen | professional | at least world top 500 | top 100 |
|---|---|---|---|
| 50th percentile | 1.1% | 0.4% | 0.04% |
| 75th percentile | 10.0% | 4.6% | 0.73% |
| 90th percentile | **30.0%** | **15.8%** | 3.4% |

At the 90th percentile, the lower edge of the top ten per cent of the ranking, the model estimates about a **30%** probability of becoming professional. Across the whole top ten per cent, however, **48%** of riders made it. That group also includes riders ranked higher, for whom the model estimates greater probabilities. We should keep the figures separate: 30% is a prediction for one ranking position; 48% is the observed frequency in a group. Both show how promising the result is, and how uncertain it remains.

Let us also look at excluded riders. Among thirteen-year-olds outside the top ten per cent, **97.4%** did not become professionals. This might seem to confirm that excluding them loses little. But the outcome is so rare that random selection would yield a similar figure, 96.5%. The remaining 2.6% of excluded riders includes 40 of the ranking's 59 future professionals: around two in three. The 97.4% is the negative predictive value. Read alone, it reassures; alongside the number of future professionals left out, it describes a much less straightforward decision.

## When it happens, and why remaining ranked matters

Clubs also face a timing question: how long is it worth waiting?

Nobody turns professional before nineteen.[^sopravvivenza] This is a rule rather than a finding: it is not allowed. The hazard then rises to twenty-one and stays around seven to eight transitions per thousand riders, peaking at **23**, the last age observed in this analysis. The curve ends because observation ends there, not because transitions to professional racing stop: beyond Under 23, there is no youth ranking from which to measure performance. Nor does the door close there. The cohorts studied include 10 transitions after twenty-three, against 121 observed up to that age.

{{< figure
  src="/blog/ciclismo-giovanile-scegliere-chi-seguire/sopravvivenza_hazard.webp"
  alt="Two hazard curves from nineteen to twenty-three, rising and remaining high at the final three ages."
  caption="Before nineteen the hazard is zero by rule; from twenty-one it stays high to the final observed age. The curve ends at twenty-three because the youth ranking ends there; transitions continue."
>}}

In the model, riders unranked the previous year have a much lower probability of turning professional than those who were ranked. It is a strong association, but it does not tell us why a rider was absent or what effect helping him return would have. As we saw in the [first instalment](/en/blog/ciclismo-giovanile-di-chi-stiamo-parlando/), disappearing from a ranking does not necessarily mean quitting. Moreover, in **87.4%** of seasons when a rider was at risk of turning professional, he was unranked the previous year: absence is therefore very common.

*For more detail in the technical document, in Italian: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#quando-si-diventa-professionisti" target="_blank" rel="noopener">When riders become professionals</a> and <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#cosa-sposta-il-rischio" target="_blank" rel="noopener">What shifts the hazard</a>.*

## How far do riders go?

So far we have distinguished riders who became professionals from those who did not. But professionals have very different careers: does youth ranking position also help us understand how far they will go?[^qualita]

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

Youth ranking position distinguishes riders who will become professionals. Among those who made it, however, we find no clear association with subsequently reaching the world's top five hundred or top hundred. We cannot conclude that ranking position no longer matters: the numbers may be too small to show it, given that the group reaching the top hundred contains only fifteen riders.

We can also consider a market-related hypothesis. Italy might remain an attractive market for Italian and foreign teams, and having Italian riders might carry value beyond results. The national ranking could therefore also describe a recruitment pool from which teams choose, as well as measuring youth performance.

The data let us test only part of this hypothesis: we distinguish riders debuting for a team with a majority of Italian riders from those debuting for a foreign team. Youth ranking position distinguishes future professionals in the two groups almost equally well: **0.863 against 0.867** in discrimination. The association therefore does not seem limited to entry into teams with a majority of Italian riders. This comparison does not, however, directly measure the commercial value of nationality or teams' interest in the Italian market.

Subsequent pathways differ: **33%** of riders debuting for a team with a majority of Italian riders reach the world's top five hundred, compared with **59%** of those debuting for a foreign team. 60% of professionals enter through the first group. The same definition of ‘professional’ therefore covers different pathways. We cannot attribute the difference to the debut team: it could also reflect the characteristics of the riders who join it.

*For more detail in the technical document, in Italian: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#non-solo-se-si-arriva-ma-fino-a-dove" target="_blank" rel="noopener">Not just making it, but how far</a>, <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#la-catena-delle-probabilit%C3%A0" target="_blank" rel="noopener">The chain of probabilities</a> and <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#da-quale-porta-si-entra" target="_blank" rel="noopener">Which doorway riders enter through</a>.*

## Girls: what we can say

For girls, we can describe rankings and compare some of their features with boys' rankings. We cannot directly transfer the estimates for the transition to professional racing.

The Esordienti rankings contain **864 girls, against 6,356 boys**;[^ragazze] by the junior category, the ratio falls to around one in ten. Where comparison is possible, among Allievi and juniors, the women's calendar has between a sixth and an eighth as many races as the men's. There was also no women's Under 23 ranking during the study period.

We do find a similarity: the top ten per cent collect a very similar share of points in both populations, **41–44% among girls** and **40–45% among boys**. Numbers and racing opportunities differ, but point concentration remains similar.

We have already seen two other comparisons in earlier instalments: [separate Esordienti rankings in the first](/en/blog/ciclismo-giovanile-di-chi-stiamo-parlando/) and [the influence of birth month in the second](/en/blog/ciclismo-giovanile-a-che-eta-si-riconosce-un-futuro-professionista/). The collected data also include career outcomes for **51 Italian women** in first- and second-division teams between 2020 and 2025. Women's professional categories have a different, more recent history, however: applying the definition used for men would not produce an equivalent comparison. Studying those pathways requires a dedicated analysis.

*For more detail in the technical document, in Italian: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#le-ragazze" target="_blank" rel="noopener">Girls</a> and <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#le-cose-che-non-cambiano" target="_blank" rel="noopener">What does not change</a>.*

## How much can we trust these results?

A model can appear more effective when we assess it on the same data used to build it. That is why further checks are needed.

The first concerns this potential overestimation. Repeating the procedure on **500 samples**, we find a very small difference: **0.001** in discrimination.[^validazione] This is reassuring, without guaranteeing that the model will work equally well in every other context.

The second check concerns riders the model has never seen. We build it on older cohorts and assess it on newer ones. Discrimination does not fall, but the check involves only **27 professionals**: this finding also calls for caution.

Finally, we change some study choices one at a time: the definition of professional status, the age window and ranking thresholds. The number of professionals ranges from 26 to 151, while discrimination varies by **0.069**.[^sensibilita] Who counts as having made it changes substantially; how well youth performance distinguishes them remains more stable.

Some information is unavailable from these sources: height, weight, specialism, training and the number of races ridden. We know the recorded placings, but not the entire pathway behind them. Every conclusion is therefore limited to what the ranking records, which is far less than a coach can observe from the roadside.

*For more detail in the technical document, in Italian: <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#quanto-regge-tutto-questo" target="_blank" rel="noopener">How robust all this is</a> and <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/output/analisi.md#quanti-professionisti-e-perch%C3%A9-i-conteggi-non-coincidono" target="_blank" rel="noopener">How many professionals, and why the counts differ</a>.*

## What changes, depending on our role

**For youth clubs.** We can help riders navigate category transitions without treating every drop in results as poorer performance. In their first Allievi year, for example, riders take just over a quarter of point-scoring places while also racing older opponents. Explaining this change beforehand can prevent unrealistic expectations.

**For coaches.** We should consider level together with the direction of development. Among high-level riders, the lowest improvement band had far fewer transitions to professional racing. This calls for a closer look, rather than rejection: the ranking alone does not explain a decline.

**For parents.** A good youth result deserves attention, but is not a promise. Almost one in two riders in the top ten per cent of the ranking at eighteen became professionals. That is a group frequency, not a complete prediction of a child's future.

**For selectors.** We should ask how many future professionals we find, how many we leave out, and what will happen to excluded riders. The results support using rankings to guide observation; they call for greater caution when we use them to stop observing. At younger ages we should also consider birth month.

**For everyone.** When a percentage seems to provide a definitive answer, we should also look at how it was calculated: whom it includes, whom it leaves out, and how many riders it is based on. A number that helps describe a group may not be enough to decide an individual rider's future.

## What remains

A thirteen-year-old has just won his first race. We can recognise the value of that achievement: it tells us something about his current abilities and, in the data, has a connection with the future.

Understanding how far he will go will take more seasons and information a ranking does not contain. A period without points alone is not enough to declare his development over.

These numbers call for care above all from us as adults, when a ranking leads us to decide whom to keep following and whom to lose sight of.

---

> **How we know**
>
> The two measures presented together are sensitivity, the share of future professionals included in the selection, and positive predictive value, the share of selected riders who will make it. In the materials consulted for the review of race-results studies, we have not found an explicit measure of the latter.
>
> The timing model is a discrete-time survival model, with one row per season in which a rider could turn professional and had not yet done so. Riders who have not completed the observation window contribute their observed seasons without being counted as a ‘no’, and standard errors are clustered by rider.
>
> Percentile probabilities are model predictions rather than observed frequencies, so they should be read as approximate estimates.
>
> There are 727 links between youth rankings and the international archive: 707 match on name and full date of birth. The other twenty were checked individually using names and dates, without considering career outcomes. The check led to 18 corrected dates of birth.[^provenienza]
>
> Every number in this series can be regenerated with one command. The full technical document, including methods, confidence intervals and limitations for each section, is public alongside the code that produces it: <https://github.com/lucabnt/ciclismo-giovanile-vs-pro>. The posts are written by hand, which is why every figure in them is checked against the results archive before publication.

[^metriche]: Calculated in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/19_metriche.R" target="_blank" rel="noopener">R/19_metriche.R</a>, rendered by <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/report/moduli/metriche.py" target="_blank" rel="noopener">report/moduli/metriche.py</a>.

[^qualita]: Ordinal model and stage chain in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/22_qualita_carriera.R" target="_blank" rel="noopener">R/22_qualita_carriera.R</a>; entry-route comparison in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/report/moduli/porta.py" target="_blank" rel="noopener">report/moduli/porta.py</a>.

[^sopravvivenza]: Survival model in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/20_sopravvivenza.R" target="_blank" rel="noopener">R/20_sopravvivenza.R</a>.

[^ragazze]: Calculated in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/report/moduli/ragazze.py" target="_blank" rel="noopener">report/moduli/ragazze.py</a>.

[^validazione]: Optimism correction and temporal validation in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/R/24_validazione.R" target="_blank" rel="noopener">R/24_validazione.R</a>.

[^sensibilita]: Sensitivity analysis in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/scripts/10_sensibilita.py" target="_blank" rel="noopener">scripts/10_sensibilita.py</a>.

[^provenienza]: Match counts in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/report/moduli/provenienza.py" target="_blank" rel="noopener">report/moduli/provenienza.py</a>; procedure in <a href="https://github.com/lucabnt/ciclismo-giovanile-vs-pro/blob/main/scripts/05_match_pcs.py" target="_blank" rel="noopener">scripts/05_match_pcs.py</a>.
