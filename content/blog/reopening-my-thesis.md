---
title: "I Asked an AI to Review My Thesis. It Found Nothing New, Then Found Everything"
description: "A reanalysis of my 2023 thesis on mobile app store downloads, three years later: what changed, what three mistakes I found, and what an AI-assisted second look could and couldn't catch."
date: 2026-09-13T10:00:00+02:00
draft: true
series: ["The Download Decision"]
series_weight: 2
tags: ["app store", "mobile app", "software", "eng"]
author: "lb"
showToc: true
TocOpen: false
# COPERTINA (nessun file ancora caricato). Un candidato forte è la curva di
# specificazione (fig_04, sotto): è l'immagine più "di impatto" del post,
# riassume da sola l'idea centrale (una conclusione che appare solo in un
# angolo del grafico è una scelta, non un risultato). Togliere il commento
# quando il file esiste, in static/blog/reopening-my-thesis/.
# cover:
#     image: blog/reopening-my-thesis/nome-file.webp
#     alt: "..."
#     relative: true
---

This whole project started from a question that has nothing to do with app stores. When I wrote the thesis it revisits, my university's policy on generative AI was simple: don't. Large language models were brand new as a public product (ChatGPT had been out for about two months), and a rule against using them in a thesis felt uncontroversial enough that nobody really argued about it.

Three years is not a long time, and the same rule now reads as almost impossible to enforce, and stranger to justify. It has become hard to find a student who *isn't* using some form of AI assistance to write a thesis, and harder still to make the case that they shouldn't. That reversal (not the app store literature) is what sent me back to reopen my own thesis this year: not to rewrite it, but to see what a second, more skeptical pass could find in work I had trusted untouched for three years.

*Every figure and every number below is produced by a script in the [review repository](https://github.com/lucabnt/mobile-app-download-determinants-update).*

In February 2023 I submitted a thesis on a narrow question: when someone lands on an app's product page in a store, which element of that page makes them decide to install it? I tested three of them, the **average review rating**, the **number of downloads**, and the **developer's brand**, carried by the app name, the icon and the developer's own name. I manipulated screenshots of a real Play Store page: each element exists in two versions, a strong one and a weak one, and every respondent saw three pages (one per element, in a random order, showing one of the two versions drawn at random). Nobody saw both versions of the same element. Then I measured what the literature calls intention to download.

The answer I published was that the developer's brand is the most decisive element. Reputation comes second. Popularity does essentially nothing.

This year I reopened the files. The data survived the scrutiny: the randomization worked, there are no missing values, and every regression in the thesis reproduces to four decimal places. The analysis did not. I made three mistakes, and none of them was in the data, they were in what I did with it.

## Mistake One: When Three Regressions Can't Be a Comparison

The headline finding came from placing three coefficients side by side: 1.53 for brand, 0.50 for reputation, 0.36 for popularity. Brand is visibly the largest. Case closed.

Except that those three numbers came from three *different* regressions, estimated on three *different* groups of respondents. Nowhere in the thesis is there a test of whether 1.53 differs from 0.50. I looked at them and concluded.

So I ran the test I should have run. One model, all 1,473 answers, with a proper adjustment for the fact that each person answered three times:

| Element | Effect on intention to download (1–7 scale) | 95% CI |
|---|---|---|
| Developer's brand | **+1.05** | 0.81 to 1.29 |
| Reputation (rating) | **+0.84** | 0.60 to 1.08 |
| Popularity (downloads) | +0.22 | −0.02 to 0.46 |

Brand and reputation are **not distinguishable** (p = 0.22). Both clearly beat popularity. My three-step hierarchy is really two steps.

The interesting part is what the fragmentation cost. Splitting one sample into nine subsamples threw away most of the statistical power I had collected, and reputation's effect rose by two thirds, from 0.50 to 0.84, once it was estimated from all 491 answers rather than 149.

{{< figure
  src="fig_05_pooling_gain.webp"
  alt="Two dot-and-whisker plots comparing the same three effects estimated two ways: hollow points from separate small subsamples, solid points from one pooled model. The pooled estimates are tighter and reputation shifts noticeably higher."
  caption="The same question asked two ways. Hollow points are the thesis estimates, each from its own subsample; solid points use all the data at once. Reputation rises by two thirds; brand moves the other way."
>}}

To be sure this was not simply my new favourite model talking, I re-ran the comparison every defensible way: 24 combinations of sample, model type and controls, one of which failed to converge and was dropped. Brand comes out ahead in 4 of the remaining 23. The original conclusion was not a finding about apps. It was an artefact of an analytical choice.

{{< figure
  src="fig_04_specification_curve.webp"
  alt="A specification curve: dozens of point estimates for the same comparison, one per analytical choice, sorted by size. Almost all of them show brand and reputation as indistinguishable; brand only wins at one edge of the curve."
  caption="Every defensible specification of the same comparison. If a conclusion only appears in a corner of this picture, it is a choice, not a result."
>}}

## Mistake Two: My "Manipulation Check" Was Not One

The result people quoted back to me was the counter-intuitive one: download counts do not matter. In a market where everybody watches install numbers, that is an enjoyable thing to say.

I no longer believe the data supports it, for two reasons: one I should have caught in 2022, and one I did catch and did not follow through.

The first is embarrassing. I went back to the stimulus images themselves. The low-popularity version of the app displays **10,000+ downloads alongside 84,000 reviews**. More reviews than downloads. It is impossible, and the review count was held constant across the two conditions, so the defect sits entirely in the weak version, precisely the one that had to carry the comparison.

The second is subtler, and it is a problem of labelling rather than of analysis. The thesis reports, model by model, a *manipulation check*: the share of respondents who confirmed they had noticed each element. What I actually asked, once, at the very end, was *which factors did you take into consideration?*, with nine boxes to tick. That is not a check that the manipulation registered. It is people reporting, after the fact, what they believe they did.

I knew this at the time, the thesis calls the question "a compromise (and not ideal) version," and the decision that followed was deliberate: measure it, report it, and condition nothing on it. That decision was right, and I would make it again. What I failed to do was state the consequence. A study whose only perception measure is a post-treatment self-report has no verification that the manipulation was seen at all, and the word *check*, repeated in nine tables, quietly suggests that it does.

The consequence lands on popularity, because that is where a perception check would have mattered most. Among the 60% who ticked "number of downloads", the popularity effect more than doubles, to +0.51, and becomes significant. I report that as an illustration and not as a correction: the comparison is close to circular, since people moved by download counts are more likely to say they looked at them. Between a broken stimulus and an unverifiable measure of attention, the null had less support than I gave it credit for.

So what is the honest answer? Before looking, I fixed the smallest effect that would matter in practice. Every reasonable way of deriving it lands between 0.26 and 0.33 scale points. Measured against that bar:

- **before comparison**, when a respondent sees one app and nothing else, popularity does work: +0.46, and that one is real;
- **after** they have seen other apps, the effect is +0.06, sitting exactly on the boundary of what this study can resolve. I cannot separate "nothing" from "too small to matter".

{{< figure
  src="fig_07_equivalence.webp"
  alt="An equivalence-test plot: confidence intervals for the popularity effect before and after comparison, against a shaded band marking the zone too small to matter in practice. The 'after' interval straddles the edge of the band."
  caption="Which null results are really null. The shaded band is the zone of practical irrelevance, fixed before the tests were run. An interval far wider than the band means the study could not see, not that there was nothing to see."
>}}

"Download counts do not matter" was too strong. "Download counts are the cue you fall back on when you have nothing else to go on" fits everything I can observe.

## Mistake Three: Silence Isn't Evidence

The thesis concludes that there is no interaction between the three elements (a strong rating does not amplify a strong brand, and so on). That is true in the sense that nothing came out significant.

It is also empty. Running the numbers, my design could only have detected an interaction larger than roughly 1.3 points on the 7-point scale, about 0.9 standard deviations. Real interactions in this literature are fractions of the main effects, which here range from 0.2 to 1.0. I was searching for something my instrument could not see, and reporting the silence as evidence.

The same applies to two moderation results on which I built managerial advice. Neither replicates, and neither can be ruled out either. Of the 81 coefficients I estimated across nine regressions, exactly **two** survive a correction for having run that many tests. Both are the brand effect.

## What Holds Up and One Thing That Is New

**Brand and reputation are equally powerful, and interchangeable only on average.** Split by position in the sequence, the picture is sharper than anything I originally claimed:

| | Shown first | Shown after other apps |
|---|---|---|
| Developer's brand | **+1.41** | +0.90 |
| Reputation | +0.69 | **+0.91** |
| Popularity | +0.46 | +0.06 |

{{< figure
  src="fig_06_by_position.webp"
  alt="Two panels of dot-and-whisker plots, one for apps shown first and one for apps shown after others. Brand leads by a wide margin when shown first; reputation catches up and overtakes it when shown later."
  caption="The ranking depends on where the app appears in the sequence. Brand dominates the first app seen and fades; reputation holds steady and overtakes it."
>}}

Brand dominates when there is nothing to compare against. Once a user has seen alternatives, the two converge completely. Stated as a probability: the brand leads reputation with 99% probability before comparison, and 51% after, a coin toss.

{{< figure
  src="fig_13_posterior.webp"
  alt="Overlapping probability density curves for the plausible size of each effect. The brand and reputation curves overlap heavily; the popularity curve sits further to the left with less overlap."
  caption="How large each effect plausibly is, given the data. Where two curves overlap, the data cannot tell the two elements apart, which is what “not distinguishable” looks like."
>}}

There is a practical reading. A strong brand is worth most in the moment when the user is not shopping around: a link from a search result, an advertisement, a recommendation. Ratings earn their keep in the browse-and-compare context, where the user is actively collecting information. For a new entrant this is better news than it sounds. You cannot buy Adobe's brand, but you can be the app that survives the comparison.

And one genuinely new finding, which I had predicted in writing would fail before I ran it: **respondents differ a great deal in how much any of this moves them**, and the difference is systematic. The people most inclined to download things in general are the *least* moved by what the listing shows (correlation −0.61). The cues do their work on the undecided. An average effect across everybody conceals that entirely.

{{< figure
  src="fig_08_heterogeneity.webp"
  alt="A scatter plot with one dot per respondent, baseline enthusiasm for downloading on one axis and sensitivity to the page elements on the other, showing a clear downward trend."
  caption="Each dot is one respondent (their baseline enthusiasm against how much the page elements move them). The cues work on the undecided. The points are model predictions, pulled towards the average where a respondent gives little information."
>}}

## Four Things I Checked That Changed Nothing

A reanalysis is only worth as much as the checks that could have embarrassed it. Four of them did not.

Respondents do not treat a 1–7 scale as a ruler. The step into the top category is nearly twice the step into the third, because people avoid the ends of a scale. Re-estimating everything without assuming even spacing moves the effects by 0.8 to 3.1 percentage points and leaves the ranking untouched.

The effects do not depend measurably on who is answering (not on age, gender, education or occupation). Students respond to reputation roughly twice as strongly as employed respondents, which is a tidy story that does not pass its own test; with 69% students in the sample, it could not have passed.

And removing the 33 respondents who rushed or gave a single answer to an entire scale moves every effect slightly upwards, as removing noise should, and changes nothing else.

The figures in the thesis are not drawn on the raw 1–7 answers but on a mean-centred version of them, one constant subtracted per element. Subtracting a constant per group is harmless as long as the model already knows which group it is looking at, and mine did: re-estimating everything on the raw answers moves no coefficient by more than 0.00000000005. It does cost the reader something, the *heights* of the three lines in my figure are then not comparable, only their slopes are, and in four of six panels the centred version ranks the three elements differently from the raw one. What I read off that figure was a slope, so the conclusion survives. The centring that would have mattered in a repeated-measures design is by respondent rather than by element, and that one cannot be done by subtracting a mean at all: it needs the respondent inside the model, which is precisely what my ANOVA was missing. Done the wrong way, by subtraction, it would have shrunk every effect by about a third.

<!-- Tre figure di controllo, presenti nel materiale originale ma segnate come
     facoltative ("drop this block if the post runs long"): il post è già
     lungo, quindi le ho omesse per la bozza. Se vuoi includerle, sono:
       fig_09_scale_cutpoints (dove cade ogni soglia di risposta rispetto
         a una scala equidistante).
       fig_12_demographics (l'effetto di ciascun elemento per professione).
       fig_14_centring (le stesse medie di cella sulla scala grezza e su
         quella centrata, a confronto). -->

## What Three Years of Distance Taught Me

Three things, none of them about app stores.

**Splitting a sample to answer a question is usually the wrong move.** My nine separate regressions discarded most of the power I had collected, and then left me comparing numbers across samples that could not be compared. One model on all the data answered the question directly, and gave a different answer.

**"Not significant" is not a finding until you say what you could have detected.** Every null result I reported deserved a sentence about the smallest effect the design could see. Three of them dissolve under that question.

**Look at your stimuli again.** The worst problem in this project (a screenshot showing more reviews than downloads) was not in the models or in the data. It was in an image file I had looked at a hundred times in 2022 and never actually checked.

---

*A note on how this was done.* The reanalysis was carried out with AI assistance, and the idea began as a small curiosity: how would an AI have written my master's thesis? The answer turned out to be less interesting than the question it provoked, which is how an AI would **review** it. It did not find anything I could not have found myself in 2023. It did the one thing I did not do, which is to check every claim against the evidence I already had, including the claims that were convenient. That is a low bar, and I did not clear it the first time.

That is also the part that gives me pause, looking back at the three years between submitting this thesis and reopening it. In 2023, generative AI was allowed to touch exactly one part of this project: checking my English grammar. This year, the same class of tool helped me take the entire analysis apart and put it back together in a couple of days. That is not a difference in degree. It is a different activity, and it deserves a harder question than whether it was allowed, namely, what it actually changes about the work.

It would be tidy to conclude that AI is simply the cure for mistakes like mine. I do not think that holds. None of the three mistakes needed a machine to catch: a calculator and enough patience would have caught the comparison across three separate regressions back in 2022, and nothing but my own attention was needed to re-read a screenshot I had made myself. What was missing was not computational power. It was the decision to go back and doubt something I already believed, and that decision is still mine to make, with or without a model sitting next to me.

The more useful distinction, I think, is between what AI actually speeds up. Rerunning twenty-four specifications overnight is execution, and accelerating it cost nothing, that is not where I want to spend my own hours. Deciding whether a null result is really null, whether an image is worth a second look, whether a convenient finding survives being doubted, that is judgment, and it moves at exactly the speed it always did. The risk in this whole project was never a shortage of tools. It was mistaking the first kind of speed for the second.

There is a policy version of this too. My university's rule in 2023 was a blanket ban aimed at the writing itself. A more useful rule today would spend less effort policing whether a sentence was typed by a student, and more teaching students how to verify a claim quickly (their own or a model's) since that is precisely the skill a fast tool makes more valuable, not less.

And this piece does not get to opt out of its own argument. It was written with the same kind of assistance it describes, which means it deserves the same scrutiny I am recommending for a thesis. If a fourth mistake is hiding in it somewhere, I would like to know.

The speed is real, and worth having. The risk is spending all of it on speed and none of it on the pause that turns a fast result into an understood one, which, three years ago, cost me a thesis with three mistakes I never caught.

*The full review, the reanalysis code, the decision rules fixed before the tests were run, and every log are in the [review repository](https://github.com/lucabnt/mobile-app-download-determinants-update). The original thesis, data and code remain [here](https://github.com/lucabnt/mobile-app-download-determinants). Further figures (on response quality and on order effects) are in the repository for anyone who wants them.*
