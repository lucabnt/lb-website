---
title: "I Asked an AI to Review My Thesis. It Found Three Mistakes I Could Have Found Myself"
description: "A reanalysis of my 2023 thesis on app store downloads: the three mistakes I found three years later, and what an AI review could and couldn't catch."
date: 2026-09-21T10:00:00+02:00
draft: false
series: ["The Download Decision"]
series_weight: 2
tags: ["app store", "mobile app", "software", "eng"]
author: "lb"
showToc: true
TocOpen: false
cover:
    image: blog/reopening-my-thesis/master-thesis.webp
    alt: "The bound copy of the thesis, a dark blue hardcover stamped in silver with the University of Pavia seal and the title 'Determinants of Download on Mobile App Stores – An Empirical Analysis', held up in front of Pavia's covered bridge over the Ticino on a sunny day."
---

This project started with a question that has nothing to do with app stores. When I wrote the thesis, using generative AI was discouraged, and in practice that meant don't. ChatGPT had been public for about two months, and nobody argued with the rule.

Three years on, the same rule looks almost impossible to enforce, and harder still to justify. I'd struggle to find a student who isn't using some AI help on a thesis, and I'd struggle more to argue they shouldn't. That reversal, not the app store literature, is why I reopened my own work this year. I didn't want to rewrite it. I wanted to see what a second, more sceptical pass would find in something I'd trusted untouched for three years.

*Every figure and every number below comes from a script in the [review repository](https://github.com/lucabnt/mobile-app-download-determinants-update).*

In February 2023 I submitted a thesis on one narrow question. When someone lands on an app's page in a store, what makes them decide to install it? I tested three elements: the **average review rating**, the **number of downloads**, and the **developer's brand**, carried by the app name, the icon and the developer's own name. I manipulated screenshots of a real Play Store page so each element existed in a strong and a weak version. Every respondent saw three pages, one per element, in random order, each showing one of the two versions drawn at random. Nobody saw both versions of the same element. Then I measured what the literature calls intention to download.

What I published: brand matters most, reputation comes second, and popularity does essentially nothing, at least in a category with low network effects.

This year I reopened the files. The data held up. The randomisation worked, there are no missing values, and every regression in the thesis reproduces to four decimal places. The analysis didn't hold up. I made three mistakes, and none of them was in the data. All three were in what I did with it.

## Mistake One: When Three Regressions Can't Be a Comparison

The headline came from putting three coefficients side by side: 1.53 for brand, 0.50 for reputation, 0.36 for popularity. Brand is clearly the biggest. Done.

Except those numbers came from three *different* regressions on three *different* groups of respondents. The thesis never tests whether 1.53 differs from 0.50. I looked at the two numbers and concluded.

So I ran the test I should have run in the first place: one model, all 1,473 answers, adjusted for the fact that each person gives three of them.

| Element | Effect on intention to download (1–7 scale) | 95% CI |
|---|---|---|
| Developer's brand | **+1.05** | 0.81 to 1.29 |
| Reputation (rating) | **+0.85** | 0.61 to 1.09 |
| Popularity (downloads) | +0.22 | −0.02 to 0.46 |

Averaged over the three judgements each person made, brand and reputation are **not distinguishable** (p = 0.24). Both clearly beat popularity. My three-step hierarchy is really a two-step one, at least on that average, and that qualification matters.

What the fragmentation cost me is the interesting bit. Cutting one sample into nine subsamples threw away most of the statistical power I'd collected. Reputation's effect rose by two thirds, from 0.50 to 0.85. About half of that rise is precision: on the same first-app question, one model on all the data puts reputation at 0.68, not 0.50. The other half comes from asking a different question, because reputation gets stronger in the judgements that come later.

{{< figure
  src="fig_05_pooling_gain.webp"
  alt="A dot-and-whisker plot of the three effects, each estimated three ways: hollow points from the thesis's separate small subsamples, triangles for the same first-app question from one model on all the data, solid points for the average over all three judgements. Brand is highest on the first app; reputation climbs from the thesis estimate to the average; popularity stays small throughout."
  caption="The same three effects, estimated three ways. Hollow: the thesis, one regression per element on its own subsample. Triangle: the same question (the first app seen) from one model on all the data. Solid: the average over all three judgements, which is a different question."
>}}

I didn't want to trust my new favourite model blindly, so I re-ran the comparison every defensible way: 24 combinations of sample, model type and controls. One failed to converge and I dropped it. Brand comes out ahead in 4 of the remaining 23. Those four aren't a random corner of the results. They're exactly the four that use only the **first** app each respondent saw.

That's no coincidence. I chose the first app on purpose in 2022, because the first screen is the only one a respondent judges before they have anything to compare it with. On that quantity, the one the design was built to produce, brand does lead reputation: **+0.76 points, p = 0.03**, and +1.02 (p = 0.007) in the sample the thesis actually used.

So the headline wasn't an artefact. But the thesis made two claims: brand wins on the first app, and brand loses its lead once the user has seen other apps. It tested neither. Now it's tested. The first holds (+0.76, p = 0.03). The second doesn't reach significance (p = 0.10), so the data show a tendency, not a proven change.

The mistake is narrower than "the ranking collapses", and harder to shrug off. Nine regressions on nine subsamples share no parameters. That means **no comparison between the three elements could be tested**, and none was. One model on all 1,473 answers gives the same first-app estimate, plus the test the thesis lacked, plus what happens once the user has seen alternatives.

{{< figure
  src="fig_04_specification_curve.webp"
  alt="A specification curve: the brand-minus-reputation gap estimated under every defensible combination of sample, model and controls, sorted by size, with a separate panel for the slide-6 subsample. Most intervals cross zero; the only clearly positive ones are the specifications that use the first app each respondent saw."
  caption="Every defensible specification of the same comparison. Brand wins clearly only where the design aimed it, on the first app each respondent saw. Everywhere else, brand and reputation can't be told apart."
>}}

## Mistake Two: My "Manipulation Check" Was Not One

The result people quoted back to me was the counterintuitive one: download counts don't matter. In a market obsessed with install numbers, that's fun to say. It's also not quite what I claimed. I used scanner apps because their network effects are low. A scanner isn't more useful to you because millions of other people use it, so a download count can only work as a signal of what others think, never as a promise of extra value. My claim was that popularity is ineffective *in that setting*.

I no longer think the data supports even that. There are two reasons. I should have caught one in 2022. I did catch the other, and never followed it through.

The first is embarrassing. I went back to the stimulus images themselves. The low-popularity version of the app shows **10,000+ downloads next to 84,000 reviews**. More reviews than downloads. That's impossible. The review count was the same in both conditions, so the flaw sits entirely in the weak version, the very one that had to carry the comparison.

The second is subtler, and it's about labelling rather than analysis. The thesis reports a *manipulation check*, model by model: the share of respondents who confirmed they'd noticed each element. What I actually asked, once, at the very end, was *which factors did you take into consideration?*, with nine boxes to tick. That doesn't check that the manipulation registered. It's people reporting, after the fact, what they think they did.

I knew this at the time. The thesis calls the question "a compromise (and not ideal) version". What I did next was deliberate: measure it, report it, condition nothing on it. That was the right call and I'd make it again. What I failed to do was spell out the consequence. A study whose only perception measure is a post-treatment self-report has no verification that anyone saw the manipulation. The word *check*, repeated across nine tables, quietly implies otherwise.

Popularity pays for this most, because that's where a perception check would have mattered most. Among the 60% who ticked "number of downloads", the popularity effect more than doubles, to +0.49, and becomes significant. I offer that as an illustration, not a correction, since the comparison is close to circular: people moved by download counts are more likely to say they looked at them. Still, with a broken stimulus on one side and an unverifiable measure of attention on the other, the null had less support than I gave it.

So where does that leave popularity? Before looking, I fixed the smallest effect that would matter in practice. Every reasonable way of deriving it lands between 0.26 and 0.33 scale points. Against that bar:
- on the **first app** a respondent sees, with nothing else on screen, popularity does work: +0.45, and that one is real;
- on the **second** app it's −0.22 and on the **third** +0.40. Both are inconclusive. The interval is wider than the bar in either direction, so I can't separate "nothing" from "too small to matter", or from something quite large.

I first wrote that second bullet as a single number, +0.07 after comparison, from a model that treats the second and third app as one condition. That's the same kind of mistake I'd just finished criticising in the thesis: collapsing −0.22 and +0.40 into one number describes a situation nobody was ever in. It also flattered a tidy story I liked, because the third app isn't measurably different from the first (0.05 apart, p = 0.86). The dip sits on the second app alone, and no difference between positions survives a correction for having looked at all three.

{{< figure
  src="fig_07_equivalence.webp"
  alt="An equivalence plot: 90% intervals for eleven results against a shaded band marking effects too small to matter in practice. Popularity on the first app sits clearly above the band; the averaged 'after others' popularity effect straddles its edge; the six interactions from the thesis stretch far beyond it in both directions; the two involvement moderations sit entirely inside it."
  caption="Which nulls are really null. The shaded band is the zone of practical irrelevance, fixed before I ran the tests. An interval far wider than the band means the study couldn't see, not that there was nothing to see."
>}}

"Download counts do not matter" was too strong. What I can defend is smaller and less quotable. Where network effects are low, download counts move intention on the first app someone sees, and after that this study can't tell you. It's still enough to retire the claim I published.

## Mistake Three: Silence Isn't Evidence

The thesis concludes there's no interaction between the three elements. Only one element was manipulated per screen, so "interaction" can only mean something narrower here: does the effect of this app's rating depend on the brand of an app seen earlier? The methods section admits that limit. The abstract doesn't.

The deeper problem is that the answer is empty either way. My design could only have detected an interaction of 1.3 to 1.5 points on the 7-point scale. That's as large as the main effects themselves (0.2 to 1.0), and interactions are usually far smaller. Finding none isn't evidence of absence. The instrument was too coarse to see them.

The two moderation results I built managerial advice on are the opposite case. Here the data can say more than "not significant": both effects fall inside the margin I'd fixed in advance as too small to matter. They aren't unproven. They're practically absent.

## What Holds Up and One Thing That Is New

The brand effect survives everything. Of the 81 coefficients I estimated across nine regressions, exactly **two** survive a correction for the number of tests, and both are the brand effect.

**Brand and reputation are equally powerful only on average.** Split by position in the sequence, the picture is sharper than anything I originally claimed:

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

Brand dominates when there's nothing to compare against. That gap is the one my thesis found, and it holds. Once users have seen alternatives, the two converge: 0.89 against 0.92, from a model that treats everything after the first app as one condition instead of two. As a probability, brand leads reputation with 99% before comparison and 48% after, which is a coin toss. What the data doesn't establish is that those two situations differ from each other (p = 0.10), and no pairwise difference between the three positions survives correction, for any of the three elements. So treat the movement as the shape of something worth testing properly. It isn't a result.

{{< figure
  src="fig_13_posterior.webp"
  alt="Overlapping probability curves for the plausible size of each effect. Popularity sits near zero on the left; reputation and brand sit close together near one point on the scale and overlap heavily."
  caption="How large each effect plausibly is, given the data. Where two curves overlap, the data can't tell the two elements apart, which is what “not distinguishable” looks like."
>}}

There's a practical reading, and it stands or falls with that pattern. A strong brand is worth most when the user isn't shopping around: a link from a search result, an ad, a recommendation. Ratings earn their keep when people browse and compare. For a new entrant that's better news than it sounds. You can't buy Adobe's brand, but you can be the app that survives the comparison.

Then the one genuinely new finding, which I'd predicted in writing would fail before I ran it. **Respondents differ a lot in how much any of this moves them**, and the difference is systematic. The people most inclined to download things in general are the *least* moved by what the listing shows (correlation −0.59). The cues work on the undecided. An average across everybody hides that completely.

{{< figure
  src="fig_08_heterogeneity.webp"
  alt="A scatter plot with one dot per respondent, baseline enthusiasm for downloading on one axis and sensitivity to the page elements on the other, showing a clear downward trend."
  caption="One dot per respondent: baseline enthusiasm for downloading against how much the page elements move them. The cues work on the undecided. Points are model predictions, pulled towards the average where a respondent gives little information."
>}}

## Four Things I Checked That Changed Nothing

A reanalysis is only worth as much as the checks that could have embarrassed it. Four did not.

Respondents don't treat a 1–7 scale as a ruler. An answer of 6 covers nearly twice as much underlying intention as an answer of 3: even people who are quite sure stop one short of the top, which is what avoiding the ends of a scale looks like. I re-estimated everything without assuming even spacing. The effects moved by 0.7 to 3.0 percentage points and the ranking stayed put.

{{< figure
  src="fig_09_scale_cutpoints.webp"
  alt="Two rows of points marking where each answer boundary falls on the underlying intention scale: an evenly spaced ruler above, the boundaries estimated from the data below. The estimated gaps are uneven, widest for answer 6 and narrowest for answer 3."
  caption="Where each answer boundary sits on the underlying intention scale, against an evenly spaced scale."
>}}

The effects don't depend measurably on who's answering: not age, gender, education or occupation. Students respond to reputation roughly twice as strongly as employed respondents. It's a tidy story, and it fails its own test. With 69% students in the sample, it couldn't have passed.

Removing the 33 respondents who rushed, or gave a single answer to a whole scale, nudges every effect upwards, as removing noise should. Nothing else changes.

Last, the thesis figures aren't drawn on the raw 1–7 answers but on a mean-centred version, with one constant subtracted per element. That's harmless as long as the model already knows which group it's looking at, and mine did: re-estimating on the raw answers moves no coefficient by more than 0.00000000005. It does cost the reader something. The *heights* of the three lines in my figure aren't comparable, only their slopes are, and in four of six panels the centred version ranks the three elements differently from the raw one. I read a slope off that figure, so the conclusion survives. The centring that would have mattered in a repeated-measures design is by respondent rather than by element. That can't be done by subtracting a mean at all. It needs the respondent inside the model, which is exactly what my ANOVA lacked. Done the wrong way, by subtraction, it would have shrunk every effect by about a third.

{{< figure
  src="fig_14_centring.webp"
  alt="Two rows of line charts, one column per position in the sequence: the same cell means on the raw 1 to 7 scale above and on the mean-centred scale below. The slopes match between the rows, but the vertical order of the three lines changes in four of the six low or high comparisons."
  caption="The same cell means on the raw answer scale and on the mean-centred scale used in the thesis figures. The slopes are identical. The order of the three lines isn't."
>}}

## What Three Years of Distance Taught Me

Three things, none about app stores.

**Protecting an estimand and splitting a sample are different things, and I did the second while meaning the first.** Measuring only the first app each respondent saw was the right instinct. It's the only judgement made before there's anything to compare against. Estimating it in nine disconnected regressions was wrong, because regressions that share no parameters can't be compared with each other, and comparing them is exactly what I did. I stated both halves of the result and tested neither.

**"Not significant" is not a finding until you say what you could have detected.** Every null I reported deserved a sentence on the smallest effect the design could see. Three of them dissolve under that question.

**Look at your stimuli again.** The worst problem in the project, a screenshot showing more reviews than downloads, wasn't in the models or the data. It was in an image file I'd looked at a hundred times in 2022 and never actually checked.

---

*A note on how this was done.* The reanalysis used AI assistance. It began as a small curiosity: how would an AI have written my master's thesis? The answer was less interesting than the question it led to, which is how an AI would **review** it. It found nothing I couldn't have found myself in 2023. It did the one thing I didn't do: check every claim against the evidence I already had, including the convenient ones. That's a low bar, and I didn't clear it the first time.

In 2023, the only thing I used AI for in this project was checking my English grammar. This year the same class of tool helped me take the analysis apart and rebuild it in under two weeks. None of the three mistakes needed a machine. A calculator and some patience would have caught them in 2022. What was missing was the decision to doubt something I already believed, and that decision is still mine.

AI speeds up execution. Rerunning twenty-four specifications takes a few minutes. Judgement (is a null really null, does a convenient finding survive doubt) still moves at the speed it always did, and the risk is mistaking one speed for the other. I wrote this piece with the same kind of help, so it deserves the same scrutiny. If there's a fourth mistake hiding in it, I'd like to know.

*The full review, code, pre-set decision rules and logs are in the [review repository](https://github.com/lucabnt/mobile-app-download-determinants-update); the original thesis, data and code are [here](https://github.com/lucabnt/mobile-app-download-determinants).*
