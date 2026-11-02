---
title: "I Asked an AI to Review My Thesis. It Found Three Mistakes I Could Have Found Myself"
description: "A reanalysis of my 2023 thesis on app store downloads: the three mistakes I found three years later, and what an AI review could and couldn't catch."
date: 2026-09-21T10:00:00+02:00
draft: false
series: ["The Download Decision"]
series_weight: 2
tags: ["app store", "mobile app", "software"]
author: "lb"
showToc: true
TocOpen: false
cover:
    image: blog/reopening-my-thesis/master-thesis.webp
    alt: "The bound copy of the thesis, a dark blue hardcover stamped in silver with the University of Pavia seal and the title 'Determinants of Download on Mobile App Stores – An Empirical Analysis', held up in front of Pavia's covered bridge over the Ticino on a sunny day."
---

This project started with a question that has nothing to do with app stores. When I wrote the thesis, using generative AI was discouraged, and in practice that meant don't. ChatGPT had been public for about two months, and nobody argued with the rule.

Three years on, the same rule looks almost impossible to enforce, and harder still to justify. I'd struggle to find a student who isn't using some AI help on a thesis, and I'd struggle more to argue they shouldn't. That reversal, not the app store literature, is why I reopened my own work this year. I didn't want to rewrite it. I wanted to see what a second, more sceptical pass would find in something I'd trusted untouched for three years. I used AI to work through the code, rerun the analyses and check whether my conclusions followed from the results. The useful part was revisiting questions I thought I had already settled.

*Every figure and every number below comes from a script in the [review repository](https://github.com/lucabnt/mobile-app-download-determinants-update).*

In February 2023 I submitted a thesis on one narrow question. When someone lands on an app's page in a store, what makes them decide to install it? I tested three elements: the **average review rating**, the **number of downloads**, and the **developer's brand**, carried by the app name, the icon and the developer's own name. I manipulated screenshots of a real Play Store page so each element existed in a strong and a weak version. Every respondent saw three pages, one per element, in random order, each showing one of the two versions drawn at random. Nobody saw both versions of the same element. I asked 491 respondents to rate how likely they were to download each app, on a scale from 1 to 7. These were stated intentions, not actual downloads.

What I published: **brand** matters most, **reputation** comes second, and **popularity** does essentially nothing, at least in a category with low network effects.

This year I reopened the files. Every regression in the thesis reproduces to four decimal places. But reproducing the numbers did not settle whether my conclusions followed from them. I found **three mistakes** in how I designed the experiment and interpreted its results.

## Mistake One: A Ranking I Never Tested

The mistake was simple: **I treated three numbers as a ranking without testing whether their differences were statistically distinguishable.** The headline came from putting three coefficients side by side: 1.53 for brand, 0.50 for reputation, 0.36 for popularity. Brand is clearly the biggest.

Except those numbers came from three *separate regressions*, each using only respondents whose first app tested that particular element. The thesis never tests whether 1.53 differs from 0.50. I looked at the two numbers and concluded.

I first revisited the ranking using one model with all 1,473 answers, accounting for each person’s three responses. This asks a broader question: how the effects compare when averaged across all three judgements.

| Element | Effect on intention to download (1–7 scale) | 95% confidence interval |
|---|---|---|
| Developer's brand | **+1.05** | 0.81 to 1.29 |
| Reputation (rating) | **+0.85** | 0.61 to 1.09 |
| Popularity (downloads) | +0.22 | −0.02 to 0.46 |

Across all three judgements, brand and reputation both have larger effects than popularity. The difference between brand and reputation is too uncertain to establish a clear winner (p = 0.24). But an average across three judgements can hide what happens on the first app, before someone has seen any alternatives.

First impressions and later judgements are different questions. For the first app, the new model puts reputation’s effect at 0.68, compared with 0.50 in the thesis. Across all three judgements, it is 0.85. That increase reflects changes in both the model and the question being answered; it cannot simply be called a more precise version of the original result.

{{< figure
  src="fig_05_pooling_gain.webp"
  alt="Three sets of estimates with uncertainty intervals: the original first-app results, the new model’s first-app results, and averages across all three judgements. Brand has the largest first-app estimate; its gap over reputation is smaller in the averages."
  caption="First impressions and averages across the sequence. Hollow circles show the thesis estimates for the first app; triangles show the new model’s estimates for that first app. Solid circles show the average across all three judgements. The last comparison answers a different question."
>}}

I didn't want to trust my new favourite model blindly, so I re-ran the comparison every defensible way: 24 combinations of sample, model type and controls. One failed to converge and I dropped it. Brand comes out ahead in 4 of the remaining 23. Those four aren't a random corner of the results. They're exactly the four that use only the **first** app each respondent saw.

I chose the first app on purpose in 2022: it captures a judgement made before there is anything to compare against. Here, brand leads reputation by **0.76 points (p = 0.03)** in the pooled model. The original separate regressions could also be compared directly, and support the same lead: 1.03 points (Holm-adjusted p = 0.0075).

So the first-app advantage holds, but the full ranking does not: reputation does not clearly beat popularity. Nor does the evidence establish that brand’s lead changes after comparison (p = 0.10). **The mistake was presenting a ranking without testing its differences.**

{{< figure
  src="fig_04_specification_curve.webp"
  alt="A specification curve: the brand-minus-reputation gap estimated under every defensible combination of sample, model and controls, sorted by size, with a separate panel for the slide-6 subsample. Most intervals cross zero; the only clearly positive ones are the specifications that use the first app each respondent saw."
  caption="Every defensible specification of the same comparison. Brand wins clearly only where the design aimed it, on the first app each respondent saw. Everywhere else, brand and reputation can't be told apart."
>}}

## Mistake Two: My "Manipulation Check" Was Not One

The most counterintuitive conclusion was about popularity: download counts seemed to make little difference. In a market obsessed with install numbers, that stood out. But my claim concerned a specific setting. I used scanner apps because their network effects are low. A scanner isn't more useful to you because millions of other people use it, so a download count can only work as a signal of what others think, never as a promise of extra value. My claim was that popularity is ineffective *in that setting*.

The evidence was weaker than I admitted. One screenshot contained contradictory information, and **I had not checked whether participants perceived the differences I wanted to test.** A weak response could therefore reflect a problem with the experiment, rather than a cue that did not matter.

The first is embarrassing. I went back to the stimulus images themselves. The low-popularity version of the app shows **10,000+ downloads next to 84,000 reviews**. More reviews than downloads. That's impossible. The review count was the same in both conditions, so the flaw sits entirely in the weak version, the very one that had to carry the comparison.

The second is subtler, and it's about labelling rather than analysis. A manipulation check should establish whether participants perceived the experimental difference as intended. The thesis reports what it calls a *manipulation check*, model by model: the share who said they had considered each element. What I actually asked, once, at the very end, was *which factors did you take into consideration?*, with nine boxes to tick. That doesn't check that the manipulation registered. It's people reporting, after the fact, what they think they did.

I knew this at the time. The thesis calls the question "a compromise (and not ideal) version". What I did next was deliberate: measure it, report it, condition nothing on it. That was the right call and I'd make it again. What I failed to do was spell out the consequence. A study whose only perception measure is a post-treatment self-report has no verification that anyone saw the manipulation. The word *check*, repeated across nine tables, quietly implies otherwise.

Popularity pays for this most, because that's where a perception check would have mattered most. Among the 60% who ticked "number of downloads", the popularity effect more than doubles, to +0.49, and becomes significant. I offer that as an illustration, not a correction, since the comparison is close to circular: people moved by download counts are more likely to say they looked at them. Still, with a broken stimulus on one side and an unverifiable measure of attention on the other, the null had less support than I gave it.

So where does that leave popularity? Before looking, I fixed the smallest effect that would matter in practice. Every reasonable way of deriving it lands between 0.26 and 0.33 scale points. Against that bar:
- on the **first app** a respondent sees, before any comparison, the estimated popularity effect is positive: +0.45 points (p = 0.022);
- on the **second** app it's −0.22 and on the **third** +0.40. Both are inconclusive. The interval is wider than the bar in either direction, so I can't separate "nothing" from "too small to matter", or from something quite large.

Combining the second and third apps gives a near-zero average, +0.07, but hides their different estimates. Neither position gives a conclusive result, and no difference between positions survives correction for multiple comparisons. The average therefore cannot support a claim that popularity stops mattering after the first app.

{{< figure
  src="fig_07_equivalence.webp"
  alt="An equivalence plot: 90% intervals for eleven results against a shaded band marking effects too small to matter in practice. Popularity on the first app sits clearly above the band; the averaged 'after others' popularity effect straddles its edge; the six interactions from the thesis stretch far beyond it in both directions; the two involvement moderations sit entirely inside it."
  caption="Which nulls are really null. The shaded band is the zone of practical irrelevance, fixed before I ran the tests. An interval far wider than the band means the study couldn't see, not that there was nothing to see."
>}}

"Download counts do not matter" was too strong. What I can defend is smaller and less quotable. Where network effects are low, download counts move intention on the first app someone sees, and after that this study can't tell you. It's still enough to retire the claim I published.

## Mistake Three: Silence Isn't Evidence

**I treated an effect the study had not detected as an effect it had ruled out.** But a study can miss something simply because its measurements are not precise enough to reveal it.

The thesis concludes there's no interaction between the three elements. Only one element was manipulated per screen, so "interaction" can only mean something narrower here: does the effect of this app's rating depend on the brand of an app seen earlier? The methods section admits that limit.

The deeper problem is that the answer is empty either way. My design could only have detected an interaction of 1.3 to 1.5 points on the 7-point scale. That's as large as the main effects themselves (0.2 to 1.0), and interactions are usually far smaller. Finding none isn't evidence of absence. The instrument was too coarse to see them.

Two other results I built managerial advice on concerned whether people’s involvement changed how strongly the cues affected them. Here the evidence is more informative: even allowing for uncertainty, both effects fit within the limits I had set for changes too small to matter in practice.

## What Holds Up and One Thing That Is New

The brand effect survives everything. Of the 81 coefficients I estimated across nine regressions, exactly **two** survive a correction for the number of tests, and both are the brand effect.

The average across all three judgements **does not establish a clear difference between brand and reputation**. Looking at each position separately shows why that average needs context:

| | 1st app seen | 2nd | 3rd |
|---|---|---|---|
| Developer's brand | **+1.44** | +0.88 | +0.92 |
| Reputation | +0.68 | +0.63 | **+1.13** |
| Popularity | +0.45 | −0.22 | +0.40 |

{{< figure
  src="fig_06_by_position.webp"
  alt="A line chart of each element's effect on the first, second and third app seen, with 95% intervals. Brand starts highest and settles near 0.9; reputation is flat on the first two apps and highest on the third; popularity is positive on the first app, dips below zero on the second and recovers on the third. The intervals overlap widely."
  caption="Each element's effect at each position in the sequence, with 95% intervals. Brand is strongest on the first app, reputation on the third, but no difference between positions survives a correction for multiple looks. It shows the shape of a pattern, not a demonstrated one."
>}}

The estimates suggest a simple pattern: brand matters most before comparison, while reputation catches up once alternatives have been seen. In the Bayesian model, the probability that brand leads reputation is 99% before comparison and 48% afterwards. But the change itself remains uncertain (p = 0.10). **This is a pattern worth testing, not an established shift.**

{{< figure
  src="fig_13_posterior.webp"
  alt="Overlapping probability curves for the plausible size of each effect. Popularity sits near zero on the left; reputation and brand sit close together near one point on the scale and overlap heavily."
  caption="Plausible sizes of the effects averaged across all three judgements, under the Bayesian model. Each curve shows uncertainty about one effect; comparing two effects requires examining their difference."
>}}

If that pattern holds, a strong brand may matter most when users arrive through a direct link, an ad or a recommendation. Ratings may become more valuable when they browse alternatives. For a new entrant, that is an encouraging possibility: you cannot buy Adobe’s brand, but you may still compete when users compare.

Then the one genuinely new finding, which I'd predicted in writing would fail before I ran it. **Respondents differ a lot in how much any of this moves them**, and the difference is systematic. The people most inclined to download things in general are the *least* moved by what the listing shows (correlation −0.59). The cues work on the undecided. An average across everybody hides that completely.

{{< figure
  src="fig_08_heterogeneity.webp"
  alt="A scatter plot with one dot per respondent, baseline enthusiasm for downloading on one axis and sensitivity to the page elements on the other, showing a clear downward trend."
  caption="One dot per respondent: baseline enthusiasm for downloading against how much the page elements move them. The cues work on the undecided. Points are model predictions, pulled towards the average where a respondent gives little information."
>}}

## Four Technical Checks That Changed Nothing

A reanalysis is only worth as much as the checks that could have embarrassed it. Four did not.

A seven-point answer scale looks like a ruler, but its answer boundaries need not be evenly spaced. Allowing those boundaries to vary improved the model’s fit, while changing the estimated effects on the chance of answering 5 or above by less than half a percentage point.

{{< figure
  src="fig_09_scale_cutpoints.webp"
  alt="Two rows of fitted response thresholds on the latent intention scale: flexible thresholds above and equidistant thresholds below. In the flexible model, the interval corresponding to answer 6 is wider than the interval corresponding to answer 3."
  caption="Two ways of modelling the seven answers: allowing the boundaries to vary, or requiring equal spacing. The flexible version fits better, but the estimated effects on the chance of answering 5 or above change by less than half a percentage point."
>}}

I found no clear evidence that the effects differed by age, gender, education or occupation. The reputation estimate was roughly twice as large for students as for employed respondents, but the uncertainty was too wide to establish a difference. With 69% students, the sample tells us less about other occupations. That does not mean everyone responds alike.

Were unusually fast or repetitive answers driving the results? Excluding the 33 respondents flagged by those rules changed every estimated effect by less than 0.05 points on the seven-point scale. The average effects barely moved, although those flags alone cannot tell us whether someone was paying attention.

Finally, the thesis charts subtract a different average from each cue’s scores. This leaves the estimated effects unchanged, but shifts the lines vertically: their slopes remain comparable, their heights do not. Returning to the original 1–7 answers confirms the results and makes the charts easier to interpret.

{{< figure
  src="fig_14_centring.webp"
  alt="Two rows of line charts, one column per position in the sequence: the same cell means on the raw 1 to 7 scale above and on the mean-centred scale below. The slopes match between the rows, but the vertical order of the three lines changes in four of the six low or high comparisons."
  caption="The same cell means on the raw answer scale and on the mean-centred scale used in the thesis figures. The slopes are identical. The order of the three lines isn't."
>}}

## What Three Years of Distance Taught Me

Three things, none about app stores.

**A ranking needs a direct test.** Choosing the right question was not enough. I also needed to test the differences behind the answer.

**"Not significant" is not a finding until you say what you could have detected.** Every null I reported deserved a sentence on the smallest effect the design could see. Three of them dissolve under that question.

**Look at your stimuli again.** The worst problem in the project, a screenshot showing more reviews than downloads, wasn't in the models or the data. It was in an image file I'd looked at a hundred times in 2022 and never actually checked.

---

*A note on how this was done.* The reanalysis used AI assistance. It began as a small curiosity: how would an AI have written my master's thesis? The answer was less interesting than the question it led to, which is how an AI would **review** it. It found nothing I couldn't have found myself in 2023. It helped me do what I had not done systematically in 2023: check my claims against the evidence, including the convenient ones. That's a low bar, and I didn't clear it the first time.

In 2023, the only thing I used AI for in this project was checking my English grammar. This year the same class of tool helped me take the analysis apart and rebuild it in under two weeks. None of the three mistakes needed a machine. A calculator and some patience would have caught them in 2022. What was missing was the decision to doubt something I already believed, and that decision is still mine.

AI speeds up execution. Rerunning twenty-four specifications takes a few minutes. Judgement (is a null really null, does a convenient finding survive doubt) still moves at the speed it always did, and the risk is mistaking one speed for the other. I wrote this piece with the same kind of help, so it deserves the same scrutiny. If there's a fourth mistake hiding in it, I'd like to know.

*The full review, code, pre-set decision rules and logs are in the [review repository](https://github.com/lucabnt/mobile-app-download-determinants-update); the original thesis, data and code are [here](https://github.com/lucabnt/mobile-app-download-determinants).*
